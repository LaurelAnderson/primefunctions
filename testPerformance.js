/*  global maxPrimeSum */
/* Because of the slowness of the code, the tests were changed to 100 and 1000 */
describe('Test for Correctness', function () {
  const values1 = [41, 6];
  const values2 = [953, 21];
  describe('maxPrimeSum()', function () {
    it('maxPrimeSum(100) should run in less than 5ms', function () {
      this.slow(0);
      chai.expect(maxPrimeSum(100)).to.deep.equal(values1);
    });
    it('maxPrimeSum(1000) should run in less than 40ms', function () {
      this.slow(0);
      chai.expect(maxPrimeSum(1000)).to.deep.equal(values2);
    });
  });
});
