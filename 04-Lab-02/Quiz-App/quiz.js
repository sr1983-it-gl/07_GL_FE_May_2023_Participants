

function Question(qText) {

    this.questionText = qText;
}

const question1 = new Question("JavaScript supports");
const question2 = new Question("Which language is used for styling web pages ?")
const question3 = new Question("Which is not a JavaScript framework ?")
const question4 = new Question("Which is used to connect to Database ?")
const question5 = new Question("JavaScript is a ?");

function AnswerOption(answerText){

  this.answerText = answerText;
}

const answerOptionFunctions = new AnswerOption("Functions");
const answerOptionXHTML = new AnswerOption("XHTML");
const answerOptionCSS = new AnswerOption("CSS");
const answerOptionHTML = new AnswerOption("HTML");


function QuestionAnswerOptionsPair(question, answerOptions, correctAnswer){

  this.question = question
  this.answerOptions = answerOptions;

  this.correctAnswer = correctAnswer;

  this.isCorrectAnswer = function(userSuppliedAnswer) {

    if (userSuppliedAnswer == this.correctAnswer.answerText){

      console.log("Correct Answer");
      return true;
    }else{
      console.log("Incorrect Answrt");
      return false;
    }
  }

  // Add the support for method isACorrectAnswer()
  // The user-supplied-answer to be passed as parameter
  // Define / maintain corrct anser as a property
}


const answerOptionsQ1 = [answerOptionFunctions, answerOptionXHTML, answerOptionCSS, answerOptionHTML];

// Question AnswerOptions - 1
const questionAnswerOptionsPair1 = new QuestionAnswerOptionsPair(
  question1, answerOptionsQ1, answerOptionFunctions);

const answerOptionjQuery = new AnswerOption("JQuery");
const answerOptionXML = new AnswerOption("XML");

const answerOptionsQ2 = [answerOptionHTML, answerOptionjQuery, answerOptionCSS, answerOptionXML];

// Question AnswerOptions - 2
const questionAnswerOptionsPair2 = new QuestionAnswerOptionsPair(
    question2, answerOptionsQ2, answerOptionCSS);
  

// Question AnswerOptions - 3

const answerOptionPythonScript = new AnswerOption("Python Script");
const answerOptionDjango = new AnswerOption("Django");
const answerOptionNodeJS = new AnswerOption("Node JS");

const answerOptionsQ3 = [answerOptionPythonScript, answerOptionjQuery, answerOptionDjango, answerOptionNodeJS];
const questionAnswerOptionsPair3 = new QuestionAnswerOptionsPair(
  question3, answerOptionsQ3, answerOptionPythonScript);

// Question AnswerOptions - 4

const answerOptionPHP = new AnswerOption("PHP");
const answerOptionJS = new AnswerOption("JS");
const answerOptionAll = new AnswerOption("All");

const answerOptionsQ4 = [answerOptionPHP, answerOptionHTML, answerOptionJS, answerOptionAll]
const questionAnswerOptionsPair4 = new QuestionAnswerOptionsPair(
  question4, answerOptionsQ4, answerOptionPHP);

// Question AnswerOptions - 5

const answerOptionLanguage = new AnswerOption("Language");
const answerOptionProgrammingLanguage = new AnswerOption("Programming Language");
const answerOptionDevelopment = new AnswerOption("Development");

const answerOptionsQ5 = [answerOptionLanguage, answerOptionProgrammingLanguage, answerOptionDevelopment, answerOptionAll]

const questionAnswerOptionsPair5 = new QuestionAnswerOptionsPair(
  question5, answerOptionsQ5, answerOptionProgrammingLanguage);


// Creation of QuizApplication
  // Add the property - qaPairArray : QuestionAnswerOptionsPair[]
  // Create an object

function QuizApplication(qAOptionsPairArray){

  this.qAOptionsPairArray = qAOptionsPairArray;
  this.score = 0;
  this.pageIndex = 0;

  this.init = function(){

    this.applicationInit();
  }

  this.applicationInit = function(){

    this.pageIndex = 0;
    this.addListeners();

    this.displayQuizPage();
  }

  this.getScore = function() {
    return this.score;
  }

  this.incrementScore = function(){
    this.score ++;
  }

  this.calculateSuccessPercentage = function(){

      return 
      (this.score / this.qAOptionsPairArray.length) * 100;
  }

  this.isLastQAPair = function(){

    // 0, 1, 2 , 3 [false]
    // 4 - [true]
    if (this.pageIndex == (this.qAOptionsPairArray.length - 1)){
      return true;
    }else{
      return false;
    }
  }

  this.addListeners = function(){

    for (let index = 0; index <= 3; index ++){

      let buttonId = "btn" + index;
      const answerOptionButton = document.getElementById(buttonId);

      answerOptionButton.onclick = function(event){

        const eventTarget = event.currentTarget;

        console.log("Button clicked");
        console.log(eventTarget);
      }

    }
  }

  this.displayQuizPage = function() {

    // this.displayHeader();
    this.displayQASection();
    this.displayFooter();
  }

  this.displayQASection = function(){

    const qaOptionsPair = this.qAOptionsPairArray[this.pageIndex]

    const questionHtmlElement = document.getElementById("question");
    questionHtmlElement.innerHTML = qaOptionsPair.question.questionText;
  
    for (let index = 0; index < 4; index ++){

      let answerChoiceButtonId = "choice" + index;

      const answerChoiceHtmlButtonElement = document.getElementById(answerChoiceButtonId);

      answerChoiceHtmlButtonElement.innerHTML = qaOptionsPair.answerOptions[index].answerText;
    }
  }



  this.displayFooter = function(){

  }

  // Create a method for displayQASection
  // Get a reference to qaOptions 

    // Use pageIndex
  // Get refrece to 'question' html object
    // innerHtml property

  // AnswerChoices
    // Get a reference to choice0
    // 



  // Create a method like addListeners
  // Get a reference to each of the button [4 button]
  // Run a for loop [btn + index]
  // add the onclick listener
  // console.log message
}

const qAOptionsPairArray = 
  [questionAnswerOptionsPair1, questionAnswerOptionsPair2, questionAnswerOptionsPair3, questionAnswerOptionsPair4, questionAnswerOptionsPair5
]

const quizApp = new QuizApplication(qAOptionsPairArray);

quizApp.init();