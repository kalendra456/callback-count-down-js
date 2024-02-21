function updateCountdownDisplay(seconds) {
    document.getElementById('countdown-display').textContent = seconds;
  }
  
  function countdown(seconds) {
    if (seconds > 0) {
      updateCountdownDisplay(seconds);
      setTimeout(function() {
        countdown(seconds - 1);
      }, 1000);
    } else {
      updateCountdownDisplay("Happy Independence Day!");
    }
  }
  
  countdown(10);
  