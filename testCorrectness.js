/*  global primeGen, cumulativeSum */

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

  const values3 = [1, 3, 6, 10];
  const values4 = [10, 21, 33, 46, 60];
  describe('cumulativeSum()', function () {
    it('returned [1, 3, 6, 10] for cumulativeSum([1, 2, 3, 4])', function () {
      chai.expect(cumulativeSum([1, 2, 3, 4])).to.deep.equal(values3);
    });
    it('returned [10, 21, 33, 46, 60] for cumulativeSum([10, 11, 12, 13, 14])', function () {
      chai.expect(cumulativeSum([10, 11, 12, 13, 14])).to.deep.equal(values4);
    });
  });
});
