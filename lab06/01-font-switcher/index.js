const makeBigger = () => {
   let ele = document.querySelector('h1');
   let style = window.getComputedStyle(ele, null).getPropertyValue('font-size');
   let currentSize = parseFloat(style);
   ele.style.fontSize = (currentSize + 2) + 'px';

   ele = document.querySelector('.content');
   style = window.getComputedStyle(ele, null).getPropertyValue('font-size');
   currentSize = parseFloat(style);
   ele.style.fontSize = (currentSize + 2) + 'px';
};

const makeSmaller = () => {
   let ele = document.querySelector('h1');
   let style = window.getComputedStyle(ele, null).getPropertyValue('font-size');
   let currentSize = parseFloat(style);
   ele.style.fontSize = (currentSize - 2) + 'px';

   ele = document.querySelector('.content');
   style = window.getComputedStyle(ele, null).getPropertyValue('font-size');
   currentSize = parseFloat(style);
   ele.style.fontSize = (currentSize - 2) + 'px';
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

