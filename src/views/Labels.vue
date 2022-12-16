<template>
  <div>
    <Layout>
      <ol class="tags">
        <li>
          <span>衣</span>
          <Icon name="right"></Icon>
        </li>
        <li>
          <span>食</span>
          <Icon name="right"></Icon>
        </li>
        <li>
          <span>住</span>
          <Icon name="right"></Icon>
        </li>
        <li>
          <span>行</span>
          <Icon name="right"></Icon>
        </li>
      </ol>
      <div class="createTag-wrapper">
        <button class="createTag">新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Layout from '@/components/Layout.vue';
  export default {
  components: { Layout },
    name: 'Labels',
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


