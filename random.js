var btn =document.getElementById('genNew');
// var color=document.getElementById('ran');

const setBg=()=>{
//     var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);
//     var bgColor = "rgb(" + x + "," + y + "," + z + ")";
//  console.log(bgColor);
//  document.body.style.backgroundColor = bgColor;
const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
//   color.innerHTML = "#" + randomColor;
}
btn.addEventListener("click",setBg);

// setBg(