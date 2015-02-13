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
