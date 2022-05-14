$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 120, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


  let btn = document.getElementById("btn");

function back(){
btn.style.backgroundColor = "rgb(31, 31, 31)";
btn.style.color = "white";
btn.style.transition = "1s";
btn.style.border = "none";
btn.style.boxShadow = "none";
btn.style.fontSize = "30px";
btn.style.borderRadius = "10px";
btn.style.padding = "10px";
}

btn.addEventListener("click", back2);


function back2(){
btn.innerHTML = "Bye";
btn.style.backgroundColor = "rgb(31, 31, 31)";
btn.style.color = "white";
btn.style.transition = "1.5s";
btn.style.border = "none";
btn.style.boxShadow = "none";
btn.style.fontSize = "30px";
btn.style.borderRadius = "10px";
btn.style.padding = "10px";
}


let count = 0;

document.getElementById('btn-increment').onclick = function(){
    count+=1;
    document.getElementById('countLabel').innerHTML = count;
}


document.getElementById('btn-reset').onclick = function(){
    count=0;
    document.getElementById('countLabel').innerHTML = count;
}

document.getElementById('btn-decrement').onclick = function(){
    count-=1;
    document.getElementById('countLabel').innerHTML = count;
}


let input;
let input2;
let c;

document.getElementById('submit').onclick = function(){
    
    input = document.getElementById('input').value;
    input = Number(input);
    
    input2 = document.getElementById('input2').value;
    input2 = Number(input2);
    
    c = input + input2;
    
    document.getElementById('label').innerHTML = "Resultado: " + c;

}

let n;

n = document.getElementById('search');

document.getElementById('encontrado').onclick = function(e){
    e.preventDefault();
    if( n == "Hola"){
        alert("¡Encontrado!")
    }
}

let sum = input + input2;
let sub = input - input2;
let mult = input * input2;
let divs = input / input2;

let tipo = document.getElementById('tipo');

document.getElementById("sum").onchange = function(){
    input = document.getElementById('input').value;
    input = Number(input);
    
    input2 = document.getElementById('input2').value;
    input2 = Number(input2);
    
    c = input - input2;
}

document.getElementById("rest").onclick = function(){
    let sub = input - input2;
}


