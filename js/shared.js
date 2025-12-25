// Retorna um índice válido para um array
// especificando se será o próximo índice ou anterior
//
// array: O array que deseja-se percorrer
// currentIndex: Índice atual no array, ponto de partida
// direction: Valor inteiro, indica se devemos ir ao índice anterior ou ao próximo
//
export function fixedArrayIndex(array, currentIndex, direction) {
    
    const l = array.length;
    
    let newIndex = (currentIndex + direction + l) % l;

    return newIndex;
}

// Retorna uma lista de path de imagens de determinado produto
// cada path é gerado a partir do nome do arquivo da imagem do produto
export function getProductImagesPathList(productImageFileNameList){
    let returnArray = [];
    productImageFileNameList.forEach((imageFileName)=>{
        returnArray.push(`images/products/${imageFileName}`);
    })
    return returnArray;
}