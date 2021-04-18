// our first object
let cat = {
  name : 'Kitty',
  mood : 'neutral',
  weight : 'neutral',
  status : 'neutral',
};
// our second object
let dog = {
  name : 'Doggy',
  mood : 'neutral',
  weight : 'neutral',
  status : 'neutral',
};
// boucle pour afficher les messages
const funnyMessages = ['Yummy! One more please!', 'Disgusting! Eat it by yourself!', 'You\'re so boring!', 'Go ahead! Continue!', 'Wow I can\'t stop!'];
for (message of funnyMessages){
  console.log(message);
}
function reactionMessages(source, message, moodBarScore, weightBarScore, statusBarScore){
  document.getElementById('image1').src = source;
  document.getElementById('moodText').innerHTML = message;
  document.getElementById('progressbar-score').text = moodBarScore;
  document.getElementById('weightbar-score').text = weightBarScore;
  document.getElementById('statusbar-score').text = statusBarScore;
}
// changer l'humeur du chaton
function moodReaction(parametreMood){
  if (parametreMood == 'happy'){
    reactionMessages('assets/img/image1.png', funnyMessages[0], 3, 6, 10);
    document.getElementById('statusBar').innerHTML = cat.status;
    console.log(cat);
  }else if(parametreMood == 'furious'){
    reactionMessages('assets/img/image7.png', funnyMessages[1], -3, -2, -9);
    console.log(cat);
  }else if(parametreMood == 'moody'){
    reactionMessages('assets/img/image5.png', funnyMessages[2], -2, 1, 0);
    console.log(cat);
  }else if(parametreMood == 'excited'){
    reactionMessages('assets/img/image4.png', funnyMessages[3], 4, 3.5, 9);
    document.getElementById('statusBar').innerHTML = cat.status;
    console.log(cat);
  }else if(parametreMood == 'excited-too-much'){
    reactionMessages('assets/img/image14.png', funnyMessages[4], 5, 5.5, 10);
    document.getElementById('statusBar').innerHTML = cat.status;
    console.log(cat);
  }
  insertInGlobalScore();
  insertInProgressionBar();
  insertInWeightBar();
  insertInStatusBar();
  moveMoodBar();
  moveWeightBar();
  moveStatusBar();
}
// la fonction permettant de faire la bare de progression dynamique Humeur
let progressionSum = 0;
let progressionBarArray = [];
function insertInProgressionBar(){
  let progressbarScore = parseInt(document.getElementById('progressbar-score').text);
  progressionBarArray.push(progressbarScore);
  progressionSum += progressbarScore;
    if(progressionSum <= -3){
      document.getElementById('myBar').style.background = 'red';
      cat.mood = "furious";
      document.getElementById('myBar').innerHTML = cat.mood;
    }else if(progressionSum <= 0){
      document.getElementById('myBar').style.background = 'red';
      cat.mood = "moody";
      document.getElementById('myBar').innerHTML = cat.mood;
    }else if(progressionSum <= 5){
      document.getElementById('myBar').style.background = '#4CAF50';
      cat.mood = "happy";
      document.getElementById('myBar').innerHTML = cat.mood;
    }else if(progressionSum <= 15){
      document.getElementById('myBar').style.background = '#4CAF50';
      cat.mood = "excited";
      document.getElementById('myBar').innerHTML = cat.mood;
    }else{
      document.getElementById('myBar').style.background = 'red';
      cat.mood = "overexcited";
      document.getElementById('myBar').innerHTML = cat.mood;
    }
}
// barre de progression weight
let progressionWeightSum = 0;
let progressionWeightArray = [];
function insertInWeightBar(){
  weightbarScore = parseInt(document.getElementById('weightbar-score').text);
  // document.getElementById('weightbar-score').innerHTML = weightbarScore;
  progressionWeightArray.push(weightbarScore);
  progressionWeightSum += weightbarScore;
  document.getElementById('weightSumScore').innerHTML = progressionWeightSum;
    if(progressionWeightSum <= 3){
      document.getElementById('weightBar').style.background = 'red';
      cat.weight = "light";
      document.getElementById('weightBar').innerHTML = cat.weight;
    }else if(progressionWeightSum <= 6){
      cat.weight = "normal";
      document.getElementById('weightBar').innerHTML = cat.weight;
      document.getElementById('weightBar').style.background = '#4CAF50';
    }else if(progressionWeightSum <= 10){
      cat.weight = "medium";
      document.getElementById('weightBar').innerHTML = cat.weight;
      document.getElementById('weightBar').style.background = '#4CAF50';
    }else if(progressionWeightSum <= 12){
      cat.weight = "heavy";
      document.getElementById('weightBar').innerHTML = cat.weight;
      document.getElementById('weightBar').style.background = 'red';
    }else{
      cat.weight = "chonk";
      document.getElementById('weightBar').innerHTML = cat.weight;
      document.getElementById('weightBar').style.background = 'red';
    }
}
// barre de progression status
let progressionStatusSum = 0;
let progressionStatusArray = [];
function insertInStatusBar(){
  statusbarScore = parseInt(document.getElementById('statusbar-score').text);
  // document.getElementById('statusbar-score').innerHTML = statusbarScore;
  progressionStatusArray.push(statusbarScore);
  progressionStatusSum += statusbarScore;
  // document.getElementById('statusSumScore').innerHTML = progressionStatusSum;
    if(progressionStatusSum <= 3){
      document.getElementById('statusBar').style.background = 'red';
      cat.status = "starving";
      document.getElementById('statusBar').innerHTML = cat.status;
    }else if(progressionWeightSum <= 6){
      document.getElementById('statusBar').style.background = 'red';
      cat.status = "hungry";
      document.getElementById('statusBar').innerHTML = cat.status;
    }else if(progressionWeightSum <= 20){
      cat.status = "full";
      document.getElementById('statusBar').innerHTML = cat.status;
      document.getElementById('statusBar').style.background = '#4CAF50';
    }else{
      document.getElementById('statusBar').style.background = 'red';
      cat.status = "stuffed";
      document.getElementById('statusBar').innerHTML = cat.status;
    }
}
// new fonction to change weight of cat
function changeCatWeight(weightParameter) {
  let reaction;
  let weightScore;
  let image = document.getElementById('image1');
  // switch (expression)
  switch (weightParameter) {
    // first case value
    case 'light'  :
    // first statement
    reaction = 'Yes ! I love to play !';
    weightScore = 50;
    cat.mood = '';
    cat.weight = 'light';
    cat.status = '';
    var sound = document.getElementById('meow');
    sound.play();
    console.log(cat);
    // first break statement to halt first switch case
    break;
    case 'heavy' :
    reaction = 'I\'m so sleepy...\nzzz...';
    weightScore = 70;
    image.src = 'assets/img/image8.png';
    cat.mood = '';
    cat.weight = 'heavy';
    cat.status = '';
    var sound = document.getElementById('meow');
    sound.play();
    console.log(cat);
    break;
    case 'medium' :
    reaction = 'Do you want to dance\n?';
    weightScore = 65;
    image.src = 'assets/img/image10.png';
    cat.mood = '';
    cat.weight = 'medium';
    cat.status = '';
    var sound = document.getElementById('meow');
    sound.play();
    console.log(cat);
    break;
    case 'neutral' :
    reaction = 'Not the bath\n!\nI can wash myself\n!';
    weightScore = 60;
    image.src = 'assets/img/image9.png';
    cat.weight = 'neutral';
    var sound = document.getElementById('roar');
    sound.play();
    console.log(cat);
    break;
    case 'chonk' :
    reaction = 'Let\'s watch some T.V.,\njust you & me\n!';
    weightScore = 80;
    image.src = 'assets/img/image6.png';
    cat.mood = '';
    cat.weight = 'chonk';
    cat.status = '';
    var sound = document.getElementById('meow');
    sound.play();
    console.log(cat);
    break;
    default:
    reaction = 'test';
    weightScore = 0;
  }
  document.getElementById('moodText').innerHTML = reaction;
  document.getElementById('score').innerHTML = weightScore;
}
// COUNTDOWN function
document.addEventListener('DOMContentLoaded', () =>{
  const timeLeftDisplay = document.getElementById('time-left');
  const startBtn = document.getElementById('start-button');
  let timeLeft = 10;
  function countDown(){
    setInterval(function(){
      if (timeLeft <= 0) {
        clearInterval(timeLeft = 0);
        // document.getElementById('hidden-section').style.display = 'block';
        // document.getElementById('final-message').innerHTML = 'l\'humeur du chat est ' + cat.mood + ' son poid est ' + cat.weight + ' le status: ' + cat.status;
      }
      timeLeftDisplay.innerHTML = timeLeft;
      timeLeft -=1;
    },1000);
  }
  startBtn.addEventListener('click', countDown );
  console.log(startBtn);
});
// la partie du code permettant d'avoir la somme totale des points
let sum = 0;
let yourGlobalScore = [];
function insertInGlobalScore(){
  let weight = parseInt(document.getElementById('weightbar-score').text);
  document.getElementById('weightbar-score').innerHTML = weight;
  yourGlobalScore.push(weight);
  let status = parseInt(document.getElementById('statusbar-score').text);
  document.getElementById('statusbar-score').innerHTML = status;
  yourGlobalScore.push(status);
  let mood = parseInt(document.getElementById('progressbar-score').text);
  document.getElementById('progressbar-score').innerHTML = mood;
  progressionBarArray.push(mood);
  let sumOfScores = status + weight + mood;
  yourGlobalScore.push(sumOfScores);
  sum += sumOfScores;
  document.getElementById('yourSumScore').innerHTML = sum;
  document.getElementById('yourSumScore').style.backgroundImage = "url('assets/img/red-background.png')";
}
// la nouvelle bar de progression l'Humeur
var i = 0;
function moveMoodBar() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById('myBar');
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= progressionSum) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
// la nouvelle bar de progression le Poids
var weightCount = 0;
function moveWeightBar() {
  if (weightCount == 0) {
    weightCount = 1;
    var weightElem = document.getElementById('weightBar');
    var weightWidth = 1;
    var idWeight = setInterval(weightframe, 10);
    function weightframe() {
      if (weightWidth >= progressionWeightSum) {
        clearInterval(idWeight);
        weightCount = 0;
      } else {
        weightWidth++;
        weightElem.style.width = weightWidth + "%";
      }
    }
  }
}
// la nouvelle bar de progression le Status
var statusCount = 0;
function moveStatusBar() {
  if (statusCount == 0) {
    statusCount = 1;
    var statusElem = document.getElementById('statusBar');
    var statusWidth = 1;
    var idStatus = setInterval(statusframe, 10);
    function statusframe() {
      if (statusWidth >= progressionStatusSum) {
        clearInterval(idStatus);
        statusCount = 0;
      } else {
        statusWidth++;
        statusElem.style.width = statusWidth + "%";
          if(cat.status == 'starving' || cat.status == 'stuffed' || cat.status == 'hungry'){
            document.getElementById('statusBar').style.background = 'red';
          }else{
            document.getElementById('statusBar').style.background = '#4CAF50';
          }
      }
    }
  }
}
