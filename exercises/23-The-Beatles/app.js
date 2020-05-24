const sing = () => {
    var strTmp = ""
    for (i = 0;i < 12;i++){
        
        if (i == 4){
            strTmp = strTmp + "words of wisdom, "
        }
        else if (i == 10){
            strTmp = strTmp + "there will be an answer, "
        }
        else {
            strTmp = strTmp + "let it be, "
        }
    }
    return strTmp
}

//Your code above ^^^

console.log(sing());