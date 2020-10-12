import http from '@/util/ajax'
const module = {
  namespaced: true,
  state: {
    cinemaList: []
  },
  mutations: {
    setcinemaList (state, data) {
      state.cinemaList = data
    },
    clearcinemaList (state) {
      state.cinemaList = []
    }
  },
  actions: {
    getcinemaList (store, id) {
      http({
        method: 'get',
        url: `https://show.maoyan.com/maoyansh/myshow/ajax/performances/0;st=4;p=1;s=20;tft=0?sellChannel=13&cityId=${id}&lng=0&lat=0`
      }).then(res => {
        store.commit('setcinemaList', res.data.data)
      })
    }
  }
}

export default module
