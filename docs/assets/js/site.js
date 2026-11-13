/* Progressive enhancement for the publication list (publications.md).
 * Works on the plain Markdown output: <h3>Year</h3><ul><li>…</li></ul>.
 * Adds: grouping, search, filters, status badges and DOI pills.
 * Without JavaScript the page is still a complete, readable list. */
(function () {
  "use strict";

  var root = document.querySelector(".page-publications .prose");
  if (!root) return;

  var OWN = "Pöppelmeier";
  var norm = function (s) {
    return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  };

  // 1) Group every <h3> with the <ul> that follows it.
  var groups = [];
  Array.prototype.slice.call(root.querySelectorAll(":scope > h3")).forEach(function (h) {
    var list = h.nextElementSibling;
    if (!list || list.tagName !== "UL") return;
    var sec = document.createElement("section");
    sec.className = "pub-group";
    var label = h.textContent.trim();
    sec.dataset.kind = /^\d{4}$/.test(label) ? "year" : /review/i.test(label) ? "review" : "other";
    h.parentNode.insertBefore(sec, h);
    sec.appendChild(h);
    sec.appendChild(list);
    list.classList.add("pub-list");
    groups.push(sec);
  });
  if (!groups.length) return;

  // 2) Annotate each entry.
  var items = [];
  groups.forEach(function (sec) {
    Array.prototype.slice.call(sec.querySelectorAll(":scope > ul > li")).forEach(function (li) {
      li.classList.add("pub");
      var text = li.textContent;
      li.dataset.first = text.trim().indexOf(OWN) === 0 ? "1" : "0";
      li.dataset.kind = sec.dataset.kind;
      li.dataset.search = norm(text);

      li.querySelectorAll("strong").forEach(function (s) {
        if (s.textContent.indexOf(OWN) > -1) s.classList.add("me");
      });

      // DOI links: drop the "doi:" text and style as a pill.
      li.querySelectorAll('a[href*="doi.org"]').forEach(function (a) {
        a.classList.add("doi");
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener");
        var prev = a.previousSibling;
        if (prev && prev.nodeType === 3) prev.textContent = prev.textContent.replace(/\s*doi:\s*$/i, " ");
      });

      // Status badge for manuscripts that are not yet published.
      var m = text.match(/\b(submitted|in review|accepted|in press)\b/i);
      if (m) {
        var b = document.createElement("span");
        b.className = "badge";
        b.textContent = m[1].toLowerCase();
        li.insertBefore(b, li.firstChild);
      }
      if (sec.dataset.kind === "year" && li.dataset.first === "1") li.classList.add("is-first");
      items.push(li);
    });
  });

  // 3) Toolbar.
  var bar = document.createElement("div");
  bar.className = "pub-toolbar";
  bar.innerHTML =
    '<label class="pub-search"><span class="sr-only">Search publications</span>' +
    '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>' +
    '<input type="search" placeholder="Search title, author, journal…" autocomplete="off"></label>' +
    '<div class="pub-filters" role="group" aria-label="Filter publications">' +
    '<button type="button" data-filter="all" aria-pressed="true">All</button>' +
    '<button type="button" data-filter="first" aria-pressed="false">First author</button>' +
    '<button type="button" data-filter="review" aria-pressed="false">In review</button>' +
    '<button type="button" data-filter="other" aria-pressed="false">Chapters &amp; other</button>' +
    "</div>" +
    '<p class="pub-count" aria-live="polite"></p>';
  root.insertBefore(bar, groups[0]);

  var input = bar.querySelector("input");
  var count = bar.querySelector(".pub-count");
  var buttons = Array.prototype.slice.call(bar.querySelectorAll("button"));
  var filter = "all";

  function apply() {
    var q = norm(input.value.trim());
    var shown = 0;
    items.forEach(function (li) {
      var ok =
        (filter === "all" ||
          (filter === "first" && li.dataset.first === "1") ||
          (filter === "review" && li.dataset.kind === "review") ||
          (filter === "other" && li.dataset.kind === "other")) &&
        (!q || li.dataset.search.indexOf(q) > -1);
      li.hidden = !ok;
      if (ok) shown++;
    });
    groups.forEach(function (sec) {
      sec.hidden = !sec.querySelector(":scope > ul > li:not([hidden])");
    });
    count.textContent = shown === items.length ? items.length + " entries" : shown + " of " + items.length + " entries";
  }

  input.addEventListener("input", apply);
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filter = btn.dataset.filter;
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
      apply();
    });
  });
  apply();
})();
