
/**
 * Quentn Download Page JavaScript
 */

(function ($) {
  'use strict';

  Drupal.behaviors.quentnDownload = {
    attach: function (context, settings) {
      $('.quentn-download-btn', context).once('quentn-download').click(function(e) {
        e.preventDefault();
        
        var $button = $(this);
        var originalContent = $button.html();
        
        // Disable button and show loading state
        $button.prop('disabled', true);
        $button.html('<span class="loading-spinner"></span> Wird heruntergeladen...');
        
        // Make AJAX call
        $.ajax({
          url: settings.quentn_download.ajax_url,
          type: 'POST',
          dataType: 'json',
          success: function(response) {
            if (response.status === 'success') {
              // Show toast notification
              showToast('Download gestartet!', response.message);
              
              // Here you would typically trigger the actual file download
              // For demonstration, we'll just reset the button after a delay
              setTimeout(function() {
                $button.prop('disabled', false);
                $button.html(originalContent);
              }, 2000);
            }
          },
          error: function() {
            // Reset button on error
            $button.prop('disabled', false);
            $button.html(originalContent);
            showToast('Fehler', 'Download konnte nicht gestartet werden.', 'error');
          }
        });
      });
    }
  };

  /**
   * Show toast notification
   */
  function showToast(title, message, type) {
    type = type || 'success';
    
    var toastClass = type === 'error' ? 'quentn-toast error' : 'quentn-toast';
    var $toast = $('<div class="' + toastClass + '">' +
      '<div class="quentn-toast-title">' + title + '</div>' +
      '<div class="quentn-toast-message">' + message + '</div>' +
    '</div>');
    
    $('body').append($toast);
    
    // Show toast
    setTimeout(function() {
      $toast.addClass('show');
    }, 100);
    
    // Hide toast after 4 seconds
    setTimeout(function() {
      $toast.removeClass('show');
      setTimeout(function() {
        $toast.remove();
      }, 300);
    }, 4000);
  }

})(jQuery);
