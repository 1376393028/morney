<template>
  <div>
    <Layout class-prefix="layout">
      <Tags :data-source.sync="tags" :value.sync="record.tags" />
      <Remarks :value.sync="record.remarks" />
      <Types :value.sync="record.type" />
      <NumberPadVue :value.sync="record.amount" @submit="saveRecord" />
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
  import { Component, Watch } from 'vue-property-decorator';
  import module  from '@/module';

  const version = localStorage.getItem('version') || '0';
  const recordList = module.fetch();
  if(version === '0.0.1') {
    //数据库升级，数据迁移
    recordList.forEach(record => {
      record.createdATt = new Date(2022, 0, 1);
    })
    module.save(recordList);
  }
  localStorage.setItem('version', '0.0.2');

  

  @Component({
    components: { Layout, Tags, Remarks, Types, NumberPadVue }
  })
  export default class Money extends Vue {
    tags = ['衣','食','住','行'];
    recordList = recordList;
    record: RecordItem = {
      tags: [],
      remarks: '',
      type: '-',
      amount: 0
    };
    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);
    }
    saveRecord() {
      const record2: RecordItem = module.clone(this.record);
      record2.createdATt = new Date();
      this.recordList.push(record2);
    }
    @Watch('recordList')
    onRecordChange() {
      module.save(this.recordList);
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



