const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let nums = [];
  while(nums.includes(38, 38, 40, 40, 37, 39, 37, 39, 66, 65) === false){
    if (e.which === 32){
      break
    }
    document.addEventListener('keydown', (event) => {
      //alert(event.which);
      nums.push(event.which);
    })
  }
  alert('Congrats!')
} 
