$(function() {
    $('#signupForm').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting

        /* Validate */
        $(".input-name").attr('style', 'display: none;');
        $(".input-email").attr('style', 'display: none;');
        $(".input-cbox").attr('style', 'display: none;');

        var check = true;

        var n_full = document.forms["signupForm"]["NAME"].value;
        var email  = document.forms["signupForm"]["EMAIL"].value;
        var cbox   = document.forms["signupForm"]["cbox"].checked;

        if( cbox == false){
            $(".input-cbox").attr('style', 'display: inline;');
            check=false;
        }
        
        if( n_full.trim() == ''){
            $(".input-name").attr('style', 'display: inline;');
            check=false;
        }

        if(email.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            $(".input-email").attr('style', 'display: inline;');
            check=false;
        }

        if(!check) return false;

        n_first = n_full.substr(0,n_full.indexOf(' '));
        n_last  = n_full.substr(n_full.indexOf(' ')+1); 
        //alert( n_first + ' - ' + n_last );

        email   = encodeURIComponent(email);
        n_first = encodeURIComponent(n_first);
        n_last  = encodeURIComponent(n_last);

        /* Create final post */
        var post_data = 'EMAIL=' + email + '&FNAME=';
        //alert(post_data);
        if( n_first.trim() == ''){
            post_data = post_data + n_last;
        } else {
            post_data = post_data + n_first + '&LNAME=' + n_last;
        }
        
        $.ajax({
            url: "https://paradoxequityfund.us5.list-manage.com/subscribe/post-json?u=67facca7c08294f0928b690f5&amp;id=3b25408006&c=?",
            type: "POST",     // type: $form.attr('method'),
            dataType: "json",     
            data: post_data,
            error: function() { alert("Could not connect to the registration server. Please try again later."); },
            success: function(response) {
                if(response.result == "success") {
                    //alert("OK");
                    $('#signupForm')[0].reset();
                    $(".mode-send").attr('style', 'display: none !important;');
                    $(".mode-sent").attr('style', 'display: inline !important;');
                } else { alert("Something went wrong. Please try again."); }
            }
        });
        

    });
});
