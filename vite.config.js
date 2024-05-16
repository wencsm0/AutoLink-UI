/*
 * @Author: starail mawj2022@qq.com
 * @Date: 2024-05-13 21:32:54
 * @LastEditors: starail mawj2022@qq.com
 * @LastEditTime: 2024-05-13 22:44:41
 * @FilePath: /AutoLink-UI/web-ui/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },

    server: {
        proxy: {
            "/api": {
                target: "http://localhost:10000",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
});
