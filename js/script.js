jQuery(document).ready(function($) {
//AOS
  AOS.init();

// color
  $('.checkerboard').click(function(){

    if ($('body').css('background-color')=== 'rgb(18, 18, 18)'|| $('body').css('background-color')=== '#121212' ){
      $('body').css('background', '#eaeaea');
      $('#homePageLayer').css('background', 'rgba(0,0,0,0.5)');
      $('.layer').css('background-color', 'rgba(0,0,0,0.5)');
      $('.layerExperiences').css('background-color', 'rgba(0,0,0,0.5)');
      $('#firstImage').attr('src', 'img/Code-image-1400x650.jpg');
      $('#secondImage').attr('src', 'img/informatique-1.jpg');
      $('#thirdImage').attr('src', 'img/Microsoft-bosque-programming-language.jpg');
      $('.icon').css('color', '#10F8CA');
      $('.card').css('border', '0.6em solid #04B794');
      $('.button').removeClass('btn-warning');
      $('.button').addClass('btn-info');
      $('.buttonOutline').removeClass('btn-outline-warning');
      $('.buttonOutline').addClass('btn-outline-info');
      $('.modal-header').removeClass('bg-warning');
      $('.modal-header').addClass('bg-info');
      $('.barColor').css('background-color', '#04B794');
      $('.properCard').css('background-color', '#04B794');

    }else{

      $('body').css('background-color', '#121212');
      $('#homePageLayer').css('background', 'rgba(255,153,8,0.1)');
      $('.layer').css('background', 'rgba(255,153,8,0.2)');
      $('.layerExperiences').css('background', 'rgba(255,153,8,0.1)');
      $('#firstImage').attr('src','img/Code-image-1400x650_color.jpg');
      $('#secondImage').attr('src', 'img/informatique-1_color.jpg');
      $('#thirdImage').attr('src','img/Microsoft-bosque-programming-language_color.jpg');
      $('.icon').css('color', '#ff9908');
      $('.card').css('border', '0.6em solid #ff9908');
      $('.button').removeClass('btn-info');
      $('.button').addClass('btn-warning');
      $('.buttonOutline').removeClass('btn-outline-info');
      $('.buttonOutline').addClass('btn-outline-warning');
      $('.modal-header').removeClass('bg-info');
      $('.modal-header').addClass('bg-warning');
      $('.barColor').css('background-color', '#ff9908');
      $('.properCard').css('background-color', '#ff9908');
    }
  });
// responsive
var widthSizeWindow = $(window).width();
var heightSizeWindow = $(window).height();
  if ( heightSizeWindow < 600 ){                                   //iphone 5

    $('.menu-button').css('margin-left', '1em');
    $('.containerIcon').css('margin-top', '0px');
    $('.containerIcon').css('margin-left', '0');
    $('.first').css('margin-left', '2em');
    $('#dataProcessing').css('height', '300vh');
    $('.layer').css('height', '300vh');
    $('#skillsContainer').css('margin-left', '20px');
    $('.skillsTitle').removeClass('ml-5');
    $('.skillsTitle').css('margin-left', '3.5em');
    $('.iconSkills').css('height', '60%');
    $('.iconSkills').css('margin-left', '35px');
    $('#imgSkills').css('margin-left', '-1em');
    $('.properCard').css('margin-left', '0');
    $('.properCard').css('width', '28em');
    $('.properCard').css('height', '24em');
    $('.imgProperCard').css('width', '28em');
    $('.experiencesText').css('margin-bottom', '33px');
    $('.imgProperCard').css('border-radius', '0 0 10px 10px');
    $('#experiences').css('height', '200vh');
    $('.layerExperiences').css('height', '200vh');
    $('#carousel').css('margin-left', '16%');
    $('.containerFooterIcon').css('padding-left', '29%');

  } else if (heightSizeWindow >= 600 && heightSizeWindow < 700 ){       //iphone 6

    $('.menu-button').css('margin-left', '1em');
    $('.containerIcon').css('margin-top', '0em');
    $('.containerIcon').css('margin-left', '0');
    $('.first').css('margin-left', '2em');
    $('#dataProcessing').css('height', '270vh');
    $('.layer').css('height', '270vh');
    $('#skillsContainer').css('margin-left', '20px');
    $('.skillsTitle').removeClass('ml-5');
    $('.skillsTitle').css('margin-left', '3.5em');
    $('.iconSkills').css('height', '60%');
    $('.iconSkills').css('margin-left', '35px');
    $('#imgSkills').css('margin-left', '-1em');
    $('.properCard').css('margin-left', '0');
    $('.properCard').css('width', '28em');
    $('.properCard').css('height', '24em');
    $('.imgProperCard').css('width', '28em');
    $('.experiencesText').css('margin-bottom', '33px');
    $('.imgProperCard').css('border-radius', '0 0 10px 10px');
    $('#experiences').css('height', '180vh');
    $('.layerExperiences').css('height', '180vh');
    $('#carousel').css('margin-left', '15%');
    $('.containerFooterIcon').css('padding-left', '28%');

  }else if (widthSizeWindow > 400 && widthSizeWindow < 1300 ){      //ipad

    $('.menu-button').css('margin-left', '0em');
    $('.containerIcon').css('margin-top', '-10em');
    $('.containerIcon').css('margin-left', '-5em');
    $('.first').css('margin-left', '3em');
    $('#dataProcessing').css('height', '100vh');
    $('.layer').css('height', '100vh');
    $('#skillsContainer').css('margin-left', '3em');
    $('.skillsTitle').css('margin-left', 'auto');
    $('.skillsTitle').addClass('ml-5');
    $('.iconSkills').css('height', '75%');
    $('.iconSkills').css('margin-left', '0');
    $('#imgSkills').css('margin-left', '0');
    $('#school').css('margin-top', '-6.8em');
    $('.properCard').css('margin-left', '0.5em');
    $('.properCard').css('width', '55em');
    $('.properCard').css('height', '12em');
    $('.imgProperCard').css('width', '27.5em');
    $('.experiencesText').css('margin-bottom', '0');
    $('.imgProperCard').css('border-radius', '0 10px 10px 0');
    $('#experiences').css('height', '100vh');
    $('.layerExperiences').css('height', '100vh');
    $('#carousel').css('margin-left', '37%');
    $('.containerFooterIcon').css('padding-left', '40.5%');

  } else {

    $('.menu-button').css('margin-left', '5em');
    $('.containerIcon').css('margin-top', '-10em');
    $('.containerIcon').css('margin-left', '0');
    $('.first').css('margin-left', '3em');
    $('#dataProcessing').css('height', '100vh');
    $('#skillsContainer').css('margin-left', '-5em');
    $('.skillsTitle').css('margin-left', 'auto');
    $('.skillsTitle').addClass('ml-5');
    $('.iconSkills').css('height', '100%');
    $('.iconSkills').css('margin-left', '0');
    $('#imgSkills').css('margin-left', '-5em');
    $('#imgSkills').css('margin-left', '0');
    $('#school').css('margin-top', '-8.15em');
    $('.properCard').css('margin-left', '4em');
    $('.properCard').css('width', '60em');
    $('.properCard').css('height', '12em');
    $('.imgProperCard').css('width', '30em');
    $('.experiencesText').css('margin-bottom', '0');
    $('.imgProperCard').css('border-radius', '0 10px 10px 0');
    $('#experiences').css('height', '100vh');
    $('.layerExperiences').css('height', '100vh');
    $('#carousel').css('margin-left', '37%');
    $('.containerFooterIcon').css('padding-left', '42.5%');
};

// Navigation
  function openMenu() {
    $('.js-menu-container').addClass('is-open');
  };
  function closeMenu() {
    $('.js-menu-container').removeClass('is-open');
  };

  jQuery(document).ready(function($){
    $('.js-menu-button').click(function(){
      openMenu();
    });
    $('.js-menu-close').click(function(){
      closeMenu();
    });
  });
  jQuery(document).keyup(function(e) {
    if (e.keyCode === 27) {
      if ($('.js-menu-container').hasClass('is-open')) {
        closeMenu();
      }
    }
  });

// animation image

  $( '#imgSchool1').mouseover(function() {
    $('#imgSchool1').rotate(-15);
  });
  $('#imgSchool1').mouseout(function() {
    $('#imgSchool1').rotate(0);
  });
  $( '#imgSchool2').mouseover(function() {
    $('#imgSchool2').rotate(15);
  });
  $('#imgSchool2').mouseout(function() {
    $('#imgSchool2').rotate(0);
  });

//animation progress bar
$( "#progressButton" ).click(function() {

    var html = document.getElementById('htmlProgressBar');
    var css = document.getElementById('cssProgressBar');
    var bootstrap = document.getElementById('bootstrapProgressBar');
    var js = document.getElementById('jsProgressBar');
    var cSharp = document.getElementById('cSharpProgressBar');
    var sql = document.getElementById('sqlProgressBar');
    var width = 0;
    var id = setInterval(firstAnimationProgress, 20);
    var id2 = setInterval(secondAnimationProgress, 20);
    var id3 = setInterval(thirdAnimationProgress, 20);
    var id4 = setInterval(fourthAnimationProgress, 20);

    function firstAnimationProgress() {
      if (width >= 90) {
        clearInterval(id);
      } else {
        width++;
        html.style.width = width + '%';
      };
    };

    function secondAnimationProgress() {
      if (width >= 80) {
        clearInterval(id2);
      } else {
        width++;
        css.style.width = width + '%';
        bootstrap.style.width = width + '%';
      };
    };

    function thirdAnimationProgress() {
      if (width >= 40) {
        clearInterval(id3);
      } else {
        width++;
        cSharp.style.width = width + '%';
        sql.style.width = width + '%';
      };
    };

    function fourthAnimationProgress() {
      if (width >= 30) {
        clearInterval(id4);
      } else {
        width++;
        js.style.width = width + '%';
      };
    };

  });
// smooth scroll
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    };
  });

  //carousel
    $('.carousel').carousel({
      interval: 3000,
    });

  });
