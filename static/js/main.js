$( document ).ready(function() {


});


    // Check if the page has loaded completely                                         
    $(document).ready( setInterval(function() { 
         var walletName = $('#root main p:first-child').text();
         var walletBalance = $('#root main p:nth-child(2)').text();
         var nftsAvailable = $('#root main p:nth-child(3)').text();
         var nftsRemaining = $('#root main p:nth-child(5)').text();
         $('.wallet-name').html( walletName );
         $('.wallet-balance').html( walletBalance );
         $('.nft-available').html( nftsAvailable );
         $('.nfts-remaining').html( nftsRemaining );
    }, 1000)); 