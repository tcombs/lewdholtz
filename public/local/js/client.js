$(function() {


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
                toastr["error"]("Something went wrong. I'll blame Twitter.", "Opps!");
                updateText();
                console.log(data.err);
            }
            else {
                //Everything is fine
                toastr["success"]("That was a bitching tweet", "Nice!");
                $('#tweet-text').val('');
                updateText();

            }
            $('#tweet-icon').toggleClass('hidden');
            $('#wait-icon').toggleClass('hidden');

        });

    });

    $('#lou-ify').on('click', function() {
        var text = $('#tweet-text').val();
        text = text.replace(/s/g, 'th');
        text = text.replace(/S/g, 'Th');
        text = text.replace(/z/g, 'th');
        text = text.replace(/Z/g, 'Th');
        text = text.replace(/ce/g, 'th');
        text = text.replace(/Ce/g, 'Th');
        text = text.replace(/CE/g, 'TH');
        text = text.replace(/thth/g, 'theth');
        $('#tweet-text').val(text);
        updateText();
    });


    $('#tweet-text').bind('input propertychange', function() {
        updateText();
    });

  

    $('.trend').on('click',function(){
        $('#tweet-text').val($('#tweet-text').val() + ' ' +  $(this).attr('name'));
        updateText();
    });



    var updateText = function() {
        var text = $('#tweet-text').val();
        var n = text.length;
        var left = 140 - n;
        if (left < 0) {
            //set to red
            $('#char-sent').addClass('danger-text');
            //disabled == true
            $('#tweet-submit').prop('disabled', true);
        }
        else {
            //set to normal color
            $('#char-sent').removeClass('danger-text');
            //disabled == false
            $('#tweet-submit').prop('disabled', false);
        }
        $('#char-count').text(left);
    }
});