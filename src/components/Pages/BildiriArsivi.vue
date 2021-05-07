<template>
  <section
    style="min-height: 720px"
    id="about-us"
    class="about-us padd-section wow fadeInUp"
  >
    <div class="container">
      <div class="section-title text-center">
        <div class="hr-title-home hr-long center">
          <abbr>Bildiri Arşivi</abbr>
        </div>
      </div>
    

    <div class="container">
      <div class="row justify-content-center">


          <div class="about-content">
            <h3 v-html="'<div>' + result.title + '</div>'"></h3>
            <p
              v-html="'<div>' + result.content + '</div>'"
            ></p>
          </div>

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
      result: [],
      img_base_url: store.state.img_base_url,
    };
  },
  mounted: function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    let dataUrl =
      store.state.base_url + "Mission/getAllColoumnMission.php?key=123";
    return axios
      .get(dataUrl)
      .then((response) => {
        //console.log(response);
        this.result = response.data.data;
        //console.log(this.result);
      })
      .catch((err) => {
        //console.log(err.response);
      });
  },

  components: {

  },
};
</script>

<style>
</style>