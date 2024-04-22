$(function() {
    $('#contactForm').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting


        $(".mode-send").attr('style', 'display: none !important;');
        $(".mode-sending").attr('style', 'display: inline !important;');

        /* Validate */
        $(".input-email").attr('style', 'display: none;');

        var check = true;

        var msg = document.forms["contactForm"]["MESSAGE"].value;
        
        if( msg.trim() == ''){
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

                console.log(response)

                if(response.result == "success") {
                    $('#contactForm')[0].reset();
                    $(".form_contact").attr('style', 'display: none !important;');
                    $(".form_contact_sent").attr('style', 'display: block !important;');
                } else { alert("Something went wrong. Please try again.") }
            },
            error: function() { alert("Could not connect to the server. Please try again later.")  }
        })



        

    });
});