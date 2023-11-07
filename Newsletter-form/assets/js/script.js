const btnSubmit = document.querySelector("#btn-submit");

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  const inputEmail = document.querySelector("#email");
  validaEmail(inputEmail, inputEmail.value);
});

//Valid email
function validaEmail(input, email) {
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const sucess = document.querySelector('.sucess');
  const form = document.querySelector('.container');
  const clientEmail = document.querySelector('.client-email');

  if (regexEmail.test(email)) {
    form.style.display = 'none';
    sucess.style.display = 'flex';
    clientEmail.innerHTML = email;


  } else {
    insertError(input);
  }
}

//Function to insert error alerts in html
function insertError(input) {
  const textEmail = document.querySelector("#text-email");
  input.classList.add("input-error");
  textEmail.innerHTML = "Valid email required";
}
