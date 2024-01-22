let RegEx = /\b[xX].*h.*\b/i ; 

function testingWord (){
    let word = prompt("Introduce alguna palabra que tenga una X al inicio y una h en su interior en cualquier idioma.") 
    RegEx.test(word);
    console.log(RegEx.test(word))
    
}
testingWord();