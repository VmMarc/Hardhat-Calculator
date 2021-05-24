const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Calculator", () => {

  let Calculator;
  let calculator;

  beforeEach(async () => {
    Calculator = await ethers.getContractFactory('Calculator');
    calculator = await Calculator.deploy();
  })

  it('Should calculate the right result : addition', async () => {
    expect(await calculator.add(1, 2)).to.equal(3);
  });

  it('Should calculate the right result : substraction', async () => {
    expect(await calculator.sub(1, 2)).to.equal(-1);
  });

  it('Should calculate the right result : multiplication', async () => {
    expect(await calculator.mul(1, 2)).to.equal(2);
  });

  it('Should calculate the right result : division', async () => {
    expect(await calculator.div(1, 2)).to.equal(0);
  });

  it('Should revert if nb2 equals 0', async () => {
    await expect(calculator.div(1, 0)).to.be.revertedWith("Calculator: cannot divide by zero");
  });

  it('Should calculate the right result : modulo', async () => {
    expect(await calculator.mod(1, 2)).to.equal(1);
  });
});