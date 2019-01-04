// const veryLargeNumber = 1.5 * 1000 * 1000000000000; //will return 1
// const veryLargeNumber = 1.5 * 1000000000 * 1000000000000; //will return 0
// const slightlyLargerNumber = veryLargeNumber + 1;
// console.log(slightlyLargerNumber - veryLargeNumber);


console.log('***\n')
console.log('MAX_VALUE is '+ Number.MAX_VALUE)
console.log('MAX_SAFE_INTEGER is ' + Number.MAX_SAFE_INTEGER)
console.log('\tIn binary that\'s 11111111111111111111111111111111111111111111111111111')
console.log('\tWhich is ' + '11111111111111111111111111111111111111111111111111111'.length + ' bits')
console.log('***\n')

console.log('Can you accurately add numbers to MAX_SAFE_INTEGER once?')
let num = 1;
let max = Number.MAX_SAFE_INTEGER;
let sum = max + num;
console.log(`\tAdding ${num} to MAX_VALUE`)
console.log(`\t ${max} + ${num} = ${sum}`)

console.log('\nHow about twice?')
let sum2 = sum + num
console.log(`\tAdding ${num} to ${sum}`)
console.log(`\t ${sum} + ${num} = ${sum2}`)
console.log('***\n')


let i = 0;
console.log(`If I add 1 to k = 0 ten times, incrementing it in a for loop:`)

for (let k = 0; k < 10; k++){
  if (k-i !== 0){
    console.log("inaccurate")
  }
  if (k === 9){
    console.log(`\tThis loop has been accurate, k reached ${k} by adding 1 to 0 ${i}-times`)
    console.log(`\tThe increased value of k was always 0+i for each loop `)
  }
  i++
}


console.log(`\nBut, if I add 1 to Number.MAX_SAFE_INTEGER in a loop, the new value - i does not equal the original MAX_SAFE_INTEGER value`)

i = 0;
max = Number.MAX_SAFE_INTEGER;

let increment = 1;

for (max ; max < Number.MAX_VALUE; max+=increment){
  if (max-i !== Number.MAX_SAFE_INTEGER){
    console.log(`\t(Loop#${increment*(i+1)}) Inaccurate: ${Number.MAX_SAFE_INTEGER} + ${increment*(i)} is not ${max}`)
  }else{
    console.log(`\t(Loop#${increment*(i+1)}) Accurate: ${Number.MAX_SAFE_INTEGER} + ${increment*(i)} is ${max}`)
  }
  if (i === 9){
    break;
  }
  i++
}
