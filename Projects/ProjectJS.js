const el = document.getElementById("glitchText"); // gets the id of the element in HTML
setInterval(() => { // sets an interval to change the style every 135 milliseconds | the => is an arrow function
  el.style.color = `hsl(${Math.random()*360},100%,60%)`; // changes the color to a random hue
  el.style.transform = `translate(${Math.random()*4-2}px, ${Math.random()*6-2}px)`; // changes the position randomly
}, 135); // 135 milliseconds interval

// Wait until the whole HTML document (DOM tree) has finished loading
document.addEventListener("DOMContentLoaded", () => {
  
  // Get the search bar element (the <textarea> id="tagsearch")
  const search = document.getElementById("tagsearch");

  // Select all sections in main
  const sections = document.querySelectorAll("main section");

  // Everytime user inputs something
  search.addEventListener("input", () => {

    // Take whatever is typed in, remove spaces, and make it lowercase (multiple tags not implemented yet)
    const query = search.value.trim().toLowerCase();

    // Loop through every project section
    sections.forEach(section => {

      // Grab all <span> elements with tags inside this section (.tags span)
      // Turn the NodeList into a real array (Array.from)
      // Then map each <span> to its text content (e.g. "Virus", "Game", "AI"), converted to lowercase
      const tags = Array.from(section.querySelectorAll(".tags span"))
                        .map(tag => tag.textContent.toLowerCase());

      // If the search box is empty OR
      // if at least one tag includes the search text
      if (!query || tags.some(tag => tag.includes(query))) {
        // Show this section (reset display style → falls back to default like "block")
        section.style.display = "";
      } else {
        // Otherwise, hide this section
        section.style.display = "none";
      }
    });
  });
});
