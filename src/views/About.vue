<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b-button
      v-b-popover.hover.auto="'I am popover directive content!'"
      title="Popover Title"
    >
      Hover Me
    </b-button>

    <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
      <b-dropdown-item>First Action</b-dropdown-item>
      <b-dropdown-item>Second Action</b-dropdown-item>
      <b-dropdown-item>Third Action</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item active>Active action</b-dropdown-item>
      <b-dropdown-item disabled>Disabled action</b-dropdown-item>
    </b-dropdown>

    <b-button @click="makeToast()">Show Toast</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toastCount: 0,
    };
  },
  methods: {
    makeToast(append = false) {
      this.toastCount++;
      this.$bvToast.toast(`This is toast number ${this.toastCount}`, {
        title: "BootstrapVue Toast",
        autoHideDelay: 5000,
        appendToast: append,
      });
    },
  },
};
</script>
