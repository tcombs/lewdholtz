$(function() {

    $('#tweet-form').submit(function(e) {
        e.preventDefault();

        var tweetText = $('#tweet-text').val();
        
        //post to server to tweet
        $.post( "/api/tweet", { tweet: tweetText} ,function(data){
            $('#tweet-form').text('');
        });

    });
});