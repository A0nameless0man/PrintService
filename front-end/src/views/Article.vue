<template>
    <div class="home">
        <div>{{ id }}</div>
        <div>{{ this.$route.params.id }}</div>
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
                v-on:click="deleteArticle"
                >Delete</a-button
            >
            <a-button
                type="danger"
                v-if="deleteConfirm"
                v-on:click="deleteArticle"
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
export default
@Component({
    components: { MarkdownRender, AButton: Button, AButtonGroup: Button.Group }
})
class Article extends Vue {
    // article = { id: this.$route.params.id };
    id = "";
    article = {};
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
            this.article = await this.loadArticle(this.id);
        } catch (e) {
            console.log(e);
            this.article = { title: "Error", content: "# 加载失败" };
        }
        this.afterLoad();
    }
    beforeLoad() {
        this.id = this.$route.params.id;
        this.loading = true;
    }
    async loadArticle(id) {
        this.loading = true;
        let a = await axios.get("/article/" + id, {
            baseURL: config.host.backend
        });
        console.log(a.data);
        return a.data;
    }
    afterLoad() {
        document.title = this.article.title;
        this.loading = false;
    }
    async deleteArticle() {
        if (!this.deleteConfirm) {
            this.deleteConfirm = true;
            setTimeout(() => (this.deleteConfirm = false), 1000);
        } else {
            let delRes = await axios.delete("/article/" + this.id, {
                baseURL: config.host.backend
            });
            if (delRes.status == 200) {
                this.$router.replace("/article");
            }
        }
    }
    get content() {
        return this.article.content || "";
    }
    get title() {
        return this.article.title || "";
    }
}
</script>
