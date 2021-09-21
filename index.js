function scuberGreetingForFeet(numOfFt){
  if (numOfFt < 400 && numOfFt < 1999){
    return "This one is on me!"
  }else if (numOfFt > 2000 && numOfFt < 2500){
    return "I will gladly take your thirty bucks."
  }else {
    return "No can do."
  }
}

function ternaryCheckCity(chkCity){
  const WhatCity = chkCity ===  "NYC" ? "Ok, sounds good." : "No go."
  return WhatCity 
}

function switchOnCharmFromTip(tipAmmount){
  switch (tipAmmount){
    case "generous":
      return "Thank you so much."
    break;
    case "not as generous":
      return "Thank you."
    break;
    default:
      return "Bye."
  }

}