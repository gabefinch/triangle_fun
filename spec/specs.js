describe('triangleBoo', function() {

  it('returns false given 3 impossible sides', function () {
    expect(triangleBoo(1,1,3)).to.equal(false);
  })
  
});
