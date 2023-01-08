export default {
  namespaced: true,
  state () {
    return {
      amount: 0.00,
      cartItems: []
    }
  },
  getters: {
    totalAmount (state, payload) {
      return parseFloat(state.amount).toFixed(2)
    },
    totalItems (state, payload) {
      return state.cartItems.length
    }
  },
  mutations: {
    addToCart (state, item) {
      item = {
        ...item,
        quantity: 1
      }
      state.cartItems.push(item)
      state.amount += item.price
      console.log(state.cartItems)
    }
  }
}
