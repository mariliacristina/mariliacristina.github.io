// hides all the sections and shows only the selected one.
function showSection(event) {
  const p = event.currentTarget;

  // hides all the sections
  $('.section').hide();

  // gets the selected section id
  const section = p.dataset.open;

  // shows the selected section
  $(section).show();
}
