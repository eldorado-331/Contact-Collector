// object to store details
userDetailsDatabase = {}
function getUserDetails() {
  let userName = prompt("Enter your username");

//   if (userName == null) {
//     return;
//   }

  function validateUserName(userName) {
    if (userName.length < 10 && userName.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  while (validateUserName(userName) == false) {
    userName = prompt("Please enter a valid username");
  }

  userDetailsDatabase["userName"] = userName;

  let email = prompt("Enter your email address");

  if (email == null) {
    return;
  }
// email validator still has some bugs (users cannot cancel after inputing a wrong email)
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  while (validateEmail(email) == false) {
    email = prompt("Please enter a valid email");
  }


  userDetailsDatabase["email"] = email;

  let phoneNumber = prompt("Enter your phone number");

  if (phoneNumber == null) {
    return;
  }

  function validatePhoneNumber(phoneNumber) {
    if (phoneNumber.length == 11) {
      return true;
    } else {
      return false;
    }
  }
  while (validatePhoneNumber(phoneNumber) == false) {
    phoneNumber = prompt("Please enter a valid phone number");
  }
  userDetailsDatabase["phoneNumber"] = phoneNumber;

  let password = prompt(
    "Enter your Password\n(Must not be less than six characters)"
  );

  if (password == null) {
    return;
  }

  function validatePassword(password) {
    if (password.length < 6) {
      return false;
    } else {
      return true;
    }
  }
  while (validatePassword(password) == false) {
    password = prompt(
      "Please enter a valid password\n(Password must not be less than six characters"
    );
  }

  userDetailsDatabase["password"] = password;

  let confirmPassword = prompt("Confirm your passwword");

  if (confirmPassword == null) {
    return;
  }

  function validateConfirmPassword(confirmPassword) {
    if (confirmPassword != password) {
      return false;
    } else {
      return true;
    }
  }
  while (validateConfirmPassword(confirmPassword) == false) {
    confirmPassword = prompt("Password does not match");
  }

  console.log(userDetailsDatabase)
}


function displayUserDetails(){
    alert(`Your Details\n\nUsername: ${userDetailsDatabase.userName}\nPhone Number: ${userDetailsDatabase.phoneNumber}\nEmail: ${userDetailsDatabase.email}`)

}

