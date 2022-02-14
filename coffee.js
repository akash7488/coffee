
function onclick1() {
    let name = prompt("Please enter your Name", " ");
    let number = prompt("Please enter your Table number", " ");
    let quantity = prompt("Number of cup")
    if (number >0) {
   alert("Hello.. " +name+  " Room number  " +number + "  your order is placed... wait for few minutes");
   setTimeout((onclick1) => {
       alert("ThankYou sir/mam")
   }, 500);
    }
  }



$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});

