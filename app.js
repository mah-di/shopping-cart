const priceOne = parseFloat(document.getElementById('price-one').innerHTML);
const priceTwo = parseFloat(document.getElementById('price-two').innerHTML);

let coupon = false;

cartCalc();                            // function called for calculating cart status on page load


document.getElementById('remove-one').addEventListener('click', function(){            // function for removing product one from cart list
    document.getElementById('price-one').innerHTML = 0;
    document.getElementById('product-one').style.display = 'none';

    cartCalc();                        // function called to adjust cart status
});


document.getElementById('remove-two').addEventListener('click', function(){             // function for removing product two from cart list
    document.getElementById('price-two').innerHTML = 0;
    document.getElementById('product-two').style.display = 'none';

    cartCalc();                        // function called to adjust cart status
});


document.getElementById('increment-one').addEventListener('click', function(){          // function for quantity increment for product one
    
    let originQuantity = parseFloat(document.getElementById('quantity-one').value);
    let quantity = originQuantity + 1;
    
    document.getElementById('quantity-one').value = quantity;
    document.getElementById('price-one').innerHTML = priceOne * quantity;

    cartCalc();
    
    if (originQuantity == 0){
        // for enabling product one decrement button if the quantity was 0

        document.getElementById('decrement-one').disabled = false;
    }
    if (quantity == 5){
        // for disabling product one increment button if the quantity is maxed out

        document.getElementById('increment-one').disabled = true;
        document.querySelector('.info-one').style.display = 'block';
    }
})


document.getElementById('increment-two').addEventListener('click', function(){               // function for quantity increment for product two
    
    let originQuantity = parseFloat(document.getElementById('quantity-two').value);
    let quantity = originQuantity + 1;
    
    document.getElementById('quantity-two').value = quantity;
    document.getElementById('price-two').innerHTML = priceTwo * quantity;
    
    cartCalc();
    
    if (originQuantity == 0){
        // for enabling product two decrement button if the quantity was 0

        document.getElementById('decrement-two').disabled = false;
    }
    if (quantity == 5){
        // for disabling product two increment button if the quantity is maxed out

        document.getElementById('increment-two').disabled = true;
        document.querySelector('.info-two').style.display = 'block';
    }
})


document.getElementById('decrement-one').addEventListener('click', function(){               // function for quantity decrement for product one
    
    let originQuantity = parseFloat(document.getElementById('quantity-one').value);
    let quantity = originQuantity - 1;

    document.getElementById('quantity-one').value = quantity;
    document.getElementById('price-one').innerHTML = priceOne * quantity;

    cartCalc();
    
    if (originQuantity == 5){ 
        // for enabling product one increment button if the quantity was maxed out

        document.getElementById('increment-one').disabled = false;
        document.querySelector('.info-one').style.display = 'none';
    }
    if (quantity == 0){
        // for disabling product one decrement button if the quantity is 0

        document.getElementById('decrement-one').disabled = true;
    }
})


document.getElementById('decrement-two').addEventListener('click', function(){               // function for quantity decrement for product two
    
    let originQuantity = parseFloat(document.getElementById('quantity-two').value);
    let quantity = originQuantity - 1;

    document.getElementById('quantity-two').value = quantity;
    document.getElementById('price-two').innerHTML = priceTwo * quantity;

    cartCalc();
    
    if (originQuantity == 5){
        // for enabling product two increment button if the quantity was maxed out

        document.getElementById('increment-two').disabled = false;
        document.querySelector('.info-two').style.display = 'none';
    }
    if (quantity == 0){
        // for disabling product two decrement button if the quantity is 0

        document.getElementById('decrement-two').disabled = true;
    }
})

document.getElementById('coupon-button').addEventListener('click', function(){            // function for coupon code

    let couponCode = document.getElementById('coupon').value;

    if(couponCode == "COUPON"){                            // cheacking coupon validity
        coupon = true;                                     // couponCheck function to be run
        couponCheck();
        
        document.getElementsByClassName('discount')[0].style.display = 'block';
        document.getElementsByClassName('discount')[1].style.display = 'block';
        
    }
    else{
        coupon = false;                                    // couponCheck function not to be run
        alert('Invalid coupon code. Please use a valid coupon.');
        document.getElementsByClassName('discount')[0].style.display = 'none';
        document.getElementsByClassName('discount')[1].style.display = 'none';
    }
})