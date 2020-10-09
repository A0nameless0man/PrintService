import config from "@/config";
import axios from "axios";

// export default async function loadArticleList() {
//     // console.log("loading article list,", config.host);
//     const data = (
//         await axios.get("/article/", {
//             baseURL: config.host.backend
//         })
//     ).data;

//     console.log(data);
//     return data;
// }

export let Article = {
    async loadArticleList() {
        // console.log("loading article list,", config.host);
        const data = (
            await axios.get("/article/", {
                baseURL: config.host.backend
            })
        ).data;
        return data;
    },
    async getArticle(id) {
        let a = await axios.get("/article/" + id, {
            baseURL: config.host.backend
        });
        // console.log(a.data);
        return a.data;
    },
    async deleteArticle(id) {
        let delRes = await axios.delete("/article/" + this.id, {
            baseURL: config.host.backend
        });
        return delRes;
    }
};
