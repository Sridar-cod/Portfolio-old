// const sridar = document.querySelector(".try");
// const sathya = document.querySelector(".st");
// const sathy = document.querySelector("#h1");
// const button1 = document.querySelector(".button1");
// const st = document.querySelector("#st");



// function summa() {
//   sathy.textContent = "aserg";
//   sridar.style.height = "20em";
//   sathya.style.display = "flex";
//   button1.style.display = "flex";
//   // sathya.style.animation = "sridar";
  
// }

// function summa1() {
//   st.style.display = "flex";

//   // sridar.style.height = "0em";
//   sathya.style.display = "none";
//   button1.style.display = "none";
// }

const box1Inner = document.querySelector(".box1Inner");
const box2 = document.querySelector(".box2");
const box2Inner = document.querySelector(".box2Inner");
const box3 = document.querySelector(".box3");
const box3Inner = document.querySelector(".box3Inner");
const box4 = document.querySelector(".box4");
const box4Inner = document.querySelector(".box4Inner");
const box5 = document.querySelector(".box5");
const box5Inner = document.querySelector(".box5Inner");


//  box1 
    
function whoAmI() {
  box1Inner.style.display = "flex";
  box2Inner.style.display = "none";
  // box2.style.display = "none";
  box3Inner.style.display = "none";
  box4Inner.style.display = "none";
  box5Inner.style.display = "none";
  myFunction(x);
  }
function goBack() {
  box1Inner.style.display = "none";
  box2.style.display = "flex";
  box3.style.display = "flex";
  box4.style.display = "flex";
  box5.style.display = "flex";
  box2.style.display = "flex";
}
function myFunction(x) {

  if (x.matches ) { // If media query matches
    box2.style.display = "none";
    box3.style.display = "none";
 }
  }
var x = window.matchMedia("(max-width: 810px)");
// box2
            
function skills() {
  box2Inner.style.display = "flex";
  box3Inner.style.display = "none";
  // box3.style.display = "none";
  box1Inner.style.display = "none";
  box4Inner.style.display = "none";
  box5Inner.style.display = "none";
  myFunctions(x);

}
function goBack2() {
  box2Inner.style.display = "none";
  box3.style.display = "flex";
  box4.style.display = "flex";
  box5.style.display = "flex";


}
function myFunctions(x) {

  if (x.matches ) { // If media query matches
    box3.style.display = "none";
    box4.style.display = "none";
    box5.style.display = "none";


 }
  }
var x = window.matchMedia("(max-width: 810px)");


//  box3
 
      function education() {
    box3Inner.style.display = "flex";
    box2Inner.style.display = "none";
    box1Inner.style.display = "none";
    box2.style.display = "flex";
    box4Inner.style.display = "none";
    box5Inner.style.display = "none";
        myFunction3(x);
  }
      function goBack3() {
        box3Inner.style.display = "none";
        box4.style.display = "flex";
      box5.style.display = "flex";
  }
  function myFunction3(x) {

    if (x.matches ) { // If media query matches
      box4.style.display = "none";
      box5.style.display = "none";
   }
    }
var x = window.matchMedia("(max-width: 810px)");
  
// box4

      function interest() {
        box4Inner.style.display = "flex";
        box2Inner.style.display = "none";
        box1Inner.style.display = "none";
        box2.style.display = "flex";
        // box5.style.display = "none";
        box3Inner.style.display = "none";
        box5Inner.style.display = "none";
        myFunctio4(x);
      }
      function goBack4() {
        box4Inner.style.display = "none";
        box5.style.display = "flex";
        
        
}
function myFunctio4(x) {

  if (x.matches ) { // If media query matches
    box5.style.display = "none";
     }
  }
var x = window.matchMedia("(max-width: 810px)");
// box5
       
 
      function details() {
        box5Inner.style.display = "flex";
         box2Inner.style.display = "none";
         box1Inner.style.display = "none";
        box2.style.display = "flex";
        box4Inner.style.display = "none";
        box3Inner.style.display = "none";
      }
      function goBack5() {
        box5Inner.style.display = "none";
      }               