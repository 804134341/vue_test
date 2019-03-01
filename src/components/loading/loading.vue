<style lang="less">
    @px: .27*0.02rem;
    .loader {
        .height(90);
        .width(90);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto auto;
        z-index: 100;
        background-color: rgba(0, 0, 0, .3);
        .border-radius(5);
        display: inline-block;
    }

    @-webkit-keyframes timerRotate {
        0% {
            transform: rotateZ(0deg);
        }
        50% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(-180deg);
        }
    }

    @-moz-keyframes timerRotate {
        0% {
            transform: rotateZ(0deg);
        }
        50% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(-180deg);
        }
    }

    @-ms-keyframes timerRotate {
        0% {
            transform: rotateZ(0deg);
        }
        50% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(-180deg);
        }
    }

    @keyframes timerRotate {
        0% {
            transform: rotateZ(0deg);
        }
        50% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(-180deg);
        }
    }

    @-webkit-keyframes bottomFill {
        0% {
            border-bottom-width: 0*@px;
        }
        50% {
            border-bottom-width: 60*@px;
        }
        100% {
            border-bottom-width: 60*@px;
        }
    }

    @-moz-keyframes bottomFill {
        0% {
            border-bottom-width: 0*@px;
        }
        50% {
            border-bottom-width: 60*@px;
        }
        100% {
            border-bottom-width: 60*@px;
        }
    }

    @-ms-keyframes bottomFill {
        0% {
            border-bottom-width: 0*@px;
        }
        50% {
            border-bottom-width: 60*@px;
        }
        100% {
            border-bottom-width: 60*@px;
        }
    }

    @keyframes bottomFill {
        0% {
            border-bottom-width: 0*@px;
        }
        50% {
            border-bottom-width: 60*@px;
        }
        100% {
            border-bottom-width: 60*@px;
        }
    }

    @-webkit-keyframes topEmpty {
        0% {
            top: 19*@px;
            border-top-width: 60*@px;
            border-left-width: 35*@px;
            border-right-width: 35*@px;
        }
        50% {
            top: 80*@px;
            border-top-width: 0*@px;
            border-left-width: 0*@px;
            border-right-width: 0*@px;
        }
        100% {
            top: 80*@px;
            border-top-width: 0*@px;
            border-left-width: 0*@px;
            border-right-width: 0*@px;
        }
    }

    @-moz-keyframes topEmpty {
        0% {
            top: 19*@px;
            border-top-width: 60*@px;
            border-left-width: 35*@px;
            border-right-width: 35*@px;
        }
        50% {
            top: 80*@px;
            border-top-width: 0*@px;
            border-left-width: 0*@px;
            border-right-width: 0*@px;
        }
        100% {
            top: 80*@px;
            border-top-width: 0*@px;
            border-left-width: 0*@px;
            border-right-width: 0*@px;
        }
    }

    @-ms-keyframes topEmpty {
        0% {
            top: 19*@px;
            border-top-width: 60*@px;
            border-left-width: 35*@px;
            border-right-width: 35*@px;
        }
        50% {
            top: 80*@px;
            border-top-width: 0*@px;
            border-left-width: 0*@px;
            border-right-width: 0*@px;
        }
        100% {
            top: 80*@px;
            border-top-width: 0*@px;
            border-left-width: 0*@px;
            border-right-width: 0*@px;
        }
    }

    @keyframes topEmpty {
        0% {
            top: 19*@px;
            border-top-width: 60*@px;
            border-left-width: 35*@px;
            border-right-width: 35*@px;
        }
        50% {
            top: 80*@px;
            border-top-width: 0*@px;
            border-left-width: 0*@px;
            border-right-width: 0*@px;
        }
        100% {
            top: 80*@px;
            border-top-width: 0*@px;
            border-left-width: 0*@px;
            border-right-width: 0*@px;
        }
    }

    .loader {
        float: left;
        -webkit-transform: translateZ(0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-perspective: 1000;
    }

    .loader .timerWrap {
        position: absolute;
        animation: timerRotate 1.5s infinite ease;
        -webkit-animation: timerRotate 1.5s infinite ease;
        -moz-animation: timerRotate 1.5s infinite ease;
        -ms-animation: timerRotate 1.5s infinite ease;
        width: 120*@px;
        height: 160*@px;
        margin-top: -80*@px;
        margin-left: -60*@px;
        top: 50%;
        left: 50%;
    }

    .loader .timerWrap:before {
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 60*@px 35*@px 0 35*@px;
        border-color: #ffffff transparent transparent transparent;
        position: absolute;
        top: 19*@px;
        left: 0;
        right: 0;
        margin: auto;
        animation: topEmpty 1.5s infinite ease;
        -webkit-animation: topEmpty 1.5s infinite ease;
        -moz-animation: topEmpty 1.5s infinite ease;
        -ms-animation: topEmpty 1.5s infinite ease;
    }

    .loader .timerWrap:after {
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 35*@px 60*@px 35*@px;
        border-color: transparent transparent #ffffff transparent;
        position: absolute;
        bottom: 19*@px;
        left: 0;
        right: 0;
        margin: auto;
        animation: bottomFill 1.5s infinite ease;
        -webkit-animation: bottomFill 1.5s infinite ease;
        -moz-animation: bottomFill 1.5s infinite ease;
        -ms-animation: bottomFill 1.5s infinite ease;
    }

    .loader .timerWrap .timer {
        width: 120*@px;
        max-width: 100%;
        height: 160*@px;
        position: relative;
        top: 0;
        left: 0;
    }

    .loader .timerWrap .timer path {
        fill: #ffffff;
    }
</style>

<template>
    <div class="loader loader--style8 loading-loader" title="7">
        <div class="timerWrap">
            <svg version="1.1" viewBox="131.623 175.5 120 160" preserveAspectRatio="xMinYMin meet" class="timer">
                <path fill="#FFFFFF" d="M212.922,255.45l36.855-64.492c1.742-3.069,1.742-6.836-0.037-9.896c-1.783-3.06-5.037-4.938-8.581-4.938
			h-99.158c-3.524,0-6.797,1.878-8.569,4.938c-1.773,3.06-1.792,6.827-0.03,9.896l36.846,64.491l-36.845,64.492
			c-1.762,3.068-1.743,6.836,0.03,9.896c1.772,3.061,5.044,4.938,8.569,4.938h99.158c3.544,0,6.798-1.878,8.581-4.938
			c1.779-3.06,1.779-6.827,0.037-9.896L212.922,255.45z M142.001,324.86l39.664-69.41l-39.664-69.41h99.158l-39.663,69.41
			l39.663,69.41H142.001z"/>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'loading'
};
</script>
