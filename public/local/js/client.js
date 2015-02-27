$(function() {

    $('#tweet-text').val('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec purus in ante pretium blandit. Aliquam erat volutpat. Nulla libero lectus.');

    $('#tweet-form').submit(function(e) {
        e.preventDefault();
        $('#tweet-icon').toggleClass('hidden');
        $('#wait-icon').toggleClass('hidden');
        var tweetText = $('#tweet-text').val();
            //post to server to tweet
        $.post("/api/tweet", {
            tweet: tweetText
        }, function(data) {
            if (data.err) {
                //There was an error
                toastr["error"]("Something went wrong. Lets blame Twitter.", "Opps!")
            }
            else {
                //Everything is fine
                toastr["success"]("That was a sweet tweet", "Nice!")
            }
            $('#tweet-icon').toggleClass('hidden');
            $('#wait-icon').toggleClass('hidden');
            $('#tweet-text').val('');
        });

    });
    
    
    $('#tweet-text').bind('input propertychange', function() {
        var text =  $('#tweet-text').val();
        var n = text.length;
        var left = 140-n;
        if (left < 0){
            text = text.substring(0,140);
            $('#tweet-text').val(text);
            left = 0;
        }
        $('#char-count').text(left);
    });
});