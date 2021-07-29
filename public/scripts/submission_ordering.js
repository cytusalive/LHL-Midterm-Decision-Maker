$(document).ready(() => {
  $( "#choices" ).disableSelection();
  $( "#choices" ).sortable();

  $("#submit-container").click(function(event) { 
    event.preventDefault();
    let itemOrder = $('#choices').sortable("toArray");
    optionRanks = {};
    for (let i = 0; i < itemOrder.length; i++){
      optionRanks[itemOrder[i]] = i;
    }
    console.log(optionRanks);
    $.post("/submission", optionRanks, () => {})
  });

})
