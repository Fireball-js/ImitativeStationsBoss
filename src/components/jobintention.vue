<template>
  <div>
    <van-nav-bar left-arrow @click-left="jobIntentionClose" />
    <h1>求职意向管理</h1>
    <div @click="chooseJobIntention">
      <van-nav-bar left-text="求职状态" :right-text="jobStatic" />
    </div>
    <div class="jobIntentionAction">
      <van-action-sheet
        v-model="isshow"
        :actions="actions"
        description="求职状态"
        :round="true"
        close-on-click-action
        @select="updataJobIntention"
        close-on-click-overlay
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "jobintention",
  data() {
    return {
      isshow: false,
      jobStatic: ">>>",
      actions: [
        { name: "离职-随时到岗" },
        { name: "在职-月内到岗" },
        { name: "在职-考虑机会" },
        { name: "在职-暂不考虑" },
      ],
    };
  },
  methods: {
    jobIntentionClose() {
      this.$emit("jobIntentionClose");
    },
    chooseJobIntention() {
      this.isshow = true;
    },
    updataJobIntention(action) {
      this.jobStatic = action.name;
    },
  },
};
</script>
<style scoped>
.van-nav-bar__text {
  color: black;
}
h1 {
  font-size: 0.3rem;
  font-weight: 700;
  margin: 0.25rem;
}
</style>