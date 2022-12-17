<template>
    <Layout>
        <div>
            <Icon name="left" />
            <span>编辑标签</span>
        </div>
        <Remarks field-name="标签名" placeholder="请输入标签名" />
    </Layout>
</template>
<script lang="ts">
    import Vue from "vue";
    import { Component } from "vue-property-decorator";
    import Layout from "@/components/Layout.vue";
    import tagListModule from "@/modules/tagListModule";
    import Remarks from "@/components/Remarks.vue";
    @Component({
        components: {
            Layout,
            Remarks
        }
    })
    export default class EditLabel extends Vue {
      created() {
        const id = this.$route.params.id;
        tagListModule.fetch();
        const tags = tagListModule.data;
        const tag = tags.filter(t => t.id === id)[0];
        if(tag) {

        }else {
            this.$router.replace('/404');
        }
      }
    }
</script>
<style lang="scss" scoped>
</style>