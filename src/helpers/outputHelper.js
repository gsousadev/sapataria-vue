export default class OutputHelper {
   static cpf(clearCpf){

    if (clearCpf == null) {
      return "";
    }

    return clearCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  }

   static phone(clearPhone = "") {
    if (clearPhone == null) {
      return "";
    }

    if (clearPhone.length == 11) {
      return clearPhone.replace(/(\d{2})(\d{5})(\d{4})/g, "($1) $2-$3");
    }

    if (clearPhone.length == 10) {
      return clearPhone.replace(/(\d{2})(\d{4})(\d{4})/g, "($1) $2-$3");
    }

    return clearPhone;
  }

   static money(clearMoney){

    if (typeof (clearMoney) == "number") {
      return (
        "R$ " +
        clearMoney
          .toFixed(2)
          .replace(".", ",")
      );
    }

    if (typeof (clearMoney) == "string") {
      return (
        "R$ " +
        parseFloat(clearMoney)
          .toFixed(2)
          .replace(".", ",")
      );
    }

    return "R$ " + clearMoney;
  }

   static productSize(clearSize) {
    switch (clearSize) {
      case "p":
        return "pequeno";
      case "m":
        return "médio";
      case "g":
        return "grande";
      default:
        return clearSize;
    }
  }

   static productGenre(clearGenre) {
    switch (clearGenre) {
      case "m":
        return "masculino";
      case "f":
        return "feminino";
      case "u":
        return "Unisex";
      default:
        return clearGenre;
    }
  }

   static status(clearStatus, onlyText = false) {
    switch (clearStatus) {
      case "PENDENTE":
        return onlyText
          ? "Pendente"
          : `<span class="badge badge-warning">Pendente</span>`;
      case "PROCESSANDO":
        return onlyText
          ? "Em processamento"
          : `<span class="badge badge-success">Em processamento</span>`;
      case "RETIRAR":
        return onlyText
          ? "Aguardando Retirada"
          : `<span class="badge badge-info">Aguardando Retirada</span>`;
      case "ENTREGUE":
        return onlyText
          ? "Entregue"
          : `<span class="badge badge-danger">Entregue</span>`;
      default:
        return onlyText
          ? clearStatus
          : `<span class="badge badge-light">${clearStatus} (Erro no banco)</span>`;
    }
  }
}
