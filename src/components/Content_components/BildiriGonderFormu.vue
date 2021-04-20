<template>
  <div>
    <main class="app-content">
      <div class="row">
        <div class="col-md-12">
            <form role="form" class="contactForm">
          <p>* 1. Bildiri Başlığı (En Fazla 200 Karakter Kullanınız)</p>
          <div class="form-group" >
            <div class="validation"></div>
            <input
              v-model="mail.bildiri_basligi"
              type="text"
              name="bildiri_basligi"
              class="form-control"
              id="bildiri_basligi"
              placeholder="Bildiri Başlığı"
              data-rule="minlen:4"
              data-msg="*"
            />
            <p style="color: #903025">{{ warnBildiriBasligi }}</p>
          </div>
          <p>* 2. Yazar Unvanları, İsimleri ve İletişim Bilgileri</p>
          <div class="form-group">
            <input
              v-model="mail.yazar1"
              type="text"
              class="form-control"
              name="yazar1"
              id="yazar1"
              placeholder="1. Yazar"
              data-rule="email"
              data-msg="*"
            />

            <p style="color: #903025">{{ warnYazar }}</p>
          </div>
          <div class="form-group">
            <input
              v-model="mail.yazar2"
              type="text"
              class="form-control"
              name="yazar2"
              id="yazar2"
              placeholder="2. Yazar (Eğer bulunuyorsa)"
              data-rule="minlen:4"
              data-msg="*"
            />
          </div>
          <div class="form-group">
            <input
              v-model="mail.yazar3"
              type="text"
              class="form-control"
              name="yazar3"
              id="yazar3"
              placeholder="3. Yazar (Eğer bulunuyorsa)"
              data-rule="minlen:4"
              data-msg="*"
            />
          </div>
          <div class="form-group">
            <input
              v-model="mail.yazar4"
              type="text"
              class="form-control"
              name="yazar4"
              id="yazar4"
              placeholder="4. Yazar (Eğer bulunuyorsa)"
              data-rule="minlen:4"
              data-msg="*"
            />
          </div>
          <p>
            3. Lütfen Yazım Kurallarına Uygun Olarak Hazırladığınız 'Özetinizi'
            Yükleyiniz.
          </p>
          <p class="text-center">
            Yazar isimleri, Hakem Sürecinde Çıkartılacaktır. Özetiniz Üzerinde
            Durmasında Bir Hahsur Yoktur. En Fazla 16 MB Boyutunda .DOC ve .DOCX
            Dosyaları Yüklenebilir. Birden Fazla Bildiriniz Bulunuyorsa, Ayrı
            Formlar Kullanınız.
          </p>
          <div class="form-group">
            <input
              v-model="mail.eposta"
              type="text"
              class="form-control"
              name="eposta"
              id="eposta"
              placeholder="E-posta"
              data-rule="email"
              data-msg="*"
            />

            <p style="color: #903025">{{ warnEposta }}</p>
          </div>
          <div class="form-group row">
            <label class="control-label col-md-3">Dosya Seç</label>
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
          
        </form>
        <div class="btn bnt-light">
            <button @click="sendMail()" class="btn btn-primary" type="submit">
              <i class="fa fa-fw fa-lg fa-check-circle"></i>Gönder
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>


<script>

import axios from "axios";
import store from "../store";

export default {
  data() {
    return {
      warnBildiriBasligi: "",
      warnYazar: "",
      warnEposta:"",
      fileWarn: "",
      mail: {
        bildiri_basligi: "",
        yazar1: "",
        yazar2: "",
        yazar3: "",
        yazar4: "",
        eposta:"",
      },
      file: "",
      fileWarn: "",
    };
  },

  created() {},

  methods: {
    reload: function () {
      //location.reload();
    },
    sendMail: function () {
      this.warnBildiriBasligi = "";
      this.warnYazar = "";
      this.warnEposta="";

      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(!(re.test(this.mail.eposta)))
    {
        this.warnEposta="* Lütfen eposta alanını uygun formatta giriniz !";
    }
       var key = true;

      if (this.mail.bildiri_basligi.length > 200) {
        this.warnBildiriBasligi =
          "* Lütfen bildiri başlığı alanını maksimum 200 karakter giriniz !";
        key = false;
      }
      if (this.mail.yazar1.length == 0) {
        this.warnYazar = "* Lütfen yazar alanını boş bırakmayınız !";
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
        "mail2.php?bildiri_basligi=" +
        this.mail.bildiri_basligi +
        "&yazar1=" +
        this.mail.yazar1 +
        "&yazar2=" +
        this.mail.yazar2 +
        "&yazar3=" +
        this.mail.yazar3+
        "&yazar4="+
        this.mail.yazar4+
        "&email="+
        this.mail.eposta;

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

