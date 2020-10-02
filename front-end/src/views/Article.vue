<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <a-button type="primary">{{ JSON.stringify(article) }}</a-button>
    </div>
</template>

<script>
import { Prop } from "vue-property-decorator";
import Vue from "vue";
import Component from "vue-class-component";
import { Button } from "ant-design-vue";
import config from "../config";
import axios from "axios";
@Component({ components: { AButton: Button } })
export default class Article extends Vue {
    // article = { id: this.$route.params.id };
    article = {};
    async created() {
        console.log(config.host.backend);
        this.article = (
            await axios.get("/article/" + this.$route.params.id, {
                baseURL: "http://10.0.1.128:3000"
            })
        ).data;
    }
}
</script>
