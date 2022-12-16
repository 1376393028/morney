<template>
  <div>
    <Layout>
      <ol class="tags">
        <li v-for="tag in tags" :key="tag">
          <span>{{tag}}</span>
          <Icon name="right"></Icon>
        </li>
      </ol>
      <div class="createTag-wrapper">
        <button class="createTag" @click="createTag">新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Layout from '@/components/Layout.vue';
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import tagListModule from '@/modules/tagListModule';
  tagListModule.fetch();
  @Component({
    components: { Layout }
  })
  export default class Labels extends Vue {
    tags = tagListModule.data;
    createTag() {
      const name = prompt('请输入标签名');
      if(name) {
        let result = tagListModule.create(name);
        if(result) {
          this.$message({
            type: 'success',
            message: '创建成功',
            duration: 1000
          })
        } else {
          this.$message({
            type: 'error',
            message: '创建的标签已存在',
            duration: 1000
          })
        }
      }

    }
  };
</script>

<style lang="scss" scoped>
.tags {
  background: #fff;
  font-size: 16px;
  padding-left: 16px;
  > li {
    min-height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    svg {
      color: #666;
      margin-right: 16px;
      width: 18px;
      height: 18px;
    }
  }
}
.createTag {
  background: #767676;
  color: #fff;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 28px;
  }
}
</style>


