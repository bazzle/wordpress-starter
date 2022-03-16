jQuery(document).ready( function($) {


    // upvoting

    var votingbuttons = document.querySelectorAll('.voting__button');
    if (votingbuttons.length > 0){
        function upvote(self){
            var post_id = $(self).attr( 'id' );
            $.ajax({
                type: 'POST',
                url: ajax_object.ajaxurl,
                data: {
                    action: 'upvote_update',
                    post_id: post_id
                },
                success: function(response){
                    $(self).next('.voting__counter').text(response);
                }
            });
            this.state = 'clicked';
        }
    
        $(votingbuttons).each(function(){
            let votecounter = 0;
            function upvotethis(target){
                if(votecounter === 1){
                    return;
                }
                target = target.currentTarget;
                upvote(target);
                target.classList.add('voting__button--upvoted');
                votecounter = 1;
            }
            $(this).on('click',function(target){
                upvotethis(target);
            })
            $(this).keypress(function(target){
                upvotethis(target);
            });
        });
    }

    // filtering

    if($('body').hasClass('post-type-archive')){
    
        var targetcontenthtml = $('.post-stack').html();
        $('input:radio[name="filter"]').on('change',function(evt){
            var targetcontent = $('.post-stack');
            var target = evt.target;
            var targetvalue = $(target).attr('value');
            var label = $(target).parent('label');
            $('.filter__select').removeClass('filter__select__active');
            $(label).addClass('filter__select__active');
            if (document.body.classList.contains('post-type-archive-confessions')){
                var posttype = 'confessions';
            } else if (document.body.classList.contains('post-type-archive-rants')){
                var posttype = 'rants';
            } else if (document.body.classList.contains('post-type-archive-stories')){
                var posttype = 'stories';
            } else if (document.body.classList.contains('post-type-archive-shorts')){
                var posttype = 'shorts';
            }
            if(targetvalue === 'orderbydate'){
                targetcontent.html(targetcontenthtml);
                DISQUSWIDGETS.getCount({reset: true});
            } else {
                $.ajax({
                    type: 'POST',
                    url: ajax_object.ajaxurl,
                    dataType: 'html',
                    data: {
                        action: 'orderbypopular',
                        selection: targetvalue,
                        posttype: posttype,
                        initialcontent: targetcontenthtml
                    },
                    success: function(response) {
                        targetcontent.html(response);
                        DISQUSWIDGETS.getCount({reset: true});
                    }
                });
            }
        });
  
    }
  
  
  });