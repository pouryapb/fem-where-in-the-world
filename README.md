# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Links

- Solution URL: [Github Repository](https://github.com/pouryapb/fem-where-in-the-world)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Tailwindcss
- Flexbox
- CSS Grid
- Mobile-first workflow (Well I forgot this but tailwind saved me :>)
- [Next.js](https://nextjs.org/) - React framework

### What I learned

Using `react-query` was quite a challenge. specially in Next.js because I needed to somehow manage using Server Components and Client Components. thankfully `react-query` already has a solution for this. I'm not sure though if this is a good use if you need to load a long list like I did here in home page.  
I also used `shadcn/ui` for some ui components like dropdown and select which saved some time. althogh required some theming.  
I learned about `next-theme` package which provides theme context and saves a lot of time.

### Useful resources

- [React Query](https://tanstack.com/query/latest/)
- [shadcn/ui](https://ui.shadcn.com/)

## Author

- Website - [Pourya Pourbagheri](https://portfolio-pouryapb.vercel.app/)
- Frontend Mentor - [@pouryapb](https://www.frontendmentor.io/profile/pouryapb)
- Linkedin - [@pouryapb](https://www.linkedin.com/in/pouryapb)
