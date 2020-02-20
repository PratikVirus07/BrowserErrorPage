var agent = navigator.userAgent;
var browserName;
var fullVersion;
var numberVersion;
var index;
var length;
var chrome = document.getElementById("chrome");
var safari = document.getElementById("safari");
var mozilla = document.getElementById("mozilla");
var internetExplorer = document.getElementById("internetExplorer");
var microsoftEdge = document.getElementById("microsoftEdge");
var chromeVersion = document.getElementById("chromeVersion");
var safariVersion = document.getElementById("safariVersion");
var firefoxVersion = document.getElementById("firefoxVersion");
var internetExplorerVersion = document.getElementById("internetExplorerVersion");
var microsoftEdgeVersion = document.getElementById("microsoftEdgeVersion");

function findBrowser(){

    console.log(agent)

    //for microsoft edge
    if ((index=agent.indexOf("Edg"))!=-1) { 
        browserName = "Edge"; 
        fullVersion = agent.substring(index+4); 
        //console.log(browserName + " " + fullVersion)
    } 

    //for chrome
    else if ((index=agent.indexOf("Chrome"))!=-1) { 
        browserName = "Chrome"; 
        fullVersion = agent.substring(index+7); 
        //console.log(browserName + " " + fullVersion)
    } 

    //for mozilla
    else if ((index=agent.indexOf("Firefox"))!=-1) {
        browserName = "Firefox"; 
        fullVersion = agent.substring(index+8);
        //console.log(browserName + " " + fullVersion)
    } 

    //for safari
    else if ((index=agent.indexOf("Safari"))!=-1){
        browserName = "Safari";
        fullVersion = agent.substring(index+7)
        if ((index=agent.indexOf("Version"))!=-1){
            fullVersion = agent.substring(index+8);
        }
    }

    //for internet explorer -- MSIE
    else if ((index=agent.indexOf("MSIE"))!=-1){
        browserName = "Microsoft Internet Explorer";
        fullVersion = agent.substring(index+5)
    }

    //for internet explorer -- Trident
    else if ((index=agent.indexOf("Trident"))!=-1){
        browserName = "Microsoft Internet Explorer";
        fullVersion = agent.substring(index+8)
        //console.log(browserName + " " + fullVersion)
    }


    if ((length=fullVersion.indexOf(";"))!=-1){
        fullVersion=fullVersion.substring(0,length); 
    }

    // for chrome it has spaces after version in appversion
    if ((length=fullVersion.indexOf(" "))!=-1){
        fullVersion=fullVersion.substring(0,length); 
    }  

    // for converting the decimal version into integer
    numberVersion = parseInt(''+fullVersion,10); 

    console.log(browserName)
    console.log(numberVersion)

    return browserName;
}

function setErrorElement (browser){
    if (browser == "Chrome"){
        chrome.style.display = "flex"
        chromeVersion.innerText = " " + numberVersion
    }
    else if (browser == "Firefox"){
        mozilla.style.display = "flex"
        firefoxVersion.innerText = numberVersion
    }
    else if (browser == "Safari"){
        safari.style.display = "-webkit-box"
        // safari.style.width = "120px";
        // safari.style.justifyContent = "center"; 
        // safari.style.alignItems = "center";
        // safari.style.margin = auto;  
        safariVersion.innerText = numberVersion
    }
    else if (browser == "Microsoft Internet Explorer"){
        internetExplorer.style.display = "flex"
        internetExplorerVersion.innerText = numberVersion
    }
    else if (browser == "Edge"){
        microsoftEdge.style.display = "flex"
        microsoftEdgeVersion.innerText = numberVersion
    }
}

var browser = findBrowser();
setErrorElement(browser);





