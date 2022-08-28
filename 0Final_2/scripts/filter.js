

import append from "./append_data.js";
    function filterData(data2){
        // let data2=JSON.parse(localStorage.getItem("dataFilter"));
        // console.log("data2:",data2);
        
        let filter1 = document.getElementById("shop_price_1")
        filter1.addEventListener("click", function () {
          console.log("yes");
          let f1 = data2.filter(function (el) {
            return (el.price < "1000");
          });
          console.log(f1);
          append(f1);
        })
      
        let filter2 = document.getElementById("shop_price_2")
        filter2.addEventListener("click", function () {
          console.log("yes");
          let f1 = data2.filter(function (el) {
            return ("1000" < el.price && el.price < "2000");
          });
          console.log(f1);
          append(f1);
        })
      
        let filter3 = document.getElementById("shop_price_3")
        filter3.addEventListener("click", function () {
          console.log("yes");
          let f1 = data2.filter(function (el) {
            return ("2000" < el.price && el.price < "3000");
          });
          console.log(f1);
          append(f1);
        })
      
        let filter4 = document.getElementById("shop_price_4")
        filter4.addEventListener("click", function () {
          console.log("yes");
          let f1 = data2.filter(function (el) {
            return (el.price > "3000");
          });
          console.log(f1);
          append(f1);
        })
        }




        function sort(data){
          let V=document.getElementById("select_short").value;
          if(V=="LtoH")
        {
          data.sort(function(a,b){return a.price-b.price});
          console.log("success");
          append(data);
        }
        else
        {
          data.sort(function(a,b){return b.price-a.price});
          console.log("done");
          append(data);
        }   
        }


        
        export {filterData,sort};