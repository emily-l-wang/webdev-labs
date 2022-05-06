/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const change = () => {
 if (document.querySelector('body').className === "unset") {
     document.querySelector('body').className = "dyslexia-mode";
  }
  else {
    document.querySelector('body').className = "unset";
  }
};

document.querySelector("#dyslexia-toggle").addEventListener('click', change);