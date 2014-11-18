$(document).ready(function() { 
    $('a#go').click( function(event){ 
        event.preventDefault(); 
        $('#overlay').fadeIn(400, 
            function(){ 
                $('#modal_form') 
                    .css('display', 'block') // 
                    .animate({opacity: 1, top: '10%'}, 100); // плавно прибавляем прозрачность одновременно со съезжанием вниз
        });
    });
    /* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
    $('#modal_close, #overlay,.send').click( function(){ // ловим клик по крестику или подложке
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 100,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
                function(){ // после анимации
                    $(this).css('display', 'none'); // делаем ему display: none;
                    $('#overlay').fadeOut(300); // скрываем подложку
                }
            );
    });
	
	alignCenter($('#modal_form'));
	function alignCenter(elem) {
    elem.css({
      left: ($(window).width() - elem.width()) / 2 + 'px', // получаем координату центра по ширине
      top: ($(window).height() - elem.height()) / 2 + 'px' // получаем координату центра по высоте
    })
  }
});



$(document).ready(function() { 
    $('a#go2').click( function(event){ 
        event.preventDefault(); 
        $('#overlay').fadeIn(400, 
            function(){ 
                $('#modal_form_regist') 
                    .css('display', 'block') // 
                    .animate({opacity: 1, top: '10%'}, 100); // плавно прибавляем прозрачность одновременно со съезжанием вниз
        });
    });
    /* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
    $('#modal_close, #overlay,.send').click( function(){ // ловим клик по крестику или подложке
        $('#modal_form_regist')
            .animate({opacity: 0, top: '45%'}, 100,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
                function(){ // после анимации
                    $(this).css('display', 'none'); // делаем ему display: none;
                    $('#overlay').fadeOut(300); // скрываем подложку
                }
            );
    });
    
    alignCenter($('#modal_form_regist'));
    function alignCenter(elem) {
    elem.css({
      left: ($(window).width() - elem.width()) / 2 + 'px', // получаем координату центра по ширине
      top: ($(window).height() - elem.height()) / 2 + 'px' // получаем координату центра по высоте
    })
  }
});


$(document).ready(function() { 
    $('a#go3').click( function(event){ 
        event.preventDefault(); 
        $('#overlay').fadeIn(400, 
            function(){ 
                $('#modal_form_enter') 
                    .css('display', 'block') // 
                    .animate({opacity: 1, top: '10%'}, 100); // плавно прибавляем прозрачность одновременно со съезжанием вниз
        });
    });
    /* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
    $('#modal_close, #overlay,.send').click( function(){ // ловим клик по крестику или подложке
        $('#modal_form_enter')
            .animate({opacity: 0, top: '45%'}, 100,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
                function(){ // после анимации
                    $(this).css('display', 'none'); // делаем ему display: none;
                    $('#overlay').fadeOut(300); // скрываем подложку
                }
            );
    });
    
    alignCenter($('#modal_form_enter'));
    function alignCenter(elem) {
    elem.css({
      left: ($(window).width() - elem.width()) / 2 + 'px', // получаем координату центра по ширине
      top: ($(window).height() - elem.height()) / 2 + 'px' // получаем координату центра по высоте
    })
  }
});

$(document).ready(function() { 
    $('a#go6').click( function(event){ 
        event.preventDefault(); 
        $('#overlay').fadeIn(400, 
            function(){ 
                $('#modal_form_recov') 
                    .css('display', 'block') // 
                    .animate({opacity: 1, top: '10%'}, 100); // плавно прибавляем прозрачность одновременно со съезжанием вниз
        });
    });
    /* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
    $('#modal_close, #overlay,.send').click( function(){ // ловим клик по крестику или подложке
        $('#modal_form_recov')
            .animate({opacity: 0, top: '45%'}, 100,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
                function(){ // после анимации
                    $(this).css('display', 'none'); // делаем ему display: none;
                    $('#overlay').fadeOut(300); // скрываем подложку
                }
            );
    });
    
    alignCenter($('#modal_form_recov'));
    function alignCenter(elem) {
    elem.css({
      left: ($(window).width() - elem.width()) / 2 + 'px', // получаем координату центра по ширине
      top: ($(window).height() - elem.height()) / 2 + 'px' // получаем координату центра по высоте
    })
  }
});


$(document).ready(function() { 
    $('#back').click( function(event){ 
        event.preventDefault(); 
        $('#overlay').fadeIn(400, 
            function(){ 
                $('#modal_form_enter') 
                    .css('display', 'block') // 
                    .animate({opacity: 1, top: '10%'}, 100); // плавно прибавляем прозрачность одновременно со съезжанием вниз
        });
    });
    /* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
    $('#modal_close, #overlay,.send, #back').click( function(){ // ловим клик по крестику или подложке
        $('#modal_form_recov')
            .animate({opacity: 0, top: '45%'}, 100,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
                function(){ // после анимации
                    $(this).css('display', 'none'); // делаем ему display: none;
                    $('#modal_form_recov').fadeOut(300); // скрываем подложку
                }
            );
    });
    
    alignCenter($('#modal_form_enter'));
    function alignCenter(elem) {
    elem.css({
      left: ($(window).width() - elem.width()) / 2 + 'px', // получаем координату центра по ширине
      top: ($(window).height() - elem.height()) / 2 + 'px' // получаем координату центра по высоте
    })
  }
});


// to registration
$(document).ready(function() { 
    $('a#to_reg').click( function(event){ 
        event.preventDefault(); 
        $('#overlay').fadeIn(400, 
            function(){ 
                $('#modal_form_regist') 
                    .css('display', 'block') // 
                    .animate({opacity: 1, top: '10%'}, 100); // плавно прибавляем прозрачность одновременно со съезжанием вниз
        });
    });
    /* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
    $('#modal_close, #overlay,.send').click( function(){ // ловим клик по крестику или подложке
        $('#modal_form_regist')
            .animate({opacity: 0, top: '45%'}, 100,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
                function(){ // после анимации
                    $(this).css('display', 'none'); // делаем ему display: none;
                    $('#overlay').fadeOut(300); // скрываем подложку
                }
            );
    });
    
    alignCenter($('#modal_form_regist'));
    function alignCenter(elem) {
    elem.css({
      left: ($(window).width() - elem.width()) / 2 + 'px', // получаем координату центра по ширине
      top: ($(window).height() - elem.height()) / 2 + 'px' // получаем координату центра по высоте
    })
  }
});

// to enter

$(document).ready(function() { 
    $('a#go_enter').click( function(event){ 
        event.preventDefault(); 
        $('#overlay').fadeIn(400, 
            function(){ 
                $('#modal_form_enter') 
                    .css('display', 'block') // 
                    .animate({opacity: 1, top: '10%'}, 100); // плавно прибавляем прозрачность одновременно со съезжанием вниз
        });
    });
    /* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
    $('#modal_close, #overlay,.send, #go_enter').click( function(){ // ловим клик по крестику или подложке
        $('#modal_form_regist')
            .animate({opacity: 0, top: '45%'}, 100,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
                function(){ // после анимации
                    $(this).css('display', 'none'); // делаем ему display: none;
                    // $('#overlay').fadeOut(300); // скрываем подложку
                }
            );
    });
    
    alignCenter($('#modal_form_enter'));
    function alignCenter(elem) {
    elem.css({
      left: ($(window).width() - elem.width()) / 2 + 'px', // получаем координату центра по ширине
      top: ($(window).height() - elem.height()) / 2 + 'px' // получаем координату центра по высоте
    })
  }
});





        $(document).ready(function () {

            $('.user').click(function (event) {
                event.preventDefault();
                var temp = document.getElementById('user_select').style.display;
                if (temp =="none" || temp =="") {
                    $('#user_select').fadeOut(100, function () { $('#user_select').css('display', 'block'); });
                } else {
                    $('#user_select').fadeIn(100, function () { $('#user_select').css('display', 'none'); });
                }

            });

        });