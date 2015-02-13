var isTriangle = function(side1,side2,side3) {
  if((side1 >= side2 + side3)||(side2 >= side1 + side3)||(side3 >= side1 + side2)) {
    return false
  }
  else {
    return true
  }
};

var isEquilateral = function(side1,side2,side3) {
  return false
};
