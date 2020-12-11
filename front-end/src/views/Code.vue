<template>
    <div class="home">
        <!-- <div>{{ id }}</div>
        <div>{{ this.$route.params.id }}</div> -->
        <markdown-render
            v-bind:loading="loading"
            v-bind:title="title"
            v-bind:content="content"
        />
        <a-button-group block>
            <a-button>Edit</a-button>
            <a-button
                type="danger"
                v-if="!deleteConfirm"
                v-on:click="deleteCode"
                >Delete</a-button
            >
            <a-button
                type="danger"
                v-if="deleteConfirm"
                v-on:click="deleteCode"
                >Realy?</a-button
            >
        </a-button-group>
    </div>
</template>

<script>
// import { Prop } from "vue-property-decorator";
import Vue from "vue";
import Component from "vue-class-component";
import { Button } from "ant-design-vue";
import config from "@/config";
import axios from "axios";
import { MarkdownRender } from "@/components/MarkdownRender.vue";
@Component({
    components: { MarkdownRender, AButton: Button, AButtonGroup: Button.Group }
})
class Code extends Vue {
    // code = { id: this.$route.params.id };
    id = "";
    code = {};
    loading = true;
    deleteConfirm = false;
    created() {
        this.fullLoad();
    }
    beforeUpdate() {
        if (this.id !== this.$route.params.id) {
            this.fullLoad();
        }
    }
    async fullLoad() {
        try {
            this.beforeLoad();
            this.code = await this.loadCode(this.id);
        } catch (e) {
            console.log(e);
            this.code = { title: "Error", content: "# 加载失败" };
        }
        this.afterLoad();
    }
    beforeLoad() {
        this.id = this.$route.params.id;
        this.loading = true;
    }
    async loadCode(id) {
        this.loading = true;
        let a = await axios.get("/code/" + id, {
            baseURL: config.host.backend
        });
        return a.data;
    }
    afterLoad() {
        document.title = this.code.title;
        this.loading = false;
    }
    async deleteCode() {
        if (!this.deleteConfirm) {
            this.deleteConfirm = true;
            setTimeout(() => (this.deleteConfirm = false), 1000);
        } else {
            let delRes = await axios.delete("/code/" + this.id, {
                baseURL: config.host.backend
            });
            if (delRes.status == 200) {
                this.$router.replace("/code");
            }
        }
    }
    get content() {
        return this.code.content || "";
    }
    get title() {
        return this.code.title || "";
    }
}
export default Code;
</script>
