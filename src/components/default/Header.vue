<template>
  <header id="header" class="header header-hide">
    <nav
      style="flex-flow: wrap"
      class="navbar navbar-expand-lg navbar-expand-lg navbar-light"
    >
      <div id="logo" class="pull-left">
        <h1>
          <router-link
            v-on:click="scrollTop"
            class="nav-item active item"
            :to="'/'"
            tag="a"
          >
            <img
              align="left"
              id="logoepsilon"
              :src="img_base_url + result.logo_url"
              alt=""
            />
          </router-link>
        </h1>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav" style="margin: auto">
          <li v-on:click="scrollTop" class="nav-item active item">
            <router-link class="nav-link" to="/" tag="a">Anasayfa</router-link>
          </li>
          <li v-on:click="scrollTop" class="nav-item active item">
            <router-link class="nav-link" to="/kongre_hakkinda" tag="a"
              >Kongre Hakkında</router-link
            >
          </li>
          <li v-on:click="scrollTop" class="nav-item active item">
            <router-link class="nav-link" to="/onemli_tarihler" tag="a"
              >Önemli Tarihler</router-link
            >
          </li>
          <li v-on:click="scrollTop" class="nav-item active item">
            <router-link class="nav-link" to="/kurullar" tag="a"
              >Kurullar</router-link
            >
          </li>
          <li v-on:click="scrollTop" class="nav-item active item">
            <router-link class="nav-link" to="/paydaslar" tag="a"
              >Paydaşlar</router-link
            >
          </li>
          <li v-on:click="scrollTop" class="nav-item active item">
            <router-link class="nav-link" to="/bildiri_gonder" tag="a"
              >Bildiri Gönder</router-link
            >
          </li>
          <li v-on:click="scrollTop" class="nav-item active item">
            <router-link class="nav-link" to="/kayit" tag="a"
              >Kayıt</router-link
            >
          </li>
          <li v-on:click="scrollTop" class="nav-item active item">
            <router-link class="nav-link" to="/kitaplar" tag="a"
              >Kitaplar</router-link
            >
          </li>
          <li v-on:click="scrollTop" class="nav-item active">
            <router-link class="nav-link item" to="/contact" tag="a"
              >İletişim</router-link
            >
          </li>
        </ul>
      </div>
      <div class="form-group" style="margin-right:10px;">
          <a href="http://icafr.org" style="color:red;" >
            <h4 style="color:#800000;">TR</h4>
            </a>
          <a href="http://en.icafr.org" style="color:red;">
            <h4 style="color:#800000;">EN</h4>
            </a>
        </div>
    </nav>
  </header>
</template>



<script>
import Hmenu from "./H_menu";
import axios from "axios";
import store from "../store";

export default {
  data() {
    return {
      result: [],
      category: [],
      img_base_url: store.state.img_base_url,
    };
  },
  mounted: function () {
    let dataUrl =
      store.state.base_url + "General/getAllColumnGeneral.php?key=123&lan_id=1";
    axios
      .get(dataUrl)
      .then((response) => {
        //console.log(response);
        this.result = response.data.data;
      })
      .catch((err) => {
        console.log(err.response);
      });

    dataUrl = store.state.base_url + "Category/getAllCategory.php?key=123&lan_id=1";
    axios
      .get(dataUrl)
      .then((response) => {
        //console.log(response);
        this.category = response.data.data;
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
  methods: {
    scrollTop: function (event) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
  components: {
    Hmenu,
  },
};
</script>
