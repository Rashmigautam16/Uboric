
function clickme(event){
    event.preventDefault();
    let userobj={
        name:document.getElementById("full_name").value,
        comp_name:document.getElementById("company_namee").value,
        country:document.getElementById("country").value,
        address:document.getElementById("streetaddress").value,
        city:document.getElementById("city").value,
        state:document.getElementById("state").value,
        pincode:document.getElementById("pincode").value,
        phne_number:document.getElementById("phone").value,
        email:document.getElementById("email").value
    }
    if(userobj.name=="")
    {
        alert("please fill all details");
        return;
    }
}
   
