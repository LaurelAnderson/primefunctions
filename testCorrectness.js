/*  global primeGen */

describe('Test for Correctness', function () {
  const values1 = [2, 3, 5, 7];
  const values2 = [2, 3, 5, 7, 11, 13, 17, 19];
  describe('primeGen()', function () {
    it('returned [2, 3, 5, 7] for primeGen(100)', function () {
      chai.expect(primeGen(10)).to.deep.equal(values1);
    });
    it('returned [2, 3, 5, 7, 11, 13, 17, 19] for primeGen(100)', function () {
      chai.expect(primeGen(20)).to.deep.equal(values2);
    });
  });
});
