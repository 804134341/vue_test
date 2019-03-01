import uSelect from './u-select';
import uInput from './u-input';
import uBtn from './u-btn';

import {Loading, load} from './loading';

const install = {
    // install 是默认的方法。当外界在 use 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。
    install: (Vue) => {
        if (install && install.installed) {
            return;
        }
        Vue.component(uSelect.name, uSelect);
        Vue.component(uInput.name, uInput);
        Vue.component(uBtn.name, uBtn);
        Vue.prototype.$loading = Loading;
    }
};

// auto install

if (typeof window !== 'undefined' && window.Vue) {
    install.install(window.Vue);
}

export {load, Loading, uSelect, uInput, uBtn};
export default install;
