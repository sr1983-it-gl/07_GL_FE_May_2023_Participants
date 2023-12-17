

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


function QuestionAnswerOptionsPair(question, answerOptions){

  this.question = question
  this.answerOptions = answerOptions;
}


const answerOptionsQ1 = [answerOptionFunctions, answerOptionXHTML, answerOptionCSS, answerOptionHTML];

// Question AnswerOptions - 1
const questionAnswerOptionsPair1 = new QuestionAnswerOptionsPair(
  question1, answerOptionsQ1);

const answerOptionjQuery = new AnswerOption("JQuery");
const answerOptionXML = new AnswerOption("XML");

const answerOptionsQ2 = [answerOptionHTML, answerOptionjQuery, answerOptionCSS, answerOptionXML];

// Question AnswerOptions - 2
const questionAnswerOptionsPair2 = new QuestionAnswerOptionsPair(
    question2, answerOptionsQ2);
  

// Question AnswerOptions - 3

const answerOptionPythonScript = new AnswerOption("Python Script");
const answerOptionDjango = new AnswerOption("Django");
const answerOptionNodeJS = new AnswerOption("Node JS");

const answerOptionsQ3 = [answerOptionPythonScript, answerOptionjQuery, answerOptionDjango, answerOptionNodeJS];
const questionAnswerOptionsPair3 = new QuestionAnswerOptionsPair(
  question3, answerOptionsQ3);

// Question AnswerOptions - 4

const answerOptionPHP = new AnswerOption("PHP");
const answerOptionJS = new AnswerOption("JS");
const answerOptionAll = new AnswerOption("All");

const answerOptionsQ4 = [answerOptionPHP, answerOptionHTML, answerOptionJS, answerOptionAll]
const questionAnswerOptionsPair4 = new QuestionAnswerOptionsPair(
  question4, answerOptionsQ4);

// Question AnswerOptions - 5

const answerOptionLanguage = new AnswerOption("Language");
const answerOptionProgrammingLanguage = new AnswerOption("Programming Language");
const answerOptionDevelopment = new AnswerOption("Development");

const answerOptionsQ5 = [answerOptionLanguage, answerOptionProgrammingLanguage, answerOptionDevelopment, answerOptionAll]

const questionAnswerOptionsPair5 = new QuestionAnswerOptionsPair(
  question5, answerOptionsQ5);


// Creation of QuizApplication
  // Add the property - qaPairArray : QuestionAnswerOptionsPair[]
  // Create an object

function QuizApplication(qAOptionsPairArray){

  this.qAOptionsPairArray = qAOptionsPairArray;
  this.score = 0;
  this.pageIndex = 0;

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
  /*
    getScore()
    incrementScore()
    calculateSuccessPercentage()
  */
}

const qAOptionsPairArray = 
  [questionAnswerOptionsPair1, questionAnswerOptionsPair2, questionAnswerOptionsPair3, questionAnswerOptionsPair4, questionAnswerOptionsPair5
]

const quizApp = new QuizApplication(qaPairArray);