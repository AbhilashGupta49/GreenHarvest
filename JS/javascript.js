/*    ABHILASH GUPTA     */


function scrollFooter(scrollY, footer_height)
{
    if(scrollY >= footer_height)
    {
        $('footer').css({'bottom' : '0px'});
    }
    else
    {
        $('footer').css({'bottom' : '-' + footer_height + 'px'});
    }
}

$(window).load(function(){
	
    var window_height = $(window).height();
    var footer_height = $('footer').height();
    var document_height = (window_height) + ($('.content').height()) + ($('footer').height()) - 20;

    $('#container_div, #animate_div').css({'height' :  document_height + 'px'});



    $('.main_body').css({'margin-top' : window_height + 'px'});

    scrollFooter(window.scrollY, footer_height);
	var flag=0;
    window.onscroll = function(){
        var scroll = window.scrollY;
		
        $('#animate_div').css({'top' : '-' + scroll + 'px'});
        var new_height;
        
		if(scroll > window_height-150  && scroll < window_height)	
		{	
			if(flag==0)
			{
				$('.title_name_div').css("font-size",30);
				flag=1;
			}
			
			new_height =(window_height-scroll);
			if(new_height < 70)
			{
				new_height = 70;
			}
			if(new_height > 150)
			{
				new_height = 150;
			}
			
			
			$('header').height(new_height);
			$('.initials_title').addClass('display_none');
			$('.top_menu_div').removeClass('col-sm-6');
			$('.top_menu_div').addClass('col-sm-10');
			$('.header_image_div').removeClass('col-sm-3');
			$('.header_image_div').addClass('col-sm-2');
			$('.header_image').height(new_height);
			$('.main_name').height(new_height);
			$('.header_name_div').height(new_height);
			
			$('.main_name').css("line-height", new_height+"px");
			
		}
		else if(scroll < window_height-150)
	{
		if(flag==1)
			{	
				$('.initials_title').removeClass('display_none');
				$('header').height(150);
				$('.header_image').height(150);
				$('.main_name').height(150);
				$('.header_name_div').height(150);
				$('.main_name').css("line-height", 150+"px");
				$('.top_menu_div').addClass('col-sm-6');
				$('.top_menu_div').removeClass('col-sm-10');
				$('.main_name').css("font-size",70);
				$('.header_image_div').addClass('col-sm-3');
				$('.header_image_div').removeClass('col-sm-2');
				flag=0;
			}
	}
        scrollFooter(scroll, footer_height);
    }
	
});
