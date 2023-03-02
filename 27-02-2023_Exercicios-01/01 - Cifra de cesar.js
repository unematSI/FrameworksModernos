function caesarCipher(s, k) {
    let text = "";
    let firstLowerCharCode = 97; //a
    let firstUpperCharCode = 65; //A
    let lastLowerCharCode = 122; //z
    let lastUpperCharCode = 90; //Z

    //Iteração sobre cada char dentro do String
    for(let i=0; i<s.length; i++){
        //Valida se é letra
        if(/[a-z]/i.test(s[i])){
            //Pega o código da letra
            let charCode = s.charCodeAt(i);

            //Valida letra maiuscula
            if(charCode >= firstUpperCharCode && charCode <= lastUpperCharCode){
                charCode = ((charCode - firstUpperCharCode + k) % 26) + firstUpperCharCode;
            }
            //Valida letra minuscula
            if(charCode >= firstLowerCharCode && charCode <= lastLowerCharCode){
                charCode = ((charCode - firstLowerCharCode + k) % 26) + firstLowerCharCode;
            }

            //Retorna de CharCode para Char e concatena na saída
            text += String.fromCharCode(charCode);
        } else {
            //Caso não seja letra apenas concatena na saída
            text += s[i];
        }
    }

    console.log(`In:  ${s} \nOut: ${text}\n`);

    return text;
}

caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5) //"Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"

caesarCipher("A friend in need is a friend indeed", 20) //"U zlcyhx ch hyyx cm u zlcyhx chxyyx"

caesarCipher("middle-Outz", 2) //"okffng-Qwvb"


caesarCipher("A Fool and His Money Are Soon Parted.", 27) // "B Gppm boe Ijt Npofz Bsf Tppo Qbsufe."

caesarCipher("One should not worry over things that have already happened and that cannot be changed.", 49) // "Lkb pelria klq tloov lsbo qefkdp qexq exsb xiobxav exmmbkba xka qexq zxkklq yb zexkdba."
caesarCipher("Back to Square One is a popular saying that means a person has to start over, similar to: back to the drawing board.", 126) // "Xwyg pk Omqwna Kja eo w lklqhwn owuejc pdwp iawjo w lanokj dwo pk opwnp kran, oeiehwn pk: xwyg pk pda znwsejc xkwnz."