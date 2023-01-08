export default {
  namespaced: true,
  state: {
    products: []
  },
  getters: {
  },
  mutations: {
    getProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    async getProducts ({ commit }, payload) {
      const res = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
      const data = await res.json()
      commit('getProducts', data)
    }
  }
}
