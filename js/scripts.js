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
};
var orderSides = function(sides) {
  return sides.sort().reverse()
};
var drawTriangle = function(sides) {
    var scale = 200/(sides[0]);
    var peakX = (scale * sides[1] * Math.sin(Math.PI / 2 - Math.acos((Math.pow(sides[0],2) + Math.pow(sides[1],2) - Math.pow(sides[2],2)) / (2 * sides[0] * sides[1])))).toFixed(1);
    var peakY = (scale * Math.sqrt(Math.pow(sides[1],2)-Math.pow(peakX / scale,2))).toFixed(1);
    return '<svg height="' + peakY + '" width="200" id="canvas"><polygon points="0,0 200,0 ' + peakX + ',' + peakY + '" style="fill:lime;stroke:purple;stroke-width:1" /></svg>';
};

$(function(){
  $('#sides-entry').submit(function(event) {
    $('#sides-entered').empty()
    $('#triangle').empty()
    $('#tri-info').empty()
    $('#canvas').empty();
    var side1 = parseFloat($('#side1').val());
    var side2 = parseFloat($('#side2').val());
    var side3 = parseFloat($('#side3').val());
    $('#canvas').append(drawTriangle(orderSides([side1,side2,side3])));
    $('#sides-entered').append('<ul>Length of the first side: ' + side1 + '</ul>');
    $('#sides-entered').append('<ul>Length of the second side: ' + side2 + '</ul>');
    $('#sides-entered').append('<ul>Length of the third side: ' + side3 + '</ul>');
    if (isTriangle(side1,side2,side3)) {
      $('#triangle').append('We can make a triangle from those sides! Wowee!');
      if (isEquilateral(side1,side2,side3)) {
        $('#tri-info').append('This triangle is <a href="http://en.wikipedia.org/wiki/Equilateral_triangle">equilateral</a>! All three sides are the same length! Coolness!');
      } else if(isIsosceles(side1,side2,side3)) {
        $('#tri-info').append('This triangle is <a href="http://en.wikipedia.org/wiki/Isosceles_triangle">isosceles</a>! Two of the sides are the same length! Far out!');
      } else {
        $('#tri-info').append('This triangle is <a href="http://en.wikipedia.org/wiki/Triangle#By_relative_lengths_of_sides">scalene</a>! Each side is unique!');
      }
    } else {
      $('#triangle').append('Saddled with the constraints of <a href="http://en.wikipedia.org/wiki/Euclidean_geometry">Euclidian geometry</a>, the sides you entered cannot make a triangle. You might have the makings of a <a href="http://en.wikipedia.org/wiki/Non-Euclidean_geometry">non-Euclidian</a> geometer!');
    }
    $('#results').show();
    event.preventDefault();
  });
});
