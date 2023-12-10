

function updateIOPanel(buttonText){

  // All arithmetic operators - /, *
  // All Numbers - 
  // Dot 
  // Paranthesis - 

  const ioPanel = document.getElementById("ioPanel");

  const existingIOPanelText = ioPanel.innerText;
  console.log('Existing IO Panel Text -> ' + existingIOPanelText);
 
  console.log('Button Text  -> ' + buttonText);

  const textToUpdate = existingIOPanelText + buttonText;
  console.log('Text to Update -> ' + textToUpdate);

  ioPanel.innerText = textToUpdate;
}



function handleClear(){

  const ioPanel = document.getElementById("ioPanel");
  ioPanel.innerText = "";
}

function handleBackspace(){

  const existingExpression = getIOPanelText();

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

function getIOPanelText(){

  const ioPanel = document.getElementById("ioPanel");
  return ioPanel.innerText;
}

function handleEnter(){

  const ioPanel = document.getElementById("ioPanel");

  const expression = getIOPanelText();

  if (expression.length == 0){
    alert("Expression is EMPTY")

    // ioPanel.innerText = "EXPRESSION IS EMPTY"
  }else{
    
    const outcome = eval(expression)

    ioPanel.innerText = `[${expression}] - [${outcome}]`
  }
}

function handleNegation(){

  // 10 [string]

  // 10 [number]

  // a = 10;
  // b = a * -1
  // b = -10

  // a = -50
  // b = a * -1
  // b = -50 * -1
  // b = 50

  const ioPanelContent = getIOPanelText();

  const expressionAsNumber = parseInt(ioPanelContent, 10);
 
  const negatedValue = (expressionAsNumber * -1)

  // const negatedValue = -expressionAsNumber;

  const ioPanel = document.getElementById("ioPanel");
  ioPanel.innerText = negatedValue;
}

function handleSquareRoot(){


  if (validateForNumber()){

    const content = getIOPanelText();
    const outcome = Math.sqrt(content);
    setIOPanelText(outcome);

  }else{

    setIOPanelText("Expression Error");
  }
}


function handleSquare(){

  if (validateForNumber()){
    const content = getIOPanelText();
    const outcome = (content * content)
    setIOPanelText(outcome);    
  }else{

    setIOPanelText("Expression Error");
  }
}

function handleExponent(){

  const content = getIOPanelText();
  const outcome = Math.exp(content);
  setIOPanelText(outcome);    

}

function handleLog(){

  const content = getIOPanelText();
  const outcome = Math.log(content);
  setIOPanelText(outcome);    

}

function handleSIN(){

  const content = getIOPanelText();

  const radians = convertDegreesToRadians(content);
  const outcome = Math.sin(radians);
  setIOPanelText(outcome);  
}

function handleCOS(){

  const content = getIOPanelText();

  const radians = convertDegreesToRadians(content);
  const outcome = Math.cos(radians);
  setIOPanelText(outcome);  

}

function handleTAN(){

  const content = getIOPanelText();

  const radians = convertDegreesToRadians(content);
  const outcome = Math.tan(radians);
  setIOPanelText(outcome);  

}

function convertDegreesToRadians(degree){

  return (degree * 3.14 / 180)
}


function validateForNumber(){

  const content = getIOPanelText();

  try{
    const contentAsNumber = parseInt(content);

    if (isNaN(contentAsNumber)){
      console.log("return false");
      return false;
    }else{
      console.log("return true");
      return true;
    }

  }catch (error){

    console.log(error);
    console.log("return false");
    return false;
  }

}

function setIOPanelText(content){

  const ioPanel = document.getElementById("ioPanel");
  ioPanel.innerText = content;
}