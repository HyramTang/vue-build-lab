<template>
  <div>
    <TheHeader></TheHeader>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
</script>
