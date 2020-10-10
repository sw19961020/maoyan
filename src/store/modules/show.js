const module = {
  namespaced: true,
  state: {
    tabbarShow: true
  },
  mutations: {
    hide (state) {
      state.tabbarShow = false
    },
    show (state) {
      state.tabbarShow = true
    }
  },
  actions: {
  }
}

export default module
