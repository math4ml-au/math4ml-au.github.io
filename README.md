# Math4ML

Website for the Mathematics for Machine Learning Special Interest Group of the
Australian Mathematical Society: <https://math4ml-au.github.io>.

A small Jekyll site with plain HTML and CSS, local icons, and no external font
dependencies. A small script toggles seminar abstracts. GitHub Pages builds the
data files into a static page; all content remains readable without JavaScript.

## Add a seminar

Upload the slides to `seminar_slides/` and add an entry to `_data/seminars.yml`:

```yaml
- title: "Talk title"
  speaker: "Speaker name"
  affiliation: "Institution"
  date: 2026-10-12
  recording: "https://www.youtube.com/watch?v=VIDEO_ID"
  slides: "/seminar_slides/talk-slides.pdf"
  abstract: |-
    The speaker's abstract, reproduced verbatim.
```

The site sorts seminars by date, newest first. Use `YYYY-MM-DD` dates. Omit
`recording`, `slides`, or `abstract` until available; their links or text will only
appear when provided. Keep abstracts verbatim, including the original wording
and paragraph breaks. Abstracts support Markdown and get an **Abstract** button
beside the recording and slides. They start collapsed, expand when clicked, and
collapse on a second click. Without JavaScript, abstracts remain visible; they
are also included when printing.

The first seminar's abstract is reproduced verbatim from
`other_docs/dxZhou Math4ML 2026.tex` and matches the accompanying PDF. The seminar
announcement in `other_docs/` confirms the title, speaker, affiliation, and date.

## Add an event

When `_data/events.yml` is empty, the page shows “Watch this space for upcoming
event announcements.” Replace `[]` with entries to show announcements instead:

```yaml
- title: "Event title"
  date: 2026-11-16
  location: "City or online"
  description: >-
    A short announcement. Markdown links and formatting are supported.
  url: "https://example.org/event"
```

Only `title` is required. Events appear in file order, so place the most relevant
announcement first. Remove past announcements as needed.

## Update the committee

Edit `_data/committee.yml` to change names, roles, affiliations, or webpage links.
Members appear in file order. The current entries and the introductory wording
are based on the [AustMS Math4ML page](https://austms.org.au/research-group/mathematics-for-machine-learning-math4ml/).

## Other updates

- `index.html`: introductory copy and page sections.
- `_config.yml`: site details, membership, and social links.
- `_layouts/default.html`: shared page shell, navigation, and footer.
- `assets/css/site.css`: colours, typography, and responsive layout.
- `assets/js/site.js`: accessible abstract expand/collapse behaviour.
- `_includes/icon.html`: inline SVG icons; no icon library to load.

The Bluesky icon comes from [Simple Icons](https://simpleicons.org/).

To add a page, create a Markdown or HTML file with `layout: default` and a `title`
in its YAML front matter, then add its link to the shared navigation if needed.
For another section on the home page, follow the existing labelled `<section>`
structure in `index.html`.

## Preview locally

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

Open <http://localhost:4000>. To check the production build:

```sh
bundle exec jekyll build
```

## Publish on GitHub Pages

In the repository's **Settings → Pages**, use **Deploy from a branch**, with the
`main` branch and `/ (root)` folder. GitHub Pages runs Jekyll automatically; there
is no separate front-end build or deployment workflow to maintain. The site uses
only built-in Jekyll features. The `url` and `baseurl` in `_config.yml` are already
set for `math4ml-au.github.io`.

See GitHub's [publishing source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
for these repository settings.

Build output (`_site/`) is ignored, and maintenance files such as this README and
`AGENTS.md`, along with the reference materials in `other_docs/`, are excluded
from the published site.
