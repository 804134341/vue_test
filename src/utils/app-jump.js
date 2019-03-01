// h5调取app端页面跳转函数
import {removeToken} from '@/serve/utils/auth';
import router from '@/router';

export function appGoTo(appFun, params) {
    return new Promise((resolve, reject) => {
        const ua = navigator.userAgent.toLowerCase();
        let result;
        if (/iphone|ipad|ipod/.test(ua)) {
            if (params) {
                result = window[appFun](params);
            } else {
                result = window[appFun]();
            }
            resolve(result);
        } else if (/android/.test(ua)) {
            if (params) {
                result = window.mobile_android[appFun](params);
            } else {
                result = window.mobile_android[appFun]();
            }
            resolve(result);
        } else {
            reject();
        }
    });
}

export const goToMemberDetail = (params) => appGoTo('jumpMemberInfo', params);
export const finishH5Page = () => appGoTo('finishH5Page');
export const activityQrCode = (params) => appGoTo('activityQrCode', params);
export const activityShare = (params) => appGoTo('activityShare', params);
export const distributionShare = (params) => appGoTo('distributionShare', params);
export const getEmployeeId = () => appGoTo('getEmployeeId');
export const callPhone = (params) => appGoTo('callPhone', params);
// 打开新的webview
export const openSecondaryPage = (url) => appGoTo('openSecondaryPage', url);

// js调原生，到登录页
export const reLogin = () => {
    removeToken();
    appGoTo('reLogin').catch(() => {
        router.replace({path: '/login', query: {redirect: router.currentRoute.fullPath}});
    });
};

// 判断是app还是webview
export const isApp = () => {
    try {
        if ('getIosPaddingTop' instanceof window || 'getAndroidPaddingTop' instanceof window.mobile_android) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
};
