import * as coopMartTypes from "@/store/types/coopMart";
import Api from "@/store/api/api";

const state = {
  items: []
};

const getters = {
  [coopMartTypes.GETTER_COOPMART_ITEMS]: states => states.items
};

const actions = {
  async [coopMartTypes.ACTION_GET_COOPMART_ITEMS]({ commit }) {
    await Api()
      .get("/consumerStore/items")
      .then(res => {
        commit(coopMartTypes.MUTATIONS_SET_COOPMART_ITEMS, res.data);
      });
  }
};

const mutations = {
  [coopMartTypes.MUTATIONS_SET_COOPMART_ITEMS](states, items) {
    states.items = items;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};