var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSprings } from 'react-spring/web.cjs';
import { useComposition } from '../../hooks/useComposition';
import { StyledCarousel, StyledSlide } from './Carousel.style';
import { Slide } from './Slide';
export var clamp = function (num, min, max) {
    return num < min ? min : num > max ? max : num;
};
var defaultConfig = { duration: 50 };
export var Carousel = function (props) {
    var _a, _b, _c, _d;
    var getFilteredChildren = useComposition().getFilteredChildren;
    var autoHeight = props.autoHeight, ref = props.ref, defaultSlide = props.defaultSlide, auto = props.auto, onSlideChange = props.onSlideChange;
    var children = getFilteredChildren(props.children, Slide.displayName);
    var elements = [];
    var width = useMemo(function () {
        var _a;
        return ((_a = ref) === null || _a === void 0 ? void 0 : _a.clientWidth) || window.innerWidth;
    }, [ref]);
    var _e = useState(props.carouselHeight || 300), height = _e[0], setHeight = _e[1];
    var _f = useState(clamp(defaultSlide || 1, 0, children.length)), slide = _f[0], setSlide = _f[1];
    var _g = useSprings((_a = children) === null || _a === void 0 ? void 0 : _a.length, function (i) { return ({
        offset: i,
        opacity: 1,
        display: "block",
        touchAction: "auto",
        config: props.springConfig || defaultConfig,
        immediate: false
    }); }), springs = _g[0], setSprings = _g[1];
    var setSlider = useCallback(function (directionRight) {
        if (directionRight === void 0) { directionRight = true; }
        setSlide(function (state) {
            return clamp(state + (directionRight ? +1 : -1), 0, children.length - 1);
        });
    }, [children]);
    var gesture = (_c = (_b = props).onDrag) === null || _c === void 0 ? void 0 : _c.call(_b, setSprings, setSlider, width, slide, width / 4);
    useEffect(function () {
        var _a;
        if (slide < 0 || slide >= ((_a = children) === null || _a === void 0 ? void 0 : _a.length)) {
            setSlide(clamp(slide, 0, children.length - 1));
        }
    }, [children]);
    useEffect(function () {
        var _a;
        if (props.activeSlide || props.activeSlide === 0) {
            setSlide(clamp(props.activeSlide, 0, (_a = children) === null || _a === void 0 ? void 0 : _a.length));
        }
    }, [props.activeSlide, (_d = children) === null || _d === void 0 ? void 0 : _d.length]);
    useEffect(function () {
        var _a;
        (_a = onSlideChange) === null || _a === void 0 ? void 0 : _a(slide);
    }, [slide]);
    useEffect(function () {
        setSprings(function (i) {
            return {
                offset: i - slide,
                opacity: slide === i ? 1 : 0,
                touchAction: "auto"
            };
        });
    }, [slide, setSprings]);
    useEffect(function () {
        var _a, _b, _c, _d;
        if (autoHeight) {
            // @ts-ignore
            if ((_d = (_c = (_b = (_a = elements) === null || _a === void 0 ? void 0 : _a[slide]) === null || _b === void 0 ? void 0 : _b.children) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.offsetHeight) {
                // @ts-ignore
                setHeight(elements[slide].children[0].offsetHeight);
            }
            else {
                setHeight(200);
            }
        }
    }, [elements, slide]);
    useEffect(function () {
        var interval;
        if ((auto || 0) > 0) {
            interval = setInterval(function () {
                setSlide((slide + 1) % children.length);
            }, (auto || 0) * 1000);
        }
        return function () {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [auto, children.length, slide]);
    return (React.createElement(StyledCarousel, { height: height, auto: props.auto, autoHeight: autoHeight, activeSlide: props.activeSlide }, springs.map(function (_a, i) {
        var offset = _a.offset, opacity = _a.opacity, display = _a.display, touchAction = _a.touchAction;
        var _b, _c;
        return (React.createElement(StyledSlide, __assign({ ref: function (ref) { return (elements[i] = ref); }, key: i }, (_b = gesture) === null || _b === void 0 ? void 0 : _b(), { style: {
                touchAction: touchAction,
                display: display,
                opacity: opacity,
                transform: offset.interpolate(function (offsetX) {
                    return "translate3d(" + offsetX * 100 + "%, 0, 0)";
                })
            } }), display.value === "block" && ((_c = children) === null || _c === void 0 ? void 0 : _c[i])));
    })));
};
Carousel.Slide = Slide;
Carousel.displayName = "Carousel";
Carousel.defaultProps = {
    defaultSlide: 0,
    autoHeight: true
};
//# sourceMappingURL=Carousel.js.map