
let cartLS=JSON.parse(localStorage.getItem("cart-page"))||[];
let dataWL=JSON.parse(localStorage.getItem("WL-page"))||[];

function appendData(data)
    {
        let container=document.getElementById("container");
        container.innerHTML=null;
        data.forEach(function(el){
            let div=document.createElement("div");
            div.setAttribute("class","box");
            div.addEventListener("click",function(){
                redirect(el);
            })

            let img=document.createElement("img");
            img.src=el.image;
            img.setAttribute("class","box_img")

            let title=document.createElement("p");
            title.innerText=el.title;
            title.setAttribute("class","box_title");

            let div2=document.createElement("div");
            div2.setAttribute("class","Pbox");

            let p=document.createElement("p");
            p.innerText="Price: Rs "+el.default_price;
            p.setAttribute("class","Dprice")

            let p2=document.createElement("p");
            p2.innerText="Price: Rs "+el.price;
            p2.setAttribute("class","price")

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
            
            div2.append(p,p2);
            div.append(img,title,div2,addToCart,addToWL);
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

    function redirect({image,title,default_price,price})
    {
        let obj={
            image,
            title,
            default_price,
            price
        }
        console.log(obj);
        localStorage.setItem("redirectData",JSON.stringify(obj));
        console.log(price);
        localStorage.setItem("cartPrice",price);
        window.location.href="page.html";
    }

    function filterData(){
        let data2=JSON.parse(localStorage.getItem("dataFilter"));
        console.log("data2:",data2);
      
        let filter1 = document.getElementById("filter1")
        filter1.addEventListener("click", function () {
          console.log("yes");
          let f1 = data2.filter(function (el) {
            return (el.price < "1,000");
          });
          console.log(f1);
          appendData(f1);
        })
      
        let filter2 = document.getElementById("filter2")
        filter2.addEventListener("click", function () {
          console.log("yes");
          let f1 = data2.filter(function (el) {
            return ("1,000" < el.price && el.price < "2,000");
          });
          console.log(f1);
          appendData(f1);
        })
      
        let filter3 = document.getElementById("filter3")
        filter3.addEventListener("click", function () {
          console.log("yes");
          let f1 = data2.filter(function (el) {
            return ("2,000" < el.price && el.price < "3,000");
          });
          console.log(f1);
          appendData(f1);
        })
      
        let filter4 = document.getElementById("filter4")
        filter4.addEventListener("click", function () {
          console.log("yes");
          let f1 = data2.filter(function (el) {
            return (el.price > "3,000");
          });
          console.log(f1);
          appendData(f1);
        })
        }

    export {appendData,filterData};