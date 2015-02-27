$(function() {

    $('#tweet-form').submit(function(e) {
        e.preventDefault();

        var tweetText = $('#tweet-text').val();
        $('#tweet-text').val('')
        //post to server to tweet
        $.post( "/api/tweet", { tweet: tweetText} ,function(data){
            if(data.err)
            {
                //There was an error
            }
            else
            {
                //Everything is fine
            }
        });

    });
});