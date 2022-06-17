import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const actions = {
  getProduct(context,value){
    context.commit('GETPRODUCT', value);
  },
  getProducts(context,value){
    context.commit('GETPRODUCTS', value);
  }


}

//准备mutations------用于操作数据（state）
const mutations = {
  GETPRODUCT(state,value){
    state.product = value;
  },
  GETPRODUCTS(state,value){
    state.products = value;
  }

}

const state = {
  product: {},
  products:{}
}

export default new Vuex.Store({
  actions,
  mutations,
  state
})
