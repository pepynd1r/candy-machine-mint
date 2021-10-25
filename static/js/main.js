$( document ).ready(function() {
// Set the date we're counting down to
var countDownDate = new Date("Oct 29, 2021 08:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
    $('#root').css("display","block");
  }
}, 1000);

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
         }
    }, 1000)); 



    