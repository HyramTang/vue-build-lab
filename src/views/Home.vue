<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    {{ name }}
    <br />
    <button type="button" @click="onClick" style="width: 50px">
      {{ count }}
    </button>
  </div>
</template>

<script setup>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { ref } from "vue";

const name = ref("hyram");
const count = ref(0);
const onClick = () => count.value++;
</script>
