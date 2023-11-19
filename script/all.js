const events = [
  {
    date: "2023/12/24",
    image: "./image/cover (1).png",
    title: "掃街模式開啟！帶著你的貓耳，來和我一起走！",
    description: "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！"
  },
  {
    date: "2023/12/20",
    image: "./image/cover (2).png",
    title: "收容所模特兒大比拼！",
    description: "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！"
  },
  {
    date: "2023/12/26",
    image: "./image/cover.png",
    title: "參與台北寵物論壇，爭取貓咪友善環境",
    description: "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！"
  }
]

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

const showEvents = document.querySelector('.events');
function renderEvents() {
  let str = "";
  events.forEach((event, index) => {
    str += `
    <div class="event flex">
      <img
        src="${event.image}"
        alt="event${index + 1} picture"
      >
      <div class="event-description">
        <small>${event.date}</small>
        <h6>${event.title}</h6>
        <p>${event.description}</p>
      </div>
    </div>
  `
  })
  showEvents.innerHTML = str;
}
renderEvents();
