import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import { router } from "../router"

Vue.use(Vuex)

const store = new Vuex.Store({

    state : {
        base_url : "http://kongre.epsilonarge.com/EpsilonApi/",
        img_base_url :"http://kongre.epsilonarge.com/img/"
    }

})

export default store