
function titleCased(text) {
    let wordsArray = text.split(' ');
    let capsArray = wordsArray.map(word=>{
        return word[0].toUpperCase() + word.slice(1)
    });
    return capsArray.join(' ');
}
  