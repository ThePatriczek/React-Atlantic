var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { Input } from '../Input';
import { StyledInput } from '../Input/Input.style';
export var StyledPagination = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  user-select: none;\n\n  ul {\n    display: inline-block;\n    vertical-align: middle;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n\n    li {\n      display: inline-block;\n      list-style: none;\n      margin: 0 ", ";\n    }\n  }\n\n  && {\n    > div,\n    > span {\n      display: inline-block;\n      margin: 0 0 0 ", ";\n    }\n\n    span + span {\n      margin-left: ", ";\n    }\n  }\n"], ["\n  user-select: none;\n\n  ul {\n    display: inline-block;\n    vertical-align: middle;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n\n    li {\n      display: inline-block;\n      list-style: none;\n      margin: 0 ", ";\n    }\n  }\n\n  && {\n    > div,\n    > span {\n      display: inline-block;\n      margin: 0 0 0 ", ";\n    }\n\n    span + span {\n      margin-left: ", ";\n    }\n  }\n"])), function (props) { return props.theme.margin.xs; }, function (props) { return props.theme.margin.md; }, function (props) { return props.theme.margin.sm; });
export var StyledPaginationInput = styled(Input)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", " {\n    width: 120px;\n  }\n"], ["\n  ", " {\n    width: 120px;\n  }\n"])), StyledInput);
var templateObject_1, templateObject_2;
//# sourceMappingURL=Pagination.style.js.map