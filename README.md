# Bij Laurijs, _vacation in the Achterhoek_

**bijlaurijs** is the digital business card of the picturesque vacation chalet, camper and its owners, located in rural Gelderland. Merging an old site with its visual identity, concept and narrative but outdated code into a new form, making it ready to survive the coming years of the internet. With new tools to tell new stories and the possibility to update old ones, **bijlaurijs** now is future proof. It comes with a dad-proof, admin-friendly CMS, enabling the admin to add/edit menu items, text and images.

## Table of contents

- [App Demo](#App-demo)
- [‘Bij Laurijs’ concept](#‘Bij-Laurijs’-concept)
- [The Fossil](#The-Fossil)
- [Goals for this project](#Goals-for-this-project)
- [User stories](#User-stories)
- [Wireframe](#Wireframe)
- [Project board](#Project-board)
- [Used technologies](#Used-technologies)
- [Datamodel](#Datamodel)
- [Git version control](#Git-version-control)
- [CMS repo](#CMS-repo)

## App Demo

[bijlaurijs develop mode](https://bijlaurijs.timlaurijs.xyz/)

## ‘Bij Laurijs’ concept

The idea was to have an app that doesn’t consist of any foldable menu items or hidden pages, focusing on a clear but unique visual experience. Trying to portrait the beauty of the property a timeline of images, whilst keeping a personal feel.
All visual identity and decisions were made around 2017-2018, I tried my best to keep the old styling intact.

## The Fossil

[bijlaurijs.nl original website](https://www.bijlaurijs.nl)

I have rebuild the website for my dads vacation home rental I made a few years back, hardcoded using html, css and (borrowed) jquery. I wanted to make the website ‘future proof’ and dynamic, so my dad can manage its content himself. Also the website had to become responsive for mobile users, since the current website wasn’t that mobile-friendly.

## Goals for this project

The goal of this project is to build an app to showcase what I have learned the past few weeks, while also exploring new possibilities to pursue personal interests using my newly learned tools.

- Practice building a full-stack app
- Build and deploy a working version in 2(\*3) weeks
- Translating old logic to new logic
- Showcasing and documenting process using:
  - Wireframes to visualize a goal
  - Clear user stories
  - Clear to do hierarchy
  - Resolute git version control

## User stories

As the vacation-home owner I want the updated website to look/behave similar to the old website (www.bijlaurijs.nl) containing the following characteristics:

- App has a scrollable image timeline on the right.
- App has a static menu on the left with the following menu items:
  - Vakantiehuis bij Laurijs. Welkom!
  - Tot 4 of 6 gasten + baby. En de hond mag mee
  - Binnen bij Laurijs
  - Buiten bij Laurijs
  - De Achterhoek
  - Inhoudsopgave
  - Locatie & contact
    (In consultation menu items may be merged/added/changed)
  - When you click an item from the menu bar you will go to its place in the scrollbar.
  - App has a button with: “book now”, if clicked gets redirected to a booking page.
- As the vacation-home owner I want to be able to post/edit new menu items, text or images on an admin page.
- As the vacation-home owner I want the vacation-home guest to be able to submit pictures using an emailed invitation-link just once, after submitting the link it should not be valid anymore.
- As the vacation-home owner I want to receive photos submitted by guests to review before I post them on the website.

- As a website visitor I want the website to work on both the desktop and mobile version.
- As a website visitor I want to be able to filter images on the season they are taken (winter, spring, summer, autumn)
- As a website visitor I want some stylistic elements to change when a specific season is selected.
- As a website visitor I want the map to focus on the desired item when I click that item in the list of surrounding activities.
- As a website visitor I want to see a map containing icons of all the listed activities.
- As a website visitor I want to see a list of activities in the surrounding area (walk/bike trails, musea, bars/restaurants)
- As a website visitor I want to view the latest posts from facebook/instagram.
- As a website visitor I want to be able to view guest-submitted pictures.
- As a website visitor I want to select a Night/Day mode

- As a vacation-home guest I want, after I visited the vacation-home, to receive an email containing an invitation to upload pictures I made at/around the vacation-home and (optional) to write a review

## Project board

Go to my [Project board](https://github.com/timlaurijs/bijlaurijs-client/projects/1)

## Wireframe

![model front](https://github.com/timlaurijs/bijlaurijs-client/blob/development/Readme-assets/homepage.png "model front")
![model admin](https://github.com/timlaurijs/bijlaurijs-client/blob/development/Readme-assets/admin%20page.png "model admin")

## Datamodel

![model front]()

## Used Technologies
🦴 are files from my backend I end up not using

- [React for UI building](https://github.com/timlaurijs/bijlaurijs-client/blob/development/src/App.js)
- [Redux for state management](https://github.com/timlaurijs/bijlaurijs-client/tree/development/src/store/homepage)
- [Sanity for CMS schamas](https://github.com/timlaurijs/bijlaurijs-cms/tree/development/schemas)
- [useCallback for DOM node reference](https://github.com/timlaurijs/bijlaurijs-client/blob/31dc44ea02620b662a7799d26ececccf714a501e/src/components/Post.js#L51-L74)
- [Authentication](https://github.com/timlaurijs/bijlaurijs-backend/blob/development/routers/auth.js) 🦴
- [Express as web app framework](https://github.com/timlaurijs/bijlaurijs-backend/blob/development/index.js) 🦴
- [Datamodels](https://github.com/timlaurijs/bijlaurijs-backend/tree/development/models) 🦴

## Git version control

examples of a pull request:

- [Scroll event handler](https://github.com/timlaurijs/bijlaurijs-client/pull/12)
- [Styling](https://github.com/timlaurijs/bijlaurijs-client/pull/19)

## CMS repo

Go to my [CMS repo](https://github.com/timlaurijs/bijlaurijs-cms)

## Backend repo

Go to my [Backend repo](https://github.com/timlaurijs/bijlaurijs-backend)
