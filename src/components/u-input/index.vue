<template>
    <div class="mhr_fItem">
        <div class="mhr_fItem_wrap">
            <input :type="type" :id="id" class="mhr_fItem-input" @blur.prevent="isBlur(true)"
                   @focus.prevent="isBlur(false)" :value="value" @input="input">
            <span class="mhr_fItem-label"
                  :class="{'onBlur': isFocus || value}"
            >
                 <label :for="id" :class="{'required':required}">{{label}}</label>
            </span>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'u-input',
    props: {
        value: '',
        label: {
            type: String,
            default: '姓名'
        },
        required: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'text'
        },
        maxLength: {
            type: [Number, String],
            default: 30
        }
    },
    data() {
        return {
            isFocus: false,
            id: new Date().getTime()
        };
    },
    methods: {
        /* 组件内部的方法 */
        isBlur(flag) {
            this.isFocus = !flag;
        },
        input(e) {
            if (this.type === 'number') {
                const regVal = new RegExp('\\d\{1,' + this.maxLength + '\}', '').exec(e.target.value);
                e.target.value = regVal && regVal[0] || '';
            } else if (e.target.value.length >= parseInt(this.maxLength)) {
                e.target.value = e.target.value.substring(0, this.maxLength);
            }
            this.$emit('input', e.target.value);
        }
    }
};
</script>
