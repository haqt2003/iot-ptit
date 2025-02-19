import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/styles/tailwind.css"
import "./assets/styles/global.css"
import "vue-awesome-paginate/dist/style.css"

createApp(App).use(router).mount("#app")
