$(function() {
    $('#supportForm').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting

        /* alert("I am an alert box!"); */

        /* Validate */
        $(".input-must").attr('style', 'display: none;');
    
        var check = true;

        for (var i = 0; i < 25; i++) {
            var e_inside = 'e' + (i+1);
            var e_warning = '.input-e' + (i+1);
            var name = document.forms["supportForm"][e_inside].value;

            if( name.trim() == ''){
                $(e_warning).attr('style', 'display: inline;');
                check=false;
            }
        }

        var cbox = document.forms["supportForm"]["cbox"].checked;
        if( cbox == false){
            $(".input-cbox").attr('style', 'display: inline;');
            check=false;
        }


        if(!check) return false;

        /* Validate */
        var post_data =  $("#supportForm").serialize();

        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbykIud2cv-ITjFvcm9cXlgpV8h3_-Ntsq-nJUR_DH11Qgl8GqgRwT9d215vGJUroQsRZA/exec",
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
            error: function() { alert("Something went wrong.")  }
        })


    });
});
