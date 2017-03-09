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

/* {contents} */

module.exports = _;