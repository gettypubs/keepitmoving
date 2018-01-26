# EPUB Generation

This version of Quire uses [`pe-epub`](https://github.com/peoples-e/pe-epub) for EPUB rendering. The `content/epub.md` file and the `data/epub.html` template output `epub.json` in a format ready for ingestion by `pe-epub`. As noted in the steps below, temporary changes must be made to a couple of layout templates, and a list of regular expression changes must be applied to the built files in order to output an EPUB that passes epubcheck 3.0.1.

The way `pe-epub` is currently working, it requires `pe-epub-fs` to also be used and for local file paths to be explicitly defined in the files in order to properly ingest and manifest images and other assets. Also, `pe-epub` requires running an early version of node.js. In this case v0.12.4, though something later might also work. Anything later than 6.9.4 definitely doesn't work.

## STEP 1

Temporarily simplify the `layouts/_default/baseof.html` and `layouts/section-head/single.html` templates to remove unneeded navigational/interface elements, including the abstract listings in `section-head`.

## STEP 2

```
quire build
```

## STEP 3

Run “Find and Replace” regex patters on the files in the `public` directory, as listed below.

## STEP 4

```
node [FILEPATH]/build-epub.js
```

## STEP 5

```
java -jar [FILEPATH]/epubcheck-3.0.1.jar [FILEPATH]/keepitmoving.epub
```

## BEFORE EPUB CONVERSION -- CHANGES TO `PUBLIC` DIRECTORY

// Remove cover video asset, and adjust controls and poster

```
<source src="./assets/img/cover_bg.mp4" type="video/mp4">
```

```
playsinline autoplay muted\sposter="../assets/img/
poster="file:///Users/galbers/GitHub/keepitmoving/public/assets/img/
```


// image source for figures in essays within subdirectories:

```
src="../../assets/img/figures/
src="file:///Users/galbers/GitHub/keepitmoving/public/assets/img/figures/
```

// image source for figures and non-figures in pages within root directory:

```
src="\.{1,2}/assets/img/
src="file:///Users/galbers/GitHub/keepitmoving/public/assets/img/
```

// for footnote fn: and fnref: links/ids, to eliminate colons:

```
f([a-z]{1,4}):([0-9])
f$1-$2
```

// arbitrary change for IDs starting with a numeral, auto-created by Hugo from headings:

```
id="([0-9])
id="n$1
```

// internal links, in or out of subdirectories, with or without anchors:

```
href="(\.\./){1,2}([^>]+?)/([^>]+?)/([#|"])([^>]*?)(["|>])
href="$2-$3.xhtml$4$5$6
```

// internal links, within same directory level, with or without anchors:

```
href="\.\./(.*?)/([#|"])(.*?)(["|>])
href="$1.xhtml$2$3$4
```

// homepage:

```
href="\.\./"
href="index.xhtml"
```

// links on bibliography page:

```
href="\.\./(.*?)/(.*?)">
href="$1-$2.xhtml">
```

// delete About page entry from Contents:

```
<li class="quire-contents__page quire-noprint"><a href="about.xhtml"><span class="quire-title">About</span></a></li>
```

// delete two SVGs from Cover:

```
<svg(.|\s)*?</svg>
```

// delete video iframes

```
<iframe(.|\s)*?</iframe>
```

// delete unneeded breaks

```
<br class="pdf-toc" />
```

// delete empty links

```
<p class="q-contributors__list__item__link"><a href=""></a></p>
```


// redirect links to bibiliography

```
<li id="fn-1"><a href="#lye-1984"
<li id="fn-1"><a href="bibliography.xhtml#lye-1984"
```

```
<li id="fn-2"><a href="#eco-1989"
<li id="fn-2"><a href="bibliography.xhtml#eco-1989"
```

// fix UL and FIGURE elements inside P elements. May need to open videos/index.xhtml specifically to find <p>(\s*?)<figure

```
<p>(\s*?)<ul
$1<ul
```

```
/ul>(\s*?)</p>
/ul>$1
```

```
<p>(\s*?)<figure
$1<figure
```

```
/figure>(\s*?)</p>
/figure>$1
```

// change 2nd and 3rd instances of these. Need to search and then manually go to contributors file in order to change

```
id="rachel-rivenc"
```

```
id="reinhard-bek"
```

