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
