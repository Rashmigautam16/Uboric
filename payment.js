let payme = localStorage.getItem("Pay");
  document.querySelector("#payme").innerText = "Rs." + payme;

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
      name == "Pankaj Mehra" &&
      cvv == "123" &&
      yr == "2022-01"
    ) {

     const myTimeout = setTimeout(helloguys,3000);
      function helloguys(){
        alert("Your Order has been placed");
        alert("Thanks for Shooping With us");
      }
     
    } else {
      alert("Enter correct Information");
    }
  });

  document.querySelector("#total").innerText = "Rs." + payme;
  let subtotal = localStorage.getItem("subPay");
  document.querySelector("#subtotal").innerText = "Rs." + subtotal;