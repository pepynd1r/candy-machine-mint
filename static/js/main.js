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

