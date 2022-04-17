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
        correct:'d'
    },
]

let question=document.getElementById('question');
let a_text=document.getElementById('a_text');
let b_text=document.getElementById('b_text');
let c_text=document.getElementById('c_text');
let d_text=document.getElementById('d_text');
let submitBtn=document.getElementById('submit');

let currentQuiz=0;
loadQuiz();

function loadQuiz(){
    let currentQuizData=quizData[currentQuiz];
    question.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
   
}

submitBtn.addEventListener("click",()=>{
    currentQuiz++;
    
    if(currentQuiz<quizData.length){
        loadQuiz();
    }
    else{
        alert("You finished the Quiz");
    }
});
 