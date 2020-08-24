import store from '@/store/store'

export default class ModalHelper {
  public static modalError(error: any) {
    let modalOptions = {};
    if (error.response == undefined) {
      modalOptions = {
        isVisible: true,
        title: "Desculpe! ",
        textLines: ['Houve um erro inesperado na conexão com o servidor. Contate o administrador do sistema!'],
        confirmButton: true,
        cancelButton: false,
        type: "error",
      };
    } else {
      const data = error.response.data;
      modalOptions = {
        isVisible: true,
        title: data.support,
        textLines: data.errors,
        confirmButton: true,
        cancelButton: false,
        type: "error",
      };
    }

    store.commit('changeModalData', modalOptions);

  }

  public static modalSuccess(title: string, textLines: Array<string> = []) {

    const errorImageUri = "@/assets/images/success.png";

    const modalOptions = {
      isVisible: true,
      title: title,
      textLines: textLines,
      confirmButton: true,
      cancelButton: false,
      type: "success"
    };

    store.commit('changeModalData', modalOptions);
  }

  public static modalWarning(title: string, textLines: Array<string> = []) {

    const errorImageUri = "@/assets/images/warning.png";

    const modalOptions = {
      isVisible: true,
      title: title,
      textLines: textLines,
      confirmButton: true,
      cancelButton: false,
      type: "warning"
    };

    store.commit('changeModalData', modalOptions);
  }
}
