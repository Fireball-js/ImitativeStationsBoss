<template>
  <div>
    <van-sticky>
      <!-- 头部显示栏 -->
      <van-nav-bar class="nav_bar" left-text="Web前端">
        <template #right>
          <van-icon @click="jobIntentionOpen" name="plus" />
          <van-icon name="search" />
        </template>
      </van-nav-bar>
      <!-- 选择菜单栏 -->
      <div class="nav_title">
        <van-button
          class="chooseBtn"
          type="primary"
          size="mini"
          @click="notifyFn"
          >推荐</van-button
        >
        <van-button
          class="chooseBtn"
          type="primary"
          size="mini"
          @click="notifyFn"
          >附近</van-button
        >
        <van-button
          class="chooseBtn"
          type="primary"
          size="mini"
          @click="notifyFn"
          >最新</van-button
        >
        <!-- 条件筛选呼出 -->
        <van-button
          class="filterBtn"
          type="primary"
          size="mini"
          @click="choosewrapOpen"
          >筛选
          <div class="footIcon"></div>
        </van-button>
        <!-- 城市选择呼出 -->
        <van-button
          class="filterBtn"
          type="primary"
          size="mini"
          @click="citywrapOpen"
          >{{ citywrapValue }}
          <div class="footIcon"></div>
        </van-button>
      </div>
    </van-sticky>
    <!-- 职位显示栏 -->
    <!-- 头部刷新栏 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="job_list">
        <!-- 增加notify组件，更新列表时展示 -->
        <notify v-show="ifshow" />
        <jobItem
          v-for="(obj, index) in jobsData"
          :key="index"
          :obj="obj"
        ></jobItem>
      </div>
    </van-pull-refresh>
    <!-- app底部菜单 -->
    <div class="footbar">
      <footbar></footbar>
    </div>
    <!-- 城市选择呼出栏 -->
    <div
      :class="citywrapClass"
      v-show="iscitywrapShow"
      @touchmove.prevent
      @mousewheel.prevent
    >
      <citywrap @citywrapClose="citywrapClose" />
    </div>
    <!-- 条件筛选呼出栏 -->
    <div
      :class="choosewrapClass"
      v-show="isChoosewrapShow"
      @touchmove.prevent
      @mousewheel.prevent
    >
      <choosewrap @choosewrapClose="choosewrapClose" />
    </div>
    <!-- 求职意向呼出栏 -->
    <div
      :class="jobIntentionClass"
      v-show="isjobIntentionShow"
      @touchmove.prevent
      @mousewheel.prevent
    >
      <jobintention @jobIntentionClose="jobIntentionClose" />
    </div>
  </div>
</template>

<script>
import jobItem from "./jobItem.vue";
import footbar from "./footbar.vue";
import notify from "./notify.vue";
import choosewrap from "./choosewrap.vue";
import citywrap from "./citywrap.vue";
import jobintention from "./jobintention.vue";

export default {
  name: "joblist",
  components: { jobItem, footbar, notify, citywrap, choosewrap, jobintention },
  data() {
    return {
      msg: "joblist",
      // notify组件显示
      ifshow: false,
      // 刷新小图标显示
      isLoading: false,
      // city选择组件显示
      citywrapClass: "citywrap_define",
      iscitywrapShow: false,
      citywrapValue: "重庆",
      // 条件筛选组件
      isChoosewrapShow: false,
      choosewrapClass: "choosewrap_define",
      //求职意向
      jobIntentionClass: "jobIntention_define",
      isjobIntentionShow: false,

      // job数据
      jobsData: [
        {
          title: "web前端",
          h2_txt: "什么祥 未融资",
          area: ["沈阳 和平区", "经验不限", "本科"],
          hr: {
            img_avatar: "../assets/hr.png",
            hr_txt: "海峰-招聘者",
          },
          salary: "5-6K",
        },
        {
          title: "软件开发工程师",
          h2_txt: "牛万科技 未融资",
          area: ["沈阳 沈河区", "1-3年", "学历不限"],
          hr: {
            img_avatar: "",
            hr_txt: "海峰-招聘者",
          },
          salary: "3-8K",
        },
        {
          title: "前端工程师",
          h2_txt: "成林健康科技 未融资",
          area: ["沈阳 皇姑区", "经验不限", "本科"],
          hr: {
            img_avatar: "",
            hr_txt: "马xx-从事招聘专员",
          },
          salary: "5-6K",
        },
        {
          title: "前端开发工程师",
          h2_txt: "师福教育 未融资",
          area: ["沈阳 沈河区", "3-5年", "学历不限"],
          hr: {
            img_avatar: "",
            hr_txt: "杨女士 - 人事",
          },
          salary: "5-8K",
        },
        {
          title: "前端工程师",
          h2_txt: "成林健康科技 未融资",
          area: ["沈阳 皇姑区", "经验不限", "本科"],
          hr: {
            img_avatar: "",
            hr_txt: "马xx-从事招聘专员",
          },
          salary: "5-6K",
        },
        {
          title: "前端技术经理",
          h2_txt: "星擎科技 未融资",
          area: ["沈阳 铁西区", "5-10年", "本科"],
          hr: {
            img_avatar: "",
            hr_txt: "潘舒-CEO",
          },
          salary: "6-11K",
        },
        {
          title: "web前端",
          h2_txt: "什么祥 未融资",
          area: ["沈阳 和平区", "经验不限", "本科"],
          hr: {
            img_avatar: "",
            hr_txt: "海峰-招聘者",
          },
          salary: "5-6K",
        },
      ],
    };
  },
  methods: {
    // 页面刷新提示
    notifyFn() {
      document.documentElement.scrollTop = 0;
      this.ifshow = true;
      let _notify = document.querySelector(".notify");
      _notify.addEventListener("webkitAnimationEnd", () => {
        this.ifshow = false;
      });
    },
    // 页面刷新动画
    onRefresh() {
      this.isLoading = false;
      this.$toast("列表已更新");
    },
    // 打开城市选择页面
    citywrapOpen() {
      this.iscitywrapShow = true;
      this.citywrapClass = "citywrap_define citywrap_open";
      // 判断动画结束更新监听器
      let _citywrap = document.querySelector(".citywrap_define");
      _citywrap.addEventListener("webkitAnimationEnd", () => {
        this.iscitywrapShow = true;
      });
    },
    // 关闭城市选择页面，并提交城市信息
    citywrapClose(city) {
      // setTimeout(() => (this.iscitywrapShow = false), 1000);
      if (city) {
        this.citywrapValue = city;
      }
      this.citywrapClass = "citywrap_define citywrap_close";
      // 判断动画结束更新监听器
      let _citywrap = document.querySelector(".citywrap_define");
      _citywrap.addEventListener("webkitAnimationEnd", () => {
        this.iscitywrapShow = false;
      });
    },
    // 打开条件筛选页面
    choosewrapOpen() {
      this.isChoosewrapShow = true;
      this.choosewrapClass = "choosewrap_define choosewrap_open";
      let _choosewrap = document.querySelector(".choosewrap_define");
      _choosewrap.addEventListener("webkitAnimationEnd", () => {
        this.isChoosewrapShow = true;
      });
    },
    // 关闭条件筛选页面
    choosewrapClose() {
      this.choosewrapClass = "choosewrap_define choosewrap_close";
      let _choosewrap = document.querySelector(".choosewrap_define");
      _choosewrap.addEventListener("webkitAnimationEnd", () => {
        this.isChoosewrapShow = false;
      });
    },
    // 打开求职意向
    jobIntentionOpen() {
      this.isjobIntentionShow = true;
      this.jobIntentionClass = "jobIntention_define jobIntention_open";
    },
    // 关闭求职意向
    jobIntentionClose() {
      this.jobIntentionClass = "jobIntention_define job jobIntention_close";
      let _jobIntention = document.querySelector(".jobIntention_define");
      let jobIntentionListener;
      _jobIntention.addEventListener(
        "webkitAnimationEnd",
        (jobIntentionListener = () => {
          this.isjobIntentionShow = false;
          _jobIntention.removeEventListener(
            "webkitAnimationEnd",
            jobIntentionListener
          );
        })
      );
    },
  },
};
</script>   

<style scoped>
/* #region--joblist的标题栏 */
.nav_bar {
  width: 100%;
  height: 0.8rem;
  margin: 0;
  padding: 0;
  background-color: #14c1bb;
}
.nav_bar /deep/ span {
  font-size: 0.35rem;
  color: #ffffff;
}
.van-icon-plus:before {
  color: white;
  font-size: 0.4rem;
  margin-right: 0.2rem;
}
.van-icon-search:before {
  color: white;
  font-size: 0.4rem;
  margin-right: -0.1rem;
}
/* #endregion */
/* #region joblist的条件栏 */
.nav_title {
  height: 0.5rem;
  padding: 0 0.2rem;
  background-color: white;
  border-bottom: 1px solid rgb(214, 214, 214);
  padding-top: 0.12rem;
}
.chooseBtn {
  color: black;
  background-color: white;
  border: 0px;
  line-height: 0.5rem;
  float: left;
}
.filterBtn {
  width: 0.8rem;
  color: black;
  background-color: rgb(233, 233, 233);
  margin-right: 0.2rem;
  border: 0px;
  float: right;
  position: relative;
}
.footIcon {
  width: 0rem;
  height: 0rem;
  border-bottom: 0.1rem solid rgb(104, 104, 104);
  border-left: 0.1rem solid transparent;
  position: absolute;
  right: 0.08rem;
  bottom: 0.09rem;
}
/* #endregion */
/* #region jobItem栏目 */
.job_list {
  width: 100%;

  background-color: rgb(212, 212, 212);
}
.job_list:after {
  content: "";
  height: 0.7rem;
  display: inline-block;
}
.footbar {
  z-index: 11;
}
/* #endregion */
/* #region 城市选择组件 */
.citywrap_open {
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 15;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  animation: citywrapAnimaton_open 1s;
}
.citywrap_close {
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 15;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  animation: citywrapAnimaton_close 1s;
  /* animation-direction: reverse; */
}
@keyframes citywrapAnimaton_open {
  from {
    height: 0%;
  }
  to {
    height: 100%;
  }
}

@keyframes citywrapAnimaton_close {
  from {
    height: 100%;
  }
  to {
    height: 0%;
  }
}
/* #endregion */
/* #region 条件筛选组件 */
.choosewrap_open {
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 16;
  position: absolute;
  left: 0;
  bottom: 0;
  animation: choosewrapAnimaton_open 1s;
}
.choosewrap_close {
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 15;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  animation: choosewrapAnimaton_close 1s;
}
@keyframes choosewrapAnimaton_open {
  from {
    height: 0%;
  }
  to {
    height: 100%;
  }
}

@keyframes choosewrapAnimaton_close {
  from {
    height: 100%;
  }
  to {
    height: 0%;
  }
}
/* #endregion */
/* #region 求职意向 */
.jobIntention_open {
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 15;
  position: absolute;
  right: 0;
  bottom: 0;
  animation: jobIntention_open 1s;
}
.jobIntention_close {
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 15;
  position: absolute;
  right: 0;
  bottom: 0;
  animation: jobIntention_close 1s;
}
@keyframes jobIntention_open {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
@keyframes jobIntention_close {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}
/* #endregion */
</style>