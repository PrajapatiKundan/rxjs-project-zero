# RxJS

- Asynchronous: Asynchronous means not occurring at the same time
- Evolution: Callbacks > Promises > Observables
- Best practice to add $ sign at the end of observable object
- Observer is an Object with three properties as a method: next, error, complete

# Observable

- Observable is a function that take observer as argument and provide lots of methods like create(), subscribe()
- Observable is an outer container

# Observer

- Observer is an object that has three methods: next, error, completed
- Observer is an inner trigger

> Note:
>
> - Each observable contains its own observable and they are not shareable and reusable.
> - Observers cannot interact with each other

# Subject

- Subject is both observable and observer
