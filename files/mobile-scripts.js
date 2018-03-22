
/* JAVASCRIPT */

function hideURLbar(){ window.scrollTo(0,1); }

/* JQUERY */

$(document).ready(function() {
    // Hide URL Bar
    setTimeout(hideURLbar, 0);

    // window.onload = function(){ alert("onload test"); }

    // Nav Toggle
    $("a.nav-toggle").click(function () {
        $("ul.nav1").slideToggle(400, function() {
            $('a.nav-toggle').toggleClass('nav-open', $(this).is(':visible'));
        });
    });
    
    var commentOpen = false;
    // Comment Toggle
    $('a.com-toggle').click(function () {
        $('.com-wrap').slideToggle(400, function() {
            $('a.com-toggle').toggleClass('com-open', $(this).is(':visible'));
            if (commentOpen == true){
                commentOpen = false;
            } else {
                commentOpen = true;
            }
        });
    });
    
    // load more comments
    if( $('#load_more_comments').length > 0 ) {
        $('#load_more_comments').click(function(){
            $.post('/mobile/ajax_get_more_comments/'+$(this).attr('data-eventid')+'/'+$(this).attr('data-offset'), function(data){
                var newdata = jQuery.parseJSON(data)
                
                console.log(data);
                
                // catch hide
                if(newdata.hide == true)
                   $('#load_more_comments').hide();
                
                // update offset
                $('#load_more_comments').attr('data-offset', newdata.offset);
                
                // load up new comments
                var newComment = $('.com-item:last').clone();
                newComment.css('display', 'none');
                
                var i = 0;
                $.each(newdata.comments, function() {
                    // set content
                    newComment.children('p').html(this.message);
                    newComment.children('ul').children('.left').html(this.author);
                    newComment.children('ul').children('.right').html(this.created);
                    
                    //add id
                    newComment.attr('id', 'comment'+(i+newdata.offset));
                    
                    // set odd even class
                    if(newComment.hasClass('odd'))
                        newComment.removeClass('odd').addClass('even');
                    else
                        newComment.removeClass('even').addClass('odd');
                        
                    $('.com-list').append(newComment.clone());
                    
                    $('#comment'+(i+newdata.offset)).slideToggle(500);
                    
                    i++;
                })
            });

            return false;
        });
    }
        
    
    // auto refresh comments page
    if ( $('.com-list').length > 0 ) {
        setInterval( function(){
            if (!commentOpen) {
                window.location.reload();
            }
        }, 30000 );
    }

    
    // Remove form text on focus

    $('input[type="text"], textarea').focus(function () {
        if(!$(this).hasClass('changed')) {
            defaultText = $(this).val();
            $(this).val('');
        }
    });

    

}); /* end jQuery */