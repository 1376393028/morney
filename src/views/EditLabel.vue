<template>
  <Layout>
    <div class="navBar">
      <Icon @click.native="back" class="leftIcon" name="left" />
      <span class="title">编辑标签</span>
    </div>
    <div class="form-wrapper">
      <FormItem :value="tag ? tag.name : ''" @update:value="update" field-name="标签名" placeholder="请输入标签名" />
    </div>
    <div class="buttom-wrapper">
      <Button @click.native="remove">删除标签</Button>
    </div>
  </Layout>
</template>
<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import FormItem from "@/components/FormItem.vue";
import Button from "@/components/Button.vue";
@Component({
  components: {
    Layout,
    FormItem,
    Button,
  },
})
export default class EditLabel extends Vue {
  get tag() {
    return this.$store.state.currentTag;
  };
  created() {
    this.$store.commit('fetchTags');
    this.$store.commit('setCurrentTag', this.$route.params.id);
    if (!this.tag) {
      this.$router.replace("/404");
    }
  }
  remove() {
    if(this.tag) this.$store.commit('removeTag', this.tag.id);
  }
  update(name: string) {
    if(this.tag) {
        this.$store.commit('updateTag', name);
    }
  }
  back() {
    this.$router.back();
  }
}
</script>
<style lang="scss" scoped>
.navBar {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 16px;
  height: 48px;
  background: #fff;
  > .leftIcon {
    position: absolute;
    left: 16px;
    width: 24px;
    height: 24px;
  }
  > .title {
  }
}
.form-wrapper {
  background: #fff;
  margin-top: 8px;
}
.buttom-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44px;
}
</style>