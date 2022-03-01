import * as bannerTypes from "@/store/types/banner";
import Api from "@/store/api/api";

const state = {
  banners: []
};

const getters = {
  [bannerTypes.GETTER_BANNERS]: states => states.banners
};

const actions = {
  async [bannerTypes.ACTION_GET_BANNERS]({ commit }) {
    await Api()
      .get("/banners")
      .then(res => {
        commit(bannerTypes.MUTATION_SET_BANNERS, res.data);
      });
  }
};

const mutations = {
  [bannerTypes.MUTATION_SET_BANNERS](states, banners) {
    states.banners = banners;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
