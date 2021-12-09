import * as servicesTypes from "@/store/types/services";
import Api from "@/store/api/index";

const state = {
  services: []
};

const getters = {
  [servicesTypes.GETTER_SERVICES]: states => states.services
};

const actions = {
  async [servicesTypes.ACTION_GET_SERVICES]({ commit }) {
    await Api()
      .get("/services")
      .then(res => {
        commit(servicesTypes.MUTATION_SET_SERVICES, res.data);
      });
  }
};

const mutations = {
  [servicesTypes.MUTATION_SET_SERVICES](states, services) {
    states.services = services;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};