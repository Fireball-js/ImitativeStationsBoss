<template>
  <div class="job_item">
    <span class="job_item_title">{{ obj.title }}</span>
    <span class="job_item_salary">{{ obj.salary }}</span>
    <div class="job_item_info">
      <span v-for="(item, index) in obj.area.slice(1)" :key="index">{{
        item
      }}</span>
    </div>
    <span class="job_item_company">{{ obj.h2_txt }}</span
    ><br />
    <div class="job_item_hr">
      <span class="job_item_img" :style="'backgroundImage:url(' + imgurl + ')'"
        ><img v-if="obj.hr.img_avatar"
      /></span>
      <span>{{ obj.hr.hr_txt }}</span>
      <span class="job_item_pos">{{ obj.area[0] }}<em>X</em></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "jobItem",
  data() {
    return {
      imgurl: require("../assets/hr.png"),
    };
  },
  props: ["obj"],
};
</script>

<style scoped>
</style>