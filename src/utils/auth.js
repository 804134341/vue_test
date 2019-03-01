import Cookies from 'js-cookie';
import store from '../store/index';

const TokenKey = 'X-Token';

export function getStorage(key) {
    return sessionStorage.getItem(key);
}

export function setStorage(key, value) {
    sessionStorage.setItem(key, value);
}

export function removeStorage(key) {
    sessionStorage.removeItem(key);
}

export function getToken() {
    return Cookies.get(TokenKey);
}

export function setToken(token) {
    if (!token) {
        return;
    }
    return Cookies.set(TokenKey, token);
}

export function removeToken() {
    return Cookies.remove(TokenKey);
}

export function getMobileToken() {
    let token = getToken();
    const ua = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(ua) && typeof getIosToken === 'function') {
        token = window.getIosToken();
    } else if (/android/.test(ua) && typeof mobile_android !== 'undefined') {
        token = window.mobile_android.getToken();
    }

    setToken(token);
    return token;
}

/**
 * 判断是否有权限
 * @param permission 权限列表
 * @returns {Boolean}
 */
export function hasPermission(permission) {
    const permissions = store.getters.permissions;
    return permissions.some(item => permission === item);
}

export function allLogOut() {
    removeToken();
    removeStorage(TokenKey);
    Cookies.remove(TokenKey);
}
