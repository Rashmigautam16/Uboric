
let cartLS=JSON.parse(localStorage.getItem("cart-page"))||[];
let dataWL=JSON.parse(localStorage.getItem("WL-page"))||[];

function appendData(data)
    {
        let container=document.getElementById("container");
        container.innerHTML=null;
        data.forEach(function(el){
            let div=document.createElement("div");
            div.setAttribute("class","box");

            let img=document.createElement("img");
            img.src=el.image;
            img.setAttribute("class","box_img")

            let h3=document.createElement("h3");
            h3.innerText=el.title;
            h3.setAttribute("class","box_title")

            let p=document.createElement("p");
            p.innerText="Price: Rs "+el.price;
            p.setAttribute("class","price")

            let addToCart=document.createElement("button");
            addToCart.setAttribute("class","cart_button");
            addToCart.innerText="Add to cart";
            addToCart.addEventListener("click",function(){
                if(addToCartFunct(el.title)==true)
                {
                    // alert("Added to cart")
                    addToCart.innerText="Added to cart";
                    console.log(el.title);
                    cartLS.push(el);
                    localStorage.setItem("cart-page",JSON.stringify(cartLS));
                }else{
                    addToCart.innerText="Added to cart";
                    alert("Already present in cart")
                }
            })

            if(addToCartFunct(el.title)==false)
                {
                    addToCart.innerText="Added to cart";
                }

            let addToWL=document.createElement("button");
            addToWL.setAttribute("class","WL_button")
            addToWL.innerText="♡";
            addToWL.addEventListener("click",function(){
                if(addToWLFunct(el.title)==true)
                {
                    // alert("Added to wishlist")
                    addToWL.innerText="❤️";
                    console.log(el.title);
                    dataWL.push(el);
                    localStorage.setItem("WL-page",JSON.stringify(dataWL));
                }else{
                    addToWL.innerText="❤️";
                    alert("Already present in wishlist")
                }
            })
            if(addToWLFunct(el.title)==false)
                {
                    addToWL.innerText="❤️";
                }

            div.append(img,h3,p,addToCart,addToWL);
            container.append(div);
        })
    }
    
    function addToCartFunct(id){
        for(let i=0;i<cartLS.length;i++){
            if(cartLS[i].title==id){
                return false;
            }
        }
        return true;
    }

    function addToWLFunct(id){
        for(let i=0;i<dataWL.length;i++){
            if(dataWL[i].title==id){
                return false;
            }
        }
        return true;
    }

    export {appendData};