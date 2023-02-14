import { defineClientConfig } from "@vuepress/client";
import Layout from "./layouts/Layout.vue";
import TooltipComponent from "./layouts/TooltipComponent.vue";
import ToastComponent from "./layouts/ToastComponent.vue";
import DatepickerComponent from "./layouts/DatepickerComponent.vue";

export default defineClientConfig({
  layouts: {
    Layout,
    TooltipComponent,
    ToastComponent,
    DatepickerComponent,
  },
});
