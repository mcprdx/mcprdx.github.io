$(function() {
    $('#supportForm').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting


        /* alert("I am an alert box!"); */

        /* Validate 
        $(".input-warning").attr('style', 'display: none;');
        */

        var check = true;

        /* 
        var myStringArray = ["Hello","World"];
        var arrayLength = myStringArray.length;
        for (var i = 0; i < arrayLength; i++) {

            var name = document.forms["contactForm"]["name"].value;
            if( name.trim() == ''){


                # TEMP create input eX name
                $(".input-eX").attr('style', 'display: inline;');
                check=false;
            }

        }

        if(!check) return false;
        */
        alert(check);
        /* Validate */
        var post_data =  $("#supportForm").serialize();

        alert(post_data);

        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbwpZ8LE3ExWU4JIpbBs86aqnfJszQ6fbKhOCH0J4X21PeJM_4URucJX9hzhfXL0HQDw9g/exec",
            method: "POST",
            dataType: "json",     
            data: post_data,
            success: function(response) {

                if(response.result == "success") {
                    $('#supportForm')[0].reset();
                    $(".mode-send").attr('style', 'display: none !important;');
                    $(".mode-sent").attr('style', 'display: inline !important;');
                } else { alert("Something went wrong ("+response+").") }
            },
            error: function() { alert("Something went wrong (e02).")  }
        })


    });
});
