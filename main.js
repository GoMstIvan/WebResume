const header = document.querySelector('header');
const myDiv = document.querySelector('#myDiv');
const navLinks = document.querySelectorAll('nav ul li a');
const headerHeight = document.querySelector('header').offsetHeight;
const mySelect = document.getElementById('mySelect');

// 網頁滾動事件處理函式
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
  });

// 為了避免網站內超連結點擊的時候內容被header蓋住, 因此做了一些滾動的動作
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.offsetTop - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// 切換語言使用
mySelect.addEventListener('change', () => {
    const selectedValue = mySelect.value;
    if (selectedValue === 'zh') {
       window.location.href = 'index.html'
    } else if (selectedValue === 'en') {
        window.location.href = 'index_en.html'
    } else if (selectedValue === 'jp') {
        window.location.href = 'index_jp.html'
    }
  });