'use asrict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // const results = ['大当たり', '当たり', 'ハズレ', '残念...'];
    // const results = ['大当たり', 'ハズレ', 'ハズレ', 'ハズレ', 'ハズレ'];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];
    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = '大当たり'; // 5%
    } else if (n < 0.2) {
      btn.textContent = '当たり'; // 15%
    } else {
      btn.textContent = 'ハズレ...'; // それ以外
    }
  });
}
