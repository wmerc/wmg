---
title: "Building React Components From SVG"
type: "blog"
cover: "/assets/images/blog/wm-blog-svgreact-header.jpg"
category: "Development"
date: 2018-04-14	
tags:
    - SVG
    - Front End Development
    - React
    - Javascript
published: "no"
---
There's numerous ways to use SVG files in your web project, and even more so if it's a React project. For ultimate flexibility I've found the best approach to be creating React components out of the individual SVG files. This allows you to pass in props for added customization and variation of the SVG, promoting reusability of the components. You also get the benefit of an inline SVG in the output markup, creating one less HTTP request from your site.

The outcome of this component is you will be able to create something like this in your container file.
```html
<PaperPlaneIcon color="EFEFEF" name="unique-classname"/>
```
You can see how this makes it much easier to reuse this SVG in different applications by just passing a different color in, or a class name in, or any other attribute you want to apply to the SVG.

###1. Clean up the SVG file
The first step should be to make sure you SVG file is as simple as possible. This will make the following steps much easier. And in general it's good practice deconstructing an SVG file output by your image editor, reviewing what's necessary and what's not.

This first part is an extra step if you're comfortable editing paths in a program like Sketch or Adobe Illustrator. What you want to do is simplify the shape as much as possible. Depending on the source of the original SVG, there is most likely extra points if it hasn't been optimized already. The usual places to locate extra points are corners or bends in your shape. In this example I remove the corner point and re-create that shape by extending the handles of the two surrounding points.

Here is the original SVG file of this paper plane icon I'm working with as it was output by Sketch.

```html
<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="18px" viewBox="0 0 24 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch -->
    <title>Shape</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M23.9,0.565685425 C20.4,6.26568542 16.9,11.8656854 13.5,17.5656854 C13.3,17.8656854 13.1,17.9656854 12.8,17.7656854 C12.7674303,17.7439723 10.9674303,16.5439723 10.1,15.9656854 C9.95065308,15.9043315 9.80717468,15.9043315 9.7,15.9656854 C8.8,16.5656854 7.9,17.1656854 7,17.7656854 C6.6,18.0271301 6.3,17.8420105 6.3,17.3656854 C6.3,16.1656854 6.3,15.0656854 6.3,13.8656854 C6.3,13.5656854 6.4,13.4656854 6.6,13.2656854 C10.7,10.0656854 15.2228455,6.71980591 19.3228455,3.51980591 C19.3024445,3.46873474 19.3024445,3.46873474 19.2488556,3.41462708 C14.3488556,6.01462708 9.2,8.86568542 4.2,11.4656854 C4,11.5656854 3.9,11.5656854 3.7,11.4656854 C2.6,10.6656854 1.4,9.86568542 0.3,9.06568542 C0.110839844,8.8848877 0.110839844,8.70913696 0.4,8.56568542 C8.1,5.66568542 15.7,2.86568542 23.4,0.0656854249 C23.770813,-0.0779876709 24.0808411,0.212478638 23.9,0.565685425 Z" id="Shape" fill="#6E55E8" fill-rule="nonzero"></path>
    </g>
</svg>
```

The fir