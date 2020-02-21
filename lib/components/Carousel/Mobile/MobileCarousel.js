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
import React from 'react';
import { useDrag } from 'react-use-gesture';
import { Carousel } from '../Carousel';
export var MobileCarousel = function (props) {
    var dragGesture = function (setSprings, setSlide, width, index, distanceMove, ref) {
        if (distanceMove === void 0) { distanceMove = width; }
        if (ref === void 0) { ref = document.body; }
        return useDrag(function (_a) {
            // if (down) {
            //   ref.setAttribute('style', 'overflow:hidden');
            // } else {
            //   ref.setAttribute('style', 'overflow:visible');
            // }
            var down = _a.down, xDelta = _a.movement[0], xDir = _a.direction[0], distance = _a.distance, cancel = _a.cancel, last = _a.last;
            var _b;
            if (down && distance > distanceMove) {
                setSlide(!(xDir > 0));
                (_b = cancel) === null || _b === void 0 ? void 0 : _b();
            }
            setSprings(function (i) { return ({
                offset: (down ? xDelta : 0) / width + (i - index),
                display: index === i + 1 || index === i - 1 || i === index
                    ? "block"
                    : "none",
                touchAction: last ? "auto" : "none"
            }); });
        }, {
            axis: "x"
        });
    };
    return React.createElement(Carousel, __assign({}, props, { onDrag: dragGesture }));
};
MobileCarousel.displayName = "MobileCarousel";
//# sourceMappingURL=MobileCarousel.js.map