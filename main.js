let formName = document.getElementById("formName");
let formNumber = document.getElementById("formNumber");
let formMonth = document.getElementById("formMonth");
let formYear = document.getElementById("formYear");
let formcvv = document.getElementById("formcvv");
let successmessage = document.getElementById("successmessage");
let name = document.getElementById("name");
let number = document.getElementById("number");
let date = document.getElementById("date");
let cvv = document.getElementById("cvvtext");
let form = document.getElementById("form");

formName.addEventListener("input", (e) => {
  name.textContent = e.target.value;
});

formNumber.addEventListener("input", (e) => {
  number.textContent = e.target.value.replace(/\s+/g, '').replace(/(.{4})/g, '$1 '); // format card number with spaces
});

formMonth.addEventListener("input", (e) => {
  date.textContent = `${e.target.value}/${formYear.value}`;
});

formYear.addEventListener("input", (e) => {
  date.textContent = `${formMonth.value}/${e.target.value}`;
});

formcvv.addEventListener("input", (e) => {
  cvv.textContent = e.target.value;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;
  
  let formNameValue = formName.value;
  let formNumberValue = formNumber.value;
  let formMonthValue = formMonth.value;
  let formYearValue = formYear.value;
  let formcvvValue = formcvv.value;
  
  let errorElements = document.querySelectorAll(".error");
  
  if (formNameValue == "") {
    isValid = false;
    errorElements[0].style.display = "block";
    errorElements[0].style.color = "red";
  } else {
    errorElements[0].style.display = "none";
    errorElements[0].style.color = "none";
  }

  if (formNumberValue == "") {
    isValid = false;
    errorElements[1].style.display = "block";
    errorElements[1].style.color = "red";
  } else {
    errorElements[1].style.display = "none";
    errorElements[1].style.color = "none";
  }
  
  if (formMonthValue == "") {
    isValid = false;
    errorElements[2].style.display = "block";
    errorElements[2].style.color = "red";
  } else {
    errorElements[2].style.display = "none";
    errorElements[2].style.color = "none";
  }
  
  if (formYearValue == "") {
    isValid = false;
    errorElements[3].style.display = "block";
    errorElements[3].style.color = "red";
  } else {
    errorElements[3].style.display = "none";
    errorElements[3].style.color = "none";
  }
  
  if (formcvvValue == "") {
    isValid = false;
    errorElements[3].style.display = "block";
    errorElements[3].style.color = "red";
  } else {
    errorElements[3].style.display = "none";
    errorElements[3   ].style.color = "none";
  }
  
  
  
  successmessage.classList.add("active")
  if(isValid){
    form.style.display = "none";

    // Show the success message
    successmessage.classList.remove("hidden");
    successmessage.scrollIntoView({ behavior: "smooth" });
  }
});