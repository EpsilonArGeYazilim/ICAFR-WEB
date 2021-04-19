<template>
    <section
    style="min-height: 720px"
    id="about-us"
    class="about-us padd-section wow fadeInUp"
  >
    <Slider/>   
  <div class="container">
    <div class="row content">
      
      <div class="col-sm-8 text-left">
        <div class="col-md-6 text-center">
          <div class="about-content">
            <h3 v-html="'<div>' + result.name + '</div>'"></h3>
            <p
              v-html="'<div>' + result.content + '</div>'"
            ></p>
          </div>
          <img :src="img_base_url+result.img_url" alt="About"/>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
    import Slider from "../Content_components/Slider";
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
      store.state.base_url + "Page/getPage.php?key=123&page_number=1";
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
       components: {
        Slider,
        }
    }
</script>