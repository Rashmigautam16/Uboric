



function append(jacksapprow){
    let shop_items=document.getElementById("shop_items");
    shop_items.innerHTML=null;
    jacksapprow.forEach(function(el){
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=el.img
        let start=img.src
        start=el.image;
       
        let hover=img.getAttribute("hover")
        hover=el.image1
        img.onmouseout=()=>{img.src=start;}
        img.onmouseover=()=>{img.src=hover;}
       
       
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
        div.append(img,title, price_div)
        shop_items.append(div)
    })
    
  }

  export default append 

//   let img = document.querySelector('img');
//   let start = img.src;
//   let hover = img.getAttribute('data-hover'); //specified in img tag

//   img.onmouseover = () => { img.src = hover; }
//   img.onmouseout = () => { img.src = start; } //to revert back to start