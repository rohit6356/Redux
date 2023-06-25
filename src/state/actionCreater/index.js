export const depositMoney = (amount) =>{
    return (dispatch) =>{
       dispatch ({
            type:'deposit',
            payload:amount
        })
    }
}
export const withdrawMoney = (amount) =>{
    return (dispatch) =>{
       dispatch ({
            type:'withdraw',
            payload:amount
        })
    }
}

// export const addQuantity = (items) => {
//     return (dispatch) =>{
//         dispatch({
//             type : "addItems",
//             payload: items

//         })
//     }
// }
// export const removeQuantity = (items) => {
//     return (dispatch) =>{
//         dispatch({
//             type : "removeItems",
//             payload: items

//         })
//     }
// }

