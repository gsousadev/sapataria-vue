import store from '@/store/store'

export default class ModalHelper {
  static modalError(error) {
    let modalOptions = {};
    if (error == undefined) {
      modalOptions = {
        isVisible: true,
        title: "Desculpe! ",
        textLines: ['Houve um erro inesperado na conexão com o servidor. Contate o administrador do sistema!'],
        confirmButton: true,
        cancelButton: false,
        type: "error",
      };
    } else {
      console.log(error);
      error.errors.unshift(error.support);
      modalOptions = {
        isVisible: true,
        title: error.message,
        textLines: error.errors,
        confirmButton: true,
        cancelButton: false,
        type: "error",
      };
    }

    store.commit('changeModalData', modalOptions);

  }

  static modalSuccess(title, textLines = []) {
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

  static modalWarning(title, textLines = []) {

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