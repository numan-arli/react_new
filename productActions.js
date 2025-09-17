import { type } from "@testing-library/user-event/dist/type";
import * as actionTypes from "./actionTypes";


export function deleteProductsSuccess(deletedProduct){
  debugger;
  return {type: actionTypes.DELETE_PRODUCTS_SUCCESS, payload: deletedProduct}
}

export function deleteProduct(product){
  return function(dispatch){
    let url = "http://localhost:8080/api/delete";
    debugger;
    return fetch (url,{
      method : "Delete",
      headers : { "Content-Type": "application/json" },
      body : JSON.stringify(product)
    })
    .then(response => response.json())
    .then(result => dispatch(deleteProductsSuccess(result)));
  } 
}



export function getProductsSuccess(products){
  debugger;
    return {type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products}
}



 export function getProducts(categoryId){
    return function(dispatch){
        debugger;
    let url = "http://localhost:8080/api/products";
    //let url = "http://localhost:3003/products";
    if(categoryId) {
        url = url + "/" + categoryId;
    }
    return fetch(url,{
                      method: "GET",
                      headers: { "Content-Type": "application/json" }
                    })
    .then(response =>response.json())
    .then(result => dispatch(getProductsSuccess(result)));
 }
 }



  export function createProductSuccess(product){
  debugger;
  return {type: actionTypes.CREATE_PRODUCT_SUCCESS , payload: product}
  }


   export function updateProductSuccess(product){
    debugger;
    return {type: actionTypes.UPDATE_PRODUCT_SUCCESS , payload: product}
    }



 export function saveProductApi(product){
  let url = "http://localhost:8080/api/update";
  debugger;
  return fetch(url, {
      method: product.productId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
  })
  .then(handleResponse)
  .catch(handleError);
}


export function saveProduct(product){
  return function(dispatch){
    debugger;
    return saveProductApi(product)
      .then(savedProduct => {
        product.productId
          ? dispatch(updateProductSuccess(savedProduct))
          : dispatch(createProductSuccess(savedProduct));
      })
      .catch(error => {
        console.error("saveProduct hata:", error.message);
        // Burada dispatch ile hata state'e gönderilebilir
        throw error;
      });
  };
}



export async function handleResponse(response) {
  debugger;
  if (response.ok) {
    try {
      return await response.json();
    } catch (e) {
      return null; // boş body ise json() patlamasın
    }
  }
  const error = await response.text();
  throw new Error(error);
}




export function handleError(error){
  debugger;
  console.error("Bir hata oluştu:", error.message);
  throw error;
}


