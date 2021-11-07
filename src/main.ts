import { createApp, h } from 'vue'
import App from './App.vue'
import singleSpaVue, { AppOptions } from 'single-spa-vue'

const vueLifecycles = singleSpaVue({
    createApp,
    appOptions: {
        render() {
            const ctx: AppOptions = this;
            return h(App, {
                name: ctx.name,
                mountParcel: ctx.mountParcel,
                singleSpa: ctx.singleSpa,
            });
        },
    },
    handleInstance: (app) => {
        // app.use(router);
    }
});
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;