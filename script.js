
function addedItemNumber(id){

    let itemNo = document.getElementById(id).value;

    itemNo = parseInt(itemNo);

    document.getElementById(id).value = itemNo + 1;
}

function addedItemPrice(id,price){

    let amount= document.getElementById(id).innerText;
    
    amount = parseInt(amount);
    
    const mobilePrice =  document.getElementById(id).innerText = amount + price;

    return mobilePrice;
}

function addedTotal(id,price){

    let previousSubTotal = document.getElementById(id).innerText;
        previousSubTotal = parseInt(previousSubTotal);
        
    const  subTotal = document.getElementById(id).innerText = price + previousSubTotal;

    return subTotal;

}


function removedItemNumber(id){

    let itemNo = document.getElementById(id).value;

    itemNo = parseInt(itemNo);

    document.getElementById(id).value = itemNo - 1;
}


function removedItemPrice(id,price){

    let amount= document.getElementById(id).innerText;
    
    amount = parseInt(amount);
    
    const mobilePrice =  document.getElementById(id).innerText = amount - price;

    return mobilePrice;
}

function removedTotal(id,price){

    let previousSubTotal = document.getElementById(id).innerText;
        previousSubTotal = parseInt(previousSubTotal);
        
    const  total = document.getElementById(id).innerText = previousSubTotal - price;

    return total;

}


//  phone section
document.getElementById("mobileAdded").addEventListener("click",function(){

    addedItemNumber("mobileNumber");

    addedItemPrice("mobileAmount",1219);

    addedTotal("subTotal",1219);

    addedTotal("total",1219);

})

document.getElementById("mobileRemoved").addEventListener("click",function(){

    removedItemNumber("mobileNumber");

    removedItemPrice("mobileAmount",1219);

    removedTotal("subTotal",1219);

    removedTotal("total",1219);

})

//cover section

document.getElementById("coverAdded").addEventListener("click",function(){

    addedItemNumber("coverNumber");

    addedItemPrice("coverAmount",59);

    addedTotal("subTotal",59);

    addedTotal("total",59);

})

document.getElementById("coverRemoved").addEventListener("click",function(){

    removedItemNumber("coverNumber");

    removedItemPrice("coverAmount",59);

    removedTotal("subTotal",59);

    removedTotal("total",59);

})
