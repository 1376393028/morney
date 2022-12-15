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

  const version = localStorage.getItem('version') || '0';
  const recordList: Record[] = JSON.parse(localStorage.getItem('recordList') || '[]');
  if(version === '0.0.1') {
    //数据库升级，数据迁移
    recordList.forEach(record => {
      record.createdATt = new Date(2022, 0, 1);
    })
    window.localStorage.setItem('recordList', JSON.stringify(recordList));
  }
  localStorage.setItem('version', '0.0.2');

  type Record = {
    tags: string[],
    remarks: string,
    type: string
    amount: number
    createdATt?: Date
  };

  @Component({
    components: { Layout, Tags, Remarks, Types, NumberPadVue }
  })
  export default class Money extends Vue {
    tags = ['衣','食','住','行'];
    recordList: Record[] = recordList;
    record: Record = {
      tags: [],
      remarks: '',
      type: '-',
      amount: 0
    };
    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);
    }
    saveRecord() {
      const record2: Record = JSON.parse(JSON.stringify(this.record));
      record2.createdATt = new Date();
      this.recordList.push(record2);
    }
    @Watch('recordList')
    onRecordChange() {
      window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
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



