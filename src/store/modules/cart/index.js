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
    },
    removeFromCart (state, item) {
      const idx = state.cartItems.indexOf(item)
      state.amount -= item.price * item.quantity
      state.cartItems.splice(idx, 1)
    },
    reduceQuantity (state, item) {
      const idx = state.cartItems.indexOf(item)
      state.cartItems[idx].quantity = item.quantity - 1
      state.amount -= item.price
    },
    addQuantity (state, item) {
      const idx = state.cartItems.indexOf(item)
      state.cartItems[idx].quantity = item.quantity + 1
      state.amount += item.price
    }
  }
}
