$( document ).ready(function() {


});


    // Check if the page has loaded completely                                         
    $(document).ready( setInterval(function() { 
         var walletName = $('#root main p:first-child').text();
         walletName = walletName.replace("Wallet", "");
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

         if (walletName !== '') {
            $('.solana-wallet').css('display','list-item');
            $('.globes-info').css('display','block');
            clearInterval(refreshIntervalId);
         }
    }, 1000)); 