$('document').ready(function(){
  $('#product-items input[type=checkbox]').change(function(){
    var selectedItemsPriceSum = 0

    $('#product-items input[type=checkbox]:checked').each(function() {
      selectedItemsPriceSum = selectedItemsPriceSum + $(this).parent().parent().data('price')
    });

    $('#total-amount').text(selectedItemsPriceSum)
  });
});
