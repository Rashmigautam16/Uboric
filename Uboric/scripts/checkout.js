
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

//localStorage.setItem("final_sum",finalValue);
let data=JSON.parse(localStorage.getItem("finalValue"));

console.log(data);
values(data);
function values(data){
    let subtotal=document.getElementById("subtotal")
    subtotal.innerText="₹"+data.beforeGST;
    let gst=document.getElementById("gst");
    gst.innerText="₹"+data.GSTamt;
    let disc=document.getElementById("discount")
    disc.innerText="₹"+data.discount;
    let total=document.getElementById("total")
    total.innerText="₹"+data.finalAmt;
}