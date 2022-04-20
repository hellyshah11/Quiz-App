const quizData=[
    {
        question:'How old is Reeta',
        a:'10',
        b:'17',
        c:'20',
        d:'30',
        correct:'b'
    }, {
        question:'Which is the most used programming language',
        a:'Java',
        b:'Python',
        c:'C',
        d:'JavaScript',
        correct:'a'
    }, {
        question:'Who is the Prime Minsiter of India',
        a:'Amit shah',
        b:'Rahul Gandhi',
        c:'Yogi Aditynath',
        d:'Narendra Modi',
        correct:'d'
    }, {
        question:'What does HTML stands for?',
        a:'Hypertext Markup Language',
        b:'Json Object Notation',
        c:'Cascadind Style Sheets',
        d:'Hypertext Processor',
        correct:'a'
    },{
        question:'What year JavaScript launched?',
        a:'1996',
        b:'1995',
        c:'1994',
        d:'None of the above',
        correct:'b'
    },
]

const answerEls=document.querySelectorAll(".answer");
const quiz=document.getElementById('quiz');
let question=document.getElementById('question');
let a_text=document.getElementById('a_text');
let b_text=document.getElementById('b_text');
let c_text=document.getElementById('c_text');
let d_text=document.getElementById('d_text');
let submitBtn=document.getElementById('submit');

let currentQuiz=0;
let score=0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();
    let currentQuizData=quizData[currentQuiz];
    question.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
   
}
function getSelected(){
    let answer=undefined;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer=answerEl.id;
        }
    });
    return answer;
}

function deselectAnswer(){
    answerEls.forEach((answerEl)=>{
       answerEl.checked=false;
    });
}

submitBtn.addEventListener("click",()=>{
    const answer=getSelected();
    console.log(answer);

    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz<quizData.length){
            loadQuiz();
        }
        else{
           quiz.innerHTML=`<h3>You answered correctly at 
           ${score}/${quizData.length} questions. </h3>
           
           <button onClick="location.reload()">Reload</button>`;
        }
    }
   
});
 