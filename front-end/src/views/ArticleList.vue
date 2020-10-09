<template>
    <a-layout>
        <a-layout-content>
            <a-list v-bind:data-source="articles">
                <template v-slot:renderItem="article">
                    <a-list-item>
                        <a-list-item-meta>
                            <template v-slot:title>
                                <a-card>
                                    <router-link :to="'/article/' + article.id">
                                        {{ article.title }}
                                    </router-link>
                                </a-card>
                            </template>
                        </a-list-item-meta>
                    </a-list-item>
                </template>
            </a-list>
        </a-layout-content>
        <a-layout-footer>
            <a-button-group>
                <a-button type="primary">
                    <router-link :to="'/article/new'">
                        <a-icon type="edit" /> New
                    </router-link>
                </a-button>
                <a-button type="" v-on:click="loadArticleList">
                    <a-icon type="reload" />RelaodList
                </a-button>
            </a-button-group>
        </a-layout-footer>
    </a-layout>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { Button, Card, Icon, Layout, List } from "ant-design-vue";
import { Article } from "@/util/Article";

@Component({
    components: {
        AButton: Button,
        AButtonGroup: Button.Group,
        ACard: Card,
        AIcon: Icon,
        ALayout: Layout,
        ALayoutContent: Layout.Content,
        ALayoutFooter: Layout.Footer,
        AList: List,
        AListItem: List.Item,
        AListItemMeta: List.Item.Meta
    }
})
class ArticleList extends Vue {
    articles = [];
    async created() {
        this.loadArticleList();
    }
    async loadArticleList() {
        this.articles = await Article.loadArticleList();
    }
}

export default ArticleList;
</script>
