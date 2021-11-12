$(function() {
    $('#contactForm').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting


        $(".mode-send").attr('style', 'display: none !important;');
        $(".mode-sending").attr('style', 'display: inline !important;');

        /* Validate */
        $(".input-name").attr('style', 'display: none;');
        $(".input-email").attr('style', 'display: none;');
        $(".input-cbox").attr('style', 'display: none;');

        var check = true;

        var n_full = document.forms["contactForm"]["NAME"].value;
        var email  = document.forms["contactForm"]["EMAIL"].value;
        var cbox   = document.forms["contactForm"]["cbox"].checked;
        var newsletter   = document.forms["contactForm"]["NEWSLETTER"].checked;

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

        if(!check) {
            $(".mode-sending").attr('style', 'display: none !important;');
            $(".mode-send").attr('style', 'display: inline !important;');
            return false;
        }


        // regular post
        var post_data =  $("#contactForm").serialize()

        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbwmxKOxPAHC1j4JPyPHBjAeN831YceA26sIzpThNLt3aOPeKj_EHz9Hh_EKqSjaQya38g/exec",
            method: "POST",
            dataType: "json",     
            data: post_data,
            success: function(response) {

                if(response.result == "success") {
                    $('#contactForm')[0].reset();
                    $(".form_contact").attr('style', 'display: none !important;');
                    $(".form_contact_sent").attr('style', 'display: block !important;');
                } else { alert("Something went wrong. Please try again.") }
            },
            error: function() { alert("Could not connect to the server. Please try again later.")  }
        })


        // newsletter section
        if ( newsletter == true){

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
                error: function() { alert("Could not connect to the server. Please try again later."); },
                success: function(response) {
                    if(response.result == "success") {
                        //alert("OK");
                        //$(".mode-sent").attr('style', 'display: inline !important;');
                    } else if ( response.msg.includes('already subscribed') ) { 
                        //alert('ALREADY');
                    } else {  alert("Something went wrong. Please try again.");  }
                }
            });

        }
        

    });
});