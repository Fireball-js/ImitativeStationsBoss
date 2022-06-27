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

<style>
.job_item {
  background-color: white;
  margin: 0.1rem 0;
  padding: 0.2rem 0.4rem;
}
.job_item_title {
  font-size: 0.3rem;
  font-weight: 700;
}
.job_item_salary {
  font-size: 0.3rem;
  color: rgb(20, 198, 167);
  float: right;
}
.job_item_info {
  margin: 0.1rem 0 0.15rem 0;
}
.job_item_info span {
  font-size: 0.1rem;
  margin-right: 0.1rem;
  padding: 0.04rem 0.08rem 0.02rem 0.08rem;
  border-radius: 5%;
  background-color: rgb(221, 221, 221);
}
.job_item_company {
  font-size: 0.2rem;
}
.job_item_hr {
  margin: 0.1rem 0;
  line-height: 0.5rem;
}
.job_item_img {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin: 0 0.2rem -0.16rem 0;
  /* background-image: "url("+require('../assets/hr.png')+")"; */
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 0.5rem 0.5rem;
  display: inline-block;
}
.job_item_pos {
  color: rgb(136, 136, 136);
  float: right;
}
.job_item_pos em {
  margin: 0 0 0 0.2rem;
}
</style>