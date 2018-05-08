---
title: "Floats vs Flexbox vs Grid"
type: "blog"
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
date: 2018-04-02
category: "Front End Development"
tags:
    - frontend
    - layout
    - flexbox
published: "no"
---

floats original hacks for layout. Came after tables. Floats were only intended to float an image on a web page, and wrap text around it.

Since we had nothing else, it was used in alot of different ways.

Layouts are currently rows and cells

Rows typically clear the floats on the cells

If you float, you must clear

Source order determines the display on the page. Major advtange: equal column heights

A method for clearing a float after it's used

.row::after {
	content: "";
	display: table;
	clear: both;
}

Problem with floats is it's not content aware enough. We have to use JS to get equal height columns, indeependt of content. 

[class*="col-"] <- that's an attribute selector


Rather than selecting html class, this says any html element with a class, that contains col- 



Flexbox was the first tool we were given purposely for layouts

But not designed to layout whole page. Only works in 1 dimension

Takes care of vertical and horizontal centering


Flexbox as a grid system is a hack

Think about flex tonatiner as row or column. main axis or cross axis

