<template>
  <div class="form">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
        {{ output }}
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      form: {
        email: "",
      },
      show: true,
      output: "",
    };
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    "form.email": function (n, o) {
      // console.log("new val", n);
      this.output = "Waiting for you to stop typing...";
      this.debouncedGetAnswer();
    },
  },
  created() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer() {
      let that = this;
      this.output = "Thinking...";
      setTimeout(() => {
        that.output = "Done！";
      }, 1000);
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
    },
  },
};
</script>

<style lang="less">
.form {
  max-width: 600px;
  margin: 0 auto;
}
</style>
