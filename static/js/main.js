$( document ).ready(function() {


});


    // Check if the page has loaded completely                                         
    $(document).ready( setInterval(function() { 
         var walletName = $('#root main p:first-child').text();
         var walletBalance = $('#root main p:nth-child(2)').text();
         walletBalance = walletBalance.replace("Balance:", "");
         var nftsAvailable = $('#root main p:nth-child(3)').text();
         nftsAvailable = nftsAvailable.replace("Total Available:", "");
         var nftsRemaining = $('#root main p:nth-child(5)').text();
         nftsRemaining = nftsRemaining.replace("Remaining:", "");

         $('.wallet-name').html( walletName );
         $('.wallet-balance').html( walletBalance );
         $('.nft-available').html( nftsAvailable );
         $('.nfts-remaining').html( nftsRemaining );
    }, 1000)); 