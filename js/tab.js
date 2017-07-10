$(function(){
  $('#about-tab').on('click', function(){
      $('#about-tab').addClass("is-active");
      $('#access-tab').removeClass("is-active");
      $('#actor-tab').removeClass("is-active");
      $('#attend-tab').removeClass("is-active");
      $('#access').html("");
      $('#actor').html("");
      $('#attend').html("");
      $('#about').html(
         '<h3 class="title is-2">'
        +'  <span class="icon is-medium">'
        +'    <i class="fa fa-pencil"></i>'
        +'  </span>'
        +'  <strong>Lightning Talk</strong> (LT) ってなに？'
        +'</h3>'
        +'<h4 class="subtitle is-5">LTとは，５分程度で行われるプレゼンテーションのことです．<br>'
        +'<a class="link" href="https://ja.wikipedia.org/wiki/%E3%83%A9%E3%82%A4%E3%83%88%E3%83%8B%E3%83%B3%E3%82%B0%E3%83%88%E3%83%BC%E3%82%AF">What is LT?</a></h4>'
        +'<h3 class="title is-2">'
        +'  <span class="icon is-medium">'
        +'    <i class="fa fa-pencil"></i>'
        +'  </span>'
        +'  どんな話をするの？'
        +'</h3>'
        +'<h4 class="subtitle is-5">技術系の話から好きな食べ物の話まで様々ですので，自分の興味のあるテーマを持ち込んで話してみましょう．</h4>'
        +'<h3 class="title is-2">'
        +'  <span class="icon is-medium">'
        +'    <i class="fa fa-pencil"></i>'
        +'  </span>'
        +'  どうしてはじまったの？'
        +'</h3>'
        +'<h4 class="subtitle is-5">'
        +'  こういったLTイベントは実は全国で開催されていますが，多くは誰でも参加OKのイベントとなっており，初参加者からすると少しハードルの高いものになっています．<br>'
        +'  そこでまずは学内限定イベントから気軽に参加してもらうことで，こういったイベントになれるとともに，農工大生同士でいろいろな情報を共有し合おうという意図で始まったイベントです．'
        +'</h4>'
        +'<h3 class="title is-2">'
        +'  <span class="icon is-medium">'
        +'    <i class="fa fa-pencil"></i>'
        +'  </span>'
        +'  連絡先'
        +'</h3>'
        +'<h4 class="subtitle is-5 is-last">'
        +'  要望や質問は以下までお願い致します。<br>'
        +'  Twitter: <a href="https://twitter.com/gurapomu">gurapomu</a><br>'
        +'  Email: gurapomu@gmail.com'
        +'</h4>'
      );
    }
  );
  $('#access-tab').on('click', function(){
      $('#access-tab').addClass("is-active");
      $('#about-tab').removeClass("is-active");
      $('#actor-tab').removeClass("is-active");
      $('#attend-tab').removeClass("is-active");
      $('#about').html("");
      $('#actor').html("");
      $('#attend').html("");
      $('#access').html(
         '<h3 class="title is-2">'
        +'  <span class="icon is-medium">'
        +'    <i class="fa fa-map-marker"></i>'
        +'  </span>'
        +'  <strong>Address</strong>'
        +'</h3>'
        +'<h4 class="subtitle is-5">'
        +'  〒184-0011<br>'
        +'  東京都小金井市東町３丁目７−２１　東小金井駅開設記念館　１Ｆギャラリー'
        +'</h4>'
        +'<h3 class="title is-2">'
        +'  <span class="icon is-medium">'
        +'    <i class="fa fa-map"></i>'
        +'  </span>'
        +'  <strong>Map</strong>'
        +'</h3>'
        +'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.054843791268!2d139.52685395121762!3d35.70026798009261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ef8019232497%3A0xd69a2326ebab0cf6!2z5p2x5bCP6YeR5LqV6aeF6ZaL6Kit6KiY5b-15Lya6aSo!5e0!3m2!1sja!2sjp!4v1499672596422" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
        +'<p>　</p>'
        +'<h3 class="title is-2">'
        +'  <span class="icon is-medium">'
        +'    <i class="fa fa-street-view"></i>'
        +'  </span>'
        +'  <strong>Street View</strong>'
        +'</h3>'
        +'<iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1499672703159!6m8!1m7!1sqTiPWD5R1FhrBH-ZB5fI6g!2m2!1d35.70045172770156!2d139.5291323374726!3f211.3219744438387!4f3.4772480669748234!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      );
    }
  );
  $('#actor-tab').on('click', function(){
      $('#actor-tab').addClass("is-active");
      $('#about-tab').removeClass("is-active");
      $('#access-tab').removeClass("is-active");
      $('#attend-tab').removeClass("is-active");
      $('#about').html("");
      $('#access').html("");
      $('#attend').html("");
      $('#actor').html(
         '<h3 class="title is-2">'
        +'  <span class="icon is-medium">'
        +'    <i class="fa fa-table"></i>'
        +'  </span>'
        +'  <strong>Actor Table</strong>'
        +'</h3>'
        +'<table class="table is-narrow">'
        +'  <thead>'
        +'    <tr>'
        +'      <th>登壇者</th>'
        +'      <th>発表内容</th>'
        +'    </tr>'
        +'  </thead>'
        +'  <tbody>'
        +'    <tr>'
        +'      <td>ぐらぽむ</td>'
        +'      <td>鳥人間コンテストを見てきました</td>'
        +'    </tr>'
        +'  </tbody>'
        +'</table>'
        +'<h3 class="title is-2">'
        +'</h3>'
        +'<h3 class="title is-2">'
        +'  <span class="icon is-medium">'
        +'    <i class="fa fa-table"></i>'
        +'  </span>'
        +'  <strong>Time Table</strong>'
        +'</h3>'
        +'<table class="table is-bordered">'
        +'  <thead>'
        +'    <tr>'
        +'      <th>時間</th>'
        +'      <th>内容</th>'
        +'    </tr>'
        +'  </thead>'
        +'  <tbody>'
        +'    <tr>'
        +'      <td>16:30</td>'
        +'      <td>オープニング</td>'
        +'    </tr>'
        +'    <tr>'
        +'      <td>16:40</td>'
        +'      <td>LT前半開始</td>'
        +'    </tr>'
        +'    <tr>'
        +'      <td>18:00</td>'
        +'      <td>休憩</td>'
        +'    </tr>'
        +'    <tr>'
        +'      <td>18:10</td>'
        +'      <td>LT後半開始</td>'
        +'    </tr>'
        +'    <tr>'
        +'      <td>19:30</td>'
        +'      <td>クロージング</td>'
        +'    </tr>'
        +'    <tr>'
        +'      <td>20:00</td>'
        +'      <td>完全撤退</td>'
        +'    </tr>'
        +'  </tbody>'
        +'</table>'
        +'<h3 class="title is-2">'
        +'</h3>'
      );
    }
  );
  $('#attend-tab').on('click', function(){
      $('#attend-tab').addClass("is-active");
      $('#actor-tab').removeClass("is-active");
      $('#about-tab').removeClass("is-active");
      $('#access-tab').removeClass("is-active");
      $('#about').html("");
      $('#access').html("");
      $('#actor').html("");
      $('#attend').html(
         '<h3 class="title is-2">'
        +'  <span class="icon is-medium">'
        +'    <i class="fa fa-google"></i>'
        +'  </span>'
        +'  <strong>Google Form</strong>'
        +'</h3>'
        +'<div>'
        +'  <iframe src="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdaTyD39S3arku3fPMouSG6kIkJdXqGKAgxUneDH7YgBCRL_A/viewform?embedded=true" width="760" height="1000" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます...</iframe>'
        +'</div>'
      );
    }
  );
});
