
function password() {

   let a=document.getElementById("one").value ;

   if (a.length <=1 || a.length <=4) {
     
    document.getElementById("text").innerHTML="Weak" ;
   }

   else if (a.length <=5 || a.length <=8) {

    document.getElementById("text").innerHTML="Medium" ;
   }

   else {
      
    document.getElementById("text").innerHTML="Strong" ;
   }

   
}

// $(document).ready(function(){
//    $("#one").css('border-color', function(){
//       parentinput('red');
//    })
// })