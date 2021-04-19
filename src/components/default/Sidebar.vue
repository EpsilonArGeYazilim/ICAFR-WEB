<template>
  <section id="blog" class="padd-section wow fadeInUp">
    <div class="hr-title-home hr-long center"><abbr>Duyurular</abbr></div>
    <div class="col-sm-12 sidenav">
      <hr/>
    <div class="container">
      <div class="row">
        <div
          v-for="(item, index) in result"
          :key="index"
          class="col-md-6 col-lg-4"
          style="margin-bottom: 10px"
        >
          <div class="block-blog text-left">
            <div class="content-blog">
              <a
              @click="reload()"
                :href="'/notice_detail?notice_id=' + item.id"
                style="font-size: 14px"
                class="readmore"
                v-html="'<div>' + item.header + '</div>'"
                ></a
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
            </div>
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
  methods:{
    reload: function() {
      location.reload();
    },
  },
  mounted: function () {
    let datas = [];
    let dataUrl = store.state.base_url + "Notice/getAllNotices.php?key=123";
    return axios
      .get(dataUrl)
      .then((response) => {
        //console.log(response);
        datas = response.data.data;

        this.result = datas;
        console.log(this.result[0].header);
      })
      .then((response) => {
        setTimeout(() => (this.situation = false), 5000);
      })
      .catch((err) => {
        console.log(err.response);
      });
  },

  components: {},
};
</script>

