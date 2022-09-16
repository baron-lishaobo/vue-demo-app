import type { App } from "vue";
import { createPinia } from "pinia";

export const store=createPinia();

export function seupStore(app:App<Element>){
    app.use(store);
}
