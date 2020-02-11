var userChoice = prompt('Chose X or O');

if (userChoice === 'x' || userChoice === 'X') {
  userImage = 'images/cross.png';
  compImage = 'images/zero.png';
}
else if (userChoice === 'o' || userChoice === 'O' || userChoice === '0')
{
    userImage = 'images/zero.png';
    compImage = 'images/cross.png';
}

else {
  alert('please enter only X or O');
  var userChoice = prompt('choose X or O');
}

$(document).keydown(function() {
  userPlay(event.key);
  console.log('yes');
  compPlay(event.key);
  gameOver();
});


function userPlay(value) {
  $('.' + value).attr('src', userImage);
}


function compPlay(value) {
  var random = Math.floor(Math.random()*value + 1);
  if (value == 1 && $('.' + 2).attr('src') != userImage){
    random = 2;
    $('.' + random).attr('src', compImage);
  }else if (value == 1 && $('.' + 4).attr('src') != userImage)
  {
    random = 4;
    $('.' + random).attr('src', compImage);
  }
  else{$('.' + random).attr('src', compImage);}

  // console.log(random)
}

$('.1') == userImage && $('.2') == userImage && $('.3') == userImage

function gameOver() {
  if ($('.1').attr('src') == userImage && $('.2').attr('src') == userImage && $('.3').attr('src') == userImage &&
  $('.1').attr('src') == $('.2').attr('src') &&
$('.2').attr('src') == $('.3').attr('src') &&
$('.1').attr('src') == $('.3').attr('src'))
{
    $('h1').text('You Won!!!!')
}
else if (
$('.4').attr('src') == userImage && $('.5').attr('.src') == userImage && $('.6').attr('src') == userImage &&
  $('.4').attr('src') == $('.5').attr('src') &&
$('.5').attr('src') == $('.6').attr('src') &&
$('.6').attr('src') == $('.4').attr('src'))
{
  $('h1').text('You Won!!!!')
}
else if (
$('.7').attr('src') == userImage && $('.8').attr('.src') == userImage && $('.9').attr('src') == userImage &&
  $('.7').attr('src') == $('.8').attr('src') &&
$('.8').attr('src') == $('.9').attr('src') &&
$('.7').attr('src') == $('.9').attr('src'))
{
  $('h1').text('You Won!!!!')
}
else if (
$('.5').attr('src') == userImage && $('.7').attr('.src') == userImage && $('.3').attr('src') == userImage &&
  $('.7').attr('src') == $('.5').attr('src') &&
$('.5').attr('src') == $('.3').attr('src') &&
$('.7').attr('src') == $('.3').attr('src'))
{
  $('h1').text('You Won!!!!')
}
else if (
$('.1').attr('src') == userImage && $('.5').attr('.src') == userImage && $('.9').attr('src') == userImage &&
  $('.9').attr('src') == $('.5').attr('src') &&
$('.5').attr('src') == $('.1').attr('src') &&
$('.1').attr('src') == $('.9').attr('src'))
{
  $('h1').text('You Won!!!!')
}
}
