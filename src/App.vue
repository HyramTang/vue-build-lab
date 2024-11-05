<template>
  <TheHeader></TheHeader>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
</script>
