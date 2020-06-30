google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);


var questions=[
    {
        text: "Много ли у Вас друзей, с которыми Вы постоянно общаетесь?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Часто ли Вам удается склонить большинство своих товарищей к принятию ими Вашего мнения?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Долго ли Вас беспокоит чувство обиды, причиненное Вам кем-то из Ваших товарищей?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Всегда ли Вам трудно ориентироваться в создавшейся критической ситуации?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Нравится ли Вам заниматься общественной работой?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Верно ли, что Вам приятнее и проще проводить время с книгами или за каким-либо другим занятием, чем с людьми?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Если возникли какие-либо помехи в осуществлении Ваших намерений, то легко ли Вы отступаете от них?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Легко ли Вы устанавливаете контакты с людьми, которые значительно старше Вас по возрасту?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Любите ли Вы придумывать и организовывать со своими товарищами различные игры и развлечения?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Трудно ли Вы включаетесь в новую для Вас компанию?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Часто ли Вы откладываете на другие дни те дела, которые нужно было бы выполнить сегодня?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Легко ли Вам удается устанавливать контакты с незнакомыми людьми?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Стремитесь ли Вы добиваться, чтобы Ваши товарищи действовали в соответствии с Вашим мнением?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Трудно ли Вы осваиваетесь в новом коллективе?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Верно ли, что у Вас не бывает конфликтов с товарищами из-за невыполнения ими своих обязанностей, обязательств?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Стремитесь ли Вы при удобном случае познакомиться и побеседовать с новым человеком?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Часто ли в решении важных дел Вы принимаете инициативу на себя?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Раздражают ли Вас окружающие люди и хочется ли Вам побыть одному?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Правда ли, что Вы обычно плохо ориентируетесь в незнакомой для Вас обстановке?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Нравится ли Вам постоянно находиться среди людей?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Возникает ли у Вас раздражение, если Вам не удается закончить начатое дело?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Испытываете ли Вы чувство затруднения, неудобства или стеснения, если приходится проявить инициативу, чтобы познакомиться с новым человеком?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Правда ли, что Вы утомляетесь от частого общения с товарищами?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Любите ли Вы участвовать в коллективных играх?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },
    {
        text: "Часто ли Вы проявляете инициативу при решении вопросов, затрагивающих интересы Ваших товарищей?",
        answers: ["Да",
        	"Нет"],
        correctAnswer: 0
    },

];

// for(var i=0; i < 5; i++){
    
//     questions[i].text[0]="iasd";
//     for(var j=0; j<3;j++){
//         questions[i].answers[j]="asd";
//     }
//     questions[i].correctAnswer[i] = 0;
// }


var yourAns = new Array;
var score = 0;
var komm = 0;
var org = 0;
var kommAll = 0;
var orgAll = 0;


function Engine(question, answer) {yourAns[question]=answer;}

function drawChart(kommAll, orgAll) {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Коммуникативные способности',     kommAll],
      ['Организаторские способности',      orgAll],
    ]);

    var options = {
      title: 'Коммуникативные и организаторские склонности',
      backgroundColor: 'teal',
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}


function Score(){
    var answerText = "Результаты:\n";
    for(var i = 0; i < yourAns.length; i+=4){
        if(yourAns[i]==questions[i].correctAnswer){
            ++komm;
        }
    };
    for(var i = 2; i < yourAns.length; i+=4){
        if(yourAns[i]==1){
            ++komm;
        }
    };
    for(var i = 1; i < yourAns.length; i+=4){
        if(yourAns[i]==questions[i].correctAnswer){
            ++org;
        }
    };
    for(var i = 3; i < yourAns.length; i+=4){
        if(yourAns[i]==1){
            ++org;
        }
    };
    kommAll = komm * 0.04;
    orgAll = org * 0.04;
    var textOrg = "\nОрганизаторские способности: ";
    var textKomm = "\nКоммуникативные способности: ";
    if (kommAll<=0.45 && kommAll>=0.1){
        textKomm = textKomm + "I - низкий";
    }
    if (kommAll<=0.55 && kommAll>=0.46){
        textKomm = textKomm + "II - ниже среднего";
    }
    if (kommAll<=0.65 && kommAll>=0.56){
        textKomm = textKomm + "III - средний";
    }
    if (kommAll<=0.75 && kommAll>=0.66){
        textKomm = textKomm + "IV - высокий";
    }
    if (kommAll<=1 && kommAll>=0.76){
        textKomm = textKomm + "V - очень высокий";
    }

    if (orgAll<=0.55 && orgAll>=0.2){
        textOrg = textOrg + "I - низкий";
    }
    if (orgAll<=0.65 && orgAll>=0.56){
        textOrg = textOrg + "II - ниже среднего";
    }
    if (orgAll<=0.7 && orgAll>=0.65){
        textOrg = textOrg + "III - средний";
    }
    if (orgAll<=0.8 && orgAll>=0.71){
        textOrg = textOrg + "IV - высокий";
    }
    if (orgAll<=1 && orgAll>=0.81){
        textOrg = textOrg + "V - очень высокий";
    }
    
    answerText=answerText+textKomm+textKomm+"\n";

//    alert(answerText);
    if (kommAll>0.09 && orgAll>0.19){
        document.getElementById('getscore').innerHTML=answerText;
        drawChart(kommAll, orgAll);
        yourAns = [];
        score = 0;
        clearForm("quiz");
    }
    
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