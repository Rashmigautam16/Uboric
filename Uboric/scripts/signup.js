let form=document.querySelector("form");
let signupArr=JSON.parse(localStorage.getItem("signupdata"))||[];
    
  
    form.addEventListener("submit",function(event){
        event.preventDefault();
     let userobj={
      Email:form.email.value,
      Password:form.pswrd.value,
     }
   
     if(userobj.Email==""||userobj.Password=="")
     {
        alert("Please Enter All Details");
        return ;
     }
     else
     {
    if (Checkemails(userobj.Email)===true)
    {
        signupArr.push(userobj);
        localStorage.setItem("signupdata",JSON.stringify(signupArr));
        alert("signup is successful");
        window.location.href="signin.html";
    }
    else if(Checkemails(userobj.Email)===false)
    {
        alert("Account is already exists");
        alert("please login with your id password");
        window.location.href="signin.html";
    }
   
     }
  
    });



   function Checkemails(email)
   {
    let filtered_data=signupArr.filter(function(elem){
        return email===elem.Email;
     })
    if(filtered_data.length>0)
      {
       return false;
      }
    else
      {
       return true;
      }  
   }