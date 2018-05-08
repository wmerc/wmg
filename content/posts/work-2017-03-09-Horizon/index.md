---
title: "Event Site CMS"
type: "work"
cover: "/assets/images/portfolio/Events-siteimage.jpg"
category: "Product Design"
date: 2017-03-09
tags:
    - Product Design
    - Art Direction
    - Branding
published: "yes"
---
In an attempt to unify the array of sites being used by the various business units in the company, we created a new platform on Drupal 8. The goal of the project was to entice visitors to become registrants of the event, allow sponsors to get more information about partnering with the event, and to inform users of event schedules, speakers and basic information. As much of a focus the end user's experience was, the ease of use from the program admin was a large focus as well. And the flexibility of the platform to meet the needs to the various groups which would use this platform. 

##UX
As with our other projects, we determined a single group which would act as a project owner and provide feedback and data on issues with the existing systems. On the design side this allows us to create user stories and understand the success criteria of the design. We took this and created our initial wireframes and iterated upon after presenting them to the client. Since we wanted this platform to apply to as many types of events as possible, designing it in a component based fashion would allow site admin to choose which blocks they needed and could do without. The design had to allow for the neighboring of unknown components and follow a modular layout in which each component is independent of the others.

![Events platform wireframe](/assets/images/portfolio/Events-wireframe.jpg)

##UI
Once we were able to confirm the ideal user experience and content considerations through the wireframes we moved to a higher fidelity comp, created in Sketch. The importance of the comp was to communicate the branding applications to the platform and to serve as a build guide for the front end development team. After multiple iterations, and input into feasibility of implementation and adherence of brand standards we arrived at these comps. 

![Events platform desktop comp](/assets/images/portfolio/Events-desktop-1489093977.jpg)
![Events platform responsive comp](/assets/images/portfolio/Events-responsive.jpg)

##Project Completion
Since this was a platform being designed it needed a level of abstraction in order to be applicable to other brands. So while the mockup stage was in progress one of the constraints kept in mind was the ability to practically theme another brand on the platform. This meant using colors strategically so they could easily be swapped out without breaking the design. One way to solve this is by using shades of an inputted base color, then using SASS mixins to generate predefined tones of that value. 

We extracted a style guide from the comp, it was important to do this after the mockup was done so we would know what parts of the platform were available to be themed and how the colors would apply. This style guide then served as a template for new brands to join the platform in a predictable manner. 

![Events platform style guide](/assets/images/portfolio/Events-styleguide.jpg)

Some of the sites already built on the platform can be viewed here: [ncbshow.com](http://www.ncbshow.com/), [sensorsexpo.com](http://www.sensorsexpo.com/), [hotelroi.com](http://www.hotelroi.com/). You can see how the sites look different with various modules being used and the component based system in place. The components continue to be improved and added to.