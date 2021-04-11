'use strict'

const scores = [60, 90 , 30, 70]

scores.forEach((score, index) => {
  console.log(`Score${index}: ${score}`)
  console.log(score + 30)
})

const updateScore = scores.map((score) => {
  return score + 30;
})
console.log(updateScore);

const newScore = scores.filter((score) => {
 return score % 2 === 0;
})
console.log(newScore);

const point = {
  x: 100,
  y: 180,
}
console.log(point)

point.z = 200;
console.log(point)

delete point.y
console.log(point)

//forEachはオブジェクトにそのまま使えない
// point.forEach((value) => {
//   console.log(value)
// })

//なのでObject.keysでオブジェクトのすべてのキーと取得できることを利用し、keyを使って展開していく

const keys = Object.keys(point);
  keys.forEach(key => {
    console.log(key, point[key])
  })


//変数でスプレット構文を使うと、代入する前の値が取り出せる
let x = [1, 2];
let y = [...x];
let z = x;
x[0] = 5;
console.log(x)
console.log(y)
console.log(z)
