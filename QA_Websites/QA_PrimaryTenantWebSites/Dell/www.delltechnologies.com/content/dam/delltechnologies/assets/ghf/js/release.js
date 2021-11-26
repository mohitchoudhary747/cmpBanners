$=window.jQuery;
window.UW = window.UW || {};
UW.plugins = UW.plugins || {};
UW.plugins.gss = true;
UW.plugins.disableImgCrop = true;
UW.plugins.enableOldRegex = false;


if (UW.util){
    UW.plugins.newImgSetSrc=UW.util.hash.get("cropEnabled");
    if (UW.plugins.newImgSetSrc){
        jQuery("body").addClass("crop-enabled");
    }
    //To enable GHF Nav Hover functionality POC
    window.GHF=window.GHF||{};
    GHF.enableGHFNavHover=UW.util.hash.get("GHFHoverEnabled");
    if (GHF.enableGHFNavHover){
        GHF.lvl1MouseOverDelay=300;
        GHF.lvl2MouseOverDelay=300;
        GHF.lvl2MouseOutDelay=300;
        jQuery("body").addClass("ghf-nav-hover-enabled");
    }
}

//To fix promo01 intermittent spacing issue - by Ullas
UW.plugins.blazyPreload = true;
//Temp fix for blank main nav content
localStorage.clear();