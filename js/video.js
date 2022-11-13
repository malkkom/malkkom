$(function(){
    var videos = [
        {videoURL:"https://www.youtube.com/watch?v=RsTNPHTjTNQ",containment:'self',autoPlay:false, mute:false, startAt:0, opacity:1, loop:false, useOnMobile:true, stopMovieOnBlur :true, abundance: 0, },
      ];
    
      $("#myPlayer").YTPlaylist(videos, false);

      $('#myPlayer').on("YTPTime",function(e){
        var currentTime = $('#myPlayer').YTPGetTime();
        $('.now_time').html('NOW : '+ currentTime );
    
        var totalTime = $('#myPlayer').YTPGetTotalTime();
        $('.total_time').html('TOTAL : '+ totalTime );
      });

      $('.btn_play').click(function(){
        if( $(this).hasClass('pause') ){
          $('#myPlayer').YTPPause();
          $(this).removeClass('pause').addClass('play').text('Play');
        }else{
          $('#myPlayer').YTPPlay();
          $(this).removeClass('play').addClass('pause').text('Pause');
        }
      });
})