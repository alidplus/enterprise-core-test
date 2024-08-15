# Enterprise Core (a test project)

Frontend application framework using React & Redux...

## Mission

- The framework will provide a UI component that displays a common menu that can be updated dynamically using configuration assets (e.g. json)
- The framework will provide a view panel where external react applications can be loaded dynamically based on configuration.
- The top level menu updates when a new application is loaded using the applications preferred menu config.
- The application can load a UI component dynamically based on a configuration asset (e.g. json) that specifies the version of the component. e.g. RegistrationForm v1 and RegsitrationForm v2
- The dynamically loaded applications need to be able to interact with each other without direct communication, using redux within the front end framework/wrapper.
  Bonus Test (if you find the above easy, the following will help you show off your skills more, though not essential for you to do):
- One UI component will render a react-flow diagram with custom nodes that embed sub-diagram(s).

### What this should ultimately show:

The user can create a react application, and by using configuration the front end framework (provided by EnterpriseCore) can load multiple applications into a common frame, and dynamically load ui components to support feature flagging as well as ensure multiple app communication. The user will want to build an app in a familiar way, like how they create react apps today.

**Note:** this doesn't have to be production ready code, it just needs to show a) that you understand how to interpret requirements, b) that you can get into the inner workings of react/redux/javascript and the object model to abstract away from hard-coding style development, and c) that you organise your code cleanly in a logical and understandable way that separates concerns.

## How to run:

1. install dependencies:

```bash
yarn install
```

1. run in dev mode:

```bash
yarn dev
```


## Final Report
Every project is full of new challenges and experiences. Here, I like to share my experiences about doing this project:

### What and Why
Here, I note the "What and Why" for some of the things I've used in this project:
- vite: Fastest frontend bundler serving ES6 inside the browser
- react-router-dom v6: The most popular router component. with a lot of awesome features included like lazy load, async loader
- tailwindCSS: tiny size CSS library with atomic CSS classes and the easiest way of making customised UI
  
### New Experiences
I usually use some new package inside every test project:
- NextUI: The best UI Kit I've ever used! It has built on top of 'tailwind-variant' and 'tailwindCSS'. it's very flexible, customizable, easy to use and well-documented. Every Component inside the NextUI is basically a tailwind-variant, so, it is easy to extend and develop your own components using this ui-kit.
- ReactFlow: A new way of designing "No Code" applications with the possibility of defining your own nodes and logic! It is weird at first glance, but after a day you find out how it is well-documented and simple to use. the website is full of awesome things built on top of it (min blowing!)
