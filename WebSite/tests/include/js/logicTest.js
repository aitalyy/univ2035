var questions=[
    {
        text: "Эстетический идеал выступает как:",
        answers: ["тенденция  развития искусства",
        	  "тенденция общественного развития",
        	  "тенденция правящих групп"],
        correctAnswer: 0 // нумерация ответов с нуля!
    },
    {
        text: "Эстетические чувства:",
        answers: ["даются человеку от  рождения",
              "формируются в первые 3-4 года жизни",
              "наличествуют не  у всех людей, а развиваются индивидуально"],
        correctAnswer: 1
    },
];

var yourAns = new Array;
var score = 0;

function Engine(question, answer) {yourAns[question]=answer;}

function Score(){
   var answerText = "Результаты:\n";
   for(var i = 0; i < yourAns.length; ++i){
	var num = i+1;
	answerText=answerText+"\n    Вопрос №"+ num +"";
	if(yourAns[i]==questions[i].correctAnswer){
            answerText=answerText+": Верно! \n";
            ++score;
	  }
    }
   answerText=answerText+"\nВсего правильных ответов: "+score+"\n";

//    alert(answerText);
   document.getElementById('getscore').innerHTML=answerText
   yourAns = [];
   score = 0;
   clearForm("quiz");
}
function clearForm(name) {
   var f = document.forms[name];
   for(var i = 0; i < f.elements.length; ++i) {
	if(f.elements[i].checked)
		f.elements[i].checked = false;
    }
}
function First() {
  var Txt1 = "";
  var Txt2 = "";
  Txt1 = document.Test.bt.value;
  Txt2 = document.Test.bt.name;
  document.getElementById('ex1').innerHTML="<div>"+
    "Вы нажали кнопку: " + Txt1.bold() +
    " с именем: "  + Txt2.bold() +"</div>";
}