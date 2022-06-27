<template>
  <div>
    <van-area
      :title="titleArea"
      :area-list="areaList"
      @cancel="citywrapCancel"
      @confirm="citywrapConfirm"
      @change="citywrapChange"
      :visible-item-count="12"
    />
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";

export default {
  name: "citywrap",
  data() {
    return {
      areaList,
      titleArea: "",
    };
  },
  methods: {
    citywrapCancel() {
      this.$emit("citywrapClose");
    },
    citywrapConfirm(city) {
      this.$emit("citywrapClose", city[1].name);
      this.citywrapValue = city[1].name;
    },
    citywrapChange(city) {
      let _city = city.getValues();
      this.titleArea = `${_city[0].name}-${_city[1].name}-${_city[2].name}`;
    },
  },
};
</script>

<style>
</style>