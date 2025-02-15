const submitFunction = (event) => {
  event.preventDefault(); // previene la actualizacion de la web
  formValidation();
};

document.getElementById("formulario").addEventListener("submit", submitFunction); // escucha el envio del formulario

function formValidation() {
  let textCampos = document.querySelectorAll('input[type="text"]');
  let trueValidation = true;

  textCampos.forEach((campo) => {
    let errorCampo = document.getElementById(
      "error" + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)
    );
    if (campo.value.length == "") {
      showError(errorCampo, "Este campo es requerido!");
      trueValidation = false;
    } else if (campo.value.length > 0 && campo.value.length < 3) {
      showError(errorCampo, "Este campod debe tener al menos 3 caracteres");
    } else {
      hideError(errorCampo, message);
    }
  });
}

const showError = (element, message) => {
  element.textContent = message;
  element.style.display = "block";
};

const hideError = (element, message) => {
  element.textContent = "";
  element.style.display = "none";
};
