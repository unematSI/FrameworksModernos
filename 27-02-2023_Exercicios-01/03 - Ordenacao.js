/*
Write a function that sorts array while keeping the array structure. Numbers should be first then letters both in ascending order.
 */

function numThenChar(arr) {
    //Cria array com todos os itens
    let ret = arr.flat();
    //Cria mapa com tamanho de cada array
    let lens = arr.map((a) => a.length);

    //Ordena os itens
    ret.sort((a, b) => {
        let aType = typeof a;
        let bType = typeof b;

        //Retorna pelo CharCode se ambos forem strings
        if(aType === bType && aType === "string") {
            return a.toString().charCodeAt(0) - b.toString().charCodeAt(0);
        }
        //Retorna pela diferença se ambos forem números
        return aType === bType ? a - b : aType === "number" ? -1 : 1;
    });
    //Cria arrays com os itens ordenados do tamanho de cada array original
    ret = lens.map((l) => ret.splice(0, l));

    console.log('In:');
    console.log(arr);
    console.log('\n');
    console.log('Out:');
    console.log(ret);
    console.log('\n');
    return ret;
}

numThenChar([
    [1, 2, 4, 3, "a", "b"],
    [6, "c", 5], [7, "d"],
    ["f", "e", 8]
])
/*
[
    [1, 2, 3, 4, 5, 6],
    [7, 8, "a"],
    ["b", "c"], ["d", "e", "f"]
]
*/

numThenChar([
    [1, 2, 4.4, "f", "a", "b"],
    [0], [0.5, "d","X",3,"s"],
    ["f", "e", 8],
    ["p","Y","Z"],
    [12,18]
])
/*
[
    [0, 0.5, 1, 2, 3, 4.4],
    [8],
    [12, 18, "X", "Y", "Z"],
    ["a", "b", "d"],
    ["e", "f", "f"],
    ["p", "s"]
]
*/