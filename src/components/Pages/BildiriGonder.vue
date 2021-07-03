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
            <h3 v-html="'<div>' + result.name + '</div>'"></h3>
            <p v-html="'<div>' + result.content + '</div>'"></p>
            
          </div>
             <img :src="img_base_url+result.img_url" alt="About" >
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
      result:{ },
      fileWarn: "",
      img_base_url: store.state.img_base_url,
    };
  },
  components:{
    BildiriGonderFormu,
  },
    mounted: function () {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    let dataUrl =
      store.state.base_url + "Page/getPage.php?key=123&page_number=8&lan_id=1";
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

 /* methods: {
    NoImg: function(event)
    {
         setTimeout(() => event.target.style.display = 'none');
    },
  },*/
};
</script>

<style>
.form-control {
  width: 50%;
}
</style>