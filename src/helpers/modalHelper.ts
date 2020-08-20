import store from '@/store/store'

export default class ModalHelper {
  public static modalError(error: any) {
    const data = error.response.data;

    const modalOptions = {
      isVisible: true,
      title: data.message,
      textLines: data.errors,
      confirmButton: true,
      cancelButton: false,
    };

    store.commit('changeModalData',modalOptions);
  }

  public static modalSuccess(title: string, textLines: Array<string> = []) {
   
    const modalOptions = {
      isVisible: true,
      title: title,
      textLines: textLines,
      confirmButton: true,
      cancelButton: false,
    };

    store.commit('changeModalData',modalOptions);
  }
}
