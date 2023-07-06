const buttons = document.querySelectorAll('button');
buttons.forEach (button => button.addEventListener('click', handleFunction));

function handleFunction(event) {
  
  const arrayOperators = Array.from(document.querySelectorAll('.operator'));

  const buttonId = event.target.id;
  const buttonClass = event.target.className;
  const result = document.querySelector('.result');
  

  if (buttonClass === 'number') {
    console.log('hei');
    const arrayNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    if (result.innerHTML === '0'){
      result.innerHTML = '';
    }
    result.innerHTML += arrayNumbers.indexOf(buttonId);
  
  } else if (buttonClass === 'operator') {
    console.log('oi')
  }
  
}
