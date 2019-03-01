import Vue from 'vue';
import load from './loading1';

const LoadVue = Vue.extend(load);

class DLoad {
    constructor() {
        this.instance = new LoadVue({
            el: document.createElement('div')
        });
    }

    open(options = {}) {
        if (this.instance.visible) return;
        this.instance.visible = true;
        document.body.appendChild(this.instance.$el);

        Vue.nextTick(() => {
            this.instance.visible = true;
        });
    }

    close() {
        if (this.instance && this.instance.visible) {
            this.instance.visible = false;
            // document.body.removeChild(this.instance.$el);
            document.body.removeChild(this.instance.$el);
        }
    }
}

export const Loading = new DLoad();
export {load};

