import { productsData } from "./mock-db.js";
import { fixedArrayIndex, getProductImagesPathList } from "./shared.js";

// Retorna uma lista com os produtos em promoção
function getFeaturedProductsList(){
    const returnList = [];
    productsData.forEach((element)=>{
        if(element.promocao){
            returnList.push(element);
        }
    });
    return returnList;
}

//_____________ Lógica do slider dos produtos em promoção __________________

// Elementos HTML
const featuredProductName = document.getElementById("featured-product-name");
const featuredProductPrice = document.getElementById("featured-product-price");
const featuredProductImage = document.getElementById("featured-product-img");
const nextFeaturedProductBtn = document.getElementById("featured-product-next-btn");
const previousFeaturedProductBtn = document.getElementById("featured-product-previous-btn");

// Índice do produto em promoção o qual está sendo visualizado
let currentFeaturedProductIndex = 0;

// Atualiza a visualização do produto selecionado
function updateFeaturedProductDisplay(){
    let currentProduct = getFeaturedProductsList()[currentFeaturedProductIndex];
    let firstImage = getProductImagesPathList(currentProduct.imagens)[0];
    featuredProductImage.src = firstImage;
    featuredProductName.textContent=`${currentProduct.modelo} - ${currentProduct.cor}`;
    featuredProductPrice.textContent = `Preço: R\$${currentProduct.preco}`;
}

function previousFeaturedProduct(){
    currentFeaturedProductIndex = fixedArrayIndex(
        getFeaturedProductsList(),
        currentFeaturedProductIndex,
        -1
    );
    updateFeaturedProductDisplay();
}

function nextFeaturedProduct(){
    currentFeaturedProductIndex = fixedArrayIndex(
        getFeaturedProductsList(),
        currentFeaturedProductIndex,
        1
    );
    updateFeaturedProductDisplay();
}

nextFeaturedProductBtn.addEventListener("click", ()=>{nextFeaturedProduct()});
previousFeaturedProductBtn.addEventListener("click", ()=>{previousFeaturedProduct()});
updateFeaturedProductDisplay();