<template>
    <div class="new-article">
        <article-editor
            v-bind:article="article"
            :loading="false"
            v-on:update="update"
        />
        <a-button
            type="primary"
            block
            :disabled="!CanSubmit"
            :loading="Submiting"
            v-on:click="submit"
        >
            {{ ButtonTip }}
        </a-button>
    </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { Button } from "ant-design-vue";
import { ArticleEditor } from "@/components/ArticleEditor.vue";
import config from "@/config";
import axios from "axios";
@Component({ components: { ArticleEditor, AButton: Button } })
class NewArticle extends Vue {
    article = { title: "New Article", content: "# Start" };
    CanSubmit = true;
    Submiting = false;
    ButtonTip = "Submit";
    update(article) {
        this.article = article;
    }
    async submit() {
        this.CanSubmit = false;
        this.Submiting = true;
        try {
            await axios.post("/article", this.article, {
                baseURL: config.host.backend
            });
            this.ButtonTip = "Submited";
        } catch (err) {
            console.log(err);
            this.CanSubmit = true;
        } finally {
            this.Submiting = false;
        }
    }
}
export default NewArticle;
</script>
