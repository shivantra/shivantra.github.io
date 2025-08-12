const ids = ["name", "phone", "email", "subject", "message"];

function getValueById(id) {
  return document.getElementById(id).value;
}

function enableSubmitBtn() {
  document.getElementById("submitBtn").disabled = false;
}

function disableSubmitBtn() {
  document.getElementById("submitBtn").disabled = true;
}

function getFormValues() {
  return ids.reduce(function (acc, i) {
    acc[i] = getValueById(i);
    return acc;
  }, {});
}

function clearValues() {
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
}

function showNotification(msg, type = "success") {
  const classes = {
    success: "successMessage",
    error: "errorMessage",
  };

  const notificationElement = document.getElementById(classes[type]);
  notificationElement.classList.remove("d-none");
  notificationElement.innerHTML = msg;

  setTimeout(function () {
    notificationElement.classList.add("d-none");
  }, 2000);
}

const email_validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function submitForm(event) {
  event.preventDefault();

  const { name, email, phone, subject, message } = getFormValues();

  if (!(name && email)) {
    showNotification("Name and email are required", "error");
    return;
  } else if (!email_validation.test(email)) {
    showNotification("Enter a valid email", "error");
    return;
  }

  var xhttp = new XMLHttpRequest();

  const data = new FormData();
  data.append("entry.2131742683", name);
  data.append("entry.988251478", email);
  data.append("entry.1922968647", phone);
  data.append("entry.977598766", subject);
  data.append("entry.1464684411", message);

  const qs = [...data.entries()]
    .map((x) => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
    .join("&");

  try {
    xhttp.open(
      "POST",
      "https://docs.google.com/forms/d/e/1FAIpQLSeUsJRCZVyWolcbIz4NLB4nsW_M88eVSfYzxt5T3HrI5Rz5AA/formResponse?" +
        qs,
      true
    );

    xhttp.send();
    showNotification("Your response is submitted. Thank You", "success");
    grecaptcha.reset();
    disableSubmitBtn();
    clearValues();
  } catch (err) {
    showNotification("Error submitting response. Try again", "error");
  }
}
