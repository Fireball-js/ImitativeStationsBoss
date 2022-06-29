<template>
  <div class="choosewrap_main">
    <!-- 返回按钮事件 -->
    <van-nav-bar title="筛选" left-arrow @click-left="choosewrapClose" />
    <!-- 学历筛选 -->
    <h1>学历要求</h1>
    <van-grid :column-num="3" :gutter="0.4 + 'rem'">
      <van-grid-item @click="choosewraped($event)" text="学历不限" />
      <van-grid-item @click="choosewraped($event)" text="初中" />
      <van-grid-item @click="choosewraped($event)" text="高中" />
      <van-grid-item @click="choosewraped($event)" text="大专" />
      <van-grid-item @click="choosewraped($event)" text="本科" />
    </van-grid>
    <!-- 薪资待遇 -->
    <h1>薪资待遇</h1>
    <van-grid :column-num="3" :gutter="0.4 + 'rem'">
      <van-grid-item @click="choosewraped($event)" text="不限" />
      <van-grid-item @click="choosewraped($event)" text="5k以下" />
      <van-grid-item @click="choosewraped($event)" text="5k-8k" />
      <van-grid-item @click="choosewraped($event)" text="8k-13k" />
      <van-grid-item @click="choosewraped($event)" text="13k以上" />
    </van-grid>
    <div class="choosewrap_btn">
      <van-button @click="choosewrapClose" type="info">确认</van-button>
      <van-button @click="choosewrapClose" plain type="info">取消</van-button>
    </div>
  </div>
</template>

<script>
// 导入自定义css
import "../assets/vant_users.css";

export default {
  name: "choosewrap",
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    choosewrapClose() {
      this.$emit("choosewrapClose");
    },
    choosewraped($e) {
      let _cls = $e.target.getAttribute("class");
      let _clsArr = _cls.split(" ");
      let _choosed = false;
      //   判断是否选中
      for (let i = 0; i < _clsArr.length; i++) {
        if (_clsArr[i] == "van-grid-item__focus") {
          _choosed = true;
          _clsArr.splice(i, 1);
          break;
        } else {
          _choosed = false;
        }
      }
      //   根据_choosed判断是否加入focus
      if (!_choosed) {
        _clsArr.push("van-grid-item__focus");
      }

      //   更新后的class加入节点
      let _newCls = _clsArr.join(" ");
      $e.target.setAttribute("class", _newCls);
    },
  },
};
</script>
<style scoped>
.choosewrap_main h1 {
  font-size: 0.25rem;
  margin: 0.3rem;
  font-weight: 700;
}
.choosewrap_btn {
  text-align: center;
  margin: 0.5rem;
}
.choosewrap_btn button {
  width: 2rem;
  margin: 0 0.3rem;
}
.van-grid /deep/ .van-grid-item__text {
  pointer-events: none;
}
</style>