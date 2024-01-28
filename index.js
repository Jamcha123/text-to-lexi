const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "x", "z"]; 
export function toText(integer){
    if (Number.parseInt(integer) > 25){
        console.error("can't by higher than 25")
    }
    if (Number.parseInt(integer) < 0){
        console.error("lower than 0")
    }
    if (Number.isInteger(integer) == false){
        console.error("not a number")
    }
    console.log(letters[Number.parseInt(integer)])
}
export function toNumber(string){
    let text = "" + string + "".toLowerCase()
    const newWords = []
    for(let i = 0; i != text.length; i++){
        for(let j = 0; j != letters.length; j++){
            if(letters[j] == text[i]){
                newWords.push(j)
            }
        }
    }
    let words = "" + newWords + "".toString()
    for(let i = 0; i < words.length; i++){
        words = words.replace(",", "")
    }
    console.log(words)
}