<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link class="link" :to="`/labels/edit/${tag.id}`" v-for="tag in tags" :key="tag.id">
          <span>{{tag.name}}</span>
          <Icon name="right"></Icon>
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <Button @click.native="createTag">新建标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Layout from '@/components/Layout.vue';
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  import store from '@/store/index2';
  @Component({
    components: { Layout, Button }
  })
  export default class Labels extends Vue {
    tags = store.tagList;
    createTag() {
      const name = prompt('请输入标签名');
      if(name) {
        store.createTag(name);
      }

    }
  };
</script>

<style lang="scss" scoped>
.tags {
  background: #fff;
  font-size: 16px;
  padding-left: 16px;
  > .link {
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
.createTag-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 28px;
  }
</style>


