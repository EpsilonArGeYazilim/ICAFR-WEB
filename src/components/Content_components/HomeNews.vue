<template>
  <section id="blog" class="padd-section wow fadeInUp">
    <div class="container">
      <div class="section-title text-center">
        <div class="hr-title-home hr-long center"><abbr>Etkinlikler</abbr></div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div
          v-for="(item, index) in result"
          :key="index"
          class="col-md-6 col-lg-4"
          style="margin-bottom: 10px"
        >
          <div class="block-blog text-left">
            <router-link :to="'/news_detail?new_id=' + item.id">
              <div style="min-height: 170px">
                <img :src="img_base_url + item.img_url" alt="img" />
              </div>
            </router-link>
            <div class="content-blog">
              <router-link
                :to="'/news_detail?new_id=' + item.id"
                style="font-size: 14px"
                class="readmore"
                v-html="'<div>' + item.header + '</div>'"
                ></router-link
              >
              <p
                style="
                  overflow: hidden;
                  display: -webkit-box;
                  -webkit-line-clamp: 1;
                  -webkit-box-orient: vertical;
                "
                v-html="'<div>' + item.content + '</div>'"
              ></p>
              <p>{{ item.reg_date }}</p>
              <router-link
                :to="'/news_detail?new_id=' + item.id"
                tag="a"
                class="pull-right readmore"
                >Daha fazla</router-link
              >
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
      situation: false,
      img_base_url: store.state.img_base_url,
    };
  },
  created: function () {
    let datas = [];
    let dataUrl = store.state.base_url + "NewClass/getByNumberNews.php?key=123";
    axios
      .post(dataUrl, JSON.stringify({ number: 3 }))
      .then((response) => {
        //console.log(response);
        datas = response.data.data;

        this.result = datas;
      })
      .catch((err) => {
        console.log(err.response);
      });
  },

  components: {},
};
</script>

<style>
</style>