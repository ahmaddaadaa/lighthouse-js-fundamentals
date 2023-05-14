const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']
function finalPosition(moves){

  var coordinations = [];
  var x = 0;
  var y = 0;

  for (var move of moves){
  
    if (move === 'north'){
      y++; }
    else if(move === 'south'){
      y--; }
    else if(move === 'east'){ 
      x++; }
    else { x--; }
  

  }
  coordinations.push(x);
  coordinations.push(y);
  return coordinations;
}

console.log(finalPosition(moves));
