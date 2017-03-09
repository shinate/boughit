var _ = {};

function r(ns, m) {
    var n = ns.split(/[\/\.]/), s = _, k;
    while (k = n.shift()) {
        if (n.length) {
            if (s[k] === undefined)
                s[k] = {};
            s = s[k];
        } else {
            if (s[k] === undefined) {
                s[k] = m;
                return true;
            }
        }
    }
    return false;
}

r('anim/tween', require('./lib/anim/tween.js'));
r('arr/clear', require('./lib/arr/clear.js'));
r('arr/findout', require('./lib/arr/findout.js'));
r('arr/inArray', require('./lib/arr/inArray.js'));
r('arr/indexOf', require('./lib/arr/indexOf.js'));
r('arr/isArray', require('./lib/arr/isArray.js'));
r('arr/section', require('./lib/arr/section.js'));
r('arr/unique', require('./lib/arr/unique.js'));
r('codec/base62', require('./lib/codec/base62.js'));
r('codec/base64', require('./lib/codec/base64.js'));
r('codec/hashCode', require('./lib/codec/hashCode.js'));
r('codec/md5', require('./lib/codec/md5.js'));
r('dom/css', require('./lib/dom/css.js'));
r('dom/getElementByClass', require('./lib/dom/getElementByClass.js'));
r('dom/insertBefore', require('./lib/dom/insertBefore.js'));
r('dom/insertElement', require('./lib/dom/insertElement.js'));
r('dom/insertHTML', require('./lib/dom/insertHTML.js'));
r('dom/isNode', require('./lib/dom/isNode.js'));
r('dom/removeNode', require('./lib/dom/removeNode.js'));
r('dom/setStyle', require('./lib/dom/setStyle.js'));
r('dom/sizzle', require('./lib/dom/sizzle.js'));
r('evt/addEvent', require('./lib/evt/addEvent.js'));
r('evt/custEvent', require('./lib/evt/custEvent.js'));
r('evt/fireEvent', require('./lib/evt/fireEvent.js'));
r('evt/fixEvent', require('./lib/evt/fixEvent.js'));
r('evt/getEvent', require('./lib/evt/getEvent.js'));
r('evt/hasEvent', require('./lib/evt/hasEvent.js'));
r('evt/preventDefault', require('./lib/evt/preventDefault.js'));
r('evt/removeEvent', require('./lib/evt/removeEvent.js'));
r('evt/stopEvent', require('./lib/evt/stopEvent.js'));
r('json/jsonToQuery', require('./lib/json/jsonToQuery.js'));
r('json/jsonToString', require('./lib/json/jsonToString.js'));
r('json/stringToJson', require('./lib/json/stringToJson.js'));
r('number/isNumber', require('./lib/number/isNumber.js'));
r('obj/extend', require('./lib/obj/extend.js'));
r('obj/hasProp', require('./lib/obj/hasProp.js'));
r('obj/isObject', require('./lib/obj/isObject.js'));
r('obj/isPlain', require('./lib/obj/isPlain.js'));
r('obj/keys', require('./lib/obj/keys.js'));
r('obj/values', require('./lib/obj/values.js'));
r('str/bLength', require('./lib/str/bLength.js'));
r('str/base64', require('./lib/str/base64.js'));
r('str/dbcToSbc', require('./lib/str/dbcToSbc.js'));
r('str/decodeHTML', require('./lib/str/decodeHTML.js'));
r('str/encodeHTML', require('./lib/str/encodeHTML.js'));
r('str/leadZero', require('./lib/str/leadZero.js'));
r('str/leftB', require('./lib/str/leftB.js'));
r('str/parseHTML', require('./lib/str/parseHTML.js'));
r('str/parseURL', require('./lib/str/parseURL.js'));
r('str/queryString', require('./lib/str/queryString.js'));
r('str/random', require('./lib/str/random.js'));
r('str/trim', require('./lib/str/trim.js'));
r('util/browser', require('./lib/util/browser.js'));
r('util/date', require('./lib/util/date.js'));
r('util/isWindow', require('./lib/util/isWindow.js'));
r('util/listener', require('./lib/util/listener.js'));
r('util/log', require('./lib/util/log.js'));
r('util/objectSortByKey', require('./lib/util/objectSortByKey.js'));
r('util/randomColor', require('./lib/util/randomColor.js'));
r('util/template', require('./lib/util/template.js'));
r('util/textarea', require('./lib/util/textarea.js'));
r('util/toArray', require('./lib/util/toArray.js'));

module.exports = _;