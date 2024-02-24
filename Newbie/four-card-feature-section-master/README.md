# Frontend Mentor - Four card feature section solution

This is a solution to the [Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

![Desgin Require](./design/desktop-preview.jpg) 

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![Large Screen](./screenshot1.png) 
![Small Screen](./screenshot2.png) 

### Links

- Solution URL: [Github Source Files](https:/example.com)
- Github URL: [Github Source Files](https://github.com/AbdelmonemMarei/Front-End-Mentor-Challenges/tree/main/Newbie/four-card-feature-section-master)
- Live Site URL: [Live Site URL](https://abdelmonemmarei.github.io/Front-End-Mentor-Challenges/Newbie/four-card-feature-section-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Responsive Web Design

### What I learned

Using Custom Grid to fit your website requirements (grid-area)
```css
.container .cards{
    display: grid;
    grid-template-columns: repeat(6,150px);
    grid-template-rows: repeat(4,100px);
}
.container .cards .sup-card{
    grid-area: 2/1/4/3;
}
```
To make site responsive
```css
@media(width){

}
```


### Continued development

I need to Learn More about Grid Methods to custom responsive site layout


### Useful resources

- [Grid Area](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area) - This helped me for learning how to use Grid area to custom four cards layout.


## Author

- Frontend Mentor - [@AbdelmonemMarei](https://www.frontendmentor.io/profile/AbdelmonemMarei)
- Github - [AbdelmonemMarei](https://github.com/AbdelmonemMarei)



