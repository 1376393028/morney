<template>
  <div>
    <Layout class-prefix="layout">
      <Tags :data-source.sync="tags" :value.sync="record.tags" />
      <div class="form-wrapper">
        <FormItem field-name="备注" placeholder="请输入备注" :value.sync="record.remarks" />
      </div>
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
  import { Component } from 'vue-property-decorator';


  @Component({
    components: { Layout, Tags, FormItem, Types, NumberPadVue }
  })
  export default class Money extends Vue {
    tags = window.tagList;
    recordList = window.recordList;
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
      window.createRecord(this.record);
    }
  };
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.form-wrapper {
  background: #f5f5f5;
  padding: 12px 0;
}
</style>



