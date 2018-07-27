var timerDiv = $('#timer');
var quizDiv = $('#quiz');
var scoreDiv = $('#score');
var lossesDiv = $('#losses');
var unansweredDiv = $('#unanswered');
var submitButton =$('#submit');
var score = 0;
var losses = 0;
var unanswered = 0;
submitButton.hide();
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.text(minutes + ":" + seconds);
    if (--timer < 0) {
        timer = duration;
        submitButton.trigger("click");
        clearTimeout(timer);
    }
    }, 1000);
}
$('#start').click(function() {
    $('#start').hide();
    $('#quiz').show();
    jQuery(function ($) {
    var minutes = 60 * 1,
        display = timerDiv;
    startTimer(minutes, display);
    });
    submitButton.show();
  });
// 1.) Make an array of answers
var answers = ['oneEightSevenTwo', 'yellowstone', 'oldFaithful', 'hebrew', 'joshuaTree', 'pinnacles', 'arizona', 'goldenGate', 'hoover',
    'april'];
// 2.) Make a function to score the user
//  function checkUnanswered(){
//      for (i=0; i<fieldset.length; i++)
//      {$('#unchecked').find('input[name="questionTen"]:checked')
// console.log($('#unchecked').find('input[name="questionTen"]:checked'));
//      }
//  }
function scoreTest(){
    $("input:checked").each(function(inputindex) {
//   console.log( index + ": " + $( this ).text() );
console.log($(this).attr('id'));
console.log(answers[inputindex]);
if ($(this).attr('id') == answers[inputindex]){
    score++;
    $('#score').text("Correct: " + score);
    console.log("score: " + score);
}else if ($("name:checked") == ''){
    unanswered++;
    $('#unanswered').text("You Failed to Answer: " + unanswered);
    console.log(unanswered);
}else{
    losses++;
    $('#losses').text("Incorrect: " + losses);
    console.log(losses);
    }
        });
    }
$('#submit').click(function(){
    scoreTest();
    clearTimeout(timer);
    quizDiv.hide();
    submitButton.hide();
    timerDiv.hide();
    scoreDiv.show();
    lossesDiv.show();
});
