
// Create cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    var cookieString = cname + "=" + cvalue + "; " + expires + "; path=/";
    document.cookie = cookieString;
}

// Delete cookie
function deleteCookie(cname) {
    const d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    var cookieString = cname + "=; " + expires + "; path=/";
    document.cookie = cookieString;
}

// Read cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    var cookieString = "";

    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) cookieString = c.substring(name.length, c.length);
    }

    return cookieString;
}

// Set cookie consent
function acceptCookieConsent(){

    document.getElementById("cookieNotice").style.display = "none";
    
    //getCookie("_consent")
    deleteCookie('_consent');
    setCookie('_consent', 1, 30);
}


let cookie_consent = getCookie("_consent");
if(cookie_consent != ""){
    document.getElementById("cookieNotice").style.display = "none";
}else{
    document.getElementById("cookieNotice").style.display = "flex";
}