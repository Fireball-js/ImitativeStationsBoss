<template>
  <div>
    <van-nav-bar
      title="wait programming"
      left-text="返回"
      left-arrow
      @click-left="onClickBack"
    />
    <div class="text">空白页面</div>
  </div>
</template>

<script>
export default {
  msg: "wait to programing",
  methods: {
    onClickBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.text {
  color: black;
  font-size: 1rem;
  margin: 4rem 1rem;
}
</style>