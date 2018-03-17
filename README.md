# TDD React CRUD App Demo

Since I've found virtually no repos that promote a TDD approach to React applications**, I decided to dive in head-first to making a basic CRUD application that employs extensive unit testing in a test-driven way, figuring it out as I go. 

I wanted to write my tests in a way that would be easily replicable, so I scaffolded this project with create-react-app, and added Enzyme on top of Jest, which is baked into create-react-app, as my testing utilities.

The primary testing folder is `__tests__`. Any test folder with `__tests__` as its title and is within the src directory (along with any files ending with .spec.js / .test.js) will be run with the script:
```
npm / yarn test
```
or just:
```
npm / yarn t
```

Right now, I would like to get into a habit of writing unit tests, since virtually all of the development I've done in the past has been without testing. Since many testing utilities for JavaScript tend to share common features, such on a jQuery-like syntax (i.e. mocha) and tools like sinon for features like spies, the ability to write tests with Jest/Enzyme will carry over to whatever library I need to use.

** I'm sure they exist, I've just not been able to find them on Github or elsewhere