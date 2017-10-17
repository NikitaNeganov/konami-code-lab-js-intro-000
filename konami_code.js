let code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
function init() {
  // Write your JavaScript code inside the init() function
  let index = -1;
  document.addEventListener('keydown', (e)=>{
    if (parseInt(e.which) === code[0]){
      index = 0;
    }
    if (parseInt(e.which)=== code[index+1]){
      index++;
    }
    if (parseInt(e.which) === code[index+1] && index +1 === code.length -1){
      alert('yay');
    } else{
      index = -1;
    }
  })
}
