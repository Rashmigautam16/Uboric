
let cartLS = JSON.parse(localStorage.getItem("cart-page")) || [];
console.log("no. of items in cart: ",cartLS.length);
appendData(cartLS);



function appendData(cartLS) {
    let container = document.getElementById("maindiv");
    container.innerHTML = null;
 
    cartLS.forEach(function (el,index) {
        // if(el.id>=1000)
        // {
        // console.log(el);
        let div1 = document.createElement("div");
        div1.setAttribute("class", "cartfst");

        let div2 = document.createElement("div");
        div2.setAttribute("class", "imgdiv");

        let image = document.createElement("img");
        image.src = el.image;

        div2.append(image);

        let div3 = document.createElement("div");
        div3.setAttribute("class", "procediv");

        let div4 = document.createElement("div");
        let h3_1 = document.createElement("h3");
        h3_1.setAttribute("class", "prodname");
        h3_1.innerText = el.title;

        let div5 = document.createElement("div");
        div5.setAttribute("class", "number");
        div4.append(h3_1, div5);

        // Increase Decrese number of items in cart
        let button1 = document.createElement("button");
        button1.innerText="-";
        button1.setAttribute("class", "dectmt");
        button1.addEventListener("click",function(){
            decrement(el);
        })

        let button2 = document.createElement("button");
        button2.innerText="+";
        button2.setAttribute("class", "incmt");
        button2.addEventListener("click",function(){
            increment(el);
        })

        let h2=document.createElement("h2");
        h2.setAttribute("class","pricedisplay");
        h2.innerText=el.quantity;


        div5.append(button1,h2,button2);
        //**********************************************

        let div6 = document.createElement("div");
        div6.setAttribute("class","div6");

        let h3_2 = document.createElement("h3");
        h3_2.setAttribute("class", "pricetag")
        h3_2.innerText =+el.price * +el.quantity;

        // let pay = document.createElement("h6");
        // pay.setAttribute("id", "pay");
        // pay.innerText = +elem.price * +elem.quantity;

        let dustbin = document.createElement("img");
        dustbin.src =
            "https://www.rentomojo.com/public/images/radical-cart/icons/delete__icon.svg";
        dustbin.setAttribute("id", "par_dustbin");
        dustbin.addEventListener("click", function () {
            itemDelete(index);
        });

        div6.append(h3_2, dustbin);

        div3.append(div4, div6);

        div1.append(div2, div3);
        container.append(div1);
    // }
    })
    let Total_payable = TotalAmount(cartLS);
    // let tt = refund + delivery;
    document.getElementById("totalAmt").innerText = Total_payable+" "+"Rs";

    let gst=Gst(cartLS);
    document.getElementById("GSTAmt").innerText=gst+" "+"Rs";

    let finalValue=Total_payable+gst;
    localStorage.setItem("cartPrice",finalValue);
    document.getElementById("overallTotal").innerText=finalValue+" "+"Rs";
    localStorage.setItem("final_sum",finalValue);

    let emi=document.getElementById("emi");
    let cal_emi=Math.floor((Total_payable+gst)/3);
    emi.innerText=cal_emi+" Rs";

}
function itemDelete(index) {
    cartLS.splice(index, 1);
    console.log(cartLS.length);
    localStorage.setItem("cart-page", JSON.stringify(cartLS));
    appendData(cartLS);
}

function decrement(el) {
    if (el.quantity !== 0) {
        // return;
        let quantity = el.quantity--;

        document.querySelector(".pricedisplay").innerText = quantity;
    } else {
        return;
    }
    cartLS = cartLS.filter((el) => el.quantity !== 0);
    localStorage.setItem("cart-page", JSON.stringify(cartLS));

    appendData(cartLS);
}
// decrement()
function increment(el) {
    let quantity = el.quantity++;
    document.querySelector(".pricedisplay").innerText = quantity;
    localStorage.setItem("cart-page", JSON.stringify(cartLS));
    appendData(cartLS);
}

function TotalAmount(cartLS) {
    let bag = 0;
    for (let i = 0; i < cartLS.length; i++) {
        bag =bag + cartLS[i]["quantity"] * cartLS[i]["price"];
    }
    return bag;
}
function Gst(cartLS) {
    let bag5 = 0;
    for (let i = 0; i < cartLS.length; i++) {
        bag5 =bag5 + cartLS[i]["quantity"] * cartLS[i]["price"];
        // bag5 = Math.ceil(bag5)
    }
    bag5 = Math.floor((bag5 * 18) / 100);
    // console.log(bag5);
    return bag5;
}



// let couponCode = {
//     Flat60: 0.6,
//     Flat50: 0.5,
//     Flat40: 0.4,
//     Flat30: 0.3,
//     Flat20: 0.2,
//     Flat10: 0.1
// }



// let promoCode = document.querySelector("#inpdiv");
// let applyPromo = document.querySelector("#aplybtn");

// applyPromo.addEventListener("click", function () {

//     let discountValue = document.querySelector("#discountValue");
//     let totalValue = document.querySelector("#overallTotal").innerText;
//     console.log(totalValue);

//     let key = promoCode.value;
//     let discValue = couponCode[key];

//     if (discValue != undefined) {
//         let disc = Math.ceil(totalValue * discValue);
//         console.log(disc);
        
//         let finalValue =totalValue - disc;
        
//         discountValue.innerText = `Congratulation you got ${disc} Rs Discount`;
//         document.getElementById("overallTotal").innerText = "After discount: "+finalValue+" "+"Rs";

//         let emi=document.getElementById("emi");
//         let cal_emi=Math.floor(finalValue/3);
//         emi.innerText=cal_emi+" Rs";

//         localStorage.setItem("cartPrice",finalValue);
//     } else {
//         alert("Invalid PromoCode");
//     }
// });

let couponCode = {
    Flat60: 0.6,
    Flat50: 0.5,
    Flat40: 0.4,
    Flat30: 0.3,
    Flat20: 0.2,
    Flat10: 0.1
}



let promoCode = document.querySelector("#inpdiv");
let applyPromo = document.querySelector("#aplybtn");

applyPromo.addEventListener("click", function () {

    let discountValue = document.querySelector("#discountValue");
    let totalValue = document.querySelector("#overallTotal").innerText;
    console.log(totalValue);

    let key = promoCode.value;
    let discValue = couponCode[key];

    if (discValue != undefined) {
        let disc = Math.ceil(totalValue * discValue);
        

        let finalValue =totalValue - disc;
        
        discountValue.innerText = `Congratulation you got ${disc} Rs Discount`;
        document.getElementById("overallTotal").innerText = "After discount: "+finalValue;

        localStorage.setItem("final_sum",finalValue);
    } else {
        alert("Invalid PromoCode");
    }
});

