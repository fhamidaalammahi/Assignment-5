console.log("login function")
document.getElementById("login-btn")
.addEventListener("click", function(){
  const nameinput = document.getElementById("input login");
  const username = nameinput.value;
  console.log(username);

  const passinput =document.getElementById("input pass");
  const pass = passinput.value;
   console.log(pass);

   if(username=="admin" && pass=="admin123"){
    alert("login success");

    window.location.assign("/home.html");
   }
   else{
    alert("login Failed");
    return;
   }
});