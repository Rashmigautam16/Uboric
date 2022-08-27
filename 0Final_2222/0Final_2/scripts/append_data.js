let cartLS=JSON.parse(localStorage.getItem("cart-page"))||[];
let dataWL=JSON.parse(localStorage.getItem("WL-page"))||[];


function append(jacksapprow){
    let shop_items=document.getElementById("shop_items");
    shop_items.innerHTML=null;
    jacksapprow.forEach(function(el){
        let div=document.createElement("div");
        div.setAttribute("class","div_item")
        let sel=document.createElement("div");
        sel.setAttribute("class","sale")
        sel.innerText="SALE"

        let heart=document.createElement("img");
        heart.setAttribute("class","heart")
        heart.src="https://www.pinclipart.com/picdir/middle/21-212570_large-red-heart-png-clipart-992-present-clip.png"
        heart.style.width="28px"
        heart.style.height="28px"
        heart.style.padding="5px"
        heart.style.borderRadius="50%";
        
            heart.addEventListener("click",function(){
                if(addToWLFunct(el.id)==true)
                {
                    alert("Added to wishlist")
                    console.log(el.id);
                    dataWL.push(el);
                    localStorage.setItem("WL-page",JSON.stringify(dataWL));
                }else{
                    alert("Already present in wishlist")
                }
            })
        
      
        let bag=document.createElement("img");
        bag.setAttribute("class","bag")
        bag.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEJ4XdkakshHI2riqjKdEgDMXUXfzP5kfJdQK1UinfmdO_TBH0gpWwdZ3sCvxEtJfrfps&usqp=CAU"
        bag.style.width="35px"
        bag.style.height="35px"
        bag.style.padding="10px"
        // heart.style.backgroundColor="red"
        bag.style.borderRadius="50%";
        bag.addEventListener("click",function(){
          if(addToCartFunct(el.id)==true)
          {
              alert("Added to cart")
              // addToCart.innerText="Added to cart";
              console.log(el.id);
              cartLS.push(el);
              localStorage.setItem("cart-page",JSON.stringify(cartLS));
          }else{
              // addToCart.innerText="Added to cart";
              alert("Already present in cart")
          }
      })

        let img=document.createElement("img");
       
        img.src=el.image
        let start=img.src
        start=el.image;
        let hover=img.getAttribute("hover")
        hover=el.image1
        img.onmouseout=()=>{img.src=start;}
        img.onmouseover=()=>{img.src=hover;}

        
        let view=document.createElement("div");
        view.innerText="👁 Quick View"
        view.setAttribute("class","quick_view")
        view.addEventListener("click",function(){
          redirect(el);
        })

        let title=document.createElement("p");
        title.innerText=el.title;

        let price_div=document.createElement("div");
        price_div.setAttribute("id","price_div")
        let default_price=document.createElement("h4");
        default_price.innerText="₹ "+ el.default_price;
        default_price.style.textDecoration="line-through";
        default_price.style.color="gray";
        let price=document.createElement("h4");
        price.innerText="₹ "+ el.price
        price.style.color="crimson";

        price_div.append(default_price,price)
        div.append(sel,heart,bag,img,view,title, price_div)
        shop_items.append(div)
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
  export default append ;

//   let img = document.querySelector('img');
//   let start = img.src;
//   let hover = img.getAttribute('data-hover'); //specified in img tag

//   img.onmouseover = () => { img.src = hover; }
//   img.onmouseout = () => { img.src = start; } //to revert back to start