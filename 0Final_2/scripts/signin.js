let form = document.querySelector("form");

let signupArr=JSON.parse(localStorage.getItem("signupdata"))||[];
form.addEventListener("submit", function (event) {
    event.preventDefault()
    let obj_data = {
        email: form.email.value,
        password: form.pswrd.value,

    }

   
    if(obj_data.email==""||obj_data.password=="")
     {
        alert("Please Enter All Details");
        return ;
     }
     else
     {
        if (checksignin(obj_data.email, obj_data.password) === true) {
            alert("sign in successful");
            alert("Redirecting to Home page");
            window.location.href = "shop.html";
        }
        else if (checksignin(obj_data.email, obj_data.password) === false) {
            alert("Please Enter correct email or password");
        } 
     }
   
});

function checksignin(email, password) {
    let filter = signupArr.filter(function (element) {
        return element.Email === email && element.Password === password;
    })
    if (filter.length > 0) {
        return true;
    }
    else {
        return false;
    }
}