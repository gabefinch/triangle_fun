describe('isTriangle', function() {
  it('returns false given 3 impossible sides', function() {
    expect(isTriangle(1.034,1.034,3)).to.equal(false);
  });
  it('returns true given 3 true sides', function() {
    expect(isTriangle(1.7,1.7,1.7)).to.equal(true);
  });
  it('returns true given 3 barely true sides', function() {
    expect(isTriangle(1,1,1.99999999999999)).to.equal(true);
  });
});
describe('isEquilateral', function() {
  it('returns false given 3 non equal sides', function() {
    expect(isEquilateral(3.098,3.098,2.3)).to.equal(false);
  });
  it('returns true given 3 equal sides', function() {
    expect(isEquilateral(3.6,3.6,3.6)).to.equal(true);
  });
});
describe('isIsosceles', function() {
  it('returns false if no 2 sides are equal', function() {
    expect(isIsosceles(1.56,2.04,2.51)).to.equal(false);
  });
  it('returns true given equal side1 and 2', function() {
    expect(isIsosceles(2.56,2.56,1.099)).to.equal(true);
  });
  it('returns true given equal side2 and 3', function() {
    expect(isIsosceles(1.89,2.01,2.01)).to.equal(true);
  });
  it('returns true given equal side1 and 3', function() {
    expect(isIsosceles(2.01,1.06,2.01)).to.equal(true);
  });
});
describe('isScalene', function() {
  it('returns false if given equal side1 and 2', function() {
    expect(isScalene(2.23,2.23,3.03)).to.equal(false);
  });
  it('returns false if given equal side2 and 3', function() {
    expect(isScalene(1.067,2.89,2.89)).to.equal(false);
  });
  it('returns false if given equal side1 and 3', function() {
    expect(isScalene(2.045,3.2,2.045)).to.equal(false);
  });
  it('returns true if given no equal sides', function() {
    expect(isScalene(3.141,1.7,2.09)).to.equal(true);
  });
});
describe('orderSides', function() {
  it('arranges sides by size', function() {
    expect(orderSides([3,4,5])).to.eql([5,4,3])
  });
});
describe('angleCalc', function() {
  it('returns 90 given appropriate sides', function() {
    expect(angleCalc(5.0,3.536,3.536)).to.equal(90);
  });
  it('returns 45 given appropriate sides', function() {
    expect(angleCalc(3.536,3.536,5.0)).to.equal(45);
  });
});

describe('drawTriangle', function() {
  it('produces svg for a simple right triangle', function() {
    expect(drawTriangle([5.0,3.536,3.536])).to.equal('<polygon points="0,0 200,0 100,100" style="fill:lime;stroke:purple;stroke-width:1" />');
  })
});
