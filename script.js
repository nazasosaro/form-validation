const submitFunction = (event) => {
  if (!formValidation()) {
    event.preventDefault(); // previene la actualizacion de la web
  } else {
    event.preventDefault(); // previene la actualizacion de la web
    alert(
      "Los datos enviados fueron: \n" +
        "Nombre: " +
        document.getElementById("nombre").value +
        "\n" +
        "Apellido: " +
        document.getElementById("apellido").value +
        "\n" +
        "Documento: " +
        document.getElementById("documento").value +
        "\n" +
        "Email: " +
        document.getElementById("email").value +
        "\n" +
        "Edad: " +
        document.getElementById("edad").value +
        "\n" +
        "Actividad: " +
        document.getElementById("actividad").value +
        "\n" +
        "Nivel de Estudio: " +
        document.getElementById("nivelEstudio").value +
        "\n"
    );
  }
};

document.getElementById("formulario").addEventListener("submit", submitFunction); // escucha el envio del formulario

function formValidation() {
  // validacion campos tipo texto
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
      showError(errorCampo, "Este campo debe tener al menos 3 caracteres");
    } else {
      hideError(errorCampo);
    }
  });

  // validacion email
  const email = document.getElementById("email");
  const errorEmail = document.getElementById("errorEmail");

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    // este regex valida que el formato del email se válido, el regex es /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
    hideError(errorEmail);
  } else {
    showError(errorEmail, "¡Ingrese un correo electrónico válido!");
    trueValidation = false;
  }

  //validacion edad
  const age = document.getElementById("edad");
  const errorEdad = document.getElementById("errorEdad");

  if (age.value < 18) {
    showError(errorEdad, "Debes ser mayor de edad para registrarte");
    trueValidation = false;
  } else {
    hideError(errorEdad);
  }

  // validacion actividad
  const actividad = document.getElementById("actividad");
  const errorActividad = document.getElementById("errorActividad");

  if (actividad.value == "") {
    showError(errorActividad, "Por favor, seleccione una actividad");
    trueValidation = false;
  } else {
    hideError(errorActividad);
  }

  // validacion nivel de estudio
  const nivelEstudio = document.getElementById("nivelEstudio");
  const errorNivelEstudio = document.getElementById("errorNivelEstudio");

  if (nivelEstudio.value == "") {
    showError(errorNivelEstudio, "Por favor, seleccione un nivel de estudio");
    trueValidation = false;
  } else {
    hideError(errorNivelEstudio);
  }
  
  // validacion terminos y condiciones
  const aceptoTerminos = document.getElementById("aceptoTerminos");
  const errorAceptoTerminos = document.getElementById("errorAceptoTerminos");

  if(!aceptoTerminos.checked) {
    showError(errorAceptoTerminos, 'Debes Aceptar Terminos y Condiciones');
    trueValidation = false;
  }
  else {
    hideError(errorAceptoTerminos);
  }

  return trueValidation; // retorna si el formulario es completamente valido o no
}

const showError = (element, message) => {
  element.textContent = message;
  element.style.display = "block";
};

const hideError = (element) => {
  element.textContent = "";
  element.style.display = "none";
};
