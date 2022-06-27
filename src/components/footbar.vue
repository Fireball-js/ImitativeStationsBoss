<template>
  <div>
    <!-- app底部菜单 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">职位</van-tabbar-item>
      <van-tabbar-item icon="points" dot>有了</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="5">消息</van-tabbar-item>
      <van-tabbar-item icon="setting-o" badge="20">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "footbar",
  data() {
    return {
      active: 2,
    };
  },
};
</script>

<style scoped>
</style>