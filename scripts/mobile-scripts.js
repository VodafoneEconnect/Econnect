
/* JAVASCRIPT */

function hideURLbar(){ window.scrollTo(0,1); }

/* JQUERY */

$(document).ready(function() {
    var isMobile = {
        Windows: function () {
            return /IEMobile/i.test(navigator.userAgent);
        },
        Android: function () {
            return /Android/i.test(navigator.userAgent);
        },
        BlackBerry: function () {
            return /BlackBerry/i.test(navigator.userAgent);
        },
        iOS: function () {
            return /iPhone|iPad|iPod/i.test(navigator.userAgent);
        },
        any: function () {
            return !(isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
        }
    };
    

    if(isMobile.Android()){
        
        $("#appSize").html(versionInfo.ANDROID.Size);
        $("#appVersion").html(versionInfo.ANDROID.Version);
        $("#appLastUpdate").html(versionInfo.ANDROID.LastUpdateDate);
        
    }
    else{
        $("#appSize").html(versionInfo.IOS.Size);
        $("#appVersion").html(versionInfo.IOS.Version);
        $("#appLastUpdate").html(versionInfo.IOS.LastUpdateDate);
    }
    // Comment Toggle
    $('#btnInstall').click(function () {
        if(isMobile.Android()){
            window.location.href = "./builds/Econnect.apk";
        }
        else{
            window.location = "itms-services://?action=download-manifest&amp;url=https://vodafoneeconnect.github.io/Econnect/builds/app.plist";
        }
        
    });
    
   
        
    
  

    

}); /* end jQuery */