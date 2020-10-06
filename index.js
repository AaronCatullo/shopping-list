//This is to add a new item to the shopping list
function newItem() {
  $('#js-shopping-list-form').on('submit',function(event) {

    event.preventDefault();

    $('li').closest('ul').append(`
    <li>
    <span class="shopping-item">${$('#shopping-list-entry').val()}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
         <span class="button-label">delete</span>
      </button>
    </div>
   </li>`)

  });

}
$(newItem);

//This will make a strike through an item on the list
function strikeItem() {
  $('ul').on('click', '.shopping-item-toggle', function() {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
}
$(strikeItem);

//This is to delete an item from the shopping list
function deleteItem() {
  $('ul').on('click', '.shopping-item-delete', function() {
    $(this).closest('li').remove();
  });
}
$(deleteItem);