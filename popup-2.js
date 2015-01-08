
window.onload = function() {
//initialize();  
update();
initScreen();
//generateButtons();
 //setTimeout(update(),50);      
}

function initScreen() {
document.getElementById("signIn").innerHTML = "sign in";
document.getElementById("createAccount").innerHTML = "create account";

}

function initialize() {
    //if(null == localStorage["initialized"])
      // {
    chrome.storage.sync.set({"sumImpressions":0});
    chrome.storage.sync.set({"preferences":["technology"]}, function() {
    });
    initPics();
   // }
}

Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

function update() { 
    {
    master.filterImages();
   // master.filterPrefs();
   //for testing
    var object1={height:'53000',width:'1'};
    var object2={height:'60000',width:'1'};
    var object3={height:'45000',width:'1'};
    var array_of_images=[object1,object2,object3];
    master.filterImages(array_of_images);
    master.sortSmall();
    }
    incrementImpressions(4);
    chrome.storage.sync.get(["sumImpressions"], function(data) {
        document.getElementById("impressionCount").innerHTML += " "+ data.sumImpressions;
        
    });
    
    calculateEarnings();
    
     chrome.storage.sync.get(["sumEarnings"], function(data) {
        document.getElementById("totalEarnings").innerHTML += " "+"$"+     data.sumEarnings.toFixedDown(2);
        
    });
    
    
  /*
    chrome.storage.sync.get(["sumEarnings"], function(data) {  
        document.getElementById("totalEarnings").innerHTML += " " + "$" + data.sumEarnings;       
    });
    */
}



function generateButtons() {
    createRadioElement("fashion");
    createRadioElement("cosmetics");
    createRadioElement("music");
    
}


function createRadioElement(name) {
    var radioHtml = '<input type="radio" name="' + name + '"';
    radioHtml += '/> ' + name + '<br>';
    
    var radioFragment = document.createElement('div');
    radioFragment.setAttribute("name",name);
    radioFragment.setAttribute("checked","false");

    
    radioFragment.innerHTML = radioHtml;
    radioFragment.addEventListener("click", function() {
        var pref = radioFragment.getAttribute("name");
        saveAdPref(pref);
    });
    
    document.body.appendChild(radioFragment);
    //return radioFragment.firstChild;
    


   
    
}