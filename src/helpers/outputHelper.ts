export default class OutputHelper {
  public static cpf(clearCpf: string): string {

    if (clearCpf == null) {
      return "";
    }
    
    return clearCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  }

  public static phone(clearPhone: string = ""): string {
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

  public static money(clearMoney: string): string {
    return (
      "R$ " +
      parseFloat(clearMoney)
        .toFixed(2)
        .replace(".", ",")
    );
  }

  public static productSize(clearSize: any) {
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

  public static productGenre(clearGenre: any) {
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

  public static status(clearStatus: string, onlyText = false) {
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
