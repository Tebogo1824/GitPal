# RepoHug

> See what makes a developer tick.

RepoHug is a small website where you type a GitHub username or profile URL and get a quick look at that developer's public repositories. Click any repo to open an analysis panel with charts for its languages and commit activity.

It is plain HTML, CSS and JavaScript. There is no backend, no database and no build step.

**Status: v2.** Search, repo cards, the analysis panel, the About page and the light/dark theme work<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 1040" width="1280" height="1040" role="img" aria-label="System design of RepoHug: a static site whose browser code searches GitHub's public API for a user's repositories, shows them as cards, and opens an analysis panel that loads language and commit data.">
<title>RepoHug system design</title>
<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M1 1 L9 5 L1 9 z" fill="#52514e"/></marker><marker id="ahs" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M9 1 L1 5 L9 9 z" fill="#52514e"/></marker></defs>
<rect x="0.75" y="0.75" width="1278.5" height="1038.5" rx="18" fill="#ffffff" stroke="#d9d8e2" stroke-width="1.5"/>
<text x="40" y="46" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="26" font-weight="700" fill="#141414" text-anchor="start">RepoHug: how everything connects</text>
<text x="40" y="72" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="14" font-weight="400" fill="#52514e" text-anchor="start">A static site with no backend and no database. The browser talks straight to GitHub's public API.</text>
<text x="40" y="116" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="11.5" font-weight="700" fill="#52514e" text-anchor="start" letter-spacing="1">FILES (LOADED BY INDEX.HTML)</text>
<text x="350" y="116" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="11.5" font-weight="700" fill="#52514e" text-anchor="start" letter-spacing="1">WHAT RUNS IN THE BROWSER</text>
<text x="930" y="116" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="11.5" font-weight="700" fill="#52514e" text-anchor="start" letter-spacing="1">EXTERNAL SERVICES</text>
<rect x="40" y="130" width="270" height="70" rx="10" fill="#fff" stroke="#9a99a8" stroke-width="1.5"/>
<text x="56" y="153" font-family='ui-monospace, SFMono-Regular, Menlo, Consolas, monospace' font-size="13.5" font-weight="700" fill="#141414" text-anchor="start">index.html</text>
<text x="56" y="171" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">page shell: header, search form,</text>
<text x="56" y="186" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">empty results list; loads the rest</text>
<rect x="40" y="216" width="270" height="60" rx="10" fill="#fff" stroke="#9a99a8" stroke-width="1.5"/>
<text x="56" y="239" font-family='ui-monospace, SFMono-Regular, Menlo, Consolas, monospace' font-size="13.5" font-weight="700" fill="#141414" text-anchor="start">styles.css</text>
<text x="56" y="257" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">colors, fonts, layout, cards,</text>
<text x="56" y="272" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">light and dark themes</text>
<rect x="40" y="292" width="270" height="60" rx="10" fill="#fff" stroke="#9a99a8" stroke-width="1.5"/>
<text x="56" y="315" font-family='ui-monospace, SFMono-Regular, Menlo, Consolas, monospace' font-size="13.5" font-weight="700" fill="#141414" text-anchor="start">theme.js</text>
<text x="56" y="333" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">toggle button flips data-theme</text>
<text x="56" y="348" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">on &lt;html&gt;, which recolors the page</text>
<rect x="40" y="380" width="270" height="60" rx="10" fill="#fff" stroke="#9a99a8" stroke-width="1.5"/>
<text x="56" y="403" font-family='ui-monospace, SFMono-Regular, Menlo, Consolas, monospace' font-size="13.5" font-weight="700" fill="#141414" text-anchor="start">script.js</text>
<text x="56" y="421" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">search, GitHub lookup, repo cards</text>
<rect x="40" y="548" width="270" height="60" rx="10" fill="#fff" stroke="#9a99a8" stroke-width="1.5"/>
<text x="56" y="571" font-family='ui-monospace, SFMono-Regular, Menlo, Consolas, monospace' font-size="13.5" font-weight="700" fill="#141414" text-anchor="start">analysis.js</text>
<text x="56" y="589" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">panel, charts, request cache</text>
<rect x="40" y="632" width="270" height="60" rx="10" fill="#fff" stroke="#9a99a8" stroke-width="1.5"/>
<text x="56" y="655" font-family='ui-monospace, SFMono-Regular, Menlo, Consolas, monospace' font-size="13.5" font-weight="700" fill="#141414" text-anchor="start">analysis.css</text>
<text x="56" y="673" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">panel layout, purple chart colors</text>
<rect x="40" y="740" width="270" height="70" rx="10" fill="#fff" stroke="#9a99a8" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="56" y="763" font-family='ui-monospace, SFMono-Regular, Menlo, Consolas, monospace' font-size="13.5" font-weight="700" fill="#141414" text-anchor="start">about.html</text>
<text x="56" y="781" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">separate page: same header,</text>
<text x="56" y="796" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">styles.css and theme toggle</text>
<text x="56" y="830" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="11.5" font-weight="400" fill="#52514e" text-anchor="start">linked from the About nav link</text>
<path d="M26 165 V662" fill="none" stroke="#9a99a8" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M26 165 H40" fill="none" stroke="#9a99a8" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M26 246 H40" fill="none" stroke="#9a99a8" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M26 322 H40" fill="none" stroke="#9a99a8" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M26 410 H40" fill="none" stroke="#9a99a8" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M26 578 H40" fill="none" stroke="#9a99a8" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M26 662 H40" fill="none" stroke="#9a99a8" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M310 410 H350" fill="none" stroke="#12a150" stroke-width="2" stroke-linejoin="round" marker-end="url(#ah)"/>
<path d="M310 578 H350" fill="none" stroke="#6250d6" stroke-width="2" stroke-linejoin="round" marker-end="url(#ah)"/>
<path d="M310 246 H350" fill="none" stroke="#9a99a8" stroke-width="1.6" stroke-linejoin="round" stroke-dasharray="5 4" marker-end="url(#ah)"/>
<path d="M310 662 H350" fill="none" stroke="#9a99a8" stroke-width="1.6" stroke-linejoin="round" stroke-dasharray="5 4" marker-end="url(#ah)"/>
<rect x="350" y="128" width="540" height="348" rx="14" fill="#e8f6ee" stroke="#12a150" stroke-width="1.8"/>
<text x="370" y="152" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="13.5" font-weight="700" fill="#0b6b34" text-anchor="start">script.js  ·  search and results</text>
<rect x="370" y="168" width="500" height="52" rx="10" fill="#fff" stroke="#12a150" stroke-width="1.5"/>
<circle cx="392" cy="194.0" r="12" fill="#12a150"/>
<text x="392" y="198.5" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="13" font-weight="700" fill="#fff" text-anchor="middle">1</text>
<text x="414" y="190" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="13.5" font-weight="700" fill="#141414" text-anchor="start">Search form</text>
<text x="414" y="208" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">you type a username or a github.com link</text>
<rect x="370" y="248" width="500" height="52" rx="10" fill="#fff" stroke="#12a150" stroke-width="1.5"/>
<circle cx="392" cy="274.0" r="12" fill="#12a150"/>
<text x="392" y="278.5" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="13" font-weight="700" fill="#fff" text-anchor="middle">2</text>
<text x="414" y="270" font-family='ui-monospace, SFMono-Regular, Menlo, Consolas, monospace' font-size="13.5" font-weight="700" fill="#141414" text-anchor="start">parseUsername()</text>
<text x="414" y="288" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">checks the format, pulls the name out of a URL, shows an error if bad</text>
<rect x="370" y="328" width="500" height="52" rx="10" fill="#fff" stroke="#12a150" stroke-width="1.5"/>
<circle cx="392" cy="354.0" r="12" fill="#12a150"/>
<text x="392" y="358.5" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="13" font-weight="700" fill="#fff" text-anchor="middle">3</text>
<text x="414" y="350" font-family='ui-monospace, SFMono-Regular, Menlo, Consolas, monospace' font-size="13.5" font-weight="700" fill="#141414" text-anchor="start">fetchRepos()</text>
<text x="414" y="368" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">asks for pages of 100 repos; cancels older searches; friendly errors</text>
<rect x="370" y="408" width="500" height="52" rx="10" fill="#fff" stroke="#12a150" stroke-width="1.5"/>
<circle cx="392" cy="434.0" r="12" fill="#12a150"/>
<text x="392" y="438.5" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="13" font-weight="700" fill="#fff" text-anchor="middle">4</text>
<text x="414" y="430" font-family='ui-monospace, SFMono-Regular, Menlo, Consolas, monospace' font-size="13.5" font-weight="700" fill="#141414" text-anchor="start">renderRepos() → repo cards</text>
<text x="414" y="448" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">built with textContent; every card has a View analysis button</text>
<path d="M620 220 V248" fill="none" stroke="#12a150" stroke-width="2" stroke-linejoin="round" marker-end="url(#ah)"/>
<text x="632" y="238" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="11.5" font-weight="400" fill="#52514e" text-anchor="start">typed text</text>
<path d="M620 300 V328" fill="none" stroke="#12a150" stroke-width="2" stroke-linejoin="round" marker-end="url(#ah)"/>
<text x="632" y="318" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="11.5" font-weight="400" fill="#52514e" text-anchor="start">valid username</text>
<path d="M620 380 V408" fill="none" stroke="#12a150" stroke-width="2" stroke-linejoin="round" marker-end="url(#ah)"/>
<text x="632" y="398" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="11.5" font-weight="400" fill="#52514e" text-anchor="start">repo list (JSON)</text>
<rect x="350" y="520" width="540" height="374" rx="14" fill="#efedfb" stroke="#6250d6" stroke-width="1.8"/>
<text x="370" y="544" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="13.5" font-weight="700" fill="#4a3aa7" text-anchor="start">analysis.js  ·  the View analysis panel</text>
<rect x="370" y="558" width="500" height="56" rx="10" fill="#fff" stroke="#6250d6" stroke-width="1.5"/>
<circle cx="392" cy="586.0" r="12" fill="#6250d6"/>
<text x="392" y="590.5" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="13" font-weight="700" fill="#fff" text-anchor="middle">5</text>
<text x="414" y="580" font-family='ui-monospace, SFMono-Regular, Menlo, Consolas, monospace' font-size="13.5" font-weight="700" fill="#141414" text-anchor="start">openAnalysis(repo)</text>
<text x="414" y="598" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">opens a native &lt;dialog&gt;: Esc, focus and backdrop handled for you</text>
<rect x="370" y="642" width="500" height="56" rx="10" fill="#fff" stroke="#6250d6" stroke-width="1.5"/>
<circle cx="392" cy="670.0" r="12" fill="#6250d6"/>
<text x="392" y="674.5" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="13" font-weight="700" fill="#fff" text-anchor="middle">6</text>
<text x="414" y="664" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="13.5" font-weight="700" fill="#141414" text-anchor="start">Tiles from the repo you already have</text>
<text x="414" y="682" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">stars, forks, issues, size, age, last push: no new request</text>
<rect x="370" y="726" width="500" height="64" rx="10" fill="#fff" stroke="#6250d6" stroke-width="1.5"/>
<circle cx="392" cy="758.0" r="12" fill="#6250d6"/>
<text x="392" y="762.5" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="13" font-weight="700" fill="#fff" text-anchor="middle">7</text>
<text x="414" y="748" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="13.5" font-weight="700" fill="#141414" text-anchor="start">Load languages + commit stats</text>
<text x="414" y="766" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">Map cache: reopening a repo costs 0 requests</text>
<text x="414" y="781" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">retries GitHub's 202 "still computing"; aborts if you close</text>
<rect x="370" y="818" width="500" height="56" rx="10" fill="#fff" stroke="#6250d6" stroke-width="1.5"/>
<circle cx="392" cy="846.0" r="12" fill="#6250d6"/>
<text x="392" y="850.5" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="13" font-weight="700" fill="#fff" text-anchor="middle">8</text>
<text x="414" y="840" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="13.5" font-weight="700" fill="#141414" text-anchor="start">Draw the charts</text>
<text x="414" y="858" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">language ring, busiest days, commits per week, data tables (plain SVG/HTML)</text>
<path d="M620 460 V558" fill="none" stroke="#12a150" stroke-width="2" stroke-linejoin="round" marker-end="url(#ah)"/>
<text x="632" y="494" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="11.5" font-weight="400" fill="#52514e" text-anchor="start">click "View analysis" on a card</text>
<path d="M620 614 V642" fill="none" stroke="#6250d6" stroke-width="2" stroke-linejoin="round" marker-end="url(#ah)"/>
<text x="632" y="632" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="11.5" font-weight="400" fill="#52514e" text-anchor="start">fills instantly</text>
<path d="M620 698 V726" fill="none" stroke="#6250d6" stroke-width="2" stroke-linejoin="round" marker-end="url(#ah)"/>
<text x="632" y="716" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="11.5" font-weight="400" fill="#52514e" text-anchor="start">then asks GitHub</text>
<path d="M620 790 V818" fill="none" stroke="#6250d6" stroke-width="2" stroke-linejoin="round" marker-end="url(#ah)"/>
<text x="632" y="808" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="11.5" font-weight="400" fill="#52514e" text-anchor="start">languages + weekly commits</text>
<rect x="946" y="128" width="288" height="70" rx="10" fill="#f1f1f4" stroke="#8b8b97" stroke-width="1.5"/>
<text x="962" y="151" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="13.5" font-weight="700" fill="#141414" text-anchor="start">Google Fonts</text>
<text x="962" y="169" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">Instrument Serif + Newsreader</text>
<text x="962" y="185" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">downloaded when the page opens</text>
<path d="M290 130 V96 H1090 V126" fill="none" stroke="#9a99a8" stroke-width="1.6" stroke-linejoin="round" stroke-dasharray="5 4" marker-end="url(#ah)"/>
<text x="690" y="90" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="11.5" font-weight="400" fill="#52514e" text-anchor="middle">font request at page load</text>
<rect x="930" y="240" width="320" height="630" rx="14" fill="#f1f1f4" stroke="#8b8b97" stroke-width="1.8"/>
<text x="950" y="266" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="13.5" font-weight="700" fill="#141414" text-anchor="start">GitHub REST API</text>
<text x="950" y="284" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">public data, no login, no API key</text>
<rect x="946" y="314" width="288" height="80" rx="10" fill="#fff" stroke="#8b8b97" stroke-width="1.5"/>
<text x="960" y="338" font-family='ui-monospace, SFMono-Regular, Menlo, Consolas, monospace' font-size="12" font-weight="700" fill="#141414" text-anchor="start">GET /users/{name}/repos</text>
<text x="960" y="358" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">every public repo, 100 per page</text>
<text x="960" y="373" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">(the app stops after 10 pages)</text>
<rect x="946" y="690" width="288" height="60" rx="10" fill="#fff" stroke="#8b8b97" stroke-width="1.5"/>
<text x="960" y="714" font-family='ui-monospace, SFMono-Regular, Menlo, Consolas, monospace' font-size="12" font-weight="700" fill="#141414" text-anchor="start">GET /repos/{o}/{r}/languages</text>
<text x="960" y="734" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">bytes of code per language</text>
<rect x="946" y="770" width="288" height="80" rx="10" fill="#fff" stroke="#8b8b97" stroke-width="1.5"/>
<text x="960" y="794" font-family='ui-monospace, SFMono-Regular, Menlo, Consolas, monospace' font-size="12" font-weight="700" fill="#141414" text-anchor="start">GET /repos/{o}/{r}/stats/</text>
<text x="960" y="814" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">commit_activity</text>
<text x="960" y="829" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">52 weeks; may reply 202 first</text>
<rect x="946" y="430" width="288" height="132" rx="10" fill="#fff" stroke="#8b8b97" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="960" y="454" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12.5" font-weight="700" fill="#141414" text-anchor="start">Why the app caches</text>
<text x="960" y="474" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">Requests per hour are limited</text>
<text x="960" y="490" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">without a key. Opening a repo</text>
<text x="960" y="506" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">costs 2 or more requests, so</text>
<text x="960" y="522" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">results are kept in memory and</text>
<text x="960" y="538" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">older requests are cancelled.</text>
<path d="M870 354 H946" fill="none" stroke="#52514e" stroke-width="2" stroke-linejoin="round" marker-end="url(#ah)" marker-start="url(#ahs)"/>
<path d="M870 758 H906 V720 H946" fill="none" stroke="#52514e" stroke-width="2" stroke-linejoin="round" marker-end="url(#ah)" marker-start="url(#ahs)"/>
<path d="M906 758 V810 H946" fill="none" stroke="#52514e" stroke-width="2" stroke-linejoin="round" marker-end="url(#ah)"/>
<rect x="40" y="920" width="1200" height="64" rx="12" fill="#fff7e8" stroke="#c9a14a" stroke-width="1.5"/>
<text x="60" y="947" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="13.5" font-weight="700" fill="#141414" text-anchor="start">Hosting: plain static files</text>
<text x="60" y="968" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="12" font-weight="400" fill="#52514e" text-anchor="start">Codespaces preview today, GitHub Pages or Netlify later. Nothing is saved on a server: the cache lives in the browser's memory until you reload.</text>
<path d="M40 1008 H84" fill="none" stroke="#52514e" stroke-width="2" stroke-linejoin="round" marker-end="url(#ah)" marker-start="url(#ahs)"/>
<text x="94" y="1012" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="11.5" font-weight="400" fill="#52514e" text-anchor="start">request to GitHub, JSON back</text>
<path d="M330 1008 H374" fill="none" stroke="#9a99a8" stroke-width="1.6" stroke-linejoin="round" stroke-dasharray="5 4" marker-end="url(#ah)"/>
<text x="384" y="1012" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="11.5" font-weight="400" fill="#52514e" text-anchor="start">styles or loads into the page</text>
<circle cx="640" cy="1008" r="12" fill="#52514e"/>
<text x="640" y="1012.5" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="13" font-weight="700" fill="#fff" text-anchor="middle">1</text>
<text x="660" y="1012" font-family='system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' font-size="11.5" font-weight="400" fill="#52514e" text-anchor="start">order of events: search (1-4), then analysis (5-8)</text>
</svg>.

## Design
<img width="1280" height="1040" alt="system-design" src="https://github.com/user-attachments/assets/a10c4694-f0e1-430c-9eb0-4baa4d04aea8" />


## Screenshots

## Home Page - Light | Dark 
<img width="1525" height="897" alt="RepoHug – See what makes a developer tick(4)" src="https://github.com/user-attachments/assets/fb05c58c-cbc0-4186-ba46-aecc50b35ff5" />
<img width="1366" height="896" alt="RepoHug – See what makes a developer tick(3)" src="https://github.com/user-attachments/assets/bc801538-240b-433a-aad9-0558f7e4f970" />
<img width="1319" height="2837" alt="About _ RepoHug" src="https://github.com/user-attachments/assets/e85db212-497a-4675-b8ba-9e163a86c6c1" />
<img width="1366" height="3437" alt="About _ RepoHug(5)" src="https://github.com/user-attachments/assets/d728cdb9-5174-4328-96a5-2ab14095aaff" />

## Search results  


<img width="1350" height="8305" alt="RepoHug – See what makes a developer tick(2)" src="https://github.com/user-attachments/assets/b1d4747d-856a-41de-a5f7-d391ff9c721f" />
<img width="1350" height="8305" alt="RepoHug – See what makes a developer tick" src="https://github.com/user-attachments/assets/22c5f80f-967c-42c6-aacd-26237b4c28f3" />

## Analysis panel 
<img width="1366" height="1465" alt="Screenshot 2026-10-14 at 14-07-02 RepoHug – See what makes a developer tick" src="https://github.com/user-attachments/assets/5adf7d23-3d30-4f7d-a667-d23f128527fa" />
<img width="1366" height="1366" alt="Screenshot 2026-10-14 at 14-06-19 RepoHug – See what makes a developer tick" src="https://github.com/user-attachments/assets/098fb762-1ae9-4430-853e-f4d7a6829bae" />


## Features

**Search**
- Accepts `torvalds`, `@torvalds` or `https://github.com/torvalds`
- Checks the input and explains what is wrong if it isn't a valid GitHub username
- Loads every public repo (100 per request, up to 10 requests) and shows one card per repo
- Newer searches cancel older ones, so slow replies can't overwrite fresh results

**Analysis panel** (click **View analysis** on any card)
- Headline tiles: stars, forks, open issues, size, age and last push
- Language breakdown as a ring chart, with percentages and sizes
- Commits by day of the week, and commits per week for the last year
- A "View data as a table" option under each chart
- Friendly messages for loading, empty data, rate limits and network errors

**Everywhere**
- Light and dark theme with a toggle, following your device setting by default
- Responsive layout: the panel is full screen on phones and a centered card on larger screens
- Keyboard friendly: labelled buttons, visible focus rings, Esc closes the panel, arrow keys inspect chart bars

## How it works

![RepoHug system design: the browser searches GitHub's API, shows repo cards, and opens an analysis panel](images/system-design.png)

The browser talks straight to GitHub's public API. Nothing is saved on a server.

**1. Search (`script.js`)**

1. You type a username or a GitHub link.
2. `parseUsername()` checks the format and pulls the name out of a URL.
3. `fetchRepos()` asks GitHub for the repo list and cancels any older search still running.
4. `renderRepos()` builds one card per repo.

**2. Analysis (`analysis.js`)**

5. **View analysis** calls `openAnalysis(repo)`, which opens a native `<dialog>`.
6. The tiles fill instantly from the repo data you already have.
7. Languages and commit stats are requested from GitHub. Answers are cached, so reopening a repo costs no requests.
8. The charts are drawn as plain SVG and HTML.

### GitHub endpoints used

| Endpoint | Used for |
|---|---|
| `GET /users/{name}/repos` | The repo list |
| `GET /repos/{owner}/{repo}/languages` | Bytes of code per language |
| `GET /repos/{owner}/{repo}/stats/commit_activity` | Commits per week for the last year |

GitHub may answer the commit stats request with `202` while it prepares the data. RepoHug waits and asks again, up to four times, then shows a "try again" button.

## Design decisions

| Decision | Reason |
|---|---|
| Plain HTML, CSS and JS | One page and one main interaction don't need a framework or build tool |
| No server | GitHub's API is public, so the browser can call it directly and no secret key is ever shipped |
| Native `<dialog>` for the panel | Esc, focus handling and the backdrop come built in |
| Charts drawn in SVG and HTML | Only a few simple charts are needed, so there is no charting library to download |
| Results cached in memory | GitHub limits requests per hour without a key, so repeat opens should cost nothing |
| `textContent`, never `innerHTML`, for GitHub data | Repo names and descriptions are written by other people and are never trusted as HTML |
| Chart colors checked for color-vision safety | Violet, pink, amber and green pass in both themes, and every chart also has labels and a data table |

## Known limitations

- Only **public** repositories are shown.
- Without a key, GitHub limits how many requests you can make per hour. If you hit the limit, wait and try again.
- Opening a repo costs at least 2 requests, and more when GitHub says it is still computing the stats.
- Commit charts cover the last year only, and brand-new or empty repos have no data.
- Repos beyond the first 1,000 are not loaded.
- The theme choice follows your device and isn't remembered between visits.
- GitHub's `watchers_count` repeats the star count, so the panel leaves it out.

## Built with

- HTML, CSS and vanilla JavaScript
- [GitHub REST API](https://docs.github.com/en/rest) (public data, no key needed)
- Fonts: Instrument Serif and Newsreader (Google Fonts)

## Run it locally

1. Download or clone this project.
2. Open the folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server**.

Or, with Python installed, run this in the project folder:

```
python -m http.server
```

Then open `http://localhost:8000` in your browser.

## Project structure

```
repohug/
  index.html       homepage, search form and results list
  about.html       About page
  styles.css       colors, fonts, layout, repo cards, light/dark themes
  analysis.css     analysis panel layout and chart colors
  theme.js         light/dark toggle
  script.js        search, GitHub lookup, repo cards
  contributors_api.py Get contributors by name and repository name
  analysis.js      analysis panel, charts, request cache
  images/          screenshots and the system diagram
  README.md
```

`index.html` loads `analysis.js` **before** `script.js`, because the card buttons call `openAnalysis`.

## Ideas for later

- Remember the chosen theme between visits
- Shareable links such as `?user=torvalds`
- A top-contributors chart
- Automated tests for the username parser and the chart code

## Author

Made by Tebogo McCoy :). Feel free to open an issue if you find a bug.
