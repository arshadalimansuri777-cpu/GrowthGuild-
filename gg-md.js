/* GrowthGuild tiny, safe Markdown -> HTML. Used by the browser (window.GGMD) and by api/news.js.
   Supports: ## / ### headings, paragraphs, - bullets, 1. lists, **bold**, *italic*, [text](url),
   ![alt](image-url), > quotes, --- rule. Everything else is escaped, so posts can never inject scripts. */
(function (root) {
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function safeUrl(u) { u = String(u || "").trim(); return /^(https?:\/\/|\/|#|mailto:|tel:)/i.test(u) ? u : "#"; }
  function inline(t) {
    t = esc(t);
    t = t.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, function (m, a, u) { return '<img src="' + esc(safeUrl(u)) + '" alt="' + a + '" loading="lazy">'; });
    t = t.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (m, a, u) {
      var ext = /^https?:\/\//i.test(u) && u.indexOf("growthguild.in") === -1;
      return '<a href="' + esc(safeUrl(u)) + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + ">" + a + "</a>";
    });
    t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
    return t;
  }
  function render(md) {
    var lines = String(md || "").replace(/\r\n?/g, "\n").split("\n"), out = [], i = 0;
    while (i < lines.length) {
      var l = lines[i];
      if (!l.trim()) { i++; continue; }
      var m;
      if ((m = /^(#{2,3})\s+(.*)$/.exec(l))) { out.push("<h" + m[1].length + ">" + inline(m[2]) + "</h" + m[1].length + ">"); i++; continue; }
      if (/^---+\s*$/.test(l)) { out.push("<hr>"); i++; continue; }
      if (/^>\s?/.test(l)) { var q = []; while (i < lines.length && /^>\s?/.test(lines[i])) { q.push(lines[i].replace(/^>\s?/, "")); i++; } out.push("<blockquote>" + inline(q.join(" ")) + "</blockquote>"); continue; }
      if (/^[-*]\s+/.test(l)) { var u = []; while (i < lines.length && /^[-*]\s+/.test(lines[i])) { u.push("<li>" + inline(lines[i].replace(/^[-*]\s+/, "")) + "</li>"); i++; } out.push("<ul>" + u.join("") + "</ul>"); continue; }
      if (/^\d+[.)]\s+/.test(l)) { var o = []; while (i < lines.length && /^\d+[.)]\s+/.test(lines[i])) { o.push("<li>" + inline(lines[i].replace(/^\d+[.)]\s+/, "")) + "</li>"); i++; } out.push("<ol>" + o.join("") + "</ol>"); continue; }
      var p = []; while (i < lines.length && lines[i].trim() && !/^(#{2,3}\s|[-*]\s|\d+[.)]\s|>|---)/.test(lines[i])) { p.push(lines[i]); i++; }
      out.push("<p>" + inline(p.join(" ")) + "</p>");
    }
    return out.join("\n");
  }
  var api = { render: render, esc: esc };
  if (typeof module !== "undefined" && module.exports) module.exports = api; else root.GGMD = api;
})(typeof window !== "undefined" ? window : this);
