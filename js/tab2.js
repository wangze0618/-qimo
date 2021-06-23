window.onload = function () {
    var zhutu = document.getElementById("zhutu");
    var small = document.getElementById("small");
    var smallpic = small.getElementsByTagName("img");
    var fangdajing = document.getElementById("fangdajing");
    var big = document.getElementById("big");
    var suolvetu = document.getElementById("suolvetu");
    var bigpic = big.getElementsByTagName("img");

    small.onmouseout = function () {
        fangdajing.style.display = "none";
        big.style.display = "none";
    };

    small.onmouseover = function () {
        fangdajing.style.display = "block";
        big.style.display = "block";

        small.onmousemove = function (e) {
            //var e = evt | window.event
            var X = e.pageX - zhutu.offsetLeft - fangdajing.offsetWidth / 2;
            var Y = e.pageY - zhutu.offsetTop - fangdajing.offsetHeight / 2;
            if (X < 0) {
                X = 0;
            } else if (X > small.offsetWidth - fangdajing.offsetWidth) {
                X = small.offsetWidth - fangdajing.offsetWidth;
            }

            if (Y < 0) {
                Y = 0;
            } else if (Y >= small.offsetHeight - fangdajing.offsetHeight) {
                Y = small.offsetHeight - fangdajing.offsetHeight;
            }
            fangdajing.style.left = X + "px";
            fangdajing.style.top = Y + "px";
            // bigpic.style.left=-X/(small.offsetWidth/fangdajing.offsetWidth)+'px'
            // bigpic.style.top=-Y/(small.offsetHeight/fangdajing.offsetHeight)+'px'
            bigpic[0].style.left = -1.5 * X + "px";
            bigpic[0].style.top = -1.5 * Y + "px";
        };
    };

    //遍历img
    var slt_img = suolvetu.getElementsByTagName("img");
    for (i = 0; i < slt_img.length; i++) {
        (function (i) {
            var sltimg = slt_img[i];
            sltimg.onmouseover = function () {
                bigpic[0].src = "./upload/sjb" + (i + 1) + ".jpg";
                smallpic[0].src = "./upload/sjb" + (i + 1) + ".jpg";
            };
        })(i);
    }
};

var sec2_title = document.getElementsByClassName("xxk_title"); //获取选项卡标题占位框的类名称
var sec2_tit_Li = sec2_title[0].getElementsByTagName("li");
var sec2_content = document.getElementsByClassName("xxk_content"); //获取选项卡内容占位框的类名称
var sec2_con_details =
    sec2_content[0].getElementsByClassName("xxk_con_details"); //获取存放选项卡具体内容的div的类名称
console.log(sec2_tit_Li);
console.log(sec2_con_details);

for (i = 0; i < sec2_tit_Li.length; i++) {
    var li = sec2_tit_Li[i];
    li.index = i;
    li.onmouseover = function () {
        for (j = 0; j < sec2_tit_Li.length; j++) {
            sec2_tit_Li[j].className = "";
            sec2_con_details[j].style.display = "none";
        }
        this.className = "xxk_title_selected"; //添加设置选项卡被选中的
        sec2_con_details[this.index].style.display = "block";
    };
}

//购物车计数
var price_div = document.getElementsByClassName("price")[0];
var input1 = price_div.getElementsByTagName("input")[0];
var input2 = price_div.getElementsByTagName("input")[1];
var input3 = price_div.getElementsByTagName("input")[2];

// 小于1个就不能减小了
input1.onclick = function () {
    if (input2.value > 1) {
        input2.value--;
    } else {
        input2.value = 1;
        // 这一句可写可不写
    }
};

// 当数量超过10个就不能添加了
input3.onclick = function () {
    if (input2.value < 10) {
        input2.value++;
    } else {
        alert("不能超过10个！");
    }
};

