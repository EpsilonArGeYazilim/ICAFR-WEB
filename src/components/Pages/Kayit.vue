<template>
  <section
    style="min-height: 720px"
    id="about-us"
    class="about-us padd-section wow fadeInUp"
  >
    <div class="container">
      <div class="section-title text-center">
        <div class="hr-title-home hr-long center">
          <abbr>Kayıt</abbr>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6 text-center">
          <div class="about-content">
            <h3 v-html="'<div>' + result.name + '</div>'"></h3>
            <p v-html="'<div>' + result.content + '</div>'"></p>
          </div>
          <img :src="img_base_url + result.img_url" alt="About" />
        </div>
      </div>
    </div>

    <div class="container">
      <div>
        <br />
        <form role="form" class="contactForm">
          <div class="form-group">
            <p>* 1. Unvan</p>
            <input
              type="text"
              class="form-control"
              name="unvan"
              id="unvan"
              placeholder="Unvan"
              data-rule="minlen:4"
              data-msg="*"
              v-model="mail.unvan"
            />
            <p style="color: #903025">{{ warnUnvan }}</p>
          </div>
          <div class="form-group">
            <p>* 2. Ad Soyad</p>
            <input
              type="text"
              class="form-control"
              name="ad_soyad"
              id="ad_soyad"
              placeholder="Ad Soyad"
              data-rule="minlen:4"
              data-msg="*"
              v-model="mail.ad_soyad"
            />
            <p style="color: #903025">{{ warnAdSoyad }}</p>
          </div>

          <div class="form-group">
            <p>* 3. Kurum/Kuruluş</p>
            <input
              type="text"
              class="form-control"
              name="kurum"
              id="kurum"
              placeholder="Kurum"
              data-rule="minlen:4"
              data-msg="*"
              v-model="mail.kurum"
            />
            <p style="color: #903025">{{ warnKurum }}</p>
          </div>

          <div class="form-group">
            <p>* 4. Telefon</p>
            <input
              type="number"
              class="form-control"
              name="telefon"
              id="telefon"
              placeholder="Telefon"
              data-rule="minlen:9"
              data-msg="*"
              v-model="mail.telefon"
            />
            <p style="color: #903025">{{ warnTelefon }}</p>
          </div>
          <div class="form-group">
            <p>* 5. e-Posta</p>
            <input
              type="email"
              class="form-control"
              name="e_posta"
              id="e_posta"
              placeholder="e-posta"
              data-rule="minlen:4"
              data-msg="*"
              v-model="mail.e_posta"
            />
            <p style="color: #903025">{{ warnEposta }}</p>
          </div>
          <div class="form-group row">
            <label class="control-label col-md-3">
              6. Ödeme Belgesi (Dekont) Yükle:
            </label>
            <div class="col-md-8">
              <div class="fileupload fileupload-new" data-provides="fileupload">
                <p style="color: red">{{ fileWarn }}</p>
                <div class="row"></div>
                <div>
                  <span class="btn btn-theme02 btn-file">
                    <input id="file" type="file" ref="file" class="default" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <br />
        </form>
        <div class="btn bnt-light">
          <button @click="sendMail()" class="btn btn-primary" type="submit">
            <i class="fa fa-fw fa-lg fa-check-circle"></i>Gönder
          </button>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
import axios from "axios";
import store from "../store";
export default {
  data() {
    
    return {
      result :[],
      img_base_url: store.state.img_base_url,
      fileWarn: "",
      file: "",
      warnAdSoyad: "",
      warnUnvan: "",
      warnKurum: "",
      warnTelefon: "",
      warnEposta: "",

      mail: {
        ad_soyad: "",
        unvan: "",
        kurum: "",
        telefon: "",
        e_posta: "",
      },
    };
  },
  mounted: function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    let dataUrl =
      store.state.base_url + "Page/getPage.php?key=123&page_number=6&lan_id=1";
    return axios
      .get(dataUrl)
      .then((response) => {
        //console.log(response);
        this.result = response.data.result;
        //console.log(this.result);
      })
      .catch((err) => {
        //console.log(err.response);
      });
  },
  methods: {
    reload: function () {
      //location.reload();
    },
    sendMail: function () {
      this.warnAdSoyad = "";
      this.warnUnvan = "";
      this.warnKurum = "";
      this.warnTelefon = "";
      this.warnEposta = "";
   var key = true;
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(!(re.test(this.mail.e_posta)))
    {
        this.warnEposta="* Lütfen eposta alanını uygun formatta giriniz !";
    }
      var key = true;
      if (this.mail.ad_soyad.length == 0) {
        this.warnAdSoyad = "* Lütfen ad soyad alanını boş bırakmayınız !";
        key = false;
      }
      if (this.mail.unvan.length == 0) {
        this.warnUnvan = "* Lütfen unvan alanını boş bırakmayınız !";
        key = false;
      }
      if (this.mail.kurum.length == 0) {
        this.warnKurum = "* Lütfen kurum alanını boş bırakmayınız !";
        key = false;
      }

      if (this.mail.telefon.length == 0) {
        this.warnTelefon = "* Lütfen telefon alanını boş bırakmayınız !";
        key = false;
      }
      if (this.mail.e_posta.length == 0) {
        this.warnEposta = "* Lütfen e-posta alanını boş bırakmayınız !";
        key = false;
      }

      if (key == false) {
        return false;
      }

      this.file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append("file", this.file);
      var query =
        store.state.base_url +
        "CreateKayitForm.php?unvan=" +
        this.mail.unvan +
        "&ad_soyad=" +
        this.mail.ad_soyad +
        "&kurum=" +
        this.mail.kurum +
        "&tel=" +
        this.mail.telefon +
        "&eposta=" +
        this.mail.e_posta;

      axios
        .post(query, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          //conso.log(error);
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