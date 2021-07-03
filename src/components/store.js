import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import { router } from "../router"

Vue.use(Vuex)

const store = new Vuex.Store({

    state : {
        base_url : "https://api.icamcongress.org/EpsilonApi/",
        img_base_url :"https://api.icamcongress.org/img/"
    }

})

export default store