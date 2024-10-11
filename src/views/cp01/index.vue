<template>
  <div>
    <van-cell-group title="表单数据">
      <van-field v-model="value" label="文本" placeholder="请输入用户名" />
      <van-field
        readonly
        clickable
        label="城市"
        :value="fieldValue"
        placeholder="选择城市"
        @click="showPicker = true"
      />
    </van-cell-group>
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>

    <van-cell-group title="组件跳转">
      <van-cell title="cp02" is-link to="cp02" />
    </van-cell-group>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
const columns = [
  "杭州",
  "宁波",
  "温州",
  "绍兴",
  "湖州",
  "嘉兴",
  "金华",
  "衢州",
];
const fieldValue = ref("");
const showPicker = ref(false);

const onConfirm = (value) => {
  fieldValue.value = value;
  showPicker.value = false;
};
</script>
