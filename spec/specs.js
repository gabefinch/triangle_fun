describe('isTriangle', function() {

  it('returns false given 3 impossible sides', function() {
    expect(isTriangle(1,1,3)).to.equal(false);
  })

  it('returns true given 3 true sides', function() {
    expect(isTriangle(1,1,1)).to.equal(true);
  })

  it('returns true given 3 barely true sides', function() {
    expect(isTriangle(1,1,1.99999999999999)).to.equal(true);
  })

});

describe('isEquilateral', function() {

  it('returns false given 3 non equal sides', function() {
    expect(isEquilateral(3,4,2)).to.equal(false);
  })

});
