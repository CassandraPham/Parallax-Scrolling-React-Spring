# Parallax Scrolling and animation using React Spring

Welcome to my tech demo!
This project represents a self-directed initiative where I researched and acquired practical experience with the React Spring library. I designed and developed a web application that effectively showcases parallax scrolling and simple animation that could enhance the user browsing experience.

## I.	Starting the project
In the root directory (the folder where the Readme file is), open a terminal and run the following command to install all dependencies:
```sh
npm install
```
Once done, start the website by running:
```sh
npm run dev
```


## II.	Introduction to parallax scrolling and React Spring
### 1.	Parallax scrolling:   
Parallax scrolling is a technique involves creating a 3D-like effect by having the background and the foreground of the website moving at different paces as users scroll down. This creates a sense of depth and a more immersive browsing experience. The principle behind parallax is based on an optical illusion.
There are several libraries that can help with creating this effect. One of them is React Spring.

### 2.	React Spring:   
React Spring is an animation library that uses spring physics as its foundation. It helps build animated UI components that are interactive and data-driven. It provides a range of transitions and also interpolations to help create simple yet impactful animations and interactions.   
[React Spring documentation](https://www.react-spring.dev/docs)

## III.	How to start using React Spring
### 1.	Installation:   
To install the whole library:
```sh
npm i react-spring
```

For this project, I installed the specific targets:   
For Parallax scrolling:
```sh
npm i @react-spring/parallax
```
For Animated components:
```sh
npm i @react-spring/web
```

### 2.	Import:
- Parallax scrolling:   
In your component, include the following import statement:
```sh
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
```
- Animated component:   
In your component, include the animated component and any hook(s) to create animation that you would like to use.   
E.g.
```sh
import { useSpring, animated } from '@react-spring/web'
```
In this project, I used useSpring, useSprings and useTrail in the HelicopterPage, TextCard and TrailCard components respectively.


## IV.	My website
In this project, I focused on parallax scrolling using React Spring, and touched on a few of its hooks to create animated components. This is demonstrated in two pages of the website:
### 1.	Witch:   
The Witch page showcases the use of Parallax and ParallaxLayer's to create layers that scroll at different speed to create a sense of depth and optical illusions of movements.   
#### Parallax component:   
Parallax’s props used in the project:
- pages:
Determines the total space of the inner content where each page takes 100% of the visible container.
- horizontal: Determines whether this container is scrolling horizontally. If not specified, it defaults to false.   
#### ParallaxLayer component:   
ParallaxLayer components are contained in a Parallax component.
ParallaxLayer’s props used in the Witch page:
- offset: Determines where the layer will be at when scrolled to (0=start, 1=1st page, ...)
- speed: Shifts the layer in accordance to its offset, values can be positive or negative
- factor: Size of a page, (1=100%, 1.5=1 and 1/2, ...)
- horizontal: Determines whether this layer is scrolling horizontally. If not specified, it defaults to false.

### 2.	Helicopter:   
The Helicopter page demonstrates the use of sticky parallax layer, useSpring, useSprings and useTrail hooks, as well as passing ref to Parallax.   
#### ParallaxLayer’s props used in the Helicopter page:
Same as in the Witch page, and:
- sticky: makes a layer sticky between these two offsets, all other props are ignored
e.g.
```sh
sticky={{ start: 0.7, end: 2.5 }}
```
was used to make the helicopter sticky between offset 0.7 and offset 2.5.   
#### Passing a ref to the Parallax component:
This will give you access to the internal state of the Parallax component.
In this project, this was used to access to the scrollTo state of the Parallax component that wraps all the layers in the HelicopterPage to make the page scroll to offset 2 or offset 0 when the layer is clicked.

#### useSpring hook:
- Animates values from one state to another. It converts defined values to animated values.
- It accepts two props minimum, which are ‘from’ and ‘to’ which are part of the reserved keywords.
- Used in HelicopterPage to animate the title of the page.

#### useSprings hook:
- Similar to useSpring.
- Allows you to create multiple springs, each with its own configuration.
- Implemented in TextCard with a configuration object.
    In this case, it accepts two props, which are the number of springs to create, and the configuration object (which can include multiple configurations).

#### useTrail hook:
- Allows you to create multiple springs with the same configuration.
- Implemented in TrailCard with a configuration object.
In this case, it accepts two props, which are the number of springs to create, and the configuration object.



