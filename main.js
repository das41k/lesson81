console.log('Задание 1')
const numbers = [87,23,6,1,0,0,45,84,62]
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i])
  }
}

console.log('Задание 2')
const rainbow = ['red','orange','yellow','green','blue','indigo','violet']
for (let j = rainbow.length - 1; j >= 0; j--) {
  console.log(rainbow[j])
}