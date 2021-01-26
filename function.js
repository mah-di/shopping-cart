function couponCheck(){
    // function for checking discount availability and calculating

    let subTotal = parseFloat(document.getElementById('subtotal').innerHTML);

    if(subTotal >= 200){
        // calculating discount

        let discount = subTotal/10;
        document.getElementById('coupon-discount').innerHTML = discount.toFixed(1);
    }
    else{
        document.getElementById('coupon-discount').innerHTML = 0;    // no discount if less than 200 spent
    }
}

function cartCalc(){
    // function for calculating subtotal, discount, tax and adjusting total

    let p1 = parseFloat(document.getElementById('price-one').innerHTML);
    let p2 = parseFloat(document.getElementById('price-two').innerHTML);
    
    document.getElementById('subtotal').innerHTML = p1 + p2;              // subtotal adjusted

    if(coupon == true){                                // checking discount availability
        couponCheck();                                 // discount adjusted
    }

    let subTotal = parseFloat(document.getElementById('subtotal').innerHTML);
    let discount = parseFloat(document.getElementById('coupon-discount').innerHTML);
    let tax = (subTotal - discount)/20;
    let total = (subTotal + tax) - discount;
    
    document.getElementById('tax').innerHTML = tax.toFixed(1);             // tax adjusted
    document.getElementById('total').innerHTML = total.toFixed(1);             //total adjusted
}