<template>
  <div class="body_sty">
    <!-- 首页轮播图 -->
    <van-swipe
      class="my-swipe loginBox"
      :autoplay="2000"
      indicator-color="white"
      :show-indicators="true"
    >
      <van-swipe-item class="loginBg loginBg_1"></van-swipe-item>
      <van-swipe-item class="loginBg loginBg_2"></van-swipe-item>
      <van-swipe-item class="loginBg loginBg_3"></van-swipe-item>
    </van-swipe>
    <div class="login_btn">
      <van-button type="primary" to="/wait">我要招人</van-button>
      <van-button type="primary" to="/joblist">我要应聘</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "boss",
  data() {
    return {
      msg: "Boss Demo",
    };
  },
};
</script>

<style scoped>
.body_sty {
  font-size: 0.6rem;
  height: 100%;
  position: relative;
}
.loginBox {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  /* margin: 1rem auto; */
}
.loginBg {
  height: 100%;
  width: 100%;
}
.loginBg_1 {
  background-image: url("../assets/loginMask/1.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
}
.loginBg_2 {
  background-image: url("../assets/loginMask/2.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
}
.loginBg_3 {
  background-image: url("../assets/loginMask/3.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
}
.login_btn {
  width: 5.8rem;
  height: 0.8rem;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  margin-left: -2.9rem;
  text-align: center;
}
.login_btn button {
  width: 1.8rem;
  margin: 0 0.5rem;
}
</style>
