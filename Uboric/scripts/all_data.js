

import append from "./append_data.js";
import {filterData,sort} from "./filter.js";

let s=document.getElementById("select_short");

let clothing=[
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/banarasi-silk-saree-collection-in-maroon/",
   image: "https://assets.panashindia.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/2/0/2077sr01-40a.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-05-05-at-5.55.06-PM-370x370.jpeg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25242",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25242",
   title: "Banarasi silk saree collection in maroon",
    default_price: "3299.00",
    price: "1649.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/banarasi-silk-saree-collection-in-pink/",
   image: "https://n4.sdlcdn.com/imgs/k/i/a/Sherine-Pink-Banarasi-Silk-Saree-SDL783172948-6-5e514.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-05-05-at-5.55.45-PM1-370x370.jpeg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25258",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25258",
   title: "Banarasi silk saree collection in pink",
    default_price: "3299.00",
    price: "1649.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/banarasi-silk-saree-collection-in-rama-green/",
   image: "https://clothise.com/wp-content/uploads/2021/09/Deep-Green-Zari-Woven-Banarasi-Silk-Saree-1.webp",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-05-05-at-5.54.28-PM2-370x370.jpeg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25227",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25227",
   title: "Banarasi silk saree collection in rama green",
    default_price: "3299.00",
    price: "1649.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/banarasi-silk-saree-collection-in-red-pink/",
   image: "https://www.suratwholesaleshop.com/images/500/data/2022y/January/29017/Traditional-Wear-Red-Weaving-Work-Banarasi-Silk-Saree-ISHA31-5.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-05-05-at-5.54.50-PM-370x370.jpeg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25241",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25241",
   title: "Banarasi silk saree collection in red/pink",
    default_price: "3299.00",
    price: "1649.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/beautiful-rich-pallu-jacquard-work-on-all-over-the-saree-in-red/",
   image: "https://cdn.shopify.com/s/files/1/0046/4506/0680/products/dark-blue-net-designer-lehenga-choli-nc14096b_800x.jpg?v=1583301952",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-05-03-at-7.25.26-PM-370x370.jpeg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25168",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25168",
   title: "Beautiful rich pallu & jacquard work...",
    default_price: "2580.00",
    price: "1290.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/designer-printed-lahenga-choli-in-black/",
   image: "https://i.etsystatic.com/24998233/r/il/cc8b56/3522721499/il_794xN.3522721499_iyeg.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-05-03-at-7.26.34-PM-370x370.jpeg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25184",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25184",
   title: "Designer printed lahenga choli",
    default_price: "5879.00",
    price: "2939.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/designer-printed-lahenga-choli-in-pink/",
   image: "https://www.pinkvilla.com/imageresize/sai_saree_main.jpg?width=752&t=pvorg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-05-03-at-7.27.20-PM-370x370.jpeg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25216",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25216",
   title: "Banarasi silk saree collection",
    default_price: "5879.00",
    price: "2939.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/designer-printed-lahenga-choli-in-pinkyellow/",
   image: "https://5.imimg.com/data5/SELLER/Default/2021/6/RG/OQ/UB/29174263/whatsapp-image-2021-06-05-at-4-02-45-pm-1--500x500.jpeg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-05-03-at-7.27.00-PM-370x370.jpeg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25202",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25202",
   title: "Designer printed lahenga choli in pink&yellow",
    default_price: "5879.00",
    price: "2939.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/designer-printed-lahenga-choli-in-sea-green/",
   image: "https://www.indianrani.com/media/catalog/product/cache/49a1046c74d53b164026c3cc8a9cdca2/b/s/bs2_1005_b_1_1.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-05-03-at-7.26.48-PM-370x370.jpeg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25185",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25185",
   title: "Designer printed lahenga choli in sea green",
    default_price: "5879.00",
    price: "2939.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/dulhan-lehenga-choli-wedding-lehenga-choli-in-black/",
   image: "https://www.wholesaletextile.in/product-img/Grey-Designer-Bridal-Lehenga-c1-1604644899.jpeg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-05-14-at-7.20.04-PM-370x370.jpeg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26326",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26326",
   title: "Dulhan lehenga choli, wedding lehenga choli...",
    default_price: "8999.00",
    price: "4499.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/dulhan-lehenga-choli-wedding-lehenga-choli-in-dark-green/",
   image: "https://cdn.shopify.com/s/files/1/0046/4506/0680/products/dark-blue-net-designer-lehenga-choli-nc14096b_800x.jpg?v=1583301952",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-05-14-at-7.20.03-PM-370x370.jpeg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26324",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26324",
   title: "Dulhan lehenga choli, wedding lehenga choli...",
    default_price: "8999.00",
    price: "4499.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/dulhan-lehenga-choli-wedding-lehenga-choli-in-green/",
   image: "https://cdn.shopify.com/s/files/1/1760/4649/products/designer-lehenga-soft-beige-designer-lehenga-silk-saree-online-31481164333249.jpg?v=1648618267",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-05-14-at-7.22.00-PM-370x370.jpeg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26328",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26328",
   title: "Dulhan lehenga choli, wedding lehenga choli...",
    default_price: "7799.00",
    price: "3899.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/dulhan-lehenga-choli-wedding-lehenga-choli-in-green-valvet/",
   image: "https://images.pexels.com/photos/13267023/pexels-photo-13267023.jpeg?auto=compress&cs=tinysrgb&w=400",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-05-14-at-7.19.22-PM-370x370.jpeg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26325",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26325",
   title: "Dulhan lehenga choli, wedding lehenga choli...",
    default_price: "6899.00",
    price: "3449.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/dulhan-lehenga-choli-wedding-lehenga-choli-in-l-pink/",
   image: "https://images.pexels.com/photos/13156202/pexels-photo-13156202.jpeg?auto=compress&cs=tinysrgb&w=600",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-05-14-at-7.20.57-PM1-370x370.jpeg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25522",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25522",
   title: "Dulhan lehenga choli, wedding lehenga choli...",
    default_price: "7199.00",
    price: "3599.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/dulhan-lehenga-choli-wedding-lehenga-choli-in-pink-2/",
   image: "https://images.pexels.com/photos/13159940/pexels-photo-13159940.jpeg?auto=compress&cs=tinysrgb&w=600",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-05-14-at-7.22.32-PM-370x370.jpeg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26342",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26342",
   title: "Dulhan lehenga choli, wedding lehenga choli...",
    default_price: "8699.00",
    price: "4349.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/dulhan-lehenga-choli-wedding-lehenga-choli-in-pink/",
   image: "https://images.pexels.com/photos/12762493/pexels-photo-12762493.jpeg?auto=compress&cs=tinysrgb&w=400",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-05-14-at-7.20.59-PM-370x370.jpeg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25523",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25523",
   title: "Dulhan lehenga choli, wedding lehenga choli...",
    default_price: "7199.00",
    price: "3599.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/dulhan-lehenga-choli-wedding-lehenga-choli-in-wine/",
   image: "https://images.pexels.com/photos/11726514/pexels-photo-11726514.jpeg?auto=compress&cs=tinysrgb&w=600",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-05-14-at-7.23.10-PM1-370x370.jpeg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26330",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26330",
   title: "Dulhan lehenga choli, wedding lehenga choli...",
    default_price: "8999.00",
    price: "4499.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/dulhan-lehenga-choli-wedding-lehenga-choli-in-yellow/",
   image: "https://images.pexels.com/photos/12737613/pexels-photo-12737613.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-05-14-at-7.21.28-PM1-370x370.jpeg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26327",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26327",
   title: "Dulhan lehenga choli, wedding lehenga choli...",
    default_price: "6899.00",
    price: "3449.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/dupatta-heavy-butterfly-net-in-blue/",
   image: "https://www.priyavastra.com/wp-content/uploads/2022/08/Blue-Designer-Embroidery-Sequins-Work-Lehenga-Choli-With-Butterfly-Net-Lace-Border-Dupatta-1.jpeg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-05-04-at-6.18.28-PM-370x370.jpeg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25226",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25226",
   title: "Dupatta heavy butterfly net in blue",
    default_price: "5999.00",
    price: "2999.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/fabric-hevay-sattin-zari-silk-in-black/",
   image: "http://cdn.shopify.com/s/files/1/0606/3803/6136/products/black-silk-satin-crushed-saree-with-heavy-border-YOYO-147-5425-Black_1.jpg?v=1645445640",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-05-03-at-7.27.34-PM-370x370.jpeg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25215",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25215",
   title: "Fabric hevay sattin zari silk in black",
    default_price: "4499.00",
    price: "2249.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/fancy-pallu-thread-sequnce-work-saree/",
   image: "https://5.imimg.com/data5/CO/OD/RO/SELLER-28280455/thread-jari-embroidery-with-sequence-work-saree-1000x1000.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-04-25-at-12.48.23-PM-1-370x370.jpeg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25158",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25158",
   title: "Fancy pallu thread & sequnce work saree",
    default_price: "5394.00",
    price: "2697.00"
  }
];
let id=1000;
for(let i=0;i<clothing.length;i++)
{
  clothing[i].quantity=1;
  clothing[i].id=id++;
}
console.log(clothing);
  localStorage.setItem("clothingData",JSON.stringify(clothing));
  

// document.getElementById("shop_category_5").addEventListener("click" ,()=>{
//   append(clothing)
// })


let electronics=[
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-bhh816-00-crimp-straighten-or-curl-with-the-single-tool-quickly-and-without-fear-of-heat-damage/",
    image: "https://cdn01.pharmeasy.in/dam/products_otc/S37499/philips-bhh816-00-crimp-straighten-or-curl-with-the-single-tool-2-1671743970.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/616bupYZyAL._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/product-category/electronics/?add_to_wishlist=25114",
    "button href": "https://www.uboric.com/product-category/electronics/?add-to-cart=25114",
    title: "Philips BHH816/00 Crimp, Straighten or Curl...",
    default_price: "4995.00",
    "onsale": "",
    price: "2939.00",
    "woocommerce-Price-currencySymbol 2": ""
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-bhs378-10-kerashine-straightener-pink/",
    image: "https://m.media-amazon.com/images/I/31Tw0kj55sL.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/61j4d3c3bLL._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/product-category/electronics/?add_to_wishlist=25095",
    "button href": "https://www.uboric.com/product-category/electronics/?add-to-cart=25095",
    title: "PHILIPS Bhs378/10 Kerashine Straightener...",
    default_price: "3695.00",
    "onsale": "Sale",
    price: "2839.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-bhs378-10-kerashine-straightener-pink-2/",
    image: "https://doiqgxrhp4iii.cloudfront.net/HP8310_64_11zon.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/61j4d3c3bLL._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/product-category/electronics/?add_to_wishlist=26311",
    "button href": "https://www.uboric.com/product-category/electronics/?add-to-cart=26311",
    title: "PHILIPS Bhs378/10 Kerashine Straightener...",
    default_price: "3695.00",
    "onsale": "Sale",
    price: "2839.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-body-groom-bg1024-battery-operated-body-groomer-black/",
    image: "https://m.media-amazon.com/images/I/51X7bxytwpL._SL1000_.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/51X7bxytwpL._SL1000_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/product-category/electronics/?add_to_wishlist=25094",
    "button href": "https://www.uboric.com/product-category/electronics/?add-to-cart=25094",
    title: "Philips Body Groom BG1024 Battery Operated...",
    default_price: "1495.00",
    "onsale": "Sale",
    price: "1364.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-body-groom-bg1024-battery-operated-body-groomer-black-2/",
    image: "https://d3bbb7hgr6ql2r.cloudfront.net/uploads/all/G4y8hwiU4Z43QPyjFFFTnLK4lMaSx84AEXPPU752.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/51X7bxytwpL._SL1000_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/product-category/electronics/?add_to_wishlist=26310",
    "button href": "https://www.uboric.com/product-category/electronics/?add-to-cart=26310",
    title: "Philips Body Groom BG1024 Battery Operated...",
    default_price: "1495.00",
    "onsale": "Sale",
    price: "1364.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-bt1230-15-skin-friendly-beard-trimmer-dura-power-technology-cordless-rechargeable-with-usb-charging-charging-indicator-travel-lock/",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeNxwWwsG6I1r8owAcP36oEhHxAWFY8t7mZw&usqp=CAU",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/21lHTisjt9L.jpg",
    "rz-loop_button href": "https://www.uboric.com/product-category/electronics/?add_to_wishlist=25090",
    "button href": "https://www.uboric.com/product-category/electronics/?add-to-cart=25090",
    title: "Philips BT1230/15 Skin-friendly Beard trimmer...",
    default_price: 895,
    "onsale": "Sale",
    price: 809,
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-bt1235-15-skin-friendly-beard-trimmer-dura-power-technology-cordless-rechargeable-with-usb-charging-charging-indicator-travel-lock/",
    image: "https://m.media-amazon.com/images/I/31ffVtQZvAL.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/31GUHMbWLcL-370x245.jpg",
    "rz-loop_button href": "https://www.uboric.com/product-category/electronics/?add_to_wishlist=25089",
    "button href": "https://www.uboric.com/product-category/electronics/?add-to-cart=25089",
    title: "Philips BT1235/15 Skin-friendly Beard trimmer...",
    default_price: "1195.00",
    "onsale": "Sale",
    price: "1029.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-bt3203-15-cordless-rechargeable-beard-trimmer-10-length-settings-45-min-run-time/",
    image: "https://m.media-amazon.com/images/I/51hC24pg9qL._SL1500_.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/61WWpJ323fL._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/product-category/electronics/?add_to_wishlist=25088",
    "button href": "https://www.uboric.com/product-category/electronics/?add-to-cart=25088",
    title: "Philips BT3203/15 cordless rechargeable Beard...",
    default_price: "1495.00",
    "onsale": "Sale",
    price: "1419.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-hair-dryer-bhc010-10/",
    image: "https://images.philips.com/is/image/philipsconsumer/8f7881d65e744dfea123ae77013d53e9",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/41bmVBPCCQL-370x286.jpg",
    "rz-loop_button href": "https://www.uboric.com/product-category/electronics/?add_to_wishlist=25099",
    "button href": "https://www.uboric.com/product-category/electronics/?add-to-cart=25099",
    title: "Philips Hair Dryer BHC010/10",
    default_price: "1495.00",
    "onsale": "Sale",
    price: "1225.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-hp8144-hair-dryer-violet/",
    image: "https://m.media-amazon.com/images/I/51RgsQbXEmL._SX679_.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/51kIDoP5SQL._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/product-category/electronics/?add_to_wishlist=25112",
    "button href": "https://www.uboric.com/product-category/electronics/?add-to-cart=25112",
    title: "PHILIPS HP8144 Hair Dryer (Violet)",
    default_price: 995,
    "onsale": "Sale",
    price: 945,
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-hp8643-56-hair-dryer-and-straightener-combo-miss-freshers-styling-kit-purple/",
    image: "https://www.luluhypermarket.in/medias/151758-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4MTI0NHxpbWFnZS9qcGVnfGgzOS9oMDAvODg0ODg3MjczNDc1MC8xNTE3NTgtMDEuanBnXzEyMDBXeDEyMDBIfGVmNTUwN2RhMGQyODRjYjYxMWYxYzM0YjllNTdhOWM3N2Y2ZThlZmQzZDQ5Y2JmNzg3ODM2YjRlMjMwOWE0Y2Q",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/51cxdRTGe6L._SL1066_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/product-category/electronics/?add_to_wishlist=25113",
    "button href": "https://www.uboric.com/product-category/electronics/?add-to-cart=25113",
    title: "Philips HP8643/56 hair dryer and straightener...",
    default_price: "2295.00",
    "onsale": "Sale",
    price: "1989.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-multi-grooming-kit-mg7707-15-12-in-1-face-head-and-body-all-in-one-trimmer-power-adapt-technology-for-precise-trimming-90-mins-run-time-with-quick-charge/",
    image: "https://m.media-amazon.com/images/I/61GfYsUf42L._SL1080_.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/617MMTlVnL._SL1080_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/product-category/electronics/?add_to_wishlist=25091",
    "button href": "https://www.uboric.com/product-category/electronics/?add-to-cart=25091",
    title: "Philips Multi Grooming Kit MG7707/15 12-in-1...",
    default_price: "3895.00",
    "onsale": "Sale",
    price: "3299.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-norelco-multigroom-all-in-one-series-3000-13-attachment-trimmer-mg3750/",
    image: "https://m.media-amazon.com/images/I/41oWvKmOgNL._SY355_.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/81TpMd5AnzL._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/product-category/electronics/?add_to_wishlist=25092",
    "button href": "https://www.uboric.com/product-category/electronics/?add-to-cart=25092",
    title: "Philips Norelco Multigroom All-In-One Series...",
    default_price: "11999.00",
    "onsale": "Sale",
    price: "4099.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-oneblade-qp2512-10-hybrid-booklet-blister-with-30-minutes-runtime/",
    image: "https://rukminim1.flixcart.com/image/416/416/koenl3k0/headphone/2/u/l/yuva-qor9-original-imag2vdnfwfd4gd8.jpeg?q=70",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/41LSzcg8vzL-370x281.jpg",
    "rz-loop_button href": "https://www.uboric.com/product-category/electronics/?add_to_wishlist=25093",
    "button href": "https://www.uboric.com/product-category/electronics/?add-to-cart=25093",
    title: "Philips OneBlade QP2512/10 HYBRID BOOKLET...",
    default_price: "1899.00",
    "onsale": "Sale",
    price: "1392.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/qor9-yuva-wireless-headphones-neckbands-with-magnetic-earbuds-advanced-bluetooth-5-0/",
    image: "https://qor9.in/wp-content/uploads/2021/02/1-min-1.png",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/51yGkkF2F9S._AC_SL1080_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/product-category/electronics/?add_to_wishlist=29842",
    "button href": "https://www.uboric.com/product-category/electronics/?add-to-cart=29842",
    title: "QOR9 Yuva Wireless Headphones Neckbands,...",
    default_price: "1299.00",
    "onsale": "Sale",
    price: 549,
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/type-c-sonicplus-111-magnet-wireless-bluetooth-earphone-with-mic/",
    image: "https://m.media-amazon.com/images/I/610ICFikIhL._SX679_.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/71o3YOFatmS._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/product-category/electronics/?add_to_wishlist=26939",
    "button href": "https://www.uboric.com/product-category/electronics/?add-to-cart=26939",
    title: "TYPE-C Sonicplus 111 Magnet  Wireless Bluetooth...",
    default_price: "1699.00",
    "onsale": "Sale",
    price: 699,
    "woocommerce-Price-currencySymbol 2": "₹"
  }
  // {
  //   "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/qor9-sonic-green-magnet-wireless-bluetooth-earphone-with-mic/",
  //   image: "https://www.uboric.com/wp-content/uploads/2022/08/SONIC_GREEN1_result-370x370.jpg",
  //   image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2021-02-25_19-28-01-2-370x370.jpg",
  //   "rz-loop_button href": "https://www.uboric.com/product-category/electronics/?add_to_wishlist=29636",
  //   "button href": "https://www.uboric.com/product-category/electronics/?add-to-cart=29636",
  //   title: "QOR9 SONIC GREEN Magnet  Wireless Bluetooth...",
  //   default_price: "1799.00",
  //   "onsale": "Sale",
  //   price: 899,
  //   "woocommerce-Price-currencySymbol 2": "₹"
  // },
  // {
  //   "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/qor9-sonic-red-magnet-wireless-bluetooth-earphone-with-mic-magnetic-bluetooth-headphones-with-mic/",
  //   image: "https://www.uboric.com/wp-content/uploads/2022/08/SONIC1_result-e1614411373440-370x370.jpg",
  //   image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2021-02-25_19-28-18-370x370.jpg",
  //   "rz-loop_button href": "https://www.uboric.com/product-category/electronics/?add_to_wishlist=29638",
  //   "button href": "https://www.uboric.com/product-category/electronics/?add-to-cart=29638",
  //   title: "QOR9 SONIC RED Magnet Wireless Bluetooth...",
  //   default_price: "1799.00",
  //   "onsale": "Sale",
  //   price: 899,
  //   "woocommerce-Price-currencySymbol 2": "₹"
  // }
];
id=1100;
for(let i=0;i<electronics.length;i++)
{
  electronics[i].quantity=1;
  electronics[i].id=id++;
}
console.log(electronics);
localStorage.setItem("electronicsData",JSON.stringify(electronics));



// append(electronics)

let carat=[
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-kada/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-25_21-23-45-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-25_21-23-45-370x370.jpg",
    "button href": "https://www.uboric.com/shop/?add-to-cart=231",
    title: "26 carat Elegant Jewellery kada",
    default_price: "3199.00",
    price: "1599.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-kada-2/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/6258292367530504306_121-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/6258292367530504306_121-370x370.jpg",
    "button href": "https://www.uboric.com/shop/?add-to-cart=231",
    title: "26 carat Elegant Jewellery kada",
    default_price: "16,799.00",
    price: "8399.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-necklace-3/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220529_164537_735-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220529_164537_735-370x370.jpg",
    "button href": "https://www.uboric.com/shop/?add-to-cart=231",
    title: "26 carat Elegant Jewellery Necklace",
    default_price: "6,999.00",
    price: "3499.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-necklace-4/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220425_121808_9051-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220425_121808_9051-370x370.jpg",
    "button href": "https://www.uboric.com/shop/?add-to-cart=231",
    title: "26 carat Elegant Jewellery Necklace",
    default_price: "11899.00",
    price: "5949.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-necklace-5/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220415_203042_344-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220415_203042_344-370x370.jpg",
    "button href": "https://www.uboric.com/shop/?add-to-cart=231",
    title: "26 carat Elegant Jewellery Necklace",
    default_price: "7299.00",
    price: "3649.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-necklace-6/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220417_152711_342-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220417_152711_342-370x370.jpg",
    "button href": "https://www.uboric.com/shop/?add-to-cart=231",
    title: "26 carat Elegant Jewellery Necklace",
    default_price: "15,299.00",
    price: "7649.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-necklace-8/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220217_203841_493_1-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220217_203841_493_1-370x370.jpg",
    "button href": "https://www.uboric.com/shop/?add-to-cart=231",
    title: "26 carat Elegant Jewellery Necklace",
    default_price: "36,099.00",
    price: "18049.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-necklace-9/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/InShot_20220122_172304218-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/InShot_20220122_172304218-370x370.jpg",
    "button href": "https://www.uboric.com/shop/?add-to-cart=231",
    title: "26 carat Elegant Jewellery Necklace",
    default_price: "8739.00",
    price: "4369.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-necklace-7/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220326_174123_349_1-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220326_174123_349_1-370x370.jpg",
    "button href": "https://www.uboric.com/shop/?add-to-cart=231",
    title: "26 carat Elegant Jewellery Necklace",
    default_price: "10999.00",
    price: "5499.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-bracelet/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220517_173135_289_1-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220517_173135_289_1-370x370.jpg",
    "button href": "https://www.uboric.com/shop/?add-to-cart=231",
    title: "26 carat Elegant Jewellery bracelet",
    default_price: "3599.00",
    price: "1799.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-golden-ring-all-later/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/png_20220328_105434_0000-370x370.png",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/png_20220328_105434_0000-370x370.png",
    "button href": "https://www.uboric.com/shop/?add-to-cart=231",
    title: "26 carat Elegant Jewellery Golden Ring all...",
    default_price: "2499.00",
    price: "1249.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/6260396514958487763_121-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/6260396514958487763_121-370x370.jpg",
    "button href": "https://www.uboric.com/shop/?add-to-cart=231",
    title: "26 carat Elegant Jewellery Necklace",
    default_price: "7499.00",
    price: "3749.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-necklace-2/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220326_174041_206_11-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220326_174041_206_11-370x370.jpg",
    "button href": "https://www.uboric.com/shop/?add-to-cart=231",
    title: "26 carat Elegant Jewellery Necklace",
    default_price: "10999.00",
    price: "5499.00"
  }
]

id=1200;
for(let i=0;i<carat.length;i++)
{
  carat[i].quantity=1;
  carat[i].id=id++;
}
console.log(carat);
localStorage.setItem("Carat", JSON.stringify(carat))
document.getElementById("shop_brand_1").addEventListener("click",()=>{
    append(carat);
    filterData(carat);
    s.addEventListener("change",function(){
      sort(carat);
  });
  
})


let danial=[
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/daniel-christian-olympia-black/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_2184_1800x1800_jpg_75-Copy-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=117369",
      "button href": "https://www.uboric.com/shop/?add-to-cart=117369",
      title: "Daniel Christian OLYMPIA (ROSE GOLD)",
      default_price: "21999.00",
      price: "1999.00",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_2184_1800x1800_jpg_75-Copy-370x370.jpg"
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/daniel-christian-the-millenary-black/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/583-6-2001-2_800x800-370x370.png",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25488",
      "button href": "https://www.uboric.com/shop/?add-to-cart=25488",
      title: "Daniel Christian The Millenary (black)",
      default_price: "12499.00",
      price: "6,990.00",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/226A6669_2_1799x1799-370x370.png"
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/daniel-christian-the-millenary-silver/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-25_11-30-00-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25489",
      "button href": "https://www.uboric.com/shop/?add-to-cart=25489",
      title: "Daniel Christian The Millenary (Silver)",
      default_price: "12499.00",
      price: "6,599.00",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-25_11-29-59-2-370x370.jpg"
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/daniel-christian-hailstone-black/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_2182_800x800_jpg-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=21962",
      "button href": "https://www.uboric.com/shop/?add-to-cart=21962",
      title: "Daniel Christian HAILSTONE (BLACK)",
      default_price: "24,999.00",
      price: "12499.00",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_2182_800x800_jpg-370x370.jpg"
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/daniel-christian-hailstone-silver/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_2183_800x800_jpg1-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=21965",
      "button href": "https://www.uboric.com/shop/?add-to-cart=21965",
      title: "Daniel Christian Hailstone (SILVER)",
      default_price: "24,999.00",
      price: "12499.00",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/DOL9773-370x370.jpg"
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/daniel-christian-olympia-gold/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_2187_800x800-370x370.png",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=21969",
      "button href": "https://www.uboric.com/shop/?add-to-cart=21969",
      title: "Daniel Christian OLYMPIA (Gold)",
      default_price: "21999.00",
      price: "1999.00",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/DOL9791-370x370.jpg"
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/daniel-christian-the-millenary-gold/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/583-6-2001-1_1800x1800_jpg_75-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=117376",
      "button href": "https://www.uboric.com/shop/?add-to-cart=117376",
      title: "Daniel Christian The Millenary (Gold)",
      default_price: "11649.00",
      price: "6,999.00",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/226A6524_2_1800x1800_jpg_75-370x370.jpg"
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/daniel-christian-the-millenary-rose-gold/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/Capture-20-370x370.png",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=117381",
      "button href": "https://www.uboric.com/shop/?add-to-cart=117381",
      title: "Daniel Christian The Millenary (rose Gold)",
      default_price: "11649.00",
      price: "6,999.00",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/226A6632_2_1800x1800_jpg_75-370x370.jpg"
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/daniel-christian-olympia-gunmetal-black/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_2186_800x800_jpg-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=21968",
      "button href": "https://www.uboric.com/shop/?add-to-cart=21968",
      title: "Daniel Christian OLYMPIA (Gunmetal Black)",
      default_price: "21999.00",
      price: "10999.00",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/DOL9786-370x370.jpg"
    }
  ]
  id=1300;
for(let i=0;i<danial.length;i++)
{
  danial[i].quantity=1;
  danial[i].id=id++;
}
console.log(danial);
  localStorage.setItem("danial", JSON.stringify(danial))


document.getElementById("shop_brand_2").addEventListener("click",()=>{
    append(danial)
    filterData(danial);
    s.addEventListener("change",function(){
      sort(danial);
  });
  
})


let finachi=[
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-100-combed-bio-wash-cotton-brief-four-colors/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/61uFAIVjljL._UL1500_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/51it7ZuoqBL-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23790",
      title: "FINACHI 100% Combed Bio Wash Cotton Brief...",
      default_price: "1499.00",
      price: 799
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-100-combed-bio-wash-cotton-trunk-four-colors/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/61rewJs4pFL._UL1500_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/515bQwHNcL-1-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23797",
      title: "FINACHI 100% Combed Bio Wash Cotton Trunk...",
      default_price: "1499.00",
      price: 849
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-ultra-soft-cotton-brief-pack-of-3-briefs/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/81OXF5PEo8L._UL1500_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/71BpsZOuOXL._UL1500_-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26501",
      title: "FINACHI Ultra Soft Cotton Brief (Pack of...",
      default_price: "1199.00",
      price: 599
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-ultra-soft-cotton-trunk-pack-of-3-trunks/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/81BoaL5NdHL._UL1500_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/61S5eEYU3ZL._UL1500_-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26494",
      title: "FINACHI Ultra Soft Cotton Trunk (Pack of...",
      default_price: "1299.00",
      price: 649
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-100-combed-bio-wash-cotton-trunk-ocean-blue-and-sea-green-color/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/61mqFWGAmQL._UL1500_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/515bQwHNcL-1-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23917",
      title: "FINACHI 100% Combed Bio Wash Cotton Trunk...",
      default_price: 830,
      price: 499
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-100-combed-bio-wash-cotton-trunk-black-and-brown-color/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/61rzcvHQDTL._UL1500_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/41LP5iYt6RL-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23871",
      title: "FINACHI 100% Combed Bio Wash Cotton Trunk...",
      default_price: 830,
      price: 499
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-ultra-soft-inner-boxer-black/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/617adqEx3rL._UL1500_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/61hDJvxH-SL._UL1500_-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26789",
      title: "FINACHI Ultra Soft Inner Boxer Black",
      default_price: 650,
      price: 325
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-ultra-soft-inner-boxer-grey/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/616tnRRJu7L._UL1500_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/61xdGEi9AWL._UL1500_-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26784",
      title: "FINACHI Ultra Soft Inner Boxer Grey",
      default_price: 650,
      price: 325
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-ultra-soft-modal-brief-pack-of-3-briefs-black-red-grey/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/518vKyF4xL._UL1000_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/31wnf3L8xIL-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26558",
      title: "FINACHI Ultra Soft Modal Brief (Pack of 3...",
      default_price: "1099.00",
      price: 549
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-ultra-soft-modal-brief-pack-of-3-briefs-blue-yellow-black/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/514CuQ8DsaL._UL1000_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/51pjm2mXbyL._UL1000_-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26550",
      title: "FINACHI Ultra Soft Modal Brief (Pack of 3...",
      default_price: "1199.00",
      price: 549
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-ultra-soft-modal-trunk-pack-of-4-trunks-royal-blue-yellow-red-purple/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/51O73PXl2SL._UL1000_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/313Judly22L-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26548",
      title: "FINACHI Ultra Soft Modal Trunk (Pack of 4...",
      default_price: "1299.00",
      price: 649
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-ultra-soft-modal-trunk-pack-of-4-trunks-pink-white-red-blue/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/51D0eXpOuNL._UL1000_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/517GVzu5QPL._UL1280_-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26546",
      title: "FINACHI Ultra Soft Modal Trunk (Pack of 4...",
      default_price: "1299.00",
      price: "1199.00"
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-ultra-soft-modal-brief-pack-of-4-briefs-pink-yellow-red-purple/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/513eZSzsvbL._UL1000_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/31TfHe6zG7L-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26554",
      title: "FINACHI Ultra Soft Modal Brief (Pack of 4...",
      default_price: "1299.00",
      price: 649
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-ultra-soft-modal-brief-pack-of-4-briefs-pink-white-red-blue/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/51c77FDveJL._UL1000_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/31KScgUlDVL-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26515",
      title: "FINACHI Ultra Soft Modal Brief (Pack of 4...",
      default_price: "1299.00",
      price: 649
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-ultra-soft-modal-trunk-pack-of-3-trunks-black-red-grey/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/51Zhp6D5w9L._UL1000_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/3136Q6ynsML-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26508",
      title: "FINACHI Ultra Soft Modal Trunk (Pack of 3...",
      default_price: "1099.00",
      price: 549
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-ultra-soft-modal-brief-pack-of-3-briefs-blue-white-black-l/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/51ZALmsvn7L._UL1000_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/61c7veehNL._UL1000_-2-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26562",
      title: "FINACHI Ultra Soft Modal Brief (Pack of 3...",
      default_price: "1099.00",
      price: 549
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-premium-cotton-t-shirts-combo-4/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/51mRO9X8L._UL1000_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/519oLttxcZL._UL1000_-2-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26539",
      title: "FINACHI Premium Cotton T-Shirts Combo",
      default_price: "1299.00",
      price: 990
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-premium-cotton-t-shirts-combo-3/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/51ckNZsLWIL._UL1000_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/41qdwDJY9qL._UL1000_-1-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26532",
      title: "FINACHI Premium Cotton T-Shirts Combo",
      default_price: "1299.00",
      price: 990
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-premium-cotton-t-shirts-combo/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/61BAZa0u9CL._UL1000_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/519oLttxcZL._UL1000_-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26518",
      title: "FINACHI Premium Cotton T-Shirts Combo",
      default_price: "1299.00",
      price: 990
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-premium-cotton-t-shirts-combo-2/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/51fMwjUaa1L._UL1000_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/41qdwDJY9qL._UL1000_-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26525",
      title: "FINACHI Premium Cotton T-Shirts Combo",
      default_price: "1299.00",
      price: 990
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-vest-combo/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/61-Qz6jP4QL._UL1000_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/51d3HJpuqwL._UL1000_-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26566",
      title: "FINACHI Vest Combo",
      default_price: "1149.00",
      price: 990
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-100-combed-bio-wash-cotton-brief-brown-and-ocean-blue-color/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/61r-h13dJqL._UL1500_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/51R8gMBidiL-1-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23826",
      title: "FINACHI 100% Combed Bio Wash Cotton Brief...",
      default_price: 799,
      price: 449
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-100-combed-bio-wash-cotton-brief-brown-and-sea-green-color/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/51rcWWWF7aL._UL1500_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/51ttBYWqRL-1-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23812",
      title: "FINACHI 100% Combed Bio Wash Cotton Brief...",
      default_price: 799,
      price: 449
    },
    {
      "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/finachi-100-combed-bio-wash-cotton-brief-brown-color-pack-of-2/",
      image: "https://www.uboric.com/wp-content/uploads/2022/08/51qURZm9tUL._UL1500_-370x370.jpg",
      image1: "https://www.uboric.com/wp-content/uploads/2022/08/51R8gMBidiL-1-370x370.jpg",
      "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23819",
      title: "FINACHI 100% Combed Bio Wash Cotton Brief...",
      default_price: 799,
      price: 449
    }
  ]
  id=1400;
for(let i=0;i<finachi.length;i++)
{
  finachi[i].quantity=1;
  finachi[i].id=id++;
}
console.log(finachi);
  localStorage.setItem("finachi", JSON.stringify(finachi))

document.getElementById("shop_brand_3").addEventListener("click",()=>{
    append(finachi);
    filterData(finachi);
    s.addEventListener("change",function(){
      sort(finachi);
  });
  
})


let  hepo=[
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/hepo-economic-drawer-lock-psc-10/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/g1-economic-lock-9287295-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/economic_lock_keys-370x370.jpg",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26938",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26938",
  title: "Hepo Economic Drawer Lock (Psc 10)",
    default_price: "1270.00",
    price: "1080.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/hepo-ss-350-mm-bathroom-towel-rail-psc-1/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/61Gs6IhbOkL._SL1200_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/51SSnuE1lL._SL1000_-370x370.jpg",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26921",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26921",
  title: "Hepo SS 350 mm Bathroom Towel Rail (Psc-1)",
    default_price: 852,
    price: 725,
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/hepo-ss-450-mm-bathroom-towel-rack/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/41fTr5CiUVS._SL1000_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/71QdjF36OSS._SL1500_-370x370.jpg",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26937",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26937",
  title: "Hepo SS 450 mm Bathroom Towel Rack",
    default_price: "2466.00",
    price: "2095.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/hepo-ss-accessory-shelf-psc-1/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/51WwygoTDPS._SL1000_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/41RjQPiWT7S._SL1000_-370x370.jpg",
    "onsale": "",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26916",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26916",
  title: "Hepo SS Accessory Shelf (Psc-1)",
    default_price: "1043.00",
    price: "999.00",
    "woocommerce-Price-currencySymbol 2": ""
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/hepo-ss-bathroom-clothes-hook-psc-1/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/51ShGPinoNS._SL1000_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/61EvIzVlWeS._SL1500_-1-370x370.jpg",
    "onsale": "",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26917",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26917",
  title: "Hepo SS Bathroom Clothes Hook (Psc-1)",
    default_price: "1138.00",
    price: "1099.00",
    "woocommerce-Price-currencySymbol 2": ""
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/hepo-ss-hand-towel-holder-psc-1/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/51UFlUo6eNS._SL1000_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/41Vv1sbhUgS._SL1000_-370x370.jpg",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26915",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26915",
  title: "Hepo SS Hand Towel Holder (Psc-1)",
    default_price: 568,
    price: 485,
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/hepo-ss-soap-shampoo-holder-psc-1/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/41Usq4gIzXS._SL1000_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/41YHZbPWo9S._SL1000_-370x370.jpg",
    "onsale": "",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26920",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26920",
  title: "Hepo SS Soap & Shampoo Holder (Psc-1)",
    default_price: 948,
    price: "999.00",
    "woocommerce-Price-currencySymbol 2": ""
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/hepo-ss-tissue-roll-holder-psc-1/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/61HRxg1mTQL._SL1200_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/51Jirqa6JQL._SL1000_-370x370.jpg",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26919",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26919",
  title: "Hepo SS Tissue Roll Holder (Psc-1)",
    default_price: "1138.00",
    price: 969,
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/hepo-ss-tooth-brush-holder-psc-1/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/51BaAbehDSS._SL1000_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/41AShpVODAS._SL1000_-370x370.jpg",
    "onsale": "",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26918",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26918",
  title: "Hepo SS Tooth Brush Holder (Psc-1)",
    default_price: 757,
    price: "800.00",
    "woocommerce-Price-currencySymbol 2": ""
  }
]
id=1500;
for(let i=0;i<hepo.length;i++)
{
  hepo[i].quantity=1;
  hepo[i].id=id++;
}
console.log(hepo);
localStorage.setItem("hepo", JSON.stringify(hepo))

document.getElementById("shop_brand_4").addEventListener("click",()=>{
      append(hepo);
      filterData(hepo);
      s.addEventListener("change",function(){
        sort(hepo);
    });
    
})



let jacksapprow=[
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/alfa-gold-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_15-17-52-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_15-17-53-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25410",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25410",
  title: "Alfa gold necklace",
    default_price: "2199.00",
    price: "1099.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/army-tag-pedant-rosegold-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_17-43-46-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_17-43-46-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25434",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25434",
  title: "Army tag pedant rosegold necklace",
    default_price: "2199.00",
    price: "1099.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/army-tag-pedant-silver-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_16-36-26-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_16-36-26-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25443",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25443",
  title: "Army tag pedant silver necklace",
    default_price: "2199.00",
    price: "1099.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/bender-rosegold-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_18-28-43-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_18-28-43-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25469",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25469",
  title: "Bender rosegold necklace",
    default_price: "2199.00",
    price: "1099.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/butterfly-rosegold-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_13-58-49-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_13-58-52-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25384",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25384",
  title: "Butterfly rosegold necklace",
    default_price: "1999.00",
    price: 999
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/cigar-rosegold-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_18-01-48-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_18-01-46-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25458",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25458",
  title: "Cigar rosegold necklace",
    default_price: "2199.00",
    price: "1099.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/cross-black-gold-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_18-44-10-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_18-44-10-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25425",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25425",
  title: "Cross black gold necklace",
    default_price: "2199.00",
    price: "1099.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/curly-diamond-gold-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_15-38-36-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_15-38-36-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25424",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25424",
  title: "Curly diamond gold necklace",
    default_price: "2199.00",
    price: "1099.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/curly-diamond-silver-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_16-15-37-2-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_16-15-37-2-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25433",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25433",
  title: "Curly diamond silver necklace",
    default_price: "2199.00",
    price: "1099.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/garce-rosegold-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_17-56-45-Copy-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_17-56-46-Copy-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25457",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25457",
  title: "Garce rosegold necklace",
    default_price: "2199.00",
    price: "1099.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/h-pedant-silver-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_13-48-47-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_13-48-47-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25386",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25386",
  title: "H- pedant silver necklace",
    default_price: "2199.00",
    price: "1099.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/hexagone-gold-pedant-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_14-37-01-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_14-37-00-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25398",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25398",
  title: "Hexagone gold pedant necklace",
    default_price: "2399.00",
    price: "1199.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/hexagone-rosegold-pedant-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_14-46-53-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_14-46-54-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25399",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25399",
  title: "Hexagone rosegold pedant necklace",
    default_price: "2399.00",
    price: "1199.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/hexagone-silver-pedant-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_14-30-17-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_14-30-19-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25385",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25385",
  title: "Hexagone silver pedant necklace",
    default_price: "2399.00",
    price: "1199.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/libra-silver-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_18-34-39-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_18-34-39-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25486",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25486",
  title: "Libra silver necklace",
    default_price: "2199.00",
    price: "1099.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/looper-gold-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_18-24-27-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_18-24-27-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25468",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25468",
  title: "Looper gold necklace",
    default_price: "2199.00",
    price: "1099.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/looper-rosegold-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_18-16-59-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_18-16-59-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25459",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25459",
  title: "Looper rosegold necklace",
    default_price: "2199.00",
    price: "1099.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/love-gold-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-12_14-19-37-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-12_14-19-42-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25325",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25325",
  title: "Love gold necklace",
    default_price: "1999.00",
    price: 999
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/luminous-rosegold-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-12_16-21-20-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-12_16-21-22-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25345",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25345",
  title: "Luminous rosegold necklace",
    default_price: "2199.00",
    price: "1099.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/luminous-silver-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_12-01-05-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_12-01-09-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25357",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25357",
  title: "Luminous silver necklace",
    default_price: "1999.00",
    price: 999
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/m-pedant-rosegold-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-12_15-44-36-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-12_15-44-35-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25342",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25342",
  title: "M- pedant rosegold necklace",
    default_price: "1999.00",
    price: 999
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/radiant-gold-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_12-22-38-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_12-22-39-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25369",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25369",
  title: "Radiant gold necklace",
    default_price: "1999.00",
    price: 999
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/radiant-rosegold-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_13-35-15-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-05-13_13-35-16-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25370",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25370",
  title: "Radiant rosegold necklace",
    default_price: "1999.00",
    price: 999
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/smiley-gold-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/DSC04968_1100x-370x370.png",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/DSC05116_1100x-370x370.png",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25308",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25308",
  title: "Smiley gold necklace",
    default_price: "1999.00",
    price: 999
  }
]
id=1600;
for(let i=0;i<jacksapprow.length;i++)
{
  jacksapprow[i].quantity=1;
  jacksapprow[i].id=id++;
}
console.log(jacksapprow);
localStorage.setItem("jacksapprow", JSON.stringify(jacksapprow))
document.getElementById("shop_brand_5").addEventListener("click",()=>{
   append(jacksapprow);
   filterData(jacksapprow);
   s.addEventListener("change",function(){
    sort(jacksapprow);
});

})

  
let mitali=[
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/ss-chilly-cutter-machine/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-29_12-35-48-370x370.jpg",
   image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-29_12-35-48-370x370.jpg",
    "button href": "https://www.uboric.com/shop/?add-to-cart=232",
    "add-to-cart-text": "Add to cart",
    title: "SS Chilly Cutter Machine",
    default_price: "13,800.00",
    price: "11699.00",
   
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/1-25-hp-ss-baby-portable-flour-mill/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-29_12-35-52-370x370.jpg",
   image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-29_12-35-52-370x370.jpg",
    "button href": "https://www.uboric.com/product/1-25-hp-ss-baby-portable-flour-mill/",
    "add-to-cart-text": "Select options",
    title: "1.25 HP SS Baby Portable Flour Mill",
    default_price: "11649.00",
    price: "12149.00",
    
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/gravry-machine-with-isi-motor-ss-model/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-29_12-35-50-2-370x370.jpg",
   image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-29_12-35-50-2-370x370.jpg",
    "button href": "https://www.uboric.com/product/gravry-machine-with-isi-motor-ss-model/",
    "add-to-cart-text": "Select options",
    title: "Gravry Machine With ISI Motor SS model",
    default_price: "13,429.00",
    price: "18359.00",
    
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/fully-automatic-pulverizer-with-isi-motor/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-29_12-35-49-2-370x370.jpg",
   image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-29_12-35-49-2-370x370.jpg",
    "button href": "https://www.uboric.com/product/fully-automatic-pulverizer-with-isi-motor/",
    "add-to-cart-text": "Select options",
    title: "Fully Automatic pulverizer with ISI motor",
    default_price: "14,279.00",
    price: "21930.00",
    
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/m-s-body-single-double-chamber-pulverizer/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-29_12-35-50-370x370.jpg",
   image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-29_12-35-50-370x370.jpg",
    "button href": "https://www.uboric.com/product/m-s-body-single-double-chamber-pulverizer/",
    "add-to-cart-text": "Select options",
    title: "M.S. body single & double chamber pulverizer",
    default_price: "14,280.00",
    price: "29155.00",
   
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/s-s-body-semi-pluverizer/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-29_12-35-47-370x370.jpg",
   image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-29_12-35-47-370x370.jpg",
    "button href": "https://www.uboric.com/product/s-s-body-semi-pluverizer/",
    "add-to-cart-text": "Select options",
    title: "S.S. Body semi pluverizer",
    default_price: "17,850.00",
    price: "59500.00",
    
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/vegetable-cutting-machine/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-29_12-35-49-370x370.jpg",
   image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-29_12-35-49-370x370.jpg",
    "button href": "https://www.uboric.com/shop/?add-to-cart=232",
    "add-to-cart-text": "Add to cart",
    title: "Vegetable Cutting Machine",
    default_price: "28,300.00",
    price: "23999.00",
   
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/m-s-body-2-in-1-pulverizer-with-isi-motor/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-29_12-35-51-370x370.jpg",
   image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-29_12-35-51-370x370.jpg",
    "button href": "https://www.uboric.com/shop/?add-to-cart=232",
    "add-to-cart-text": "Add to cart",
    title: "M.S. body 2 in 1 pulverizer with ISI motor",
    default_price: "32,600.00",
    price: "27699.00",
   
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/7-5hp-ss-pack-body-2-in-1-pulverizer/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-29_12-35-52-2-370x370.jpg",
   image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-29_12-35-52-2-370x370.jpg",
    "button href": "https://www.uboric.com/shop/?add-to-cart=232",
    "add-to-cart-text": "Add to cart",
    title: "7.5HP SS Pack Body 2 In 1 Pulverizer",
    default_price: "115,000.00",
    price: "97750.00",
   
  }
]
document.getElementById("shop_brand_6").addEventListener("click",()=>{
  append(mitali);
  filterData(mitali);
  s.addEventListener("change",function(){
    sort(mitali);
});

})
id=1700;
for(let i=0;i<mitali.length;i++)
{
  mitali[i].quantity=1;
  mitali[i].id=id++;
}
console.log(mitali);
localStorage.setItem("mitali", JSON.stringify(mitali))


let philips=[
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-bhh816-00-crimp-straighten-or-curl-with-the-single-tool-quickly-and-without-fear-of-heat-damage/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/51CLcJ8pTRL._SL1500_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/616bupYZyAL._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25114",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25114",
    title: "Philips BHH816/00 Crimp, Straighten or Curl...",
    default_price: "4995.00",
    "onsale": "",
    price: "1999.00",
    "woocommerce-Price-currencySymbol 2": ""
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-bhs378-10-kerashine-straightener-pink/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/31Tw0kj55sL-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/61j4d3c3bLL._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25095",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25095",
    title: "PHILIPS Bhs378/10 Kerashine Straightener...",
    default_price: "3695.00",
    "onsale": "Sale",
    price: "2839.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-bhs378-10-kerashine-straightener-pink-2/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/31Tw0kj55sL-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/61j4d3c3bLL._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26311",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26311",
    title: "PHILIPS Bhs378/10 Kerashine Straightener...",
    default_price: "3695.00",
    "onsale": "Sale",
    price: "2839.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-bhs393-40-straightener-with-silkprotect-technology-straighten-curl-suitable-for-all-hair-types-lavender/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/61jWimZTcSS._SL1500_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/61HvKuwnSS._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25097",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25097",
    title: "PHILIPS BHS393/40 Straightener with SilkProtect...",
    default_price: "1845.00",
    "onsale": "Sale",
    price: "1589.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-bhs397-40-kerashine-titanium-straightener-with-silkprotect-technology-straighten-curl-with-instant-shine/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/61b1cTF68dS._SL1500_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/61veEJo1R7S._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25096",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25096",
    title: "PHILIPS BHS397/40 Kerashine Titanium Straightener...",
    default_price: "2495.00",
    "onsale": "Sale",
    price: "2119.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-body-groom-bg1024-battery-operated-body-groomer-black/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/51oCS5ypHOL._SL1000_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/51X7bxytwpL._SL1000_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25094",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25094",
    title: "Philips Body Groom BG1024 Battery Operated...",
    default_price: "1495.00",
    "onsale": "Sale",
    price: "1364.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-body-groom-bg1024-battery-operated-body-groomer-black-2/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/51oCS5ypHOL._SL1000_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/51X7bxytwpL._SL1000_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26310",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26310",
    title: "Philips Body Groom BG1024 Battery Operated...",
    default_price: "1495.00",
    "onsale": "Sale",
    price: "1364.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-bt1230-15-skin-friendly-beard-trimmer-dura-power-technology-cordless-rechargeable-with-usb-charging-charging-indicator-travel-lock/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/21pDA9xr5JL.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/21lHTisjt9L.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25090",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25090",
    title: "Philips BT1230/15 Skin-friendly Beard trimmer...",
    default_price: 895,
    "onsale": "Sale",
    price: 809,
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-bt1235-15-skin-friendly-beard-trimmer-dura-power-technology-cordless-rechargeable-with-usb-charging-charging-indicator-travel-lock/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/21S9ZpGp6tL.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/31GUHMbWLcL-370x245.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25089",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25089",
    title: "Philips BT1235/15 Skin-friendly Beard trimmer...",
    default_price: "1195.00",
    "onsale": "Sale",
    price: "1029.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-bt3203-15-cordless-rechargeable-beard-trimmer-10-length-settings-45-min-run-time/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/51hC24pg9qL._SL1500_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/61WWpJ323fL._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25088",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25088",
    title: "Philips BT3203/15 cordless rechargeable Beard...",
    default_price: "1495.00",
    "onsale": "Sale",
    price: "1419.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-bt3203-15-cordless-rechargeable-beard-trimmer-10-length-settings-45-min-run-time-2/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/51hC24pg9qL._SL1500_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/61WWpJ323fL._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26309",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26309",
    title: "Philips BT3203/15 cordless rechargeable Beard...",
    default_price: "1495.00",
    "onsale": "Sale",
    price: "1419.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-bt3221-15-corded-90-min-run-time/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/617WV3K81EL._SL1500_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/61VglyKksNL._SL1000_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25087",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25087",
    title: "Philips BT3221/15 corded & cordless...",
    default_price: "2329.00",
    "onsale": "Sale",
    price: "2149.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-hair-dryer-bhc010-10/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/21fzzG8ATvL-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/41bmVBPCCQL-370x286.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25099",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25099",
    title: "Philips Hair Dryer BHC010/10",
    default_price: "1495.00",
    "onsale": "Sale",
    price: "1225.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-hp-8303-06-hair-straightener/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/61Tb9AiGN1L._SL1500_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/61Tb9AiGN1L._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25098",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25098",
    title: "Philips Hp 8303/06 Hair Straightener",
    default_price: "1295.00",
    "onsale": "Sale",
    price: "1169.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-hp-8303-06-hair-straightener-2/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/61Tb9AiGN1L._SL1500_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/61Tb9AiGN1L._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26312",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26312",
    title: "Philips Hp 8303/06 Hair Straightener",
    default_price: "1295.00",
    "onsale": "Sale",
    price: "1169.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-hp8144-hair-dryer-violet/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/51RgsQbXEmL._SL1500_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/51kIDoP5SQL._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25112",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25112",
    title: "PHILIPS HP8144 Hair Dryer (Violet)",
    default_price: 995,
    "onsale": "Sale",
    price: 945,
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-hp8643-56-hair-dryer-and-straightener-combo-miss-freshers-styling-kit-purple/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/41g4GP2nF1L._SL1066_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/51cxdRTGe6L._SL1066_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25113",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25113",
    title: "Philips HP8643/56 hair dryer and straightener...",
    default_price: "2295.00",
    "onsale": "Sale",
    price: "1989.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-multi-grooming-kit-mg7707-15-12-in-1-face-head-and-body-all-in-one-trimmer-power-adapt-technology-for-precise-trimming-90-mins-run-time-with-quick-charge/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/51cgb3TAomL._SL1080_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/617MMTlVnL._SL1080_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25091",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25091",
    title: "Philips Multi Grooming Kit MG7707/15, 12-in-1,...",
    default_price: "3895.00",
    "onsale": "Sale",
    price: "3299.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-norelco-multigroom-all-in-one-series-3000-13-attachment-trimmer-mg3750/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/91qmPJKT87L._SL1500_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/81TpMd5AnzL._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25092",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25092",
    title: "Philips Norelco Multigroom All-In-One Series...",
    default_price: "11999.00",
    "onsale": "Sale",
    price: "4099.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-oneblade-qp2512-10-hybrid-booklet-blister-with-30-minutes-runtime/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/51gBGz4a8UL._SL1500_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/41LSzcg8vzL-370x281.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25093",
    "button href": "https://www.uboric.com/shop/?add-to-cart=25093",
    title: "Philips OneBlade QP2512/10 HYBRID BOOKLET...",
    default_price: "1899.00",
    "onsale": "Sale",
    price: "1392.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/type-c-sonicplus-111-magnet-wireless-bluetooth-earphone-with-mic/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/519bIfsYsYS._SL1500_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/71o3YOFatmS._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26939",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26939",
    title: "TYPE-C Sonicplus 111 Magnet  Wireless Bluetooth...",
    default_price: "1699.00",
    "onsale": "Sale",
    price: 699,
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/hand-blender/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/1-23-370x370.png",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/2-2-1-370x370.png",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29907",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29907",
    title: "Hand blender",
    default_price: "2195.00",
    "onsale": "Sale",
    price: "1975.50",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/mixer-grinder-hl7699-00/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/2-3-370x370.png",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/4-3-370x370.png",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29879",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29879",
    title: "Mixer Grinder HL7699/00",
    default_price: "5695.00",
    "onsale": "Sale",
    price: "4799.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/philips-ac1217-20-air-purifier-white/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/1-77-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/2-61-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29947",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29947",
    title: "Philips AC1217/20 Air Purifier (White)",
    default_price: "12995.00",
    "onsale": "Sale",
    price: "10950.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  }
]
id=1800;
for(let i=0;i<philips.length;i++)
{
  philips[i].quantity=1;
  philips[i].id=id++;
}
console.log(philips);
localStorage.setItem("mitali", JSON.stringify(mitali))
document.getElementById("shop_brand_7").addEventListener("click",()=>{
  append(philips);
  filterData(philips);
  s.addEventListener("change",function(){
    sort(philips);
});

})



let piirona=[
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/mint-green-anarkali-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/071-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/072-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=25044",
    title: "mint green anarkali set",
    default_price: "6,719.00",
    price: "5599.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/2-piece-jacket-dress-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/181-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/182-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=24198",
    title: "2 piece jacket dress set",
    default_price: "3359.00",
    price: "2799.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/aquamarine-cotton-suit-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/101-1-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/103-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=24037",
    title: "aquamarine cotton suit set",
    default_price: "3479.00",
    price: "2899.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/bandhej-dhoti-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/456-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/457-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=24873",
    title: "bandhej dhoti set",
    default_price: "3479.00",
    price: "2899.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/berry-blue-cotton-suit-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/216-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/217-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=24324",
    title: "berry blue cotton suit set",
    default_price: "3119.00",
    price: "2599.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/black-crown-sharara-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/415-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/416-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=24814",
    title: "black crown sharara set",
    default_price: "4319.00",
    price: "3599.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/black-polka-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/320-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/321-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=24529",
    title: "black polka set",
    default_price: "2399.00",
    price: "1999.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/blue-anchor-cotton-suit-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/225-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/226-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=24326",
    title: "blue anchor cotton suit set",
    default_price: "2879.00",
    price: "2399.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/bubblegum-suit-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/053-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/054-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23943",
    title: "bubblegum suit set",
    default_price: "3599.00",
    price: "2999.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/buff-orange-cotton-suit-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/272-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/273-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=24436",
    title: "Buff Orange Cotton Suit Set",
    default_price: "3599.00",
    price: "2999.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/bumblee-cotton-anarkli-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/154-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/155-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=24136",
    title: "bumblee cotton anarkli set",
    default_price: "5519.00",
    price: "4599.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/calico-print-drape-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/451-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/452-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=24872",
    title: "calico print drape set",
    default_price: "4199.00",
    price: "3499.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/chanterelle-beige-kurti-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/365-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/366-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=24661",
    title: "chanterelle beige kurti set",
    default_price: "3599.00",
    price: "2999.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/charcoal-black-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/433-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/434-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=24825",
    title: "charcoal black set",
    default_price: "3479.00",
    price: "2899.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/cherry-red-suit-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/058-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/059-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23944",
    title: "cherry red suit set",
    default_price: "3359.00",
    price: "2799.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/chevron-kurti-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/316-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/317-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=24528",
    title: "chevron kurti set",
    default_price: "2399.00",
    price: "1999.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/classy-black-lehenga-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/483-2-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/484-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=24961",
    title: "classy black lehenga set",
    default_price: "5519.00",
    price: "4599.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/cold-shoulder-kurti-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/360-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/361-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=24660",
    title: "cold shoulder kurti set",
    default_price: "2879.00",
    price: "2399.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/corn-flower-blue-cotton-suit-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/208-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/209-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=24298",
    title: "corn flower blue cotton suit set",
    default_price: "2879.00",
    price: "2399.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/corn-yellow-suit-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/204-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/205-363x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=24258",
    title: "corn yellow suit set",
    default_price: "3239.00",
    price: "2699.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/cotton-jet-black-dress/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/408-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/409-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=24766",
    title: "cotton jet black dress",
    default_price: "2039.00",
    price: "1699.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/crimson-anarkali-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/355-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/356-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=24633",
    title: "crimson anarkali set",
    default_price: "4199.00",
    price: "3499.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/crimson-halter-sharara-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/446-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/447-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=24871",
    title: "crimson halter sharara set",
    default_price: "3479.00",
    price: "2899.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/damask-suit-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/310-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/311-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=24519",
    title: "damask suit set",
    default_price: "3239.00",
    price: "2699.00"
  }
]
id=1900;
for(let i=0;i<piirona.length;i++)
{
  piirona[i].quantity=1;
  piirona[i].id=id++;
}
console.log(piirona);
localStorage.setItem("piirona", JSON.stringify(piirona))
document.getElementById("shop_brand_8").addEventListener("click",()=>{
  append(piirona)
  filterData(piirona);
  s.addEventListener("change",function(){
    sort(piirona);
});
})




document.getElementById("shop_category_1").addEventListener("click",()=>{
  append(clothing);
  filterData(clothing);
  s.addEventListener("change",function(){
    sort(clothing);
});

})


document.getElementById("shop_category_3").addEventListener("click",()=>{
  append(hepo);
  filterData(hepo);
  s.addEventListener("change",function(){
    sort(hepo);
});

})


document.getElementById("shop_category_4").addEventListener("click",()=>{
  append(philips);
  filterData(philips);
  s.addEventListener("change",function(){
    sort(philips);
});

})


document.getElementById("shop_category_5").addEventListener("click",()=>{
  append(piirona)
  filterData(piirona);
  s.addEventListener("change",function(){
    sort(piirona);
  });
})


document.getElementById("shop_category_6").addEventListener("click",()=>{
  append(danial);
  filterData(danial);
  s.addEventListener("change",function(){
    sort(danial);
});
})


let women=[
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-kada/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-25_21-23-45-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23116",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23116",
    title: "26 carat Elegant Jewellery kada",
    default_price: "3199.00",
    price: "1599.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-07-25_21-23-45-370x370.jpg"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-kada-2/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/6258292367530504306_121-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23117",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23117",
    title: "26 carat Elegant Jewellery kada",
    default_price: "16,799.00",
    price: "8399.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/6258292367530504306_121-370x370.jpg"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-necklace-3/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220529_164537_735-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23119",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23119",
    title: "26 carat Elegant Jewellery Necklace",
    default_price: "6,999.00",
    price: "3499.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220529_164537_735-370x370.jpg"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-necklace-4/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220425_121808_9051-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23120",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23120",
    title: "26 carat Elegant Jewellery Necklace",
    default_price: "11899.00",
    price: "5949.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220425_121808_9051-370x370.jpg"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-necklace-5/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220415_203042_344-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23121",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23121",
    title: "26 carat Elegant Jewellery Necklace",
    default_price: "7299.00",
    price: "3649.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220415_203042_344-370x370.jpg"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-necklace-6/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220417_152711_342-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23122",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23122",
    title: "26 carat Elegant Jewellery Necklace",
    default_price: "15,299.00",
    price: "7649.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220417_152711_342-370x370.jpg"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-necklace-8/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220217_203841_493_1-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23124",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23124",
    title: "26 carat Elegant Jewellery Necklace",
    default_price: "36,099.00",
    price: "18049.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220217_203841_493_1-370x370.jpg"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-necklace-9/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/InShot_20220122_172304218-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23125",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23125",
    title: "26 carat Elegant Jewellery Necklace",
    default_price: "8739.00",
    price: "4369.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/InShot_20220122_172304218-370x370.jpg"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-necklace-7/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220326_174123_349_1-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23123",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23123",
    title: "26 carat Elegant Jewellery Necklace",
    default_price: "10999.00",
    price: "5499.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220326_174123_349_1-370x370.jpg"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-bracelet/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220517_173135_289_1-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23151",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23151",
    title: "26 carat Elegant Jewellery bracelet",
    default_price: "3599.00",
    price: "1799.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220517_173135_289_1-370x370.jpg"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-golden-ring-all-later/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/png_20220328_105434_0000-370x370.png",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23152",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23152",
    title: "26 carat Elegant Jewellery Golden Ring all...",
    default_price: "2499.00",
    price: "1249.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/png_20220328_105434_0000-370x370.png"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-necklace/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/6260396514958487763_121-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23115",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23115",
    title: "26 carat Elegant Jewellery Necklace",
    default_price: "7499.00",
    price: "3749.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/6260396514958487763_121-370x370.jpg"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/26-carat-elegant-jewellery-necklace-2/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220326_174041_206_11-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23118",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23118",
    title: "26 carat Elegant Jewellery Necklace",
    default_price: "10999.00",
    price: "5499.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/IMG_20220326_174041_206_11-370x370.jpg"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/aafreen-chain-elegant-jewellery-style-773/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/27041_jpg-370x370.png",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23163",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23163",
    title: "Aafreen chain  Elegant Jewellery (style 773)",
    default_price: "14,399.00",
    price: "7199.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/9212_jpg-370x370.png"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/aafreen-chain-elegant-jewellery-style-776/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/29013_jpg_75-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23186",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23186",
    title: "Aafreen chain Elegant Jewellery (style 776)",
    default_price: "17,599.00",
    price: "8799.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/26056_jpg_75-370x370.jpg"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/aafreen-chain-elegant-jewellery-style-780/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/85100_jpg-370x370.png",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23159",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23159",
    title: "Aafreen chain Elegant Jewellery (style 780)",
    default_price: "8599.00",
    price: "4299.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/51786_jpg-370x370.png"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/aafreen-chain-elegant-jewellery-style-969/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/93431_jpg_75-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23197",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23197",
    title: "Aafreen chain Elegant Jewellery (style 969)",
    default_price: "8939.00",
    price: "4469.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/71316_jpg_75-370x370.jpg"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/aafreen-chain-elegant-jewellery-style-970/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/15978_jpg_75-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23196",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23196",
    title: "Aafreen chain Elegant Jewellery (style 970)",
    default_price: "20799.00",
    price: "10399.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/87959_jpg_75-370x370.jpg"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/charm-chain-elegant-jewellery-style-1015/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/21902_png_75-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23209",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23209",
    title: "Charm chain Elegant Jewellery (style 1015)",
    default_price: "2199.00",
    price: "1099.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/17360_png_75-370x370.jpg"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/charm-chain-elegant-jewellery-style-1305/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/89088_png_75-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23208",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23208",
    title: "Charm chain Elegant Jewellery (style 1305)",
    default_price: "2399.00",
    price: "1199.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/63141_png_75-370x370.jpg"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/charm-chain-elegant-jewellery-style-1427/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/59961_png_75-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23212",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23212",
    title: "Charm chain Elegant Jewellery (style 1427)",
    default_price: "3099.00",
    price: "1549.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/20504_png_75-370x370.jpg"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/charm-chain-elegant-jewellery-style-1428/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/29689-370x370.png",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23210",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23210",
    title: "Charm chain Elegant Jewellery (style 1428)",
    default_price: "3299.00",
    price: "1649.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/34928-370x370.png"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/charm-chain-elegant-jewellery-style-1429/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/81176_png_75-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23211",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23211",
    title: "Charm chain Elegant Jewellery (style 1429)",
    default_price: "1999.00",
    price: 999,
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/92103_png_75-370x370.jpg"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/charm-chain-elegant-jewellery-style-1430/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/30137_png_75-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=23264",
    "button href": "https://www.uboric.com/shop/?add-to-cart=23264",
    title: "Charm chain Elegant Jewellery (style 1430)",
    default_price: "3799.00",
    price: "1899.00",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/6123_png_75-370x370.jpg"
  }
]
id=2000;
for(let i=0;i<women.length;i++)
{
  women[i].quantity=1;
  women[i].id=id++;
}
console.log(women);
localStorage.setItem("women", JSON.stringify(women))
document.getElementById("shop_category_7").addEventListener("click",()=>{
  append(women);
  filterData(women);
  s.addEventListener("change",function(){
    sort(women);
});
})


let health=[
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/perfect-ion-dayjoy-ionizer/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/perfect-ion-370x370.jpeg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-06-30_11-57-29-1-370x370.jpg",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26455",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26455",
    title: "PERFECT-ION Dayjoy Ionizer",
    default_price: "34,999.00",
    price: "17999.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/10-pcs-vivanion-herbal-organic-all-natural-sanitary-napkins-anion-with-herbal/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/8904177012014_result-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/8904177012014_5_result-370x370.jpg",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29760",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29760",
    title: "10 pcs Vivanion Herbal, Organic & All...",
    default_price: 399,
    price: 199,
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/10-pcs-pack-of-2-vivanion-herbal-organic-all-natural-sanitary-napkins-anion-with-herbal/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/8904177012014_7_result-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/8904177012014_5_result-370x370.jpg",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29761",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29761",
    title: "10 pcs pack of 2 Vivanion Herbal, Organic...",
    default_price: 699,
    price: 349,
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/10-pcs-pack-of-3-vivanion-herbal-organic-all-natural-sanitary-napkins-anion-with-herbal/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/vivanion_-_3p_result-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/8904177012014_5_result-370x370.jpg",
    "onsale": "",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29762",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29762",
    title: "10 pcs pack of 3 Vivanion Herbal, Organic...",
    default_price: 999,
    price: "500",
    "woocommerce-Price-currencySymbol 2": ""
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/10-pcs-pack-of-5-vivanion-herbal-organic-all-natural-sanitary-napkins-anion-with-herbal/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/vivanion_5p_result-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/8904177012014_5_result-370x370.jpg",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29763",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29763",
    title: "10 pcs (pack of 5 )Vivanion Herbal, Organic...",
    default_price: "1999.00",
    price: 949,
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/10-pcspack-of-10-vivanion-herbal-organic-all-natural-sanitary-napkins-anion-with-herbal-copy/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/61eH6hdJjXL._SL1000__result-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/8904177012014_5_result-370x370.jpg",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29764",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29764",
    title: "10 pcs(PACK OF 10) Vivanion Herbal, Organic...",
    default_price: "3999.00",
    price: "1899.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/day-joy-asthprash-improves-lung-function-respiratory-performance/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/81UV5oidWoL._SL1500_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/71w73OT38ZL._SL1500_-370x370.jpg",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29002",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29002",
    title: "Day Joy Asthprash Improves Lung Function...",
    default_price: "3999.00",
    price: "1599.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/day-joy-adila-forte-60-tablets/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/FORTE011-370x370.jpeg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/images.png",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29032",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29032",
    title: "DAY JOY ADILA FORTE (60 TABLETS)",
    default_price: "3999.00",
    price: "2999.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/day-joy-rich-berry-juice-1-ltr/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/Richberries-370x370.png",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/berries-370x370.jpg",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29004",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29004",
    title: "DAY JOY RICH BERRY JUICE (1 LTR.)",
    default_price: "4999.00",
    price: "2249.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/day-joy-seabuckthron-juice-1-ltr/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/Buckthorn-370x370.png",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/seabuckthorn-370x370.jpg",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29003",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29003",
    title: "DAY JOY SEABUCKTHRON JUICE (1 LTR.)",
    default_price: "4999.00",
    price: "2249.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/day-joy-adila-forte-30-tab/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/FORTE1-370x370.jpeg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/images.png",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29031",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29031",
    title: "DAY JOY ADILA FORTE (30 TAB)",
    default_price: "1999.00",
    price: "1499.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/adicardial-120-tablets/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/Adicardial-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/Adicardial-370x370.jpg",
    "onsale": "",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29275",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29275",
    title: "ADICARDIAL 120 TABLETS",
    default_price: "2999.00",
    price: "",
    "woocommerce-Price-currencySymbol 2": ""
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/day-joy-adilipo-60-tablets/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/download-29.png-co-370x370.png",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/images.png",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29006",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29006",
    title: "DAY JOY ADILIPO (60 TABLETS)",
    default_price: "4999.00",
    price: "2249.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/day-joy-adilipo-120-tablets/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/download-29.png-co-370x370.png",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/images.png",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29009",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29009",
    title: "DAY JOY ADILIPO (120 TABLETS)",
    default_price: "6,999.00",
    price: "3149.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/day-joy-di-beat-60-tab/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/TD011-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/images.png",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29034",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29034",
    title: "DAY JOY DI-BEAT (60 TAB)",
    default_price: "1799.00",
    price: "1079.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/day-joy-orthofix-60-tab/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/ccc502e7-5390-4fc2-b3af-ee6c5a2a8a3b-370x370.jpg",
    image1: "",
    "onsale": "",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29042",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29042",
    title: "DAY JOY ORTHOFIX (60 TAB)",
    default_price: "1799.00",
    price: "",
    "woocommerce-Price-currencySymbol 2": ""
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/day-joy-adicardial-syrup-500ml/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/ADI0011-e1600926097743-370x370.jpeg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/images.png",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29030",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29030",
    title: "DAY JOY ADICARDIAL SYRUP (500ML)",
    default_price: "1999.00",
    price: "1259.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/day-joy-n-astheal-60-tablets/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/download-31.png-co-370x370.png",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/N-Astheal-Tablet-Leaflet_N-ASTHEAL-370x230.png",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29005",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29005",
    title: "DAY JOY N-ASTHEAL (60 TABLETS)",
    default_price: "4999.00",
    price: "2249.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/day-joy-gas-o-free-200ml/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2020-09-24_12-42-55-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2020-09-24_12-42-55-370x370.jpg",
    "onsale": "",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29035",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29035",
    title: "DAY JOY GAS-O-FREE (200ML)",
    default_price: "1499.00",
    price: "",
    "woocommerce-Price-currencySymbol 2": ""
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/day-joy-gas-o-free-500ml/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/GAS5001-370x370.jpeg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/GAS5001-370x370.jpeg",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29036",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29036",
    title: "DAY JOY GAS-O-FREE (500ML)",
    default_price: "2299.00",
    price: "1349.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/day-joy-liv-ease-200ml/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2020-09-24_12-43-13-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2020-09-24_12-43-13-370x370.jpg",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29040",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29040",
    title: "DAY JOY LIV-EASE (200ML)",
    default_price: "1499.00",
    price: 629,
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/day-joy-ayush-kwath-120-tablets/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/photo_2020-09-24_12-43-08-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/images.png",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29033",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29033",
    title: "DAY JOY AYUSH KWATH (120 TABLETS)",
    default_price: 999,
    price: 539,
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/day-joy-liv-ease-500ml/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/liv5001-370x370.jpeg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/liv5001-370x370.jpeg",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29041",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29041",
    title: "DAY JOY LIV-EASE (500ML)",
    default_price: "2299.00",
    price: "1349.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/day-joy-n-astheal-120-tablets/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/download-31.png-co-370x370.png",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/N-Astheal-Tablet-Leaflet_N-ASTHEAL-370x230.png",
    "onsale": "Sale",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29010",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29010",
    title: "DAY JOY N-ASTHEAL (120 TABLETS)",
    default_price: "6,999.00",
    price: "3149.00",
    "woocommerce-Price-currencySymbol 2": "₹"
  }
]
id=2100;
for(let i=0;i<health.length;i++)
{
  health[i].quantity=1;
  health[i].id=id++;
}
console.log(health);
localStorage.setItem("health", JSON.stringify(health))
document.getElementById("shop_category_9").addEventListener("click",()=>{
  append(health);
  filterData(health);
  s.addEventListener("change",function(){
    sort(health);
});
})

let household=[
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/mobile-holder-black/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/51qFdGuV30L._SL1200_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/614IPVZSYTL._SL1200_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26799",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26799",
    title: "Mobile Holder (Black)",
    default_price: 699,
    price: 101
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/primelife-6-pcs-diy-plastic-grid-drawer-divider-household-storage-strips-large-made-in-india-dd-multicolor/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/8-1-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/3-2-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29841",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29841",
    title: "Primelife 6 pcs DIY Plastic Grid Drawer Divider...",
    default_price: 599,
    price: 199
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/risentshop-silicone-toilet-brush-with-holder-stand-brush-for-bathroom-cleaning-cleaning-silicone-brush-and-holder-multi-color-pack-of-1/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/7-1-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/4-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29840",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29840",
    title: "Risentshop Silicone Toilet Brush with Holder...",
    default_price: 999,
    price: 389
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/shopiable-store-portable-toothbrush-tongue-cleaner-holder-case-traveling-outdoor-use-to-storage-carry-case-storage-box-cover-organizer-3/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/1-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/2-69-370x370.png",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29839",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29839",
    title: "Shopiable Store Portable Toothbrush, Tongue...",
    default_price: 599,
    price: 249
  }
]
id=2200;
for(let i=0;i<household.length;i++)
{
  household[i].quantity=1;
  household[i].id=id++;
}
console.log(household);
localStorage.setItem("household", JSON.stringify(household))
document.getElementById("shop_category_10").addEventListener("click",()=>{
  append(household);
  filterData(household);
  s.addEventListener("change",function(){
    sort(household);
});
})

let kitchen=[
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/big-shoptool-vegetable-chopper-900ml-purple/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/61q57KwueBL._SL1280_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/81bRG1LtGnL._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=29461",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29461",
    title: "big shoptool vegetable chopper (900ml) purple",
    default_price: 499,
    price: 249
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/500-ml-shoptool-compact-mini-vegetable-handy-dori-chopper-color-may-very/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/shoptool-82-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/61TZlp9vBgS._SL1476_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=28883",
    "button href": "https://www.uboric.com/shop/?add-to-cart=28883",
    title: "500 ml Shoptool Compact Mini Vegetable Handy...",
    default_price: 499,
    price: 199
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/shoptool-fruit-and-vegetable-chipser-11-blades-and-1-peeler-inside-chopper-green/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/1-370x370.png",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/shoptool-24-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=28873",
    "button href": "https://www.uboric.com/shop/?add-to-cart=28873",
    title: "Shoptool Fruit and Vegetable Chipser 11 Blades...",
    default_price: "1100.00",
    price: 399
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/1st-time-in-india-dori-blender-multipurpose-plastic-and-stainless-steel-power-free-blender-for-egg-cream-beater-milkshake-butter-milk-with-jug-multicolor-wonder-dori-blender-jug/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/6112lAJ3NtL._SL1200_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/51vSGzLqZlL._SL1200_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26913",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26913",
    title: "1st Time In India Dori Blender Multipurpose...",
    default_price: "1299.00",
    price: 465
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/2-in-1-slap-chop-folding-fruit-vegetable-cutting-portable-camping-chopping-slicing-board-multi-color/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/71I3R4zvlL._SL1500_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/71GHjko89wL._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26806",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26806",
    title: "2 in 1 Slap Chop Folding Fruit & Vegetable...",
    default_price: 349,
    price: 289
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/2-in-1-soap-pump-plastic-dispenser-for-dishwasher-liquid-holder-random-colour-385-ml/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/412Sh8obGvL-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/71Po6-JnGSL._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26805",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26805",
    title: "2 in 1 Soap Pump Plastic Dispenser for Dishwasher...",
    default_price: 299,
    price: 89
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/2-layer-plastic-modular-drawer-system-large-stomo-multi-purpose-chest-of-drawer-organizer-for-home-office-hospital-parlour-and-school-foldable-drawers-organizers-box-35cm-x-27-5-cm-x-38-5cm/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/61XA0sdOLgL._SL1500_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/61vw6hEbB7L._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26800",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26800",
    title: "2 Layer Plastic Modular Drawer System Large...",
    default_price: "1599.00",
    price: 679
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/3-in-1-atta-maker-dough-maker-vegetable-chopper-cutter-plastic-dough-atta-maker-multicolor-atta-maker/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/61fwB8qJ4rL._SL1500_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/512EoDmuVpL._SL1280_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26795",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26795",
    title: "3 in 1 Atta Maker Dough Maker, Vegetable...",
    default_price: 999,
    price: 389
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/3-in-1-large-durable-plastic-kitchen-sink-dish-rack-drainer-drying-rack-washing-basket-with-tray-for-kitchen-dish-rack-organizers-utensils-tools-cutlery-brown/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/61GhzjnscGL._SL1080_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/61fj9FfYQdL._SL1122_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=30216",
    "button href": "https://www.uboric.com/shop/?add-to-cart=30216",
    title: "3 in 1 Large Durable Plastic Kitchen Sink...",
    default_price: 999,
    price: 409
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/3-in-1-plastic-dry-fruit-and-paper-mill-grinder-slicer-chocolate-cutter-and-butter-slicer-with-3-in-1-blade-light-green-standard/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/61I2W8slZmS._SL1280_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/510ke74FD1S._SL1280_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26807",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26807",
    title: "3 in 1 Plastic Dry Fruit and Paper Mill Grinder...",
    default_price: 299,
    price: 139
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/4-in-1-multipurpose-plastic-2-spice-and-2-pickle-achar-container-set-for-dining-table-with-spoon/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/51OzhBHOeaL._SL1024_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/61gx-EzUwdL._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=30225",
    "button href": "https://www.uboric.com/shop/?add-to-cart=30225",
    title: "4 in 1 Multipurpose Plastic 2 Spice and 2...",
    default_price: 599,
    price: 198
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/4-layer-modular-drawer-storage-organiser-multicolor-prime-drawer/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/61XzlTs7upL._SL1500_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/71qJoUnHwyL._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26904",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26904",
    title: "4 Layer Modular Drawer Storage Organiser...",
    default_price: "3599.00",
    price: "1251.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/4-layer-multipurpose-drawers-set-organiser-rack-and-storage-for-home-office-stationary-cosmetics-bathroom-34cmx34cmx75cm/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/71aVME3NX6S._SL1500_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/61tjsg3-rkS._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26864",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26864",
    title: "4 Layer Multipurpose Drawers Set Organiser,...",
    default_price: "1599.00",
    price: "1289.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/4-pc-dry-fruit-serving-bowl-set-with-tray-multipurpose-air-tight-container-450-ml-sky-blue/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/61nazEnZlXL._SL1280_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/61QyBa0XAWL._SL1280_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26914",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26914",
    title: "4 pc Dry Fruit Serving Bowl Set With Tray,...",
    default_price: 690,
    price: 465
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/4-xl-multi-purpose-modular-drawer-storage-system-for-home-and-office-with-anti-slip-shoes-made-in-india-4-xl-multicolor-with-grey-base/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/51ABwzJu1L._SL1000_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/51iCOGOgU7L._SL1000_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26802",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26802",
    title: "4 XL Multi-Purpose Modular Drawer Storage...",
    default_price: "5999.00",
    price: "1084.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/5-layer-modular-drawer-storage-organiser-multicolor-prime-drawer/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/71GPgp5ceGL._SL1500_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/61qsAx5thpL._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26905",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26905",
    title: "5 Layer Modular Drawer Storage Organiser...",
    default_price: "3999.00",
    price: "1409.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/5-layer-multipurpose-modular-drawer-storage-system-for-home-office-in-size-of-28cmx35cmx87cm-5-xl-multicolor/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/61xHr-ErlKL._SL1500_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/617gZBgz4vL._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26803",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26803",
    title: "5 Layer Multipurpose Modular Drawer Storage...",
    default_price: "5999.00",
    price: "1689.00"
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/cake-decoration-tools-kit-combo-for-making-and-baking-cake-at-your-kitchen-bakery-cake-making-toolscake-making-materials-professional-tools/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/31dcRzCuyTL-370x266.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/31YLUoue9GL-370x283.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26847",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26847",
    title: "Cake Decoration Tools kit Combo for Making...",
    default_price: 999,
    price: 239
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/cake-palette-knife-steel-icing-spatula-3-pieces-set-cake-knife-cream-icing-frosting-spatula-baking-kitchen-pastry-cake-decoration-tool-4-5-3-pieces-set/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/51efPIfl6L-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/51g4bLbiBLL-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=30219",
    "button href": "https://www.uboric.com/shop/?add-to-cart=30219",
    title: "Cake Palette Knife | Steel Icing Spatula...",
    default_price: 599,
    price: 79
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/cake-turntable-for-decorating-rotating-cake-stand-cake-decorating-turntable-cake-spinner-cake-decorating-supplies-cake-decorating-tools-pink/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/61uJkaJeHLL._SL1280_-370x370.jpg",
    image1: "",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26834",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26834",
    title: "Cake Turntable for Decorating Rotating Cake...",
    default_price: 499,
    price: 289
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/camera-lens-plastic-coffee-mug-with-2-lid-400ml-black/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/61vQ0rBKDdL._SL1080_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/61zhu2SZrvL._SL1280_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=30224",
    "button href": "https://www.uboric.com/shop/?add-to-cart=30224",
    title: "Camera Lens Plastic Coffee Mug with 2 Lid,...",
    default_price: 799,
    price: 345
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/classic-multipurpose-unbreakable-perfect-posture-plastic-baby-stool-small-multi-color/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/51qyhys58L._SL1280_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/51gu1bl7J0L._SL1280_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=30221",
    "button href": "https://www.uboric.com/shop/?add-to-cart=30221",
    title: "Classic Multipurpose Unbreakable Perfect...",
    default_price: 999,
    price: 489
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/cutlery-spoon-fork-knife-set-with-stand-25-pieces-for-home-dinning-table-gift-purpose-multi-color/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/41PG7E7f9OS-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/61FLwCpuhzL._SL1232_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26797",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26797",
    title: "Cutlery Spoon, Fork & Knife Set with...",
    default_price: "1199.00",
    price: 689
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/dish-drying-rack-folding-dishes-rack-with-drainer-for-8-large-plates-kitchen-accessories-storage-organizer-compact-and-portable-sink-dish-drying-rack/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/61LRGWNEUgL._SL1500_-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/71kbIflpyEL._SL1500_-370x370.jpg",
    "rz-loop_button href": "https://www.uboric.com/shop/?add_to_wishlist=26878",
    "button href": "https://www.uboric.com/shop/?add-to-cart=26878",
    title: "Dish Drying Rack, Folding Dishes Rack with...",
    default_price: "1099.00",
    price: 389
  }
]
id=2300;
for(let i=0;i<kitchen.length;i++)
{
  kitchen[i].quantity=1;
  kitchen[i].id=id++;
}
console.log(kitchen);
localStorage.setItem("kitchen", JSON.stringify(kitchen))
document.getElementById("shop_category_11").addEventListener("click",()=>{
  append(mitali);
  filterData(mitali);
  s.addEventListener("change",function(){
    sort(mitali);
});
})


document.getElementById("shop_category_12").addEventListener("click",()=>{
  append(kitchen);
  filterData(kitchen);
  s.addEventListener("change",function(){
    sort(kitchen);
});
})

let grocery=[
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/ayush-kwath-tea-25pcs/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/Ayushkwath-Tea-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/Ayushkwath-Tea-370x370.jpg",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29276",
    title: "AYUSH KWATH TEA (25PCS)",
    default_price: 799,
    price: 562
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/pack-of-2-clove-green-tea-25-pcs/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/Clove-Green-Tea-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/Clove-Green-Tea-370x370.jpg",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29277",
    title: "PACK OF 2 CLOVE GREEN TEA (25 PCS)",
    default_price: "1499.00",
    price: 719
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/pack-of-2-kahwa-masala-chai-25-pcs/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/Kahwa-Masala-Tea-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/Kahwa-Masala-Tea-370x370.jpg",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29278",
    title: "PACK OF 2 KAHWA MASALA CHAI (25 PCS)",
    default_price: "1499.00",
    price: 719
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/pack-of-10-herbosmile-toothpaste/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/Herbosmile-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/Herbosmile-370x370.jpg",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29225",
    title: "PACK OF 10 HERBOSMILE TOOTHPASTE",
    default_price: "1499.00",
    price: 895
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/pack-of-10-milk-bath-soap/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/Webp.net-compress-image-32-370x370.jpg",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/Webp.net-compress-image-32-370x370.jpg",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29223",
    title: "PACK OF 10 MILK BATH SOAP",
    default_price: 999,
    price: 499
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/day-joy-daily-tea-250gm/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/download-15-370x370.png",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/download-15-370x370.png",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29043",
    title: "DAY JOY DAILY TEA (250GM)",
    default_price: 399,
    price: 195
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/oxi9-essential-9-in-1-charcoal-toothpaste-pack-of-2/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/FEW-370x370.png",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/FEW-370x370.png",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29131",
    title: "OXI9 ESSENTIAL 9 in 1 Charcoal Toothpaste...",
    default_price: 499,
    price: 199
  },
  {
    "woocommerce-LoopProduct-link href": "https://www.uboric.com/product/oxi9-essentials-9-in-1-organic-charcoal-toothpaste-300-g-4-pieces/",
    image: "https://www.uboric.com/wp-content/uploads/2022/08/DQW-370x370.png",
    image1: "https://www.uboric.com/wp-content/uploads/2022/08/DQW-370x370.png",
    "button href": "https://www.uboric.com/shop/?add-to-cart=29132",
    title: "Oxi9 Essentials 9 in 1 Organic Charcoal Toothpaste...",
    default_price: 799,
    price: 399
  }
]
id=2400;
for(let i=0;i<grocery.length;i++)
{
  grocery[i].quantity=1;
  grocery[i].id=id++;
}
console.log(grocery);
localStorage.setItem("grocery", JSON.stringify(grocery))
document.getElementById("shop_category_8").addEventListener("click",()=>{
  append(grocery);
  filterData(grocery);
  s.addEventListener("change",function(){
    sort(grocery);
});
})