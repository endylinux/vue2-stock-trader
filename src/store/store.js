import Vue from 'vue'
import Vuex from 'vuex'

import stocks from "@/store/modules/stocks";
import portfolio from "@/store/modules/portfolio";

import * as actions from './actions.js';

Vue.use(Vuex);
export default new Vuex.Store({
    actions,
    modules: {
        stocks,
        portfolio
    }
});
