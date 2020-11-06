// Hides all the sections and shows only the selected one.
function showSection(event) {
  const p = event.currentTarget;

  // hide all the sections
  $('.section').hide();

  // get the selected section id
  const section = p.parentNode.dataset.open;

  // show the selected section
  $(section).show();
}
