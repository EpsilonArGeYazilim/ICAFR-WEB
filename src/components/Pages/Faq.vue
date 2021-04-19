
<template>
  <section id="contact" class="padd-section wow fadeInUp">
    <div class="container">
      <div class="section-title text-center">
        <div class="hr-title-home hr-long center">
          <abbr>Sıkça Sorulan Sorular</abbr>
        </div>
      </div>

      <div class="container">
        <div class="wrapper">
          <div class="wrap-1" v-for="(item, index) in result" :key="index">
            <input type="radio" :id="'tab-' + index" name="tabs" />
            <label :for="'tab-' + index"
              ><div v-html="'<div>' + item.question + '</div>'"></div>
              <div class="cross"></div
            ></label>
            <div
              class="content"
              v-html="'<div>' + item.answer + '</div>'"
            ></div>
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
    };
  },
  mounted: function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    let dataUrl = store.state.base_url + "Faq/getAllFaq.php?key=123";
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

  components: {},
};
</script>
<style >
.wrapper {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Space Mono", monospace;
  color: #3e474f;
  max-width: 600px;
  width: 100%;
  margin: 10vh auto;
}

.wrapper h1 {
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
}

.wrapper input {
  display: none;
}

.wrapper label {
  display: flex;
  width: 100%;
  height: 50px;
  cursor: pointer;
  border: 3px solid #3e474f;
  user-select: none;
}

.wrapper label div:first-child {
  width: 100%;
  line-height: 45px;
  margin-left: 10px;
  font-size: 1.2em;
}

.cross {
  margin-right: 15px;
  margin-top: 3px;
}

.cross:before,
.cross:after {
  content: "";
  border-top: 2px solid #3e474f;
  width: 15px;
  display: block;
  margin-top: 18px;
  transition: 0.3s;
}

.cross:after {
  transform: rotate(90deg);
  margin-top: -2px;
}

.wrapper .content {
  box-sizing: border-box;
  font-size: 0.9em;
  margin: 10px 10px;
  max-height: 0;
  overflow: hidden;
  transition: max-height, 0.5s;
}

input:checked ~ .content {
  max-height: 400px;
  transition: max-height, 1s;
}

input:checked ~ label .cross:before {
  transform: rotate(180deg);
}

input:checked ~ label .cross:after {
  transform: rotate(0deg);
}

.questions {
  margin-top: 20px;
  max-height: 0;
  overflow: hidden;
  transition: max-height, 0.5s;
}

.questions label {
  border: none;
  box-shadow: none;
  margin: 0;
}

input:checked ~ .questions {
  max-height: 400px;
  border-bottom: 2px solid #3e474f;
  transition: 1s;
}

/*----------tool-tip------------*/

.wrapper .tip {
  color: #f03768;
  cursor: help;
  position: relative;
  overflow: visible;
  font-family: monospace;
  font-size: 1.3em;
}

.tip:before,
.tip:after {
  position: absolute;
  opacity: 0;
  z-index: -100;
  transform: translateY(-30%);
  transition: 0.4s;
}

.tip:before {
  content: "";
  border-style: solid;
  border-width: 0.8em 0.5em 0 0.5em;
  border-color: #3e474f transparent transparent transparent;
  transform: translateY(-200%);
  bottom: 90%;
  left: 50%;
}

.tip:after {
  content: attr(data-tip);
  background: #3e474f;
  color: white;
  width: 150px;
  padding: 10px;
  font-size: 0.8em;
  bottom: 150%;
  left: -50%;
}

.tip:hover:before,
.tip:hover:after {
  opacity: 1;
  z-index: 100;
  transform: scaleY(1);
}
</style>