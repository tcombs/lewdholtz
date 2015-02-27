$(function() {
    
    $('#tweet-text').val('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec purus in ante pretium blandit. Aliquam erat volutpat. Nulla libero lectus.');

    $('#tweet-form').submit(function(e) {
        e.preventDefault();

        var tweetText = $('#tweet-text').val();
        $('#tweet-text').val('')
        //post to server to tweet
        $.post( "/api/tweet", { tweet: tweetText} ,function(data){
            if(data.err)
            {
                //There was an error
                toastr["error"]("Something went wrong. Lets blame Twitter.", "Opps!")
            }
            else
            {
                //Everything is fine
                toastr["success"]("That was a sweet tweet", "Nice!")
            }
        });

    });
});