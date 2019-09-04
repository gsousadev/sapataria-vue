export default class InputHelper {
    public static checkInput(val: string, regexType: string): boolean {
        let cepRegex = RegExp("([0-9]{5,5}[-]?[0-9]{3})$"),
            cpfRegex = RegExp("^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$"),
            regexTest: RegExp = RegExp("");

        switch (regexType) {
            case 'cpf':
                regexTest = cpfRegex;
                break;
            case 'cep':
                regexTest = cepRegex;
                break;
        }
        return regexTest.test(val);
    }

    public static setInvalidInputs(elementId: string = "") {
        if (elementId != "") {
            const htmlElement = document.getElementById(elementId)!;
            htmlElement.classList.add("is-invalid");
            htmlElement.classList.remove("is-valid");
        }
        return false;
    }
    public static setValidInputs(elementId: string = "") {
        if (elementId != "") {
            const htmlElement = document.getElementById(elementId)!;
            htmlElement.classList.remove("is-invalid");
            htmlElement.classList.add("is-valid");
        }
        return false;
    }

}