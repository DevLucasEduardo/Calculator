const buttons = document.querySelectorAll('button');
buttons.forEach (button => button.addEventListener('click', handleFunction));

function handleFunction(event) {
  const initialArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
  const button = event.target;
  const result = document.querySelector('.result');
  const equation = document.querySelector('.equation');

  if (button.className === 'operator') {
    
    const lastValue = equation.innerHTML.charAt(equation.innerHTML.length - 2);
    if (equation.innerHTML === '' || 'x÷-+'.includes(lastValue)) {
      console.log(lastValue)
      return;
    }
    equation.innerHTML += (' ' + button.innerHTML + ' ');
    return;
  }

  if (button.className === 'number') {
    equation.innerHTML += (button.innerHTML); 
    return;
  }
    
  if (button.className === 'equals') {
    let currNumber = '';
    let arrayEquation = Array.from(equation.innerHTML).filter(element => element !== ' ');

    let arrayNumbers = [];
    
    arrayEquation.forEach((element, index) => {
      if (index === arrayEquation.length - 1) {
        currNumber += element;
        arrayNumbers.push(parseFloat(currNumber));
      }
      else if (initialArray.includes(element) && initialArray.includes(arrayEquation[index + 1])) {
        currNumber += element;
      } 
      else if (initialArray.includes(element) &&  !initialArray.includes(arrayEquation[index + 1])) {
        currNumber += element;
        arrayNumbers.push(parseFloat(currNumber));
        currNumber = '';
      }
    })

    let arrayOperation = [];
    arrayEquation.forEach(element => {
      if ('x+-÷'.includes(element)) {
        arrayOperation.push(element);
      }
    });
    console.log(arrayNumbers)
    console.log(arrayOperation)
    
    let resultEquation = 0;
    arrayNumbers.forEach((element, index) => {
      if (index == 0) {
        resultEquation = element;
      } else {
        switch (arrayOperation[index - 1]) {
          case 'x': 
            resultEquation *= arrayNumbers[index];
            break;
          case '÷': 
            resultEquation /= arrayNumbers[index];
            break;
          case '+': 
            resultEquation += arrayNumbers[index];
            break;
          case '-': 
            resultEquation -= arrayNumbers[index];
            break;
          default:
            break;
        }
      }
    });
    result.innerHTML = resultEquation;

  }

}

