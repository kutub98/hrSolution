

const loginHandle = document.getElementById("loginHandle");
loginHandle.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = document.getElementById("username");
  const userPassword = document.getElementById("password");
  const ConfirmPassword = document.getElementById("Confirmpassword");
 

  const username = "admin";
  const password = "123";

  if (userName.value === username && userPassword.value === password) {
    
    window.location.href = "hrDashBoard.html";
  } else {
    return alert("Sorry your password is wrong");
  }
});


