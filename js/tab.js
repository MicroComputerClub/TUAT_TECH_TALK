$(function(){
  $('#about-tab').on('click', function(){
      $('#access-tab').removeClass("is-active");
      $('#about-tab').addClass("is-active");
      $('#access').html("");
      $('#about').html(
         '<h3 class="title is-2">'
        +'  <span class="icon is-medium">'
        +'    <i class="fa fa-pencil"></i>'
        +'  </span>'
        +'  <strong>Lightning Talk</strong> (LT) ってなに？'
        +'</h3>'
        +'<h4 class="subtitle is-5">LTとは，５分程度で行われるプレゼンテーションのことです．</h4>'
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
      );
    }
  );
  $('#access-tab').on('click', function(){
      $('#about-tab').removeClass("is-active");
      $('#access-tab').addClass("is-active");
      $('#about').html("");
      $('#access').html(
         '<h3 class="title is-2">'
        +'  <span class="icon is-medium">'
        +'    <i class="fa fa-map"></i>'
        +'  </span>'
        +'  <strong>Map</strong>'
        +'</h3>'
        +'<iframe class="embedded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1904.4229733387267!2d139.52054470592645!3d35.70013783553932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4659c21a34b48e4a!2z5p2x5Lqs6L6y5bel5aSn5a2mIOasheWvrg!5e0!3m2!1sja!2sjp!4v1492497186504" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
        +'<p>　</p>'
        +'<h3 class="title is-2">'
        +'  <span class="icon is-medium">'
        +'    <i class="fa fa-street-view"></i>'
        +'  </span>'
        +'  <strong>Street View</strong>'
        +'</h3>'
        +'<iframe class="embedded" src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sja!2sjp!4v1492528679334!6m8!1m7!1smgZEYZk5bQhPxLYl2l1Xdw!2m2!1d35.70040529052323!2d139.5205052801241!3f298.9100341451461!4f3.203588412928184!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      );
    }
  );
});
