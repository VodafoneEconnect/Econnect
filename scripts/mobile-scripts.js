
/* JAVASCRIPT */

function hideURLbar(){ window.scrollTo(0,1); }

/* JQUERY */

$(document).ready(function() {
    if(isMobile.Android()){
        $("#appSize").html("4.7 MB");
    }
    else{
        $("#appSize").html("11.6 MB")
    }
    // Comment Toggle
    $('#btnInstall').click(function () {
        if(isMobile.Android()){
            window.location.href = "./builds/econnect-release-beta-v1.0.0.10002.apk";
        }
        else{
            window.location.href = "itms-services://?action=download-manifest&amp;url=./files/app.plist";
        }
        
    });
    
   
        
    
  

    

}); /* end jQuery */