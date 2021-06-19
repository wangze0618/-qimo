window.onload = function () {
    // 吸顶效果
    window.onscroll = function () {
        var scrolltop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
        var navitems = document.getElementById('navitems');
        var main = document.getElementsByClassName('main')[0]
        if (scrolltop > main.offsetTop) {
            navitems.className = 'fixed'
        }
        else {
            navitems.className = 'navitems fl'
        }
    }
}
