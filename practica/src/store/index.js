import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    cars: [],
  },
  getters: {
    PRODUCTS(state) {
      return state.cars;
    },
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, cars) => {
      state.cars = cars;
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios("http://localhost:3000/cars", {
        method: "GET",
      }).then((cars) => {
        commit("SET_PRODUCTS_TO_STATE", cars.data);
        return cars;
      });
    },
  },
  modules: {},
});
