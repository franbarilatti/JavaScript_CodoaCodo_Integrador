
function calcTotal(){
    var price = 200;
    var discount = 0;
    let category = document.getElementById('category').value;
    let quantity = document.getElementById("quantity").value;
    console.log(category);
    console.log(quantity);

    if(category == 'student'){
        discount = price * 0.80;
    }else if(category == 'trainee'){
        discount = price * 0.50;
    }else{
        discount = price * 0.15;
    }
    var totalPrice = price - discount

    var total = totalPrice * Number(quantity);

    document.getElementById('total').innerHTML = total;
}
