// Start of JavaScript by Beni Nkula
function validateForm() {
  let fname = document.forms["ctnform"]["fname"].value;
  let surname = document.forms["ctnform"]["surname"].value;
  let phoneno = document.forms["ctnform"]["phoneno"].value;
  let email = document.forms["ctnform"]["email"].value;

  if (fname.trim() === "") {
    alert("First Name must be filled out");
    return false;
  }

  if (surname.trim() === "") {
    alert("Surname must be filled out");
    return false;
  }

  if (phoneno.trim() === "") {
    alert("Phone Number must be filled out");
    return false;
  }

  if (email.trim() === "") {
    alert("E-mail must be filled out");
    return false;
  }
