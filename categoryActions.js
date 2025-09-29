import * as actionTypes from "./actionTypes";

export function changeCategory(category12) {
debugger;
  return {  type: actionTypes.CHANGE_CATEGORY, payload: category12  }

}

export function getCategoriesSuccess(categories){
  debugger;
    return {type: actionTypes.GET_CATEGORIES_SUCCESS, payloaddd: categories}
}

export function getCategories(){
 return function(dispatch){
  debugger;
    let url = "http://localhost:8080/api/category";
  //let url = "http://localhost:3003/categories";
    return fetch(url,
     { method: "GET",
       headers: 
       { 
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
       }
        
       
     })
    .then(response =>response.json())
    .then(result => dispatch(getCategoriesSuccess(result)));
 }
}



/*fetch("http://localhost:8080/api/products", {
  headers: {
    "Authorization": "Bearer " + localStorage.getItem("token")
  }
})*/