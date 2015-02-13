var isTriangle = function(side1,side2,side3) {
  if((side1 >= side2 + side3)||(side2 >= side1 + side3)||(side3 >= side1 + side2)) {
    return false;
  } else {
    return true;
  }
};
var isEquilateral = function(side1,side2,side3) {
  if((side1 === side2)&&(side2 === side3)) {
    return true;
  } else {
    return false;
  }
};
var isIsosceles = function(side1,side2,side3) {
  if((side1 === side2)||(side2 === side3)||(side3 === side1)) {
    return true;
  } else {
    return false;
  }
};
var isScalene = function(side1,side2, side3) {
  if((side1 === side2)||(side2 === side3)||(side3 === side1)) {
    return false;
  } else {
    return true;
  }
}
$(function(){
  $('.sides-entry').submit(function(event) {
    var side1 = $('.side1').val();
    var side2 = $('.side2').val();
    var side3 = $('.side3').val();
    $('.sides-entered').append('<ul>Side1:' + side1 + '</ul>');
    $('.sides-entered').append('<ul>Side2:' + side2 + '</ul>');
    $('.sides-entered').append('<ul>Side3:' + side3 + '</ul>');
    if (isTriangle(side1,side2,side3)) {
      $('.triangle').append('<h3>We can make a triangle from those sides! Wowee!</h3>');
      if (isEquilateral(side1,side2,side3)) {
        $('.tri-info').append('<h3>This triangle is <a href="">equilateral</a>! All three sides are the same length! Coolness!</h3>');
      } else if(isIsosceles(side1,side2,side3)) {
        $('.tri-info').append('<h3>This triangle is <a href="">isosceles</a>! Two of the sides are the same length! Far out!</h3>');
      } else {
        $('.tri-info').append('<h3>This triangle is <a href="">scalene</a>! Each side is unique!</h3>');
      }
    } else {
      $('.triangle').text('Saddled with the constraints of Euclidian geometry, the sides you entered cannot make a triangle. You might have the makings of a non-Euclidian geometer!')
    }
    $('.results').show();
    event.preventDefault();
  });
});
