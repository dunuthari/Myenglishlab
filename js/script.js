// Highlights the section-nav pill matching the section currently in view.
(function () {
  var links = document.querySelectorAll(".section-nav a");
  var sections = document.querySelectorAll(".tense-section");
  if (!links.length || !sections.length) return;

  var linkByHref = {};
  links.forEach(function (link) {
    linkByHref[link.getAttribute("href")] = link;
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var link = linkByHref["#" + entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("active"); });
          link.classList.add("active");
        }
      });
    },
    { rootMargin: "-140px 0px -60% 0px" }
  );

  sections.forEach(function (section) { observer.observe(section); });
})();
