# NgFirstTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

The sole intention of this project is to show various scenarios of writing Angular Unit Tests


1. `MyMathComponent`
  - Starts with simplest scenarios, calling component method, handling error, resolving external dependencies, and then doing asserts

1. `MyHttpService`
  - Wrapper of `HttpClient` used for the application
  - Application will be communicating to the server via this wrapper, not directly

1. `MyServiceCallingComponent`
  - This component calls `MyMathHttpService` to perform asynchronous operations and sets values to its member variables

1. `MyMathHttpService`
  - Called by the above component, which in turn calls MyHttpService

1. `LoggerService`
  - Used by components to log various messages. Application doesn't directly logs usinng `console.log`/`error`

1. `MyParentComponent`
  - Parent of `MyChildComponent`

1. `MyChildComponent`
  - Child of `MyParentComponent`

# TODO:

- coverage report
- karma parallel
