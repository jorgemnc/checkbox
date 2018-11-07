$('document').ready(function(){

  
});



  $('#product-items input[type=checkbox]').change(function(e) {

  // Initialize vars
  var totalAmount = 0;

  // We need only rows that have checked checkboxes
  var $tableRows = $('#product-items tr').has('input[type=checkbox]:checked');

  // Iterate through each row in order get all needed info
  $.each($tableRows, function(i, row) {
    var $row = $(row);

      var price = $row.data('price');

      // I am converting the price to an integer, but you could
      // change that and use parseFloat if you want to
      totalAmount += parseInt(price);
  });

  $('#total-amount').text(totalAmount);
});