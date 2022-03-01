import * as savingsTypes from "@/store/types/savings";
import Api from "@/store/api/api";

const state = {
  savings: []
};

const getters = {
  [savingsTypes.GETTER_SAVINGS]: states => states.savings
};

const actions = {
  async [savingsTypes.ACTION_GET_SAVINGS]({ commit }) {
    await Api()
      .get("/savings")
      .then(res => {
        commit(savingsTypes.MUTATION_SET_SAVINGS, res.data);
      });
  }
};

const mutations = {
  [savingsTypes.MUTATION_SET_SAVINGS](states, savings) {
    states.savings = savings;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};