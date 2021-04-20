<template>
  <section
    style="min-height: 720px"
    id="about-us"
    class="about-us padd-section wow fadeInUp"
  >
    <div class="container">
      <div class="section-title text-center">
        <div class="hr-title-home hr-long center">
          <abbr>Bildiri Gönder </abbr>
        </div>
      </div>
    </div>

    <div class="container">
      <div>
        <div class="col-md-12 text-center">
          <div class="about-content">
            <p>
              Kongre Yazım Kurallarına Uygun Olarak Hazırladığınız Bildiri
              Özetini, Aşağıda Linki Verilen Formu Kullanarak Sistemimize
              Yükleyebilirsiniz.
            </p>
            <p>
              Dosya Boyutunun 16MB Geçmemesine ve .DOC/.DOCX Uzantılı Olmasına
              Dikkat Ediniz.
            </p>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br />
        <BildiriGonderFormu/>       
      </div>
    </div>
  </section>
</template>



<script>
import axios from "axios";
import store from "../store";
import BildiriGonderFormu from "../Content_components/BildiriGonderFormu";
export default {
  data() {
    return {  
      fileWarn: "",
    };
  },
  components:{
    BildiriGonderFormu,
  },
  methods: {
    sendMail: function () {
      axios
        .get("http://www.geoplugin.net/json.gp")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });

      console.log(window.location.host);

      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

     


      axios
        .post(url, JSON.stringify(datas))
        .then((response) => {
          if (response.data == true) {
            location.reload();
          }
          //console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>

<style>
.form-control {
  width: 50%;
}
</style>