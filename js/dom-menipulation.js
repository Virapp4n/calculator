var main = document.getElementById('main');

var inmain1 = document.createElement('div');

var text = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illo expedita laboriosam,possimus quibusdam eius ipsa sit quas excepturi dolores, hic, iste voluptatum dolor minima.Porro culpa ducimus animi fuga.")

inmain1.textContent = 'Ok This is appending';

main.appendChild(inmain1);
inmain1.setAttribute('class','container');

// main.classList.toggleClass('c4');

var btn1 = document.getElementById('clicker');
var i=1;
function click1(){
  main.classList.toggle('c4')
  main.classList.toggle('c5')
  console.log('working1')
}

btn1.addEventListener('click',function(){click1()})