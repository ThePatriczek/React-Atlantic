var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import { StyledTypoButton } from '../../Button/Button.style';
import { Icon } from '../../Icon';
import { Input } from '../../Input';
import { Tooltip } from '../../Tooltip';
import { StyledCodeText, StyledDelText, StyledInsText, StyledMarkText, StyledStrongText, StyledText } from './Text.style';
var TextArea = Input.TextArea;
export var Text = function (props) {
    var children = props.children, type = props.type, isCopyable = props.isCopyable, isEditable = props.isEditable, onEditConfirm = props.onEditConfirm, className = props.className, element = props.element, editText = props.editText;
    var _a = React.useState(false), isEditing = _a[0], setEditing = _a[1];
    var _b = React.useState(children), value = _b[0], setValue = _b[1];
    var _c = React.useState(props.copyText), copyText = _c[0], setCopyText = _c[1];
    var copyBtnRef = React.createRef();
    var editBtnRef = React.createRef();
    var onCopy = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setCopyText(props.copiedText);
                    if (!children) return [3 /*break*/, 2];
                    return [4 /*yield*/, navigator.clipboard.writeText(children.toString())];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (copyBtnRef.current) {
                        Tooltip.show(copyBtnRef.current);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var onEdit = function () {
        setEditing(true);
        if (editBtnRef.current) {
            Tooltip.hide(editBtnRef.current);
        }
    };
    if (isEditable && isEditing) {
        var onEnterPress = function (val) {
            setEditing(false);
            if (onEditConfirm) {
                onEditConfirm(val);
            }
        };
        return (React.createElement(TextArea, { onChange: function (val) { return setValue(val); }, value: value, onEnterPress: onEnterPress, onBlur: function () {
                setValue(children);
                setEditing(false);
            }, autoFocus: true }));
    }
    var Content = (React.createElement(React.Fragment, null,
        value,
        isEditable && (React.createElement(StyledTypoButton, { onClick: onEdit, "data-tip": editText, onMouseEnter: function () {
                if (editBtnRef.current) {
                    Tooltip.show(editBtnRef.current);
                }
            }, onMouseLeave: function () {
                if (editBtnRef.current) {
                    Tooltip.hide(editBtnRef.current);
                }
            }, ref: editBtnRef },
            React.createElement(Icon, { name: 'edit' }),
            React.createElement(Tooltip, null))),
        isCopyable && (React.createElement(StyledTypoButton, { onClick: onCopy, "data-tip": copyText, ref: copyBtnRef, key: copyText, onMouseEnter: function () {
                if (copyBtnRef.current) {
                    Tooltip.show(copyBtnRef.current);
                }
            }, onMouseLeave: function () {
                if (copyBtnRef.current) {
                    Tooltip.hide(copyBtnRef.current);
                    setCopyText(props.copyText);
                }
            } },
            React.createElement(Icon, { name: 'copy' }),
            React.createElement(Tooltip, null)))));
    switch (element) {
        case 'strong':
            return (React.createElement(StyledStrongText, { className: className, type: type }, Content));
        case 'code':
            return React.createElement(StyledCodeText, { className: className }, Content);
        case 'del':
            return React.createElement(StyledDelText, { className: className }, Content);
        case 'mark':
            return React.createElement(StyledMarkText, { className: className }, Content);
        case 'ins':
            return React.createElement(StyledInsText, { className: className }, Content);
        case 'span':
        default:
            return (React.createElement(StyledText, { className: className, type: type }, Content));
    }
};
Text.defaultProps = {
    element: 'span',
    type: 'default',
    copyText: "Copy",
    copiedText: "Copied",
    editText: "Edit"
};
Text.displayName = "Text";
//# sourceMappingURL=Text.js.map