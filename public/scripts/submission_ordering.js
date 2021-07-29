$(document).ready(() => {
  $( "#choices" ).disableSelection();
  $( "#choices" ).sortable();

  $("#submit-container").click(function(event) {
    event.preventDefault();
    let itemOrder = $('#choices').sortable("toArray");
    optionRanks = {};
    for (let i = 0; i < itemOrder.length; i++){
      optionRanks[itemOrder[i]] = itemOrder.length - 1 - i;
    }
    console.log(optionRanks);
    let $username = $('#username').serialize();
    console.log($username);

    $.post("/submission", { optionRanks, $username}, () => {})
  });

})
