<template>
    <Layout>
        <div class="navBar">
            <Icon class="leftIcon" name="left" />
            <span class="title">编辑标签</span>
        </div>
        <div class="form-wrapper">
            <FormItem field-name="标签名" placeholder="请输入标签名" />
        </div>
        <div class="buttom-wrapper">
            <Button @click.native="deleteTag">删除标签</Button>
        </div>
    </Layout>
</template>
<script lang="ts">
    import Vue from "vue";
    import { Component } from "vue-property-decorator";
    import Layout from "@/components/Layout.vue";
    import tagListModule from "@/modules/tagListModule";
    import FormItem from "@/components/FormItem.vue";
    import Button from "@/components/Button.vue";
    @Component({
        components: {
            Layout,
            FormItem,
            Button
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
      deleteTag() {
        
      }
    }
</script>
<style lang="scss" scoped>
.navBar {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 16px;
    height: 48px;
    background: #fff;
    > .leftIcon {
        position: absolute;
        left: 16px;
        width: 24px;
        height: 24px;
    }
    > .title {

    }
}
.form-wrapper {
    background: #fff;
    margin-top: 8px;
}
.buttom-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44px;
}
</style>