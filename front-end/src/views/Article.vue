<template>
    <div class="home">
        <a-card v-bind:loading="loading" v-bind:title="title"
            ><div v-html="compiledMarkdown"></div
        ></a-card>
    </div>
</template>

<script>
// import { Prop } from "vue-property-decorator";
import Vue from "vue";
import Component from "vue-class-component";
import { Card } from "ant-design-vue";
import config from "@/config";
import axios from "axios";
import marked from "marked";
export default
@Component({ components: { ACard: Card } })
class Article extends Vue {
    // article = { id: this.$route.params.id };
    article = {};
    loading = true;
    async created() {
        // console.log(config.host.backend);
        try {
            this.article = (
                await axios.get("/article/" + this.$route.params.id, {
                    baseURL: config.host.backend
                })
            ).data;
        } catch (e) {
            // console.log(JSON.stringify(e));
            this.article = { title: "Error", content: "# 加载失败" };
            // throw e;
        }
        this.afterLoad();
    }
    afterLoad() {
        document.title = this.article.title;
        this.loading = false;
    }
    get content() {
        return this.article.content || "";
    }
    get title() {
        return this.article.title || "";
    }
    get compiledMarkdown() {
        return marked(this.content);
    }
}
</script>
