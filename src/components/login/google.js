/* tslint:disable:no-console */

var googleAuthAPI = null

function loadScript(){
    var script=document.createElement("SCRIPT");
    script.src="https://apis.google.com/js/platform.js";
    script.onload=function(){
        gapi.load('auth2', function() { 
            gapi.auth2.init({
                
            }).then(function(){
                googleAuthAPI=gapi.auth2.getAuthInstance()
            })
            
        });
    }
    document.body.appendChild(script);
}


function googleAuth(){
    return googleAuthAPI
}

loadScript()

export default {
    auth: googleAuth
}