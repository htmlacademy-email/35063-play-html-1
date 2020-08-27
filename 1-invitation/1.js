let user = {
  name: 'John',
  age: 34,

  sayHi(worder) {
    console.log(`${worder} ${this.name}`)
  }
}

let animal = {
  name: 'Rabbit',
  age: 33
}

user.sayHi.call(animal, 'BOSS')
user.sayHi.apply(animal, ['BOSSka'])
user.sayHi.bind(animal, 'BOSSikom')()



// const promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject(new Error('error'))
//   }, 2000)
// });

const promise = fetch(url1);

promise
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  })
