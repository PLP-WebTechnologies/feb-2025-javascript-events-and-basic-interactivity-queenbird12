// Event Handling
const actionBtn = document.getElementById('actionBtn');
const hoverBox = document.getElementById('hoverBox');
const keyInput = document.getElementById('keyInput');

// Button click changes text
actionBtn.addEventListener('click', () => {
  actionBtn.textContent = 'Clicked!';
});

// Hover effect changes background color
hoverBox.addEventListener('mouseenter', () => {
  hoverBox.style.backgroundColor = 'lightblue';
});
hoverBox.addEventListener('mouseleave', () => {
  hoverBox.style.backgroundColor = '#ccc';
});

// Keypress detection
keyInput.addEventListener('keydown', (e) => {
  console.log('Key pressed:', e.key);
});

// Bonus: Double-click secret action
actionBtn.addEventListener('dblclick', () => {
  alert('Secret double-click detected! 🤫');
});

// Bonus: Long press (2 seconds)
let pressTimer;
actionBtn.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => alert('Long press secret! 🤫'), 2000);
});
actionBtn.addEventListener('mouseup', () => clearTimeout(pressTimer));


// Interactive Elements
const colorBtn = document.getElementById('colorBtn');
const slideshowImages = document.querySelectorAll('#slideshow img');
const tabs = document.querySelectorAll('.tabBtn');
const tabContents = document.querySelectorAll('.tabContent');

let slideIndex = 0;

// Button: change color and text
colorBtn.addEventListener('click', () => {
  if(colorBtn.style.backgroundColor === 'orange'){
    colorBtn.style.backgroundColor = 'lightgray';
    colorBtn.textContent = 'Change Color';
  } else {
    colorBtn.style.backgroundColor = 'orange';
    colorBtn.textContent = 'Color Changed!';
  }
});

// Slideshow function
setInterval(() => {
  slideshowImages[slideIndex].style.display = 'none';
  slideIndex = (slideIndex + 1) % slideshowImages.length;
  slideshowImages[slideIndex].style.display = 'block';
}, 3000);

// Tabs switching
tabs.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabNum = btn.getAttribute('data-tab');
    tabContents.forEach(content => content.style.display = 'none');
    document.getElementById('tab' + tabNum).style.display = 'block';
  });
});


// Form Validation
const form = document.getElementById('
