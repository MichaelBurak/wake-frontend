<template>
  <div style="background-color: #222c3c">
    <gb-heading weight="light" tag="h1"
      >Oh A Lot Of Fun At Finnegans Wake
      <gb-icon name="nights_stay"></gb-icon>
    </gb-heading>
    <gb-divider color="blue" theme="dark"></gb-divider>
    <gb-avatar
      size="huge"
      src="https://cdn.theculturetrip.com/wp-content/uploads/2015/06/screen-shot-2016-09-28-at-4-56-55-pm.png"
    ></gb-avatar>
    <!-- <gb-checkbox size="large" status="success" description="Activate 'Night Mode' -- more creative text" v-model="checkBox" ></gb-checkbox> -->
    <gb-input
      size="large"
      value="bar"
      v-on:submit="submitPrompt"
      v-model="prompt"
    ></gb-input>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Home",
  data() {
    return {
      checkBox: false,
      prompt:
        "Don't be absintheminded -- type in the box, hit enter and wait a sec to generate text!",
    };
  },
  methods: {
    submitPrompt: function () {
      var vm = this;
      this.isLoading = true;
      axios({
        method: "post",
        url: " https://aitextgenwake-api-acd3vv5aua-uw.a.run.app/generate",
        data: {
          prompt: this.prompt,
        },
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then(function (response) {
          vm.prompt = response.data.prompt;
          vm.isLoading = false;
        })
        .catch(function (error) {
          console.log(error);
          vm.isLoading = false;
        });
    },
  },
};
</script>