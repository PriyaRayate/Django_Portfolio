document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach((bar) => {
        let progressValue = bar.getAttribute("data-progress");
        bar.style.width = progressValue + "%";
    });
});
// contact

 const inputs = document.querySelectorAll(".input");
 
 function focusFunc() {
   let parent = this.parentNode;
   parent.classList.add("focus");
 }
 
 function blurFunc() {
   let parent = this.parentNode;
   if (this.value == "") {
     parent.classList.remove("focus");
   }
 }
 
 inputs.forEach((input) => {
   input.addEventListener("focus", focusFunc);
   input.addEventListener("blur", blurFunc);
 });

//  for animation
document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector(".animate-text");
  const image = document.querySelector(".animate-image");

  setTimeout(() => {
      text.classList.add("show");
      image.classList.add("show");
  }, 1000);
});


