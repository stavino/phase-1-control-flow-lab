function scuberGreetingForFeet(someValue){
  if(someValue <= 400){
    return `This one is on me!`;
  }
  if(someValue > 2000){
    return someValue > 2500 ? `No can do.` : `I will gladly take your thirty bucks.`;
  }
}

function ternaryCheckCity(city){
  if(city === `NYC`){
  return `Ok, sounds good.`;
  }
  else{
  return `No go.`;
  }
}
let response;
function switchOnCharmFromTip(tip){
  switch (tip){
    case `generous`:
      return `Thank you so much.`;
    case `not as generous`:
      return `Thank you.`;
    default:
      return `Bye.`;
  }
}