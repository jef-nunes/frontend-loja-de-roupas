import { productsData } from "./mock-db.js";
import { getProductImagesPathList } from "./shared.js";

const allProductsContainer = document.getElementById("all-products-container");

function generateProductsCards(){
    productsData.forEach((product)=>{
        let productCard = document.createElement("div");
        productCard.innerHTML = `
                <div class="product-card">
                    <span class="product-name">${product.modelo} - ${product.cor}</span>
                    <span class="product-price">Preço: R\$${product.preco}</span>
                    <img class="product-image" src="${getProductImagesPathList(product.imagens)[0]}" alt="" srcset="">
                    <div>
                        <button class="product-action-btn"><i class="fa-solid fa-eye"></i></button>
                        <button class="product-action-btn"><i class="fa-solid fa-cart-plus"></i></button>
                    </div>
                </div>
        `
        allProductsContainer.appendChild(productCard);
    });
}

generateProductsCards();