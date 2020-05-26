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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import * as Icons from '../../Icons';
import { StyledIcon } from './Icon.style';
export var Icon = function (_a) {
    var name = _a.name, isRotating = _a.isRotating, IProps = __rest(_a, ["name", "isRotating"]);
    var Component = React.createElement("i", __assign({}, IProps));
    switch (name) {
        case 'arrowsVertical':
            Component = React.createElement(Icons.ArrowsVertical, null);
            break;
        case 'arrowUp':
            Component = React.createElement(Icons.ArrowUp, null);
            break;
        case 'arrowDoubleUp':
            Component = React.createElement(Icons.ArrowDoubleUp, null);
            break;
        case 'arrowRight':
            Component = React.createElement(Icons.ArrowRight, null);
            break;
        case 'arrowDoubleRight':
            Component = React.createElement(Icons.ArrowDoubleRight, null);
            break;
        case 'arrowDown':
            Component = React.createElement(Icons.ArrowDown, null);
            break;
        case 'arrowDoubleDown':
            Component = React.createElement(Icons.ArrowDoubleDown, null);
            break;
        case 'arrowLeft':
            Component = React.createElement(Icons.ArrowLeft, null);
            break;
        case 'arrowDoubleLeft':
            Component = React.createElement(Icons.ArrowDoubleLeft, null);
            break;
        case 'hamburger':
            Component = React.createElement(Icons.Hamburger, null);
            break;
        case 'loading':
            Component = React.createElement(Icons.Loading, null);
            break;
        case 'edit':
            Component = React.createElement(Icons.Edit, null);
            break;
        case 'copy':
            Component = React.createElement(Icons.Copy, null);
            break;
        case 'check':
            Component = React.createElement(Icons.Check, null);
            break;
        case 'checkSimple':
            Component = React.createElement(Icons.CheckSimple, null);
            break;
        case 'clear':
            Component = React.createElement(Icons.Clear, null);
            break;
        case 'close':
            Component = React.createElement(Icons.Close, null);
            break;
        case 'export':
            Component = React.createElement(Icons.Export, null);
            break;
        case 'eye':
            Component = React.createElement(Icons.Eye, null);
            break;
        case 'eyeSlash':
            Component = React.createElement(Icons.EyeSlash, null);
            break;
        case 'import':
            Component = React.createElement(Icons.Import, null);
            break;
        case 'info':
            Component = React.createElement(Icons.Info, null);
            break;
        case 'key':
            Component = React.createElement(Icons.Key, null);
            break;
        case 'license':
            Component = React.createElement(Icons.License, null);
            break;
        case 'logout':
            Component = React.createElement(Icons.Logout, null);
            break;
        case 'plus':
            Component = React.createElement(Icons.Plus, null);
            break;
        case 'search':
            Component = React.createElement(Icons.Search, null);
            break;
        case 'table':
            Component = React.createElement(Icons.Table, null);
            break;
        case 'trash':
            Component = React.createElement(Icons.Trash, null);
            break;
        case 'upload':
            Component = React.createElement(Icons.Upload, null);
            break;
        case 'user':
            Component = React.createElement(Icons.User, null);
            break;
        case 'users':
            Component = React.createElement(Icons.Users, null);
            break;
        case 'enter':
            Component = React.createElement(Icons.Enter, null);
            break;
        case 'error':
            Component = React.createElement(Icons.Error, null);
            break;
        case 'warning':
            Component = React.createElement(Icons.Warning, null);
            break;
        case 'checkCircle':
            Component = React.createElement(Icons.CheckCircle, null);
            break;
        case 'calendar':
            Component = React.createElement(Icons.Calendar, null);
            break;
        case 'calendarAlt':
            Component = React.createElement(Icons.CalendarAlt, null);
            break;
        case 'question':
            Component = React.createElement(Icons.Question, null);
            break;
        case 'profile':
            Component = React.createElement(Icons.Profile, null);
            break;
        case 'zoom':
            Component = React.createElement(Icons.Zoom, null);
            break;
        case 'home':
            Component = React.createElement(Icons.Home, null);
            break;
        case 'bookmarks':
            Component = React.createElement(Icons.Bookmarks, null);
            break;
        case 'tags':
            Component = React.createElement(Icons.Tags, null);
            break;
        case 'star':
            Component = React.createElement(Icons.Star, null);
            break;
        case 'note':
            Component = React.createElement(Icons.Note, null);
            break;
        case 'monitor':
            Component = React.createElement(Icons.Monitor, null);
            break;
        case 'list':
            Component = React.createElement(Icons.List, null);
            break;
        case 'listAlt':
            Component = React.createElement(Icons.ListAlt, null);
            break;
        case 'history':
            Component = React.createElement(Icons.History, null);
            break;
        case 'folder':
            Component = React.createElement(Icons.Folder, null);
            break;
        case 'file':
            Component = React.createElement(Icons.File, null);
            break;
        case 'fileAlt':
            Component = React.createElement(Icons.FileAlt, null);
            break;
        case 'comment':
            Component = React.createElement(Icons.Comment, null);
            break;
        case 'calculator':
            Component = React.createElement(Icons.Calculator, null);
            break;
        case 'book':
            Component = React.createElement(Icons.Book, null);
            break;
        case 'bookOpened':
            Component = React.createElement(Icons.BookOpened, null);
            break;
        case 'citex':
            Component = React.createElement(Icons.Citex, null);
            break;
        case 'play':
            Component = React.createElement(Icons.Play, null);
            break;
        case 'zoomIn':
            Component = React.createElement(Icons.ZoomIn, null);
            break;
        case 'flagParagraph':
            Component = React.createElement(Icons.FlagParagraph, null);
            break;
        case 'flagCzech':
            Component = React.createElement(Icons.FlagCzech, null);
            break;
        case 'flagComments':
            Component = React.createElement(Icons.FlagComments, null);
            break;
        case 'flagEU':
            Component = React.createElement(Icons.FlagEU, null);
            break;
        case 'flagLawCzech':
            Component = React.createElement(Icons.FlagLawCzech, null);
            break;
        case 'flagLawEU':
            Component = React.createElement(Icons.FlagLawEU, null);
            break;
        case 'flagLiterature':
            Component = React.createElement(Icons.FlagLiterature, null);
            break;
        case 'flagSlovakia':
            Component = React.createElement(Icons.FlagSlovakia, null);
            break;
        case 'threeDots':
            Component = React.createElement(Icons.ThreeDots, null);
            break;
        case 'filter':
            Component = React.createElement(Icons.Filter, null);
            break;
        case 'diff':
            Component = React.createElement(Icons.Diff, null);
            break;
        case 'news':
            Component = React.createElement(Icons.News, null);
            break;
        case 'folderOpen':
            Component = React.createElement(Icons.FolderOpen, null);
            break;
        case 'fileCsv':
            Component = React.createElement(Icons.FileCsv, null);
            break;
        case 'fileDoc':
            Component = React.createElement(Icons.FileDoc, null);
            break;
        case 'fileJpg':
            Component = React.createElement(Icons.FileJpg, null);
            break;
        case 'filePdf':
            Component = React.createElement(Icons.FilePdf, null);
            break;
        case 'filePng':
            Component = React.createElement(Icons.FilePng, null);
            break;
        case 'filePpt':
            Component = React.createElement(Icons.FilePpt, null);
            break;
        case 'fileRtf':
            Component = React.createElement(Icons.FileRtf, null);
            break;
        case 'fileTxt':
            Component = React.createElement(Icons.FileTxt, null);
            break;
        case 'fileXls':
            Component = React.createElement(Icons.FileXls, null);
            break;
        case 'fileXml':
            Component = React.createElement(Icons.FileXml, null);
            break;
        case 'fileZip':
            Component = React.createElement(Icons.FileZip, null);
            break;
        case 'virus':
            Component = React.createElement(Icons.Virus, null);
            break;
        case 'facebook':
            Component = React.createElement(Icons.Facebook, null);
            break;
        case 'google':
            Component = React.createElement(Icons.Google, null);
            break;
        case 'fileWithoutContent':
            Component = React.createElement(Icons.FileWithoutContent, null);
            break;
        case 'notification':
            Component = React.createElement(Icons.Notification, null);
            break;
        case 'creditCard':
            Component = React.createElement(Icons.CreditCard, null);
            break;
        case 'attachment':
            Component = React.createElement(Icons.Attachment, null);
            break;
        case 'inProgress':
            Component = React.createElement(Icons.InProgress, null);
            break;
        case 'phone':
            Component = React.createElement(Icons.Phone, null);
            break;
        case 'video':
            Component = React.createElement(Icons.Video, null);
            break;
        case 'crossedPhone':
            Component = React.createElement(Icons.CrossedPhone, null);
            break;
        case 'crossedCamera':
            Component = React.createElement(Icons.CrossedCamera, null);
            break;
        case 'microphone':
            Component = React.createElement(Icons.Microphone, null);
            break;
        case 'crossedMicrophone':
            Component = React.createElement(Icons.CrossedMicrophone, null);
            break;
        case 'emoji':
            Component = React.createElement(Icons.Emoji, null);
            break;
        case 'facebookFilled':
            Component = React.createElement(Icons.FacebookFilled, null);
            break;
        case 'envelope':
            Component = React.createElement(Icons.Envelope, null);
            break;
        case 'login':
            Component = React.createElement(Icons.Login, null);
            break;
        case 'plusSquare':
            Component = React.createElement(Icons.PlusSquare, null);
            break;
        case 'send':
            Component = React.createElement(Icons.Send, null);
            break;
        case 'cog':
            Component = React.createElement(Icons.Cog, null);
            break;
        case 'hash':
            Component = React.createElement(Icons.Hash, null);
            break;
        case 'robot':
            Component = React.createElement(Icons.Robot, null);
            break;
        case 'switch':
            Component = React.createElement(Icons.Switch, null);
            break;
        case 'userAdd':
            Component = React.createElement(Icons.UserAdd, null);
            break;
        case 'building':
            Component = React.createElement(Icons.Building, null);
            break;
        case 'offer':
            Component = React.createElement(Icons.Offer, null);
            break;
        case 'prev':
            Component = React.createElement(Icons.Prev, null);
            break;
        case 'next':
            Component = React.createElement(Icons.Next, null);
            break;
        case 'external':
            Component = React.createElement(Icons.External, null);
            break;
        case 'change':
            Component = React.createElement(Icons.Change, null);
            break;
        case 'print':
            Component = React.createElement(Icons.Print, null);
            break;
        case 'squaresGrid':
            Component = React.createElement(Icons.SquaresGrid, null);
            break;
        case 'tag':
            Component = React.createElement(Icons.Tag, null);
            break;
        case 'timeline':
            Component = React.createElement(Icons.Timeline, null);
            break;
        case 'brush':
            Component = React.createElement(Icons.Brush, null);
            break;
        case 'fontSize':
            Component = React.createElement(Icons.FontSize, null);
            break;
    }
    return (React.createElement(StyledIcon, __assign({ isRotating: isRotating, name: name }, IProps), Component));
};
//# sourceMappingURL=Icon.js.map