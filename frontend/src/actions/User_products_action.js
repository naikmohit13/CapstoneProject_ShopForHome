export const addCart =(product) =>{
    return{
        type:"ADDITEM",
        payload:product
    }
}
//For delete item to Cart
export const delCart =(product) =>{
    return{
        type:"DELITEM",
        payload:product
    }
}