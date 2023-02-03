let formTag = document.querySelector("form");
  formTag.addEventListener("submit", function (event) {
    let card = formTag.card.value;
    let name = formTag.name.value;
    let cvv = formTag.cvv.value;
    let yr = formTag.month.value;
    event.preventDefault();
    console.log(yr);
    if (
      card == "123456" &&
      name == "Pankaj" &&
      cvv == "123" &&
      yr == "2022-01"
    ) {
     const myTimeout = setTimeout(helloguys,1000);
      function helloguys(){

        setTimeout(function(){
          alert("Your Order has been placed");
            setTimeout(function(){
          
              alert("Thanks for Shooping With us");
              window.location.href="index.html";
              },4000);
            },2000);
     
        
      }
    } else {
      alert("Enter correct Information");
    }
  });
  let data= JSON.parse(localStorage.getItem("finalValue")) || [];
// console.log(data);
finaly(data);
function finaly(data){
    let subtotal=document.getElementById("sub")
    subtotal.innerText="₹"+data.beforeGST;
    let gst=document.getElementById("gsT");
    gst.innerText="₹"+data.GSTamt;
    let disc=document.getElementById("dis")
    disc.innerText="₹"+data.discount;
    let total=document.getElementById("Total")
    total.innerText="₹"+data.finalAmt;
    document.getElementById("payme").innerText="₹"+data.finalAmt;
   
}

let order=document.getElementById("continue");
order.addEventListener("click",function(){
  setTimeout(function(){
alert("Your order has been successfully placed");
  },3000);
})