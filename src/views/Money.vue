<template>
  <div>
    <Layout class-prefix="layout">
      <Tags :data-source.sync="tags" :value.sync="record.tags" />
      <Remarks :value.sync="record.remarks" />
      <Types :value.sync="record.type" />
      <NumberPadVue :value.sync="record.amount" />
    </Layout>
  </div>
</template>

<script lang="ts">
  import Layout from '@/components/Layout.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Remarks from "@/components/Money/Remarks.vue";
  import Types from "@/components/Money/Types.vue";
  import NumberPadVue from '@/components/Money/NumberPad.vue';
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  type Record = {
    tags: string[],
    remarks: string,
    type: string
    amount: number
  };

  @Component({
    components: { Layout, Tags, Remarks, Types, NumberPadVue }
  })
  export default class Money extends Vue {
  
    tags = ['衣','食','住','行'];
    record: Record = {
      tags: [],
      remarks: '',
      type: '-',
      amount: 0
    };
    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);
    }
  };
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>



