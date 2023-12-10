

function addEventHandlerForButtons(){

  const allButtons = document.getElementsByClassName("button");

  // console.log(allButtons);

  const allButtonsArrray = Array.from(allButtons);

  allButtonsArrray.forEach( (divButton) => {

    divButton.addEventListener("click", genericButtonHandler);

  })

  // let counter = 0

  // counter ++;
}

function genericButtonHandler(event){

  // console.log("Button clicked");
  // console.log(event.target);


  const buttonText = event.target.innerText;
  // console.log("Button Text " + buttonText);

  if (buttonText == "CLEAR"){

    handleClear(event);
  }else if (buttonText == "BACKSPACE"){

    handleBackspace(event);
  }else if (buttonText == "="){

    handleEquals(event);
  }else{

    updateIOPanel(event)
    // Arithmetic Operator - [+, -, /, * ]
    // Paratheseis - [( , )]
    // All Numbers [0, 1, ... 9]
    // Dot
  }

}


function updateIOPanel(event){

  // All arithmetic operators - /, *
  // All Numbers - 
  // Dot 
  // Paranthesis - 

  const ioPanel = document.getElementById("ioPanel");

  const existingIOPanelText = ioPanel.innerText;
  console.log('Existing IO Panel Text -> ' + existingIOPanelText);
 
  const userEnteredText = event.target.innerText;
  console.log('User Entered  -> ' + userEnteredText);

  const textToUpdate = existingIOPanelText + userEnteredText;
  console.log('Text to Update -> ' + textToUpdate);

  ioPanel.innerText = textToUpdate;
}

function handleClear(event){

  const ioPanel = document.getElementById("ioPanel");
  ioPanel.innerText = "";
}

function handleBackspace(event){

  const existingExpression = getIOPanelText(event);

  const length = existingExpression.length;

  if (length > 0){

    const ioPanel = document.getElementById("ioPanel");

    const outcome = existingExpression.substring(0, (length - 1));
    ioPanel.innerText = outcome;

  }else{

    // Ignore the 'backspace operation'
    console.log('Backspace Operation - ZERO Length')
  }

}

function getIOPanelText(event){

  const ioPanel = document.getElementById("ioPanel");
  return ioPanel.innerText;
}

function handleEquals(event){

  const ioPanel = document.getElementById("ioPanel");

  const expression = getIOPanelText(event);

  if (expression.length == 0){
    alert("Expression is EMPTY")

    // ioPanel.innerText = "EXPRESSION IS EMPTY"
  }else{
    
    const outcome = eval(expression)

    ioPanel.innerText = `[${expression}] - [${outcome}]`

    // ioPanel.innerText = outcome;
  }

}

// function handleNumbers(event){

// }

// function handleArithmeticOperations(event){

// }




addEventHandlerForButtons();