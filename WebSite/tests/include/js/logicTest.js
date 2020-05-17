var questions=[
    {
        text: "qwe?:",
        answers: ["asd",
        	"zxc",
            "123",
            "asd"],
        correctAnswer: 0 // нумерация ответов с нуля!
    },
    {
        text: "weq:",
        answers: ["qwe",
              "asd",
              "zxc"],
        correctAnswer: 1
    },
];

// for(var i=0; i < 5; i++){
    
//     questions[i].text[0]="iasd";
//     for(var j=0; j<3;j++){
//         questions[i].answers[j]="asd";
//     }
//     questions[i].correctAnswer[i] = 0;
// }
for(var i=0; i < 5; i++){
    
    questions[i]=[{
        text: "weq:",
        answers: ["qwe",
              "asd",
              "zxc"],
        correctAnswer: 1
    },]
}


var yourAns = new Array;
var score = 0;

function Engine(question, answer) {yourAns[question]=answer;}

document.writeln(questions.length);

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