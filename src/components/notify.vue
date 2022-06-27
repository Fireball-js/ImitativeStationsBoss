<template>
  <div class="notify">
    <p>推荐职位已经刷新!!!</p>
    <van-loading class="notify_loading" />
  </div>
</template>

<script>
export default {
  name: "notify",
};
</script>

<style>
.notify {
  font-size: 0.2rem;
  font-weight: 700;
  color: white;
  letter-spacing: 0.1rem;
  height: 0.4rem;
  text-align: center;
  padding-top: 0.08rem;
  background-color: rgb(20, 193, 187);
  margin-bottom: -0.1rem;

  animation: notify 1.5s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}

@keyframes notify {
  from {
    height: 0.4rem;
    padding-top: 0.08rem;
  }
  to {
    height: 0rem;
    padding-top: 0rem;
  }
}
.notify_loading {
  color: rgb(20, 193, 187);
  margin: 1rem;
}
</style>