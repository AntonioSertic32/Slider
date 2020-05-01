var imagesOne =['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg'];
var imagesTwo = ['img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg'];

var counter = 0;

$.each(imagesOne, function(){
  $('.sliderOne').append('<img src="'+ this +'">');
});

$.each(imagesTwo, function(){
  $('.sliderTwo').append('<img src="'+ this +'">');
});

$('.buttonLeft').on('click', () => {

  var imageOne = $( ".sliderOne img:first" );
	var imageTwo = $( ".sliderTwo img:first" );
  var imageOneWidth= imageOne.width();
  var imageTwoWidth= imageTwo.width();

  setTimeout(function(){ imageOne.detach().appendTo(".sliderOne"); }, 500);
  setTimeout(function(){ imageTwo.detach().appendTo(".sliderTwo"); }, 500);
 

  $('.sliderOne').css({position: 'relative'}).stop(true).animate({right: imageOneWidth}, 500, () => {$('.sliderOne').css({right: 0})});
  $('.sliderTwo').css({position: 'relative'}).stop(true).animate({right: imageTwoWidth}, 500, () => {$('.sliderTwo').css({right: 0})});
  
  counter++;
  Check();

});

$('.buttonRight').on('click', () => {

	var imageOne = $( ".sliderOne img:last" );
  var imageTwo = $( ".sliderTwo img:last" );
  var imageOneWidth= imageOne.width();
  var imageTwoWidth= imageTwo.width();

  setTimeout(function(){ imageOne.detach().prependTo(".sliderOne"); }, 500);
  setTimeout(function(){ imageTwo.detach().prependTo(".sliderTwo"); }, 500);
  
  $('.sliderOne').css({position: 'relative'}).stop(true).animate({left: imageOneWidth}, 500, () => {$('.sliderOne').css({left: 0})});
  $('.sliderTwo').css({position: 'relative'}).stop(true).animate({left: imageTwoWidth}, 500, () => {$('.sliderTwo').css({left: 0})});

  counter--;
  Check();

});

function Check(){
  if (counter > 0)
  {
    $('.buttonRight').prop( "disabled", false );
    $('#right').prop( "src", "/img/arrow-blue-right.png" );
  }
  if (counter == 0)
  {
    $('.buttonRight').prop( "disabled", true );
    $('#right').prop( "src", "/img/arrow-gray-right.png" );
  }
}
