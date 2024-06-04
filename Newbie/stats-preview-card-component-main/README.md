# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

![Design preview for the Stats preview card component coding challenge](./design/desktop-preview.jpg)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![Large Screen](./screenshot1.png) 
![Small Screen](./screenshot2.png) 


### Links

- Github URL: [Github Source Files](https://github.com/AbdelmonemMarei/Front-End-Mentor-Challenges/tree/main/Newbie/stats-preview-card-component-main)
- Live Site URL: [Live Site URL](https://abdelmonemmarei.github.io/Front-End-Mentor-Challenges/Newbie/stats-preview-card-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Responsive Web App


### What I learned

To use pesudo elements to add images via css

```css
.container .stats-card .image::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(../images/image-header-desktop.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 1;
    width: 100%;
    height: 100%;
}
```


### Useful resources

- [MDN pesudo elemnts](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) - This helped me for learn how to use pesudo element
- [MDN background image](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image) - This helped me for learn how to add images via css


## Author

- Frontend Mentor - [@AbdelmonemMarei](https://www.frontendmentor.io/profile/AbdelmonemMarei)
- Github - [AbdelmonemMarei](https://github.com/AbdelmonemMarei)

