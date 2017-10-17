const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
let index = 0;
  function listen(){
    document.addEventListener('keydown', (event)=>{
      let key = parseInt(e.which);
      return key;
    })
  }
  function increaseIndex(){
    if (key = code[0]){
      index++;
    }
  }
  while (index < 10){
    listen();
    increaseIndex();
  } alert('yopta');
}