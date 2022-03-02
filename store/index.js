export default {
  state: () => ({
    modalLogin: false,
    modalReg: false,
    modalRestore: false,
    promocode: ''
  }),
  getters: {
    loginVisible: state => {
      return state.modalLogin
    },
    regVisible: state => {
      return state.modalReg
    },
    restoreVisible: state => {
      return state.modalRestore;
    },
    promocode: state => {
      return state.promocode
    }
  },
  mutations: {
    loginVisible(state) {
      state.modalLogin = true;
      state.modalReg = false;
      state.modalRestore = false;
      state.modalBonus = false;
    },
    loginHide(state) {
      state.modalLogin = false;
    },
    regVisible(state) {
      state.modalReg = true;
      state.modalLogin = false;
      state.modalRestore = false;
      state.modalBonus = false;
    },
    regHide(state) {
      state.modalReg = false;
    },
    restoreVisible(state) {
      state.modalRestore = true;
      state.modalReg = false;
      state.modalLogin = false;
      state.modalBonus = false;
    },
    restoreHide(state) {
      state.modalRestore = false;
    },
    setPromocode(state, promocode) {
      state.promocode = promocode;
    }
  }
}