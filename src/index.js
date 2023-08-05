module.exports = function toReadable (number) {
    let result = '';
    let numWord = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
      100: 'hundred'
    }
  
      if (number <=20) {
      return numWord[number];
    }
  
    if (number >20 && number <100) {
      result += numWord[Math.floor(number/10)*10]
      if (number%10 !=0) {
          result += ' ' + numWord[number - Math.floor(number/10)*10]
      }
    }
  
    if (number >=100) {
      result += numWord[Math.floor(number/100)] + ' ' + numWord[100]
      if (number%100 !=0) {
          const number1 = number - Math.floor(number/100)*100;
  
          if (number1 <=20) {
              result += ' ' + numWord[number1];
          }
          if (number1 >20) {
              result += ' ' + numWord[Math.floor(number1/10)*10]
              if (number1%10 !=0) {
                  result += ' ' + numWord[number1 - Math.floor(number1/10)*10]
              }
            }
      }
    }
  
    return result;
  
  }
  
  