function shout(string){
return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
  }
  function logShout(string){
    console.log(string.toUpperCase())
  }
  function logWhisper(string){
    console.log(string.toLowerCase())
  }
  function sayHiToGrandma(string){
    if (string.toLowerCase() === string){
    return "I can\'t hear you!" 
  }
  if(string.toUpperCase() === string){
  return "YES INDEED!"
  }
<<<<<<< HEAD
  if(string  === "I love you, Grandma."){
=======
  if(String  === "I love you, Grandma."){
>>>>>>> 193d8f9574bc4c3adfc287576ffd756d04ab18f8
    return "I love you, too."
  }
  }
  