
if (window.location.pathname === "/login.html" || window.location.pathname === "/index2ho.html") {
    
    setTimeout(() => {
      window.location = "index2ho.html";
    }, 1500);
  }
  
 
  let username = document.querySelector("#username");
  let password = document.querySelector("#password");
  let loginBtn = document.querySelector("#sign_in");
  
  let getusername = localStorage.getItem("username");
  let getpassword = localStorage.getItem("password");
  
  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
  
    if (username.value === "" || password.value === "") {
      alert("Please fill in all fields");
    } else {
      if (
        getusername &&
        getusername.trim() === username.value.trim() &&
        getpassword &&
        getpassword.trim() === password.value
      ) {
        
        setTimeout(() => {
          window.location = "index2ho.html";
        }, 1500);
      } else {
        alert("Incorrect username or password");
      }
    }
  });
  