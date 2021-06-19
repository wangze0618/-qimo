window.onload = function () {
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
    var ftl = document.getElementsByClassName('footList')[0];
    var lis = ftl.getElementsByTagName('li');



    var vm = new Vue({
        el: '.focus',
        data: {
            imgList: [
                "../upload/1.jpg",
                "../upload/2.jpg",
                "../upload/3.jpg",
                "../upload/4.jpg",
                "../upload/5.jpg"],
            index: 0,
            that: this,
        },

        methods: {
            // 上一张
            prev() {
                if (this.index > 0) {
                    this.index--
                } else {
                    this.index = this.imgList.length - 1
                }

            },
            // 下一张
            next() {
                if (this.index < this.imgList.length - 1) {
                    this.index++
                } else {
                    this.index = 0
                }
            },
            autoPlay() {
                function auto() {
                    if (vm.index < vm.imgList.length - 1) {
                        vm.index++
                        if (vm.index == 4) {
                            vm.index = 0
                        }
                    }


                }
                timer = setInterval(auto, 3000)
            },
        }
    })
}