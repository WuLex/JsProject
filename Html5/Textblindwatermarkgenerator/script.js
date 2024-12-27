document.getElementById('generateBtn').addEventListener('click', function() {
  const inputText = document.getElementById('inputText').value;
  const watermarkText = document.getElementById('watermarkText').value;

  if (!inputText || !watermarkText) {
    alert('请输入源文本和水印文本');
    return;
  }

  // 将水印文本转换为二进制映射（01）
  const watermarkBinary = stringToBinary(watermarkText);

  // 将二进制映射插入到源文本中
  const watermarkedText = insertWatermark(inputText, watermarkBinary);

  // 输出水印后的文本
  document.getElementById('outputText').textContent = watermarkedText;

  // 绘制水印可视化
  drawWatermark(watermarkedText);
});

document.getElementById('decodeBtn').addEventListener('click', function() {
  const watermarkedText = document.getElementById('outputText').textContent;

  if (!watermarkedText) {
    alert('请先生成盲水印文本后再解析！');
    return;
  }

  // 从文本中提取二进制水印数据
  const binaryWatermark = extractBinaryWatermark(watermarkedText);

  // 将二进制水印数据转换为文本
  const decodedWatermark = binaryToString(binaryWatermark);

  // 输出解析后的水印文本
  document.getElementById('decodedWatermark').textContent = decodedWatermark;
});

// 字符串转换为二进制（01）
function stringToBinary(str) {
  return str.split('').map(c => {
    return c.charCodeAt(0).toString(2).padStart(8, '0');
  }).join('');
}

// 将二进制数据（01）插入到文本中的空格位置
function insertWatermark(text, binary) {
  let result = '';
  let binaryIndex = 0;

  // 遍历源文本
  for (let i = 0; i < text.length; i++) {
    result += text[i];

    // 如果是字母、数字或标点符号，可以嵌入水印
    if (/[^\s]/.test(text[i])) {
      if (binaryIndex < binary.length) {
        // 根据二进制值插入空格（1为插入空格，0为不插入）
        result += (binary[binaryIndex] === '1') ? ' ' : '';
        binaryIndex++;
      }
    }
  }

  return result;
}

// 从嵌入水印的文本中提取二进制水印数据
function extractBinaryWatermark(text) {
  let binary = '';

  // 遍历文本，提取空格的分布
  for (let i = 0; i < text.length; i++) {
    if (/[^\s]/.test(text[i]) && text[i + 1] === ' ') {
      binary += '1';
    } else if (/[^\s]/.test(text[i])) {
      binary += '0';
    }
  }

  return binary;
}

// 将二进制数据（01）转换为字符串
function binaryToString(binary) {
  const bytes = binary.match(/.{1,8}/g);
  return bytes ? bytes.map(byte => String.fromCharCode(parseInt(byte, 2))).join('') : '';
}

// 在Canvas上绘制水印可视化
function drawWatermark(text) {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空画布

  ctx.font = '20px Arial';
  ctx.fillStyle = '#000';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const maxWidth = canvas.width - 20;
  const lineHeight = 24;
  let line = '';
  let y = canvas.height / 2;

  // 将水印文本渲染为一行
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const testLine = line + char;

    const testWidth = ctx.measureText(testLine).width;
    if (testWidth > maxWidth && i > 0) {
      ctx.fillText(line, canvas.width / 2, y);
      line = char;
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, canvas.width / 2, y);
}
