// main_layout.js

(function($){
  //  분리된 html문서를 불러와서 합치기
  // * 기준 html문서를 기준으로 불러와야 함!!
  // * 반드시 서버가 동작해야 함!!
  
  var wrap = $('#wrap');
  var allUrl = './all/';
  // 1. header#headBox 생성 및 header.html불러오기 
  wrap.prepend('<header id="headBox"></header>');
  var headBox = $('#headBox');
  headBox.load(allUrl + 'header.html'); //불러오는 메소드 load();

  //파일을 불러오는 두번째 방법!!^_^
  var link = function(file, url, fileName){
    // if(file){ var f = file; }else{ var f = 'header'; }
    // 파일명의 이름을 가지면 file 아니며 header가되라
    var f = file      || 'header'; 
    var u = url       || allUrl;
    var fn = fileName || '.html';

    var result = u+f+fn;
    // console.log(result);
    return result;
  };

  // 2. section#adBanner를 생성하여 불러오기
  headBox.after('<section id="adBanner"></section>');
  var adBanner = $('#adBanner');
  var mainUrl = './main/';
  adBanner.load(mainUrl + 'adBanner.html');
  
  // news.html 생성하기
  var bestNews = $('#bestNews');
  bestNews.children('h2').after('<div class="news"></div>');
  $('.news').load(link('news',mainUrl));
  
  // issueText.html 생성하기
  bestNews.children('.news').after('<div class="issue_text"></div>');
  $('.issue_text').load(mainUrl + 'issueText.html');




})(jQuery);
