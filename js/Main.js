// RenderBody partial loader
async function loadPartial(id, url) {
  const res = await fetch(url);
  document.getElementById(id).innerHTML = await res.text();
}

// Değişen kısımlar
loadPartial("masthead-placeholder", "partials/masthead.html");
loadPartial("portfolio-placeholder", "partials/portfolio.html");
loadPartial("about-placeholder", "partials/about.html");
loadPartial("contact-placeholder", "partials/contact.html");
