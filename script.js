'use strict';
const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.header-nav-list');

btn.addEventListener('click', () =>{
    nav.classList.toggle('open-menu')
});

let mySwiper = new Swiper ('.swiper', {

    // オプション設定
    loop: true, // スライドの無限ループ
  autoplay: { // スライドの自動再生
    delay: 3000, // スライド間の遷移の遅延を設定 (ミリ秒設定） 1000ミリ秒=1秒
  },
  
    // 以下のコードは省略可能
    //ページネーション表示設定
    pagination: {
      el: '.swiper-pagination', //ページネーション要素
      type: 'bullets', //ページネーションの種類
      clickable: true, //クリックに反応させる
    },
  
    //ナビゲーションボタン（矢印）表示の設定
    navigation: {
      nextEl: '.swiper-button-next', //「次へボタン」要素の指定
      prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
    },
  
    //スクロールバー表示の設定
    scrollbar: {
      el: '.swiper-scrollbar', //要素の指定
    },
    initialslide:1,
    speed:1000,
    spaceBetween: 20, // 画像間の余白（px）
    slidesPerView: 1,
    breakpoints: {
      600: {
        slidesPerView: 3,
      }
    } // 画像の表示枚数
    
    //ここまで省略可能
  });
  
// カルーセル
window.addEventListener('DOMContentLoaded', function() {
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
const cruser = document.querySelector('.cruser');
next.addEventListener('click', () =>{
    cruser.style.transform = "translateX(-344px)"
});
prev.addEventListener('click', () =>{
    cruser.style.transform = "translateX(1px)"
});
});

