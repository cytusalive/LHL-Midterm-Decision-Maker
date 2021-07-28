$(document).ready(() => {
  let optionCounter = 2;
  $("#add-button").on("click", () => {
    console.log("clicked");
    optionCounter += 1;
    document.getElementById("outer-option-fields").innerHTML += `
      <div class="option-fields">
        <label for="options-label">Option ${optionCounter}:</label>
        <div class="options-input">
          <input class="name-field" type="text" name="poll_options" placeholder="name">
          <input class="description-field" type="text" name="option_desc" placeholder="description (optional)">
        </div>
      </div>
    `;
  })
})
