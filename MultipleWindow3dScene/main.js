import WindowManager from "./WindowManager.js";

// 引入THREE库，并设置别名为t
const t = THREE;
let camera, scene, renderer, world;
let near, far;
let pixR = window.devicePixelRatio ? window.devicePixelRatio : 1;
let cubes = [];
let sceneOffsetTarget = { x: 0, y: 0 };
let sceneOffset = { x: 0, y: 0 };

let today = new Date();
today.setHours(0);
today.setMinutes(0);
today.setSeconds(0);
today.setMilliseconds(0);
today = today.getTime();

let internalTime = getTime();
let windowManager;
let initialized = false;

// 获取从当天开始的秒数（以确保所有窗口使用相同的时间）
function getTime() {
  return (new Date().getTime() - today) / 1000.0;
}

// 如果URL参数中包含"clear"，则清空本地存储；否则执行初始化操作
if (new URLSearchParams(window.location.search).get("clear")) {
  localStorage.clear();
} else {
  // 当页面可见性状态发生变化时执行初始化
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState != "hidden" && !initialized) {
      init();
    }
  });

  // 在页面加载完成时执行初始化
  window.onload = () => {
    if (document.visibilityState != "hidden") {
      init();
    }
  };

  // 初始化函数
  function init() {
    initialized = true;

    // 添加短暂延迟，因为在短时间内，window.offsetX报告的值不准确
    setTimeout(() => {
      setupScene();
      setupWindowManager();
      resize();
      updateWindowShape(false);
      render();
      window.addEventListener("resize", resize);
    }, 500);
  }

  // 设置场景
  function setupScene() {
    // 创建正交相机
    camera = new t.OrthographicCamera(
      0,
      0,
      window.innerWidth,
      window.innerHeight,
      -10000,
      10000
    );

    camera.position.z = 2.5;
    near = camera.position.z - 0.5;
    far = camera.position.z + 0.5;

    // 创建场景
    scene = new t.Scene();
    scene.background = new t.Color(0.0);
    scene.add(camera);

    // 创建WebGL渲染器
    renderer = new t.WebGLRenderer({ antialias: true, depthBuffer: true });
    renderer.setPixelRatio(pixR);

    world = new t.Object3D();
    scene.add(world);

    renderer.domElement.setAttribute("id", "scene");
    document.body.appendChild(renderer.domElement);
  }

  // 设置窗口管理器
  function setupWindowManager() {
    windowManager = new WindowManager();
    windowManager.setWinShapeChangeCallback(updateWindowShape);
    windowManager.setWinChangeCallback(windowsUpdated);

    // 在这里可以为每个窗口实例添加自定义元数据
    let metaData = { foo: "bar" };

    // 初始化窗口管理器并将此窗口添加到窗口池中
    windowManager.init(metaData);

    // 最初调用update windows（之后将由窗口更改回调调用）
    windowsUpdated();
  }

  // 窗口更新回调函数
  function windowsUpdated() {
    updateNumberOfCubes();
  }

  // 更新立方体数量
  function updateNumberOfCubes() {
    let wins = windowManager.getWindows();
    // 定义八种颜色
    let colors = [
      0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff, 0x9900cc, 0xcc9900
    ];
    // 移除所有立方体
    cubes.forEach((c) => {
      world.remove(c);
    });

    cubes = [];
    let prevNumCubes = cubes.length;
    console.log('Number of cubes before:', prevNumCubes);
    // 根据当前窗口设置添加新的立方体
    for (let i = 0; i < wins.length; i++) {
      let win = wins[i];

      let c = new t.Color();
      c.setHSL(i * 0.1, 1.0, 0.5);

      let s = 100 + i * 50;
      let cube = new t.Mesh(
        new t.BoxGeometry(s, s, s),
        new t.MeshBasicMaterial({ color: c, wireframe: true })
      );
      cube.position.x = win.shape.x + win.shape.w * 0.5;
      cube.position.y = win.shape.y + win.shape.h * 0.5;

     
       // 在正方体的八个面添加文字
	    addTextToCube(cube, ['three', 'js', '是', '一', '个', '很强', '的', '库'], colors);
      world.add(cube);
      cubes.push(cube);
    }
 

    console.log('Number of cubes after:', cubes.length);
  }

  // 更新窗口形状
  function updateWindowShape(easing = true) {
    // 将实际偏移存储在代理中，我们将其根据渲染函数中的目标进行更新
    sceneOffsetTarget = { x: -window.screenX, y: -window.screenY };
    if (!easing) sceneOffset = sceneOffsetTarget;
  }

  // 渲染函数
  function render() {
    let t = getTime();

    windowManager.update();

    // 根据当前偏移和新偏移之间的差异乘以一个衰减值来计算新位置（以创建漂亮的平滑效果）
    let falloff = 0.05;
    sceneOffset.x =
      sceneOffset.x + (sceneOffsetTarget.x - sceneOffset.x) * falloff;
    sceneOffset.y =
      sceneOffset.y + (sceneOffsetTarget.y - sceneOffset.y) * falloff;

    // 将世界位置设置为偏移值
    world.position.x = sceneOffset.x;
    world.position.y = sceneOffset.y;

    let wins = windowManager.getWindows();

    // 循环遍历所有立方体并根据当前窗口位置更新它们的位置
    for (let i = 0; i < cubes.length; i++) {
      let cube = cubes[i];
      let win = wins[i];
      let _t = t; // + i * .2;

      let posTarget = {
        x: win.shape.x + win.shape.w * 0.5,
        y: win.shape.y + win.shape.h * 0.5,
      };

      cube.position.x =
        cube.position.x + (posTarget.x - cube.position.x) * falloff;
      cube.position.y =
        cube.position.y + (posTarget.y - cube.position.y) * falloff;
      cube.rotation.x = _t * 0.5;
      cube.rotation.y = _t * 0.3;
    }

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  // 调整渲染器大小以适应窗口大小
  function resize() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    camera = new t.OrthographicCamera(0, width, 0, height, -10000, 10000);
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  //   // 添加文字到立方体
  //   function addTextToCube(cube, text) {
  //     let fontLoader = new t.FontLoader();
  //     fontLoader.load("KaiTi_Regular.json", function (font) {
  //       let textGeometry = new t.TextGeometry(text, {
  //         font: font,
  //         size: 10, // Adjust the size as needed
  //         height: 1, // Adjust the height as needed
  //       });

  //       let textMaterial = new t.MeshBasicMaterial({ color: 0xffffff });
  //       let textMesh = new t.Mesh(textGeometry, textMaterial);

  //       // Position the text on one face of the cube
  //       textMesh.position.set(
  //         cube.position.x - cube.geometry.parameters.width / 2,
  //         cube.position.y - cube.geometry.parameters.height / 2,
  //         cube.position.z + cube.geometry.parameters.depth / 2
  //       );

  //       cube.add(textMesh);
  //     });
  //   }
  // 添加文字到立方体
function addTextToCube(cube, texts, colors) {
    let fontLoader = new t.FontLoader();
    fontLoader.load('KaiTi_Regular.json', function (font) {
        texts.forEach((text, index) => {
            let textGeometry = new t.TextGeometry(text, {
                font: font,
                size: 20, // 根据需要调整大小
                height: 1 // 根据需要调整高度
            });

            //let textMaterial = new t.MeshBasicMaterial({ color: 0xffffff });
			let textMaterial = new t.MeshBasicMaterial({ color: colors[index] });
            let textMesh = new t.Mesh(textGeometry, textMaterial);

            // 将文字放置在正方体的八个面上
            switch (index) {
                case 0:
                    // 顶部面
                    textMesh.position.set(0, cube.geometry.parameters.height / 2 + 5, 0);
                    break;
                case 1:
                    // 底部面
                    textMesh.position.set(0, -cube.geometry.parameters.height / 2 - 5, 0);
                    break;
                case 2:
                    // 正面
                    textMesh.position.set(0, 0, cube.geometry.parameters.depth / 2 + 5);
                    break;
                case 3:
                    // 背面
                    textMesh.position.set(0, 0, -cube.geometry.parameters.depth / 2 - 5);
                    break;
                case 4:
                    // 左侧面
                    textMesh.position.set(-cube.geometry.parameters.width / 2 - 5, 0, 0);
                    break;
                case 5:
                    // 右侧面
                    textMesh.position.set(cube.geometry.parameters.width / 2 + 5, 0, 0);
                    break;
                case 6:
                    // 第一个侧面
                    textMesh.position.set(cube.geometry.parameters.width / 2 + 5, 0, cube.geometry.parameters.depth / 2 + 5);
                    break;
                case 7:
                    // 第二个侧面
                    textMesh.position.set(-cube.geometry.parameters.width / 2 - 5, 0, -cube.geometry.parameters.depth / 2 - 5);
                    break;
            }

            cube.add(textMesh);
        });
    });
}
}
