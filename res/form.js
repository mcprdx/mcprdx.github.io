$(function() {
    $('#contactForm').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting

        /* Validate */
        
        $(".input-name").attr('style', 'display: none;');
        $(".input-email").attr('style', 'display: none;');


        var check = true;
        let name = document.forms["contactForm"]["name"].value;

        if( name.trim() == ''){
            $(".input-name").attr('style', 'display: inline;');
            check=false;
        }

        let email = document.forms["contactForm"]["email"].value;
        if(email.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            $(".input-email").attr('style', 'display: inline;');
            check=false;
        }

        if(!check) return false;

        /* Validate */


        if ($('#messagebox:visible').length == 0) { var type = 'Newsletter'; }
        else { var type = 'Contact'; }

        alert($("#contactForm").serialize() + '&type=' + type,) 

        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbwutJtY8C8NZD51kOW7Sn_QRVaPXuN_qZrOJYS47X-XFm8HSSNo/exec",
            method: "POST",
            dataType: "json",     
            data: $("#contactForm").serialize() + '&type=' + type,
            success: function(response) {

                if(response.result == "success") {
                    $('#contactForm')[0].reset();
                    $(".mode-send").attr('style', 'display: none !important;');
                    $(".mode-sent").attr('style', 'display: inline !important;');
                } else { alert("Something went wrong. Please try again.") }
            },
            error: function() { alert("Something went wrong. Please try again.")  }
        })


    });
});
