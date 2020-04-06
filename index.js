function titleCased(sentences){
  const wordsInArray = sentences.toLowerCase.split(" ");
  const upper = wordsInArray.map(words=>{
    return words.charAt(0).toUpperCase() + words.slice(1); 
  })
  return upper.join(" ");
}