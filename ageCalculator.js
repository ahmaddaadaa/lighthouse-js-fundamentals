
function ageCalculator (name, yearOfBirth, currentYear){
  var answer = '';
  answer+= name + ' is ' + (currentYear - yearOfBirth) + ' years old.'; 
  return answer;

}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
