$('.mainMenu li').mouseover(function(){
    $(this).find('.subMenu').stop().fadeIn(500);
});

$('.mainMenu li').mouseout(function(){
    $(this).find('.subMenu').stop().fadeOut(500);
});


function move (){
            
    $('#imgs').animate({marginLeft: -100 + "%"},
        function(){
            $('#imgs li:first').appendTo('#imgs');
            $('#imgs').animate({marginLeft: 0},0)
        }
    )
    }   

    setInterval(move,3000)
