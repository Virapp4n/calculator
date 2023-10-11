let elementor = document.getElementById('photo-slider');

// I am making it with simple name change, which I am going to change with class name or something else

i=1;
// function slideAt(side){

//   i = i + side;
//   if(i==6)
//   {
//     i=1;
//   }
//   else if(i==0)
//   {
//     i=5;
//   }

//   path="url(image/slide"+i+".jpg)";
//   elementor.style.backgroundImage = path;
// }

// Image names can be different, so let's make one with class name.


function slideAt(side){
  elementor.classList.remove("slide"+i);
  i = i + side;
  if(i==6)
  {
    i=1;
  }
  else if(i==0)
  {
    i=5;
  }

  elementor.classList.add("slide"+i);
}