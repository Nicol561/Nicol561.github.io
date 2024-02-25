const quizQuestions=[
{
  question:"Koja godina je označena kao 'Godina punka' zbog iznimnog utjecaja ovog glazbenog žanra na glazbenu scenu?",
  a: "1977",
  b: "1982",
  c: "1990",
  d: "2005",
  correct: "a"
}, {
  question:"Koji od sljedećih instrumenata nije dio gudačkih instrumenata?",
  a: "Violina",
  b: "Violončelo",
  c: "Klavir",
  d: "Kontrabas",
  correct: "c"

},{ 
   question: "Koji bend izvodi pjesmu 'Stairway to Heaven'?", 
   a: "The Beatles",
   b: "Led Zeppelin",
   c: "Pink Floyd",
   d: "Queen",
   correct: "b" 
}, {
  question: "Koja od sljedećih pjesama nije izvođena od strane Michael Jackson-a?",
  a: "Billie Jean",
  b: "Like a Virgin",
  c: "Thriller",
  d: "Beat It",
  correct: "b"
} , {
  question: "Koja od sljedećih pjesama pripada bendu Queen?",
  a: "Bohemian Rhapsody",
  b: "Hotel California",
  c: "Smells Like Teen Spirit",
  d: "Sweet Child o'mine",
  correct: "a"
}
];
const answersEl =document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl =document.getElementById("question");
const a_text =document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text =document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;

let score = 0;




 loadQuiz()

 function loadQuiz(){
  deselectAnswers();
  const currentQuizData = quizQuestions[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  
  
 }


 function getSelected(){
  

  let answer = undefined;

  answersEl.forEach(answerEl => {
    if (answerEl.checked){
       answer =  answerEl.id;
    } 
  });
  return answer
 }

 function deselectAnswers(){
  answersEl.forEach(answerEl => {
    if (answerEl.checked){
       answerEl.checked = false;
    } 
  });
 }




 submitBtn.addEventListener("click",function(){

  const answer = getSelected();

if (answer){
  if (answer === quizQuestions[currentQuiz].correct){
    score ++;
  }
  currentQuiz++;
  if (currentQuiz < quizQuestions.length){
    loadQuiz();
  } else{
   quiz.innerHTML = `<h2>Točno si odgovorio/la na ${score}/${quizQuestions.length} pitanja! </h2> <button onclick = "location.reload()">Pokreni ponovo</button>`
  }



    

  }

 });