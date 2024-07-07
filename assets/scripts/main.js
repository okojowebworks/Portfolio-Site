
// ハンバーガーメニュー----------------------//

$(".c-hamburger-btn").click(function () {
  $(this).toggleClass('active');
  $("#gnav").toggleClass('panelactive');
});

$("#gnav a").click(function () {
  $(".c-hamburger-btn").removeClass('active');
  $("#gnav").removeClass('panelactive');
});

$(document).on('click', function (e) { //画面上どこかがクリックされた時の処理

  if (!$(e.target).closest('#gnav').length) { //gnavの領域外か判定

    //gnav領域外の場合、
    $(".c-hamburger-btn").removeClass('active');
    $("#gnav").removeClass('panelactive');
  }
});


// スムーススクロール----------------------//
// ヘッダーロゴをクリック
$('.scroll__header__logo').on('click', function (e) {
  e.preventDefault();
  $('body,html').animate({ scrollTop: 0 }, 400);
});

//リンクをクリック
$('a[href="^#"]').on('click', function () {
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top - 64;
  $('body,html').animate({ scrollTop: pos }, 400); //スクロールの速さ
  return false;
});

// ヘッダーが消えるアニメーション----------------------//
var beforePos = 0; //スクロールの値の比較用

//スクロール途中でヘッダーが消え、上にスクロールすると復活する設定の関数
function ScrollAnime() {
  var elemTop = $('#history').offset().top;//指定の位置まできたら
  var scroll = $(window).scrollTop();

  //ヘッダーの出し入れ
  if (scroll == beforePos) {
    //IE11対策で処理を入れない
  } else if (elemTop > scroll || 0 > scroll - beforePos) {

    //ヘッダーが上から出現する
    $('#header').removeClass('UpMove');
    $('#header').addClass('DownMove');
  } else {
    //ヘッダーが上に消える
    $('#header').removeClass('DownMove');
    $('#header').addClass('UpMove');
  }

  beforePos = scroll;//現在のスクロール値を比較用のbeforePosに格納
}


// 画面をスクロールをしたら動かす
$(window).scroll(function () {
  ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});

// ページが読み込まれたらすぐに動かす
$(window).on('load', function () {
  ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});
