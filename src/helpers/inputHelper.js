export default class InputHelper {
  static checkInput(val = "", regexType = ""){
    let cepRegex = RegExp("([0-9]{5,5}[-]?[0-9]{3})$"),
      cpfRegex = RegExp("([0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2})$"),
      regexTest = RegExp("");

    switch (regexType) {
      case "cpf":
        regexTest = cpfRegex;
        break;
      case "cep":
        regexTest = cepRegex;
        break;
    }
    return regexTest.test(val);
  }

  static setInvalidInputs(elementId = "") {
    if (elementId != "") {
      const htmlElement = document.getElementById(elementId);
      htmlElement.classList.add("is-invalid");
      htmlElement.classList.remove("is-valid");
    }
    return false;
  }
  static setValidInputs(elementId = "") {
    if (elementId != "") {
      const htmlElement = document.getElementById(elementId);
      htmlElement.classList.remove("is-invalid");
      htmlElement.classList.add("is-valid");
    }
    return false;
  }

  static money(maskedValue = "") {
    return parseFloat(maskedValue.toString().replace(",", "."));
  }

  static cleanVal(maskedValue = "") {
    return maskedValue.replace(/[^0-9a-zA-Z]/g, "");
  }
}
