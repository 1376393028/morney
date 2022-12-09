<template>
  <div>
    <Layout class-prefix="layout">
      <Tags />
      <Remarks />
      <Types />
      <NumberPadVue />
    </Layout>
  </div>
</template>

<script lang="ts">
import Layout from '@/components/Layout.vue';
import Tags from '@/components/Money/Tags.vue';
import Remarks from "@/components/Money/Remarks.vue";
import Types from "@/components/Money/Types.vue";
import NumberPadVue from '@/components/Money/NumberPad.vue';

  export default {
  components: { Layout, Tags, Remarks, Types, NumberPadVue },
    name: 'Money',
  };
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>



