<template>
  <div>
    <footer class="footer" style="background-color: rgb(190 190 190);">
      <div class="container clearfix">
        <div class="row" >
          <div class="col-sm-4 col-md-4 col-lg-4">
            <div class="footer-logo">
              <div id="logo" class="pull-left">
                <a class="scrollto"
                  ><router-link to="/" tag="a"
                    ><img
                      align="left"
                      id="logoepsilon"
                      :src="img_base_url + result.logo_url"
                      alt="" /></router-link
                ></a>
              </div>
              <p v-html="'<div>' + result.slogan + '</div>'"></p>
              <div>
                <div>
                  <div class="template-demo">
                    <a
                      type="button"
                      class="btn btn-social-icon btn-outline-facebook"
                      :href="contact.facebook"
                    >
                      <i class="fa fa-facebook"></i>
                    </a>
                    <a
                      type="button"
                      class="btn btn-social-icon btn-outline-twitter"
                      :href="contact.twitter"
                    >
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a
                      type="button"
                      class="btn btn-social-icon btn-outline-linkedin"
                      :href="contact.linkedin"
                    >
                      <i class="fa fa-linkedin"></i>
                    </a>
                    <a
                      type="button"
                      class="btn btn-social-icon btn-outline-instagram"
                      :href="contact.instagram"
                    >
                      <i class="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-4 col-md-4 col-lg-4">
            <div class="list-menu">
              <div id="list">
                <div>
                  <i class="fa fa-map-marker"> Adres</i>
                  <p>{{ contact.address }}</p>
                </div>

                <div class="email">
                  <i class="fa fa-envelope"> Mail</i>
                  <a href="mailto:contact.site_email">
                    <p>{{ contact.site_email }}</p></a
                  >
                  <a href="mailto:contact.site_email2">
                    <p>{{ contact.site_email2 }}</p></a
                  >
                </div>

                <div>
                  <i class="fa fa-phone"> Telefon</i>
                  <a href="tel:contact.phone">
                    <p>{{ contact.phone }}</p></a
                  >
                  <a href="tel:contact.phone">
                    <p>{{ contact.phone2 }}</p></a
                  >
                </div>
              </div>
            </div>
          </div>          


          <div class="col-sm-4 col-md-4 col-lg-4">
            <Fmenu />
          </div>
        </div>
      </div>

      <div class="copyrights">
        <div class="container">
          <p>
            &copy; {{ year }} ICAFR.ORG <a href="https://epsilonarge.com">Epsilon Arge Yazılım</a> Tüm Hakları Saklıdır
          </p>

          <div class="credits"></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Fmenu from "../default/F_menu";
import ContactForm from "../Content_components/ContactForm";
import axios from "axios";
import store from "../store";

export default {
  data() {
    return {
      result: [],
      contact: [],
      img_base_url: store.state.img_base_url,
      year: new Date().getFullYear(),
    };
  },

  methods: {},
  created: function () {
    let datas = [];
    let dataUrl =
      store.state.base_url + "General/getAllColumnGeneral.php?key=123&lan_id=1";
    axios
      .get(dataUrl)
      .then((response) => {
        //console.log(response);
        datas = response.data.data;

        this.result = datas;
      })
      .catch((err) => {
        console.log(err.response);
      });

    dataUrl = store.state.base_url + "Contact/getContactAllColumn.php?key=123&lan_id=1";
    axios
      .get(dataUrl)
      .then((response) => {
        //console.log(response);
        this.contact = response.data.data;
      })
      .catch((err) => {
        console.log(err.response);
      });
  },

  components: {
    Fmenu,
    ContactForm,
  },
};
</script>
