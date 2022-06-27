;
(function(win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var _t;

    function remCaculate() {
        // 获得指定对象的宽度
        var width = docEl.getBoundingClientRect().width
        console.log(width);
        if (width > 640) {
            width = 640
        }
        //设定宽度为总宽度1/6.4,即与640之商的一百倍
        var rem = width / 6.4;
        docEl.style.fontSize = rem + 'px'
    };
    remCaculate();

    //事件监听窗口缩放，重新调用rem计算器
    win.addEventListener('resize', function() {
        this.clearInterval(_t)
        _t = setTimeout(remCaculate(), 300);
    }, false)
})(window);