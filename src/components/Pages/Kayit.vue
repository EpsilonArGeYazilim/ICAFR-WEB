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
    </div>

    <div class="container">
      <div>
        <br />
        <form role="form" class="contactForm">
          <div class="form-group">
            <p>* 1.Ad Soyad</p>
            <input
              type="text"
              class="form-control"
              name="ad_soyad"
              id="ad_soyad"
              placeholder="Ad Soyad"
              data-rule="minlen:4"
              data-msg="*"
            />

            <p style="color: #903025">{{ warnAdSoyad }}</p>
          </div>

          <div class="form-group">
            <p>* 2.Unvan</p>
            <select
              class="form-control"
              id="unvan"
              name="unvan"
              style="width: 50%"
              data-msg="*"
            >
              <option value="">deneme1</option>
              <option value="">deneme</option>
              <option value="">ykffyx</option>
              <p style="color: #903025">{{ warnUnvan }}</p>
            </select>
          </div>

          <div class="form-group">
            <p>3. Yukarıda "Diğer" Seçeneği İşaretlenmiş İse Unvan</p>
            <input
              type="text"
              class="form-control"
              name="unvan"
              id="unvan"
              placeholder="unvan"
              data-rule="-----"
            />
          </div>

          <div class="form-group">
            <p>* 4. Görevli Olduğunuz Kurum</p>
            <select
              class="form-control"
              id="kurum"
              name="kurum"
              style="width: 50%"
              data-msg="*"
            >
              <option value="">deneme1</option>
              <option value="">deneme</option>
              <option value="">Lktfktk</option>
            </select>
            <p style="color: #903025">{{ warnKurum }}</p>
          </div>
          <div class="form-group">
            <p>
              5. Yukarıda "Diğer" Seçeneği İşaretlenmiş İse Görevli Olunan
              Kurum/Kuruluş
            </p>
            <select
              class="form-control"
              id="kurum"
              name="tercihiniz"
              style="width: 50%"
            >
              <option value="">deneme1</option>
              <option value="">deneme</option>
              <option value="">Lktfktk</option>
            </select>
          </div>
          <div class="form-group">
            <p>* 6. Kongreye Katılım Tercihiniz</p>
            <select
              class="form-control"
              id="tercihiniz"
              name="tercihiniz"
              style="width: 50%"
            >
              <option value="">deneme1</option>
              <option value="">deneme</option>
              <option value="">Lktfktk</option>
            </select>
            <p style="color: #903025">{{ warnTercihiniz }}</p>
          </div>

          <div class="form-group">
            <p>* 8. Adresiniz</p>
            <input
              type="text"
              class="form-control"
              name="adres"
              id="adres"
              placeholder="Adresiniz"
              data-rule="minlen:4"
              data-msg="*"
            />
            <p style="color: #903025">{{ warnAdres }}</p>
          </div>
          <div class="form-group">
            <p>* 9. Telefon</p>
            <input
              type="number"
              class="form-control"
              name="telefon"
              id="telefon"
              placeholder="Telefon"
              data-rule="minlen:4"
              data-msg="*"
            />
            <p style="color: #903025">{{ warnTelefon }}</p>
          </div>
          <div class="form-group">
            <p>* 10. e-Posta</p>
            <input
              type="email"
              class="form-control"
              name="e_posta"
              id="e_posta"
              placeholder="e-posta"
              data-rule="minlen:4"
              data-msg="*"
            />
            <p style="color: #903025">{{ warnEposta }}</p>
          </div>
          <div class="form-group">
            <p>* 11. Kongre Katılım Ücreti Ödeme Bilgileriniz</p>
            <p>Dekont Tarihi</p>
            <input
              type="text"
              class="form-control"
              name="dekont_tarihi"
              id="dekont_tarihi"
              data-rule="minlen:4"
              data-msg="*"
            />
            <p style="color: #903025">{{ warnDekontTarihi }}</p>
            <br />
            <p>Dekont Numarası</p>
            <input
              type="number"
              class="form-control"
              name="dekont_numarasi"
              id="dekont_numarasi"
              data-rule="minlen:4"
              data-msg="*"
            />
            <p style="color: #903025">{{ warnDekontNumarası }}</p>
            <br />
            <p>Ödeme Yapılan Banka</p>
            <input
              type="text"
              class="form-control"
              name="banka"
              id="banka"
              data-rule="minlen:4"
              data-msg="*"
            />
            <p style="color: #903025">{{ warnBanka }}</p>
          </div>
          <br />
          <div class="btn bnt-light">
            <button @click="sendMail()" class="btn btn-primary" type="submit">
              <i class="fa fa-fw fa-lg fa-check-circle"></i>Gönder
            </button>
          </div>
        </form>
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
      warnAdSoyad: "",
      warnUnvan: "",
      warnKurum: "",
      warnTercihiniz: "",
      warnAdres: "",
      warnTelefon: "",
      warnEposta: "",
      warnDekontTarihi: "",
      warnDekontNumarası: "",
      warnBanka: "",

      mail: {
        ad_soyad: "",
        unvan: "",
        kurum: "",
        tercihiniz: "",
        adres: "",
        telefon: "",
        e_posta: "",
        dekont_tarihi: "",
        dekont_numarasi: "",
        banka: "",
      },
    };
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

      var url = store.state.base_url + "mail.php";

      this.warnAdSoyad = "";
      this.warnUnvan = "";
      this.warnKurum = "";
      this.warnTercihiniz = "";
      this.warnAdres = "";
      this.warnTelefon = "";
      this.warnEposta = "";
      this.warnDekontTarihi = "";
      this.warnDekontNumarası = "";
      this.warnBanka = "";

      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      var key = true;

      if (!(this.mail.ad_soyad.length == 0)) {
        this.warnAdSoyad = "* Lütfen ad soyad alanını boş bırakmayınız !";
        key = false;
      }
      if (!(this.mail.unvan.length == 0)) {
        this.warnUnvan = "* Lütfen unvan alanını boş bırakmayınız !";
        key = false;
      }
      if (!(this.mail.kurum.length == 0)) {
        this.warnKurum = "* Lütfen kurum alanını boş bırakmayınız !";
        key = false;
      }
      if (!(this.mail.tercihiniz.length == 0)) {
        this.warnTercihiniz = "* Lütfen katılım tercihi alanını boş bırakmayınız !";
        key = false;
      }
      if (!(this.mail.adres.length == 0)) {
        this.warnAdres = "* Lütfen adres alanını boş bırakmayınız !";
        key = false;
      }
      if (!(this.mail.telefon.length == 0)) {
        this.warnTelefon = "* Lütfen telefon alanını boş bırakmayınız !";
        key = false;
      }
      if (!(this.mail.e_posta.length == 0)) {
        this.warnEposta = "* Lütfen e-posta alanını boş bırakmayınız !";
        key = false;
      }
       if (!(this.mail.dekont_tarihi.length == 0)) {
        this.warnDekontTarihi = "* Lütfen dekont tarihi alanını boş bırakmayınız !";
        key = false;
      }
       if (!(this.mail.dekont_numarasi.length == 0)) {
        this.warnDekontNumarası = "* Lütfen dekont numarası alanını boş bırakmayınız !";
        key = false;
      }
       if (!(this.mail.banka.length == 0)) {
        this.warnOdeme = "* Lütfen ödeme yapılan banka alanını boş bırakmayınız !";
        key = false;
      }

      if (key == false) {
        return false;
      }

      var datas = {
        ad_soyad: this.mail.ad_soyad,
        unvan: this.mail.unvan,
        kurum: this.mail.kurum,
        tercihiz: this.mail.tercihiz,
        adres: this.mail.adres,
        telefon: this.mail.telefon,
        e_posta: this.mail.e_posta,
        dekont_tarihi:this.dekont_tarihi,
        dekont_numarasi:this.dekont_numarasi,
        banka:this.banka,
      };

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