const { url } = require("inspector");

$( document ).ready(function() {
    itemsAvailable = undefined;
    function waitForElement(){
        if(typeof itemsAvailable !== "undefined"){
            //variable exists, do what you want
            console.log('asdas');
            console.log(itemsAvailable);
        }
        else{
            setTimeout(waitForElement, 250);
            console.log('Noasdas');
            console.log(itemsAvailable);
        }
    }
    
    waitForElement();

});


    // Check if the page has loaded completely                                         
    $(document).ready( setInterval(function() { 
         var walletName = $('#root main p:first-child').text();
         console.log(walletName);
    }, 1000)); 