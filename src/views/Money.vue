<template>
  <div>
    <Layout class-prefix="layout">
      <Tags :value.sync="record.tags" />
      <div class="form-wrapper">
        <FormItem field-name="备注" placeholder="请输入备注" :value.sync="record.remarks" />
      </div>
      <Tabss :data-source="typeList" :value.sync="record.type" />
      <NumberPadVue :value.sync="record.amount" @submit="saveRecord" />
    </Layout>
  </div>
</template>

<script lang="ts">
  import Layout from '@/components/Layout.vue';
  import Tags from '@/components/Money/Tags.vue';
  import FormItem from "@/components/FormItem.vue";
  import Tabss from "@/components/Tabss.vue";
  import NumberPadVue from '@/components/Money/NumberPad.vue';
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import TYPELIST from '@/constants/typeList';

  @Component({
    components: { Layout, Tags, FormItem, Tabss, NumberPadVue },
    computed: {
      recordList() {
        return this.$store.state.recordList;
      }
    }
  })
  export default class Money extends Vue {
    typeList = TYPELIST;
    record: RecordItem = {
      tags: [],
      remarks: '',
      type: '-',
      amount: 0
    };
    created() {
      this.$store.commit('fetchRecords');
    }
    saveRecord() {
      this.$store.commit('createRecord', this.record);
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



