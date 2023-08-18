let image = document.getElementById("image1");
let borderVisible = false;
function borderVisibility() {
    
    if (borderVisible == true){
        image.style.border ="none";
    } else {
        image.style.border= "2px solid red"
    }
    borderVisible = !borderVisible
}
//


function totalQuantity() {
    const quantity1 = document.getElementById("quantity1");
    const quantity2 = document.getElementById("quantity2");
    const quantity3 = document.getElementById("quantity3");
    const totalText = document.getElementById("totalText");
    const total = Number(quantity1.value) + Number(quantity2.value) + Number(quantity3.value); // devuelve un string, colocando number se transforma numero.
    console.log(total)
    if (total <= 10){
        totalText.innerHTML = `Llevas ${total} stickers`;
        totalText.style.color = "green";
    } else {
        totalText.innerHTML = "Llevas demasiados stickers";
        totalText.style.color = "red";
    }
}

function verifyPassword() {
    const select1 = document.getElementById ("select1");
    const select2 = document.getElementById ("select2");
    const select3 = document.getElementById ("select3"); 
    const joinText = (select1.value) + (select2.value) + (select3.value);
    console.log(joinText);
    const password = document.getElementById ("result");

    if (joinText == "911"){
        password.innerText = "Password 1 es correcto";
    }else if(joinText =="714"){
        password.innerText ="Password 2 es correcto";
    }
    else {
        password.innerText = "Password es incorrecto";
    }
}

