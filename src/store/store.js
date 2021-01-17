import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const product = {
  namespaced: true,
  state: {
    datas: [],
  },
  mutations: {
    addOne(state, product) {
      state.datas.push(product);
    },
    addMany(state, products) {
      state.datas = products;
    },
  },
  actions: {
    fetchData(context) {
      axios.get('/products.json').then((res) => {
        const data = res.data;
        context.commit(
          'addMany',
          Object.keys(data).map((key) => data[key])
        );
      });
    },
    persistOne(context, product) {
      axios.post('products.json', product).then(() => {
        // With a real API, we usualy use response instead of argument (product)
        context.commit('addOne', product);
      });
    },
  },
};

const cart = {
  namespaced: true,
  state: {
    datas: [],
  },
  mutations: {
    addOne(state, product) {
      state.datas.push(product);
    },
    deleteOne(state, id) {
      const index = state.datas.findIndex((d) => d.id === id);
      state.datas.splice(index, 1);
    },
  },
  getters: {
    total(state) {
      return state.datas.reduce((accumulator, currentValue /* ,index, array */) => {
        accumulator += currentValue.price;
        return accumulator;
      }, 0);
    },
  },
};

export default new Vuex.Store({
  modules: {
    product,
    cart,
  },
});
