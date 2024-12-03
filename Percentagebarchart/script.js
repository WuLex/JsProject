document.addEventListener('DOMContentLoaded', function () {
    // 获取所有进度条元素
    const progressBars = document.querySelectorAll('.progress-bar');

    // 初始化进度条的宽度和百分比文本
    progressBars.forEach(function (bar) {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.setProperty('--progress', `${percentage}%`); // 更新CSS变量进度
        bar.querySelector('.percentage-text').textContent = `${percentage}%`; // 更新百分比文本
    });

    // 更新百分比功能
    const updateButton = document.getElementById('updateBtn');
    updateButton.addEventListener('click', function () {
        // 更新每个进度条的百分比
        progressBars.forEach(function (bar) {
            const newPercentage = Math.floor(Math.random() * 101); // 随机更新百分比
            bar.setAttribute('data-percentage', newPercentage);
            bar.style.setProperty('--progress', `${newPercentage}%`); // 更新进度条的CSS变量
            bar.querySelector('.percentage-text').textContent = `${newPercentage}%`; // 更新百分比文本
            
            // 如果需要根据进度条变化动态改变颜色
            if (newPercentage < 30) {
                bar.style.setProperty('--progress-color', 'red'); // 低于30%时红色
            } else if (newPercentage < 70) {
                bar.style.setProperty('--progress-color', 'orange'); // 30%-70%之间橙色
            } else {
                bar.style.setProperty('--progress-color', 'green'); // 高于70%时绿色
            }
        });
    });
});
