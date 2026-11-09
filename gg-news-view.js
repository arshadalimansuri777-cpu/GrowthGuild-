/* GrowthGuild news templates. Shared by the browser (news.html, home page) and api/news.js (server render for SEO). */
(function (root) {
  var MD = (typeof require === "function" && typeof module !== "undefined") ? require("./gg-md.js") : root.GGMD;
  var esc = MD.esc;
  var SITE = "https://growthguild.in";
  var WA = "https://wa.me/919921728033";

  function date(d, long) {
    var x = new Date(d); if (isNaN(x)) return "";
    return x.toLocaleDateString("en-IN", { day: "numeric", month: long ? "long" : "short", year: "numeric", timeZone: "Asia/Kolkata" });
  }
  function url(p) { return "/news/" + encodeURIComponent(p.slug); }
  function mins(p) { return Math.max(1, Math.round(String(p.body || "").split(/\s+/).length / 200)); }
  function plain(md) { return String(md || "").replace(/!\[[^\]]*\]\([^)]*\)/g, "").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/[#>*_`-]/g, " ").replace(/\s+/g, " ").trim(); }
  function desc(p) { return (p.meta_description || p.excerpt || plain(p.body)).slice(0, 158).trim(); }

  function card(p) {
    return '<a class="card nw-card" href="' + url(p) + '">' +
      (p.cover_url ? '<img class="nw-cover" src="' + esc(p.cover_url) + '" alt="' + esc(p.title) + '" loading="lazy" width="640" height="360">' : '') +
      '<div class="nw-meta"><span class="tag">' + esc(p.category || "Update") + '</span><time datetime="' + esc(p.published_at) + '">' + date(p.published_at) + '</time></div>' +
      '<h3>' + esc(p.title) + '</h3>' +
      '<p>' + esc(p.excerpt || plain(p.body).slice(0, 150)) + '</p><span class="more">Read more &rarr;</span></a>';
  }
  function listHtml(posts) {
    if (!posts || !posts.length) return '<p class="ad-empty nw-empty">No news posted yet. Check back soon, or <a href="community.html">join the community</a> for updates.</p>';
    return '<div class="nw-grid">' + posts.map(card).join("") + "</div>";
  }
  function postHtml(p, others) {
    var link = SITE + url(p);
    var share = "https://wa.me/?text=" + encodeURIComponent(p.title + " " + link);
    return '<article class="nw-post">' +
      '<nav class="nw-crumb" aria-label="Breadcrumb"><a href="index.html">Home</a> / <a href="news.html">News</a> / <span>' + esc(p.title) + '</span></nav>' +
      '<div class="nw-meta"><span class="tag">' + esc(p.category || "Update") + '</span><time datetime="' + esc(p.published_at) + '">' + date(p.published_at, true) + '</time><span>' + mins(p) + ' min read</span></div>' +
      '<h1>' + esc(p.title) + '</h1>' +
      (p.excerpt ? '<p class="nw-lead">' + esc(p.excerpt) + '</p>' : '') +
      (p.cover_url ? '<img class="nw-hero" src="' + esc(p.cover_url) + '" alt="' + esc(p.title) + '" width="1200" height="630">' : '') +
      '<div class="nw-body">' + MD.render(p.body) + '</div>' +
      '<div class="nw-share"><a class="btn btn-ghost btn-sm" href="' + share + '" target="_blank" rel="noopener">Share on WhatsApp</a></div>' +
      '<aside class="card nw-cta"><h3>Want a website that brings enquiries?</h3><p>Fixed-price packages from ₹4,999, live in 5 to 15 days.</p><div class="btn-row"><a class="btn btn-grad" href="website-design-nashik.html">See website packages</a><a class="btn btn-ghost" href="' + WA + '" target="_blank" rel="noopener">Chat on WhatsApp</a></div></aside>' +
      '</article>' +
      (others && others.length ? '<section class="nw-more"><h2>More news</h2><div class="nw-grid">' + others.slice(0, 3).map(card).join("") + "</div></section>" : "");
  }

  function ld(posts, post) {
    var org = { "@id": SITE + "/#business" };
    if (post) {
      var link = SITE + url(post);
      return { "@context": "https://schema.org", "@graph": [
        { "@type": "BlogPosting", "@id": link + "#post", "headline": post.title.slice(0, 110), "description": desc(post), "url": link, "mainEntityOfPage": link,
          "image": post.cover_url ? [post.cover_url] : [SITE + "/og-image.png"], "datePublished": post.published_at, "dateModified": post.updated_at || post.published_at,
          "inLanguage": "en-IN", "articleSection": post.category || "Update",
          "author": { "@type": "Person", "name": "Arsad Mansuri", "url": SITE + "/about.html" }, "publisher": org },
        { "@type": "BreadcrumbList", "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/" },
          { "@type": "ListItem", "position": 2, "name": "News", "item": SITE + "/news.html" },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": link } ] } ] };
    }
    return { "@context": "https://schema.org", "@graph": [
      { "@type": "CollectionPage", "@id": SITE + "/news.html#webpage", "url": SITE + "/news.html", "name": "GrowthGuild News", "inLanguage": "en-IN", "isPartOf": { "@id": SITE + "/#website" }, "publisher": org },
      { "@type": "ItemList", "itemListElement": (posts || []).slice(0, 20).map(function (p, i) { return { "@type": "ListItem", "position": i + 1, "url": SITE + url(p), "name": p.title }; }) },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/" },
        { "@type": "ListItem", "position": 2, "name": "News", "item": SITE + "/news.html" } ] } ] };
  }

  var api = { listHtml: listHtml, postHtml: postHtml, card: card, ld: ld, desc: desc, url: url, date: date, SITE: SITE };
  if (typeof module !== "undefined" && module.exports) module.exports = api; else root.GGNews = api;
})(typeof window !== "undefined" ? window : this);
