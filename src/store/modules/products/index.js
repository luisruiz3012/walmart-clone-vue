export default {
  namespaced: true,
  state: {
    products: [],
    category: []
  },
  getters: {
  },
  mutations: {
    getProducts (state, payload) {
      state.products = payload
    },
    getCategories (state, payload) {
      state.categories = payload
    }
  },
  actions: {
    async getProducts ({ commit }, payload) {
      const res = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
      const data = await res.json()
      commit('getProducts', data)

      const cats = await (await fetch('https://api.escuelajs.co/api/v1/categories')).json()
      commit('getCategories', cats)
    }
  }
}
