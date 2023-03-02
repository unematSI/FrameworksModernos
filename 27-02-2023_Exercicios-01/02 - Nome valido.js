/*
1. Both initials and words must be capitalized.
2. Initials must end with a dot.
3. A name must be either 2 or 3 terms long.
4. If the name is 3 words long, you can expand the first and middle name or expand the first name only.
  You cannot keep the first name as an initial and expand the middle name only.
5. The last name must be a word (not an initial).
 */

function validName(name) {
    let valid = true;
    //Faz o loop em cada palavra do nome
    name.split(" ").forEach((word) => {
        //Confere se iniciais são maíusuclas
        if(!(word.charAt(0) === word.charAt(0).toUpperCase())){
            console.log(`Primeira letra não é maiúscula - ${name} - ${word}`);
            valid =  false;
        }
        //Confere se o nome é abreviado
        else if(word.length <= 2){
            if(word.charAt(word.length-1) !== "."){
                console.log(`Inicial não termina com ponto - ${name} - ${word}`);
                valid =  false;
            }
        }
        else if(word.length >= 2 && word.charAt(word.length-1) === '.'){
            console.log(`Apenas abreviações podem terminar com ponto - ${name} - ${word}`);
            valid = false;
        }
    });
    if(!valid) {
        return false
    }
    //Valida se nome é composto por 2 ou 3 palavras
    if(name.split(" ").length !== 2 && name.split(" ").length !== 3){
        console.log(`Nome não é composto por 2 ou 3 palavras - ${name}`);
        return false;
    }
    //Valida se não houve abreviação incorretas no nome
    if(name.split(" ").length === 3){
        let words = name.split(" ");
        if(words[0].length === 2 && words[1].length > 2){
            console.log(`Nome abreviado incorretamente - ${name}`);
            return false;
        } else if (words[2].length === 2) {
            console.log(`Último nome não pode ser abreviado - ${name}`);
            return false;
        }
    }
    console.log(`Nome válido - ${name}`);
    return true;
}

validName("H. Wells") //true

validName("H. G. Wells") //true

validName("Herbert G. Wells") //true

validName("Herbert") //false - Must be 2 or 3 words

validName("h. Wells") //false - Incorrect capitalization

validName("H Wells") //false - Missing dot after initial

validName("H. George Wells") //false - Cannot have: initial first name + word middle name

validName("H. George W.") //false - Last name cannot be initial

validName("Herb. George Wells") //false - Words cannot end with a dot (only initials can)