$( document ).ready(function() {


});


    // Check if the page has loaded completely                                         
    $(document).ready( setInterval(function() { 
         var walletName = $('#root main p:first-child').text();
         console.log(walletName);
    }, 1000)); 