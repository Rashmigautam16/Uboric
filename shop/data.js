



function append(jacksapprow){
    let shop_items=document.getElementById("shop_items");
    shop_items.innerHTML=null;
    jacksapprow.forEach(function(el){
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let title=document.createElement("h4");
        title.innerText=el.title;
        let price=document.createElement("p");
        price.innerText="₹ "+ el.price
        div.append(img,title,price)
        shop_items.append(div)
    })
    
  }

  export default append 