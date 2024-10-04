<template>
  <div class="home">
    <h1>Home page</h1>

    <b-button size="sm" @click="toggle">
      {{ show ? "Hide" : "Show" }} Alert
    </b-button>
    <b-alert v-model="show" class="mt-3" dismissible @dismissed="dismissed">
      Hello {{ name }}!
    </b-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "BootstrapVue",
      show: true,
    };
  },
  watch: {
    show(newVal) {
      console.log("Alert is now " + (newVal ? "visible" : "hidden"));
    },
  },
  methods: {
    toggle() {
      console.log("Toggle button clicked");
      this.show = !this.show;
    },
    dismissed() {
      console.log("Alert dismissed");
    },
  },
};
</script>

<style lang="less">
.home {
  max-width: 600px;
  margin: 0 auto;
}
</style>
