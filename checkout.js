

let checkoutbtn=document.querySelector("#checkout-btn");

checkoutbtn.addEventListener("click",function(event){
    event.preventDefault();
    let userobj={
        name:document.getElementById("full_name").value,
        comp_name:document.getElementById("company_name").value,
        country:document.getElementById("country").value,
        address:document.getElementById("streetaddress").value,
        city:document.getElementById("city").value,
        state:document.getElementById("state").value,
        pincode:document.getElementById("pincode").value,
        phne_number:document.getElementById("phone").value,
        email:document.getElementById("email").value
    }
    if(userobj.name==""||userobj.comp_name==""||userobj.country==""||userobj.address==""||userobj.city==""||userobj.state==""||userobj.pincode==""||userobj.phne_number==""||userobj.email=="")
    {
        alert("please fill all details");
        return;
    }
    else{
        window.location.href="payment.html";
    }
});




// popup

var openpopupbtn=document.querySelector(".popup-open");
var closepopupbtn=document.querySelector(".popup-close-btn");

openpopupbtn.addEventListener("click",function(event){
    event.preventDefault();
    document.body.classList.add("popup-active");
});
closepopupbtn.addEventListener("click",function(){
    document.body.classList.remove("popup-active");
})


