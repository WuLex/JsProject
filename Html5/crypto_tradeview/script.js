let chartInstance = null; // 存储 Lightweight Charts 图表实例
let allCryptos = []; // 存储所有加密货币数据

// 加载所有加密货币数据并初始化下拉框
async function loadCryptos() {
    const url = "https://api.coingecko.com/api/v3/coins/list";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch cryptocurrency list");
        }
        allCryptos = await response.json();
        console.log("Cryptocurrencies loaded:", allCryptos);
    } catch (error) {
        console.error("Failed to load cryptocurrencies:", error);
        alert("Failed to load cryptocurrency data. Please try again later.");
    }
}

// 绑定搜索框事件
function setupSearchBox() {
    const searchInput = document.getElementById("crypto-search");
    const dropdown = document.getElementById("dropdown");
    let selectedIndex = -1; // 当前选中的索引

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        if (!query) {
            dropdown.classList.add("hidden");
            return;
        }

        const filteredCryptos = allCryptos.filter((crypto) =>
            crypto.name.toLowerCase().includes(query)
        );

        dropdown.innerHTML = filteredCryptos
            .slice(0, 200) // 显示最多 200 个结果
            .map((crypto) => `<div class="dropdown-item" data-id="${crypto.id}">${crypto.name} (${crypto.symbol.toUpperCase()})</div>`)
            .join("");

        dropdown.classList.remove("hidden");
        selectedIndex = -1; // 重置选中状态

        document.querySelectorAll(".dropdown-item").forEach((item, index) => {
            item.addEventListener("click", () => {
                searchInput.value = item.textContent;
                dropdown.classList.add("hidden");
                fetchCryptoInfo(item.dataset.id);
            });
        });
    });

    // 处理键盘事件
    searchInput.addEventListener("keydown", (e) => {
        const items = dropdown.querySelectorAll(".dropdown-item");

        if (dropdown.classList.contains("hidden") || items.length === 0) {
            return;
        }

        switch (e.key) {
            case "ArrowDown": // 向下键
                e.preventDefault();
                selectedIndex = (selectedIndex + 1) % items.length; // 循环选择
                updateSelection(items, selectedIndex);
                break;
            case "ArrowUp": // 向上键
                e.preventDefault();
                selectedIndex = (selectedIndex - 1 + items.length) % items.length; // 循环选择
                updateSelection(items, selectedIndex);
                break;
            case "Enter": // 回车键
                e.preventDefault();
                if (selectedIndex >= 0 && selectedIndex < items.length) {
                    items[selectedIndex].click();
                }
                break;
        }
    });
}

// 更新下拉框选中状态
function updateSelection(items, index) {
    items.forEach((item, i) => {
        if (i === index) {
            item.classList.add("selected"); // 添加选中样式
            item.scrollIntoView({ block: "nearest" }); // 确保选中项在视图内
        } else {
            item.classList.remove("selected");
        }
    });
}

// 获取单个加密货币的详细信息
async function fetchCryptoInfo(cryptoId) {
    const url = `https://api.coingecko.com/api/v3/coins/${cryptoId}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch cryptocurrency details");
        }
        const data = await response.json();
        displayCryptoInfo(data);
        fetchHistoricalData(cryptoId);
    } catch (error) {
        console.error("Failed to fetch cryptocurrency details:", error);
        alert("Failed to fetch cryptocurrency details. Please try again.");
    }
}

// 显示加密货币的详细信息
function displayCryptoInfo(data) {
    document.getElementById("crypto-name").textContent = data.name;
    document.getElementById("crypto-symbol").textContent = data.symbol.toUpperCase();

    // 显示价格，保留 8 位小数
    const price = data.market_data.current_price.usd;
    document.getElementById("crypto-price").textContent = price ? price.toFixed(8) : "N/A";

    // 显示市场数据，其他字段可以按需求添加
    document.getElementById("crypto-market-cap").textContent = data.market_data.market_cap.usd || "N/A";
    document.getElementById("crypto-volume").textContent = data.market_data.total_volume.usd || "N/A";
    document.getElementById("crypto-circulating-supply").textContent = data.market_data.circulating_supply || "N/A";
    document.getElementById("crypto-total-supply").textContent = data.market_data.total_supply || "N/A";
    document.getElementById("crypto-max-supply").textContent = data.market_data.max_supply || "N/A";

    document.getElementById("crypto-info").classList.remove("hidden");
}

// 获取历史价格数据并更新图表
// 修改 fetchHistoricalData 函数，获取K线数据
async function fetchHistoricalData(cryptoId) {
    const historicalUrl = `https://api.coingecko.com/api/v3/coins/${cryptoId}/ohlc`;
    const historicalParams = new URLSearchParams({
        vs_currency: "usd",
        days: "30"
    });

    try {
        const response = await fetch(`${historicalUrl}?${historicalParams}`);
        if (!response.ok) {
            throw new Error("Failed to fetch historical data");
        }
        const data = await response.json();

        if (!data || data.length === 0) {
            throw new Error("No historical price data available.");
        }

        renderChart(data);
        document.querySelector('.chart-container').classList.remove('hidden');
    } catch (error) {
        console.error("Failed to fetch historical data:", error);
        alert("Failed to fetch historical data. Please try again.");
    }
}

// 修改 renderChart 函数，创建K线图
function renderChart(data) {
    const chartContainer = document.getElementById('price-chart');
    chartContainer.innerHTML = ''; // 清除之前的图表

    // 创建图表
    const chart = LightweightCharts.createChart(chartContainer, {
        width: chartContainer.clientWidth,
        height: 400,
        layout: {
            background: { color: '#ffffff' },
            textColor: '#333',
        },
        grid: {
            vertLines: { color: '#e1e1e1' },
            horzLines: { color: '#e1e1e1' },
        },
        crosshair: {
            mode: LightweightCharts.CrosshairMode.Normal,
        },
        rightPriceScale: {
            borderColor: '#cccccc',
        },
        timeScale: {
            borderColor: '#cccccc',
            timeVisible: true,
            secondsVisible: false,
        },
    });

    // 创建K线系列
    const candlestickSeries = chart.addCandlestickSeries({
        upColor: '#26a69a',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350',
    });

    // 格式化数据
    const formattedData = data.map(item => ({
        time: item[0] / 1000, // 转换毫秒时间戳为秒
        open: item[1],
        high: item[2],
        low: item[3],
        close: item[4],
    }));

    // 设置数据
    candlestickSeries.setData(formattedData);

    // 调整图表大小
    const handleResize = () => {
        chart.applyOptions({
            width: chartContainer.clientWidth,
        });
    };

    // 监听窗口大小变化
    window.addEventListener('resize', handleResize);

    // 存储图表实例以便后续清理
    chartInstance = chart;
}

// 添加窗口大小变化监听器
window.addEventListener('resize', () => {
    if (chartInstance) {
        chartInstance.applyOptions({
            width: document.getElementById('price-chart').clientWidth,
        });
    }
});

// 初始化函数
async function init() {
    await loadCryptos();
    setupSearchBox();
}

// 执行初始化
init();