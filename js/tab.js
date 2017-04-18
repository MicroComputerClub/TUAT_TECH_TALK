$(function(){
  $('#about-tab').on('click', function(){
      $('#map-tab').removeClass("is-active");
      $('#about-tab').addClass("is-active");
      $('#map').html("");
      $('#about').html("<h3 class=\"title is-2\"><span class=\"icon is-medium\"><i class=\"fa fa-pencil\"></i></span> <strong>Lightning Talk</strong> (LT) ってなに？</h3><h4 /><h4 class=\"subtitle is-4\">LTとは，５分程度で行われるプレゼンテーションのことです．</h4><h1>　</h1><h1>　</h1><h1>　</h1><h3 class=\"title is-2\"><span class=\"icon is-medium\"><i class=\"fa fa-pencil\"></i></span> どんな話をするの？</h3><h4 /><h4 class=\"subtitle is-4\">技術系の話から好きな食べ物の話まで様々ですので，自分の興味のあるテーマを持ち込んで話してみましょう．</h4>");
    }
  );
  $('#map-tab').on('click', function(){
      $('#about-tab').removeClass("is-active");
      $('#map-tab').addClass("is-active");
      $('#about').html("");
      $('#map').html("<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1904.4229733387267!2d139.52054470592645!3d35.70013783553932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4659c21a34b48e4a!2z5p2x5Lqs6L6y5bel5aSn5a2mIOasheWvrg!5e0!3m2!1sja!2sjp!4v1492497186504\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>");
    }
  );
});
