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
  $('#sides-entry').submit(function(event) {
    $('#sides-entered').empty()
    $('#triangle').empty()
    $('#tri-info').empty()

    var side1 = $('#side1').val();
    var side2 = $('#side2').val();
    var side3 = $('#side3').val();
    $('#sides-entered').append('<ul>Length of the first side: ' + side1 + '</ul>');
    $('#sides-entered').append('<ul>Length of the second side: ' + side2 + '</ul>');
    $('#sides-entered').append('<ul>Length of the third side: ' + side3 + '</ul>');
    if (isTriangle(side1,side2,side3)) {
      $('#triangle').append('We can make a triangle from those sides! Wowee!');
      if (isEquilateral(side1,side2,side3)) {
        $('#tri-info').append('This triangle is <a href="http://en.wikipedia.org/wiki/Equilateral_triangle">equilateral</a>! All three sides are the same length! Coolness!');
      }
      else if(isIsosceles(side1,side2,side3)) {
        $('#tri-info').append('This triangle is <a href="http://en.wikipedia.org/wiki/Isosceles_triangle">isosceles</a>! Two of the sides are the same length! Far out!');
      }
      else {
        $('#tri-info').append('This triangle is <a href="http://en.wikipedia.org/wiki/Triangle#By_relative_lengths_of_sides">scalene</a>! Each side is unique!');
      }
    }
    else {
      $('#triangle').append('Saddled with the constraints of <a href="http://en.wikipedia.org/wiki/Euclidean_geometry">Euclidian geometry</a>, the sides you entered cannot make a triangle. You might have the makings of a <a href="http://en.wikipedia.org/wiki/Non-Euclidean_geometry">non-Euclidian</a> geometer!');
    }
    $('#results').show();
    event.preventDefault();
  });
});
