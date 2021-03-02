# Testing with react-testing-library

## What is a test?

Code you write to verify the behaviour of your application.

## Why do we write tests? --> to increase PRODUCTIVITY

- Confidence

- Refactoring

- Documentation

Tests are the best possible documentation

A test describes how the code should work.

The closer the documentation lives to the code the easiest is to keep it in sync!

- Onboarding new team members

## Type of tests

- End to End
- Integration
- Unit
- Static -> types

## Jest

- It is `the` test framework (test runner + assertion lib + mocking lib) === (mocha + chai + sinon)

- Loads test files in a **testEnvironment**. By default this environemnt is `jsdom`.
  which exposes ~all browser apis & a DSL useful to write tests (describe, test, it, expect....)

## Testing Library (DOM testing library)

It is a light-weight solution for testing web pages by querying and interacting with DOM nodes.
in a way that's similar to how the user finds elements on the page. In this way, the library helps ensure your tests give you confidence that your application will work when a real user uses it.

**Guiding Principle**
`The more your tests resemble the way your software is used, the more confidence they can give you.`

## React Testing Library

The core library has been wrapped to provide ergonomic APIs for several frameworks, including React, Angular, and Vue.

Testing Library encourages you to avoid testing implementation details like the internals of a component you're testing (though it's still possible).

`Implementation details are things which users of your code will not typically use, see, or even know about.`

- Internal state of a component
- Internal methods of a component
- Lifecycle methods of a component
- Child components

## Why is testing implementation details bad?

1. Can break when you refactor application code. `False negatives`
2. May not fail when you break application code. `False positives`

So we could rewrite all these tests with enzyme, limiting ourselves to APIs that are free of implementation details, but instead, I'm just going to use React Testing Library which will make it very difficult to include implementation details in my tests.

## a11y

One of the guiding principles of the Testing Library APIs is that they should enable you to test your app the way your users use it, including through accessibility interfaces like screen readers.

There is a priority guide for recommendations on how to make use of semantic queries to test your page in the most accessible way.

- Shift left a11y https://www.deque.com/shift-left/
- https://testing-library.com/docs/queries/about#priority
- https://testing-playground.com/
- https://github.com/nickcolley/jest-axe

## More

- https://kentcdodds.com/blog/testing-implementation-details
- https://kentcdodds.com/blog/why-i-never-use-shallow-rendering
- https://kentcdodds.com/blog/write-fewer-longer-tests
- https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
