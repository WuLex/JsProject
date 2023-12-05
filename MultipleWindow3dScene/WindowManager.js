class WindowManager 
{
	#windows; // 窗口列表
	#count; // 计数器
	#id; // 当前窗口ID
	#winData; // 当前窗口数据
	#winShapeChangeCallback; // 窗口形状改变回调函数
	#winChangeCallback; // 窗口改变回调函数
	
	constructor ()
	{
		let that = this;

		// 用于监听当localStorage被其他窗口更改时的事件
		addEventListener("storage", (event) => 
		{
			if (event.key == "windows")
			{
				let newWindows = JSON.parse(event.newValue);
				let winChange = that.#didWindowsChange(that.#windows, newWindows);

				that.#windows = newWindows;

				if (winChange)
				{
					if (that.#winChangeCallback) that.#winChangeCallback();
				}
			}
		});

		// 用于监听当前窗口即将关闭时的事件
		window.addEventListener('beforeunload', function (e) 
		{
			let index = that.getWindowIndexFromId(that.#id);

			// 从列表中移除当前窗口并更新localStorage
			that.#windows.splice(index, 1);
			that.updateWindowsLocalStorage();
		});
	}

	// 检查窗口列表是否发生变化
	#didWindowsChange (pWins, nWins)
	{
		if (pWins.length != nWins.length)
		{
			return true;
		}
		else
		{
			let c = false;

			for (let i = 0; i < pWins.length; i++)
			{
				if (pWins[i].id != nWins[i].id) c = true;
			}

			return c;
		}
	}

	// 初始化当前窗口（为每个窗口实例添加用于存储的自定义元数据）
	init (metaData)
	{
		this.#windows = JSON.parse(localStorage.getItem("windows")) || [];
		this.#count= localStorage.getItem("count") || 0;
		this.#count++;

		this.#id = this.#count;
		let shape = this.getWinShape();
		this.#winData = {id: this.#id, shape: shape, metaData: metaData};
		this.#windows.push(this.#winData);

		localStorage.setItem("count", this.#count);
		this.updateWindowsLocalStorage();
	}

	// 获取当前窗口的形状
	getWinShape ()
	{
		let shape = {x: window.screenLeft, y: window.screenTop, w: window.innerWidth, h: window.innerHeight};
		return shape;
	}

	// 根据窗口ID获取窗口在列表中的索引
	getWindowIndexFromId (id)
	{
		let index = -1;

		for (let i = 0; i < this.#windows.length; i++)
		{
			if (this.#windows[i].id == id) index = i;
		}

		return index;
	}

	// 更新localStorage中的窗口数据
	updateWindowsLocalStorage ()
	{
		localStorage.setItem("windows", JSON.stringify(this.#windows));
	}

	// 更新窗口数据
	update ()
	{
		let winShape = this.getWinShape();

		if (winShape.x != this.#winData.shape.x ||
			winShape.y != this.#winData.shape.y ||
			winShape.w != this.#winData.shape.w ||
			winShape.h != this.#winData.shape.h)
		{
			
			this.#winData.shape = winShape;

			let index = this.getWindowIndexFromId(this.#id);
			this.#windows[index].shape = winShape;

			if (this.#winShapeChangeCallback) this.#winShapeChangeCallback();
			this.updateWindowsLocalStorage();
		}
	}

	// 设置窗口形状改变的回调函数
	setWinShapeChangeCallback (callback)
	{
		this.#winShapeChangeCallback = callback;
	}

	// 设置窗口改变的回调函数
	setWinChangeCallback (callback)
	{
		this.#winChangeCallback = callback;
	}

	// 获取窗口列表
	getWindows ()
	{
		return this.#windows;
	}

	// 获取当前窗口的数据
	getThisWindowData ()
	{
		return this.#winData;
	}

	// 获取当前窗口的ID
	getThisWindowID ()
	{
		return this.#id;
	}
}

export default WindowManager;
