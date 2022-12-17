<template>
  <div>
    <Layout class-prefix="layout">
      <Tags :data-source.sync="tags" :value.sync="record.tags" />
      <FormItem field-name="备注" placeholder="请输入备注" :value.sync="record.remarks" />
      <Types :value.sync="record.type" />
      <NumberPadVue :value.sync="record.amount" @submit="saveRecord" />
    </Layout>
  </div>
</template>

<script lang="ts">
  import Layout from '@/components/Layout.vue';
  import Tags from '@/components/Money/Tags.vue';
  import FormItem from "@/components/FormItem.vue";
  import Types from "@/components/Money/Types.vue";
  import NumberPadVue from '@/components/Money/NumberPad.vue';
  import Vue from 'vue';
  import { Component, Watch } from 'vue-property-decorator';
  import recordListModule  from '@/modules/recordListModule';
  import tagListModule  from '@/modules/tagListModule';

  const recordList = recordListModule.fetch();
  const tagList = tagListModule.fetch();

  

  @Component({
    components: { Layout, Tags, FormItem, Types, NumberPadVue }
  })
  export default class Money extends Vue {
    tags = tagList;
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
      const record2: RecordItem = recordListModule.clone(this.record);
      record2.createdATt = new Date();
      this.recordList.push(record2);
    }
    @Watch('recordList')
    onRecordChange() {
      recordListModule.save(this.recordList);
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



