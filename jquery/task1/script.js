console.clear();
console.log("Hello World! from script.js");

var elem=document.getElementById("btn");


// console.log(elem);
// // var ptag=document.querySelectorAll("p");
// // ptag[0].style.color="red";

// elem.addEventListener("click",function(){
//     alert("button clicked");
// })

// $("#btn").on("click",function(){
//     alert("button clicked");
//     $("p").eq(0).css("color","red");
//     $("#btn").html("clicked");
// });

$("button").on("click",buttonevent);

// function buttonevent(){
//     alert("button clicked");
//     this.innerHTML="clicked";
// }

function buttonevent(){
    var buttoncontent=this.innerHTML
    alert(${buttoncontent} is clicked);
    this.style.color="red";
}