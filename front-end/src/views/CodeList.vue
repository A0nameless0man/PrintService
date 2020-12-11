<template>
    <a-layout>
        <a-layout-content>
            <a-list v-bind:data-source="codes">
                <template v-slot:renderItem="code">
                    <a-list-item>
                        <a-list-item-meta>
                            <template v-slot:title>
                                <a-card>
                                    <router-link :to="'/code/' + code.id">
                                        {{ code.title }}
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
                    <router-link :to="'/new'">
                        <a-icon type="edit" /> New
                    </router-link>
                </a-button>
                <a-button type="" v-on:click="loadCodeList">
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
import { Code } from "@/util/Code";

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
class CodeList extends Vue {
    codes = [];
    async created() {
        this.loadCodeList();
    }
    async loadCodeList() {
        this.codes = await Code.loadCodeList();
    }
}

export default CodeList;
</script>
