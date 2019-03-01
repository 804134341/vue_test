import {removeToken} from '@/utils/auth';

/**
 * 给传入输入的每个对象添加index属性
 * @param arr   需要format数组
 * @param pageNo    当前页码
 * @param pageSize  每页数据
 * @returns {*} arr 返回数组
 */
export function formatArrayByIndex(arr, pageNo, pageSize) {
    arr.map((item, index) => {
        item.index = (pageNo - 1) * pageSize + index;
    });
    return arr;
}

// js调原生，退出h5页面
export function finishPage() {
    const ua = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(ua)) {
        return window.finishH5Page();
    } else if (/android/.test(ua)) {
        return window.mobile_android.finishH5Page();
    }
}

// js调原生，到登录页
export function reLogin() {
    const ua = navigator.userAgent.toLowerCase();
    removeToken();
    if (/iphone|ipad|ipod/.test(ua)) {
        return window.reLogin();
    } else if (/android/.test(ua)) {
        return window.mobile_android.reLogin();
    }
}

// js调原生，分享
export function goToShare(desc, url, type) {
    const ua = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(ua)) {
        window.gotoShare(desc, url, type);
    } else if (/android/.test(ua)) {
        window.mobile_android.gotoShare(desc, url, type);
    }
}

// 拦截android返回按键处理
export function interruptKeyBack(back) {
    const ua = navigator.userAgent.toLowerCase();
    if (/android/.test(ua)) {
        window.mobile_android.configButtonAction();
        // back为传入的方法，给原生调用的
        window.onLeftClick = back;
    }
}
