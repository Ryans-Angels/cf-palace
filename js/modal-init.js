'use strict'

(function(){
  let $content = $('#age-verify').detach();   // Remove modal from page

  $('#share').on('click', function() {           // Click handler to open modal
    modal.open({content: $content, width:350, height:350});
  });
}());
