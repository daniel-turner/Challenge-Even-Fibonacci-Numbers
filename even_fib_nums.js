/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
module.exports = {

  fibNums: fibonacciNums,
  fibHighest: highestFibonacciNumber
};

function fibonacciNums( maxFibValue ) {

  if(typeof maxFibValue !== 'number') {

    return new TypeError("highestFibonacciNumber requires a number type as input");
  }

  if(isNaN(maxFibValue)) {

    return new TypeError("highestFibonacciNumber cannot take NaN as input");
  }

  var evenSum = recursiveEvenFibonacciSum(1,2,2);

  function recursiveEvenFibonacciSum(previousToLastNumber, lastNumber, sum) {

    highest = previousToLastNumber + lastNumber;

    while(highest <= maxFibValue) {

      if(highest%2 === 0) {

        sum += highest;
      }

      previousToLastNumber = lastNumber;
      lastNumber = highest;

      sum = recursiveEvenFibonacciSum(previousToLastNumber, lastNumber, sum);
    }

    return sum;
  };

  return evenSum;
};

function highestFibonacciNumber(maxFibValue){

  if(typeof maxFibValue !== 'number') {

    return new TypeError("highestFibonacciNumber requires a number type as input");
  }

  if(isNaN(maxFibValue)) {

    return new TypeError("highestFibonacciNumber cannot take NaN as input");
  }

  var highest = 0;

  highest = recursiveHighestFibonacciNumber(1,2,highest);

  function recursiveHighestFibonacciNumber(previousToLastNumber, lastNumber, highest) {

    while(previousToLastNumber + lastNumber <= maxFibValue) {

      highest = previousToLastNumber + lastNumber;

      previousToLastNumber = lastNumber;
      lastNumber = highest;

      highest = recursiveHighestFibonacciNumber(previousToLastNumber, lastNumber, highest);
    }

    return highest;
  };

  return highest;
};