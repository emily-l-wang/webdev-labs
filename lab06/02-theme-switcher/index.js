/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const changeClass = ev => {
   const ele = ev.currentTarget
   if (ele.id === "default") {
      document.querySelector('body').className = "unset";
   }
   else {
      document.querySelector('body').className = ele.id;
   }
};


document.querySelector("#default").addEventListener('click', changeClass);
document.querySelector("#ocean").addEventListener('click', changeClass);
document.querySelector("#desert").addEventListener('click', changeClass);
document.querySelector("#high-contrast").addEventListener('click', changeClass);


