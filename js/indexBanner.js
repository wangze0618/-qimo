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
            indexx: 0,
        },
        mounted: function () {
            //需要加载时触发的函数
            this.autoPlay()
            // this.isActive()
        },

        methods: {
            prev() {
                // 鼠标单击切换上一张
                if (this.index > 0) {
                    this.index--
                } else {
                    this.index = this.imgList.length - 1
                }
            },
            next() {
                // 鼠标单击切换下一张
                if (this.index < this.imgList.length - 1) {
                    this.index++
                } else {
                    this.index = 0
                }
            },
            autoPlay() {
                //每隔3秒切换图片 (大图轮播)
                function auto() {
                    if (vm.index < vm.imgList.length - 1) {
                        vm.index++
                    } else if (vm.index == vm.imgList.length - 1) {
                        vm.index = 0
                    }
                }
                timer = setInterval(auto, 3500)
            },
            stopPlay() {
                // 鼠标移入停止播放
                clearInterval(timer)
            },
            againPlay() {
                // 鼠标移出重新播放
                // 怎么在这里调用autoPlay()方法里的auto()函数
                this.$options.methods.autoPlay()
            },
            // isActive() {
            //     if (index == vm.index) {
            //         console.log('hello');
            //     }
            // }
        }
    })
}