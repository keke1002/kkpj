"use strict";

// 轮播图
function lunBo() {
  // 声明一个全局的定时器
  var timer = null;
  var index = 0; // 下一张的函数

  function next() {
    index++;

    if (index > 4) {
      // 图片到最后一张的时候，跳回到第一张，可以在最后一张中放入第一张的图片，一实现无缝轮播；
      // $('.big_img').animate({ left: -(index) * 960 }, 500);
      index = 0;
      $('.box .top').animate({
        left: 0
      }, 0);
    }

    $('.box .top').animate({
      left: -index * 1250
    }, 10);
    small_img(index);
  }

  function prev() {
    index--;

    if (index < 0) {
      index = 5;
      $('.box .top').animate({
        left: -index * 1250
      }, 0);
    }

    $('.box .top').animate({
      left: -index * 1250
    }, 500);
    small_img(index);
  } // 设置自动轮播


  function auto() {
    timer = setInterval(function () {
      next();
      small_img(index);
    }, 3000);
  }

  auto(); // 鼠标移入，定时器取消

  $('.box .top').mouseenter(function () {
    clearInterval(timer);
  }); // 鼠标移出，定时器开启

  $('.box .top').mouseleave(function () {
    auto();
  }); // 鼠标移入小方块，改变大图

  $('.small_ul li').click(function () {
    var index = $(this).index();
    $('.box .top').animate({
      left: -index * 1250
    }, 500);
    small_img(index);
  }); // 小方块的改变，通过下标，当前下标的元素添加样式，其他的清除样式

  function small_img(index) {
    $('.small_ul li').eq(index).removeClass('active').siblings().addClass('active');
  }
}

lunBo();