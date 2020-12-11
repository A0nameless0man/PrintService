import config from "@/config";
import axios from "axios";

// export default async function loadCodeList() {
//     // console.log("loading code list,", config.host);
//     const data = (
//         await axios.get("/code/", {
//             baseURL: config.host.backend
//         })
//     ).data;

//     console.log(data);
//     return data;
// }

export let Code = {
    async loadCodeList() {
        // console.log("loading code list,", config.host);
        const data = (
            await axios.get("/code/", {
                baseURL: config.host.backend
            })
        ).data;
        return data;
    },
    async getCode(id) {
        let a = await axios.get("/code/" + id, {
            baseURL: config.host.backend
        });
        // console.log(a.data);
        return a.data;
    },
    async deleteCode(id) {
        let delRes = await axios.delete("/code/" + this.id, {
            baseURL: config.host.backend
        });
        return delRes;
    }
};
