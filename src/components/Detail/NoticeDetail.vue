<template>
  <section id="about-us" class="about-us padd-section wow fadeInUp">
    <div class="detail">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <img :src="img_base_url + result.img_url" alt="img" />
          </div>

          <div class="col-md-12">
            <div class="about-content">
              <br />
              <h2
                align="center"
                style="color: gray"
                v-html="'<div>' + result.header + '</div>'"
              ></h2>
              <p v-html="'<div>' + result.content + '</div>'" align="center"></p>
              <p align="right">{{ result.reg_date }}</p>
            </div>
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
      notice_id: this.$route.query.notice_id,
      img_base_url: store.state.img_base_url,
    };
  },
  mounted: function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    window.onpopstate = function (event) {
      location.reload();
    };

    let dataUrl = store.state.base_url + "Notice/getByIdNotice.php?key=123";
    return axios
      .post(dataUrl, JSON.stringify({ id: this.notice_id }))
      .then((response) => {
        //console.log(response);
        this.result = response.data.data;
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
};
</script>