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
- A Subject is a special type of Observable that allows values to be multicast to many Observers. Subjects are like EventEmitters.
- Every Subject is an Observable and an Observer. You can subscribe to a Subject, and you can call next to feed values as well as error and complete.
- Subjects are shareable but not reusable. They just dead when we run error or complete method
