// 获取API密钥（从 https://www.exchangerate-api.com/ 申请）
const apiKey = '81d2ee913674a9b9b***********';  // 替换为你的API密钥
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

// 获取表单元素和结果输出
const form = document.getElementById('currencyForm');
const resultOutput = document.getElementById('output');

// 提交表单时触发的事件
form.addEventListener('submit', async (event) => {
    event.preventDefault();  // 防止页面刷新

    // 获取表单输入的金额、来源货币和目标货币
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // 判断输入是否合法
    if (isNaN(amount) || amount <= 0) {
        alert('请输入有效的金额');
        return;
    }

    // 显示加载状态
    resultOutput.textContent = '加载中...';

    try {
        // 请求汇率数据
        const response = await fetch(`${apiUrl}${fromCurrency}`);
        const data = await response.json();

        // 如果API请求失败，显示错误信息
        if (data.result !== 'success') {
            throw new Error('无法获取汇率数据');
        }

        // 获取目标货币的汇率
        const exchangeRate = data.conversion_rates[toCurrency];

        // 计算转换后的金额
        const convertedAmount = (amount * exchangeRate).toFixed(2);

        // 显示转换结果
        resultOutput.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
        resultOutput.textContent = '获取汇率数据失败，请稍后再试。';
        console.error(error);
    }
});
