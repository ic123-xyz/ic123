// Fix for "window.gtag is not a function" error
// Wait for gtag to be available
function waitForGtag() {
  if (typeof window.gtag !== 'undefined') {
    return;
  }
  
  // If gtag is not available after 2 seconds, create a dummy function
  setTimeout(() => {
    if (typeof window.gtag === 'undefined') {
      window.gtag = function() {
        console.warn('gtag not loaded, tracking disabled');
      };
    }
  }, 2000);
}

waitForGtag();
document.addEventListener('DOMContentLoaded', waitForGtag);
