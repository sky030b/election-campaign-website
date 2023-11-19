const marquees = document.querySelectorAll('.marquee');
const marqueeBox = document.querySelector('.marqueeBox');

marqueeBox.addEventListener('mouseover', () => {
  marquees.forEach((marquee) => {
    marquee.style.animationPlayState = 'paused';
  }) // 滑鼠移入時暫停動畫
});

marqueeBox.addEventListener('mouseout', () => {
  marquees.forEach((marquee) => {
    marquee.style.animationPlayState = 'running';
    // 滑鼠移出時恢復動畫
  })
});
