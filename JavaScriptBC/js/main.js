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


const str = 'hello';

//substring(開始位置, 終了位置)
const subStr =  str.substring(2, 4)
console.log(subStr);

//インデックスでも取得できる
console.log(str[1])


const d = [2020, 3, 6]
const t = '2020/3/6'

console.log(d.join('/'));
console.log(t.split('/'));
const year = t.split('/');
console.log(y[0]);


const num = [10, 3, 9]
let sum = 0;

num.forEach((value) => {
  sum += value;
});

const avg = sum / num.length;

console.log(sum);
console.log(avg); //7.3333333...

console.log(Math.floor(avg)); //小数点以下切り捨て 7
console.log(Math.ceil(avg)); //小数点以下切り上げ 8
console.log(Math.round(avg)); //四捨五入 7
console.log(avg.toFixed(3)); //小数点以下3桁まで表示 7.333

console.log(Math.random()); //0以上1未満の数値をランダムに生成
console.log(Math.floor(Math.random() * 3)) //0~3までのランダムな整数値を生成

// console.log(Math.floor(Math.random() * (max + 1 - min)) + min);
//min...maxの間でランダムな整数値を生成、(minとmaxに指定したい数値を当てはめる)

//例 min = 1, max = 6
console.log(Math.floor(Math.random() * (6 + 1 - 1)) + 1);


//現在年月日時取得
const days = new Date();
console.log(days);
console.log(days.getFullYear()); //年
console.log(days.getMonth()); //月 0~11で表示 (1月:0, 2月:1, ...)
console.log(days.getDate()); //日 1~31で表示
console.log(days.getDay()); //曜日 0~6で表示 (sun:0, Mon:1, ...)
console.log(days.getHours()); //時 0~23
console.log(days.getMinutes()); //分 0~59
console.log(days.getSeconds()); //病 0~59
console.log(days.getMilliseconds()); //ミリ秒 0~999 1ms = 1/1000 sec

//Monthは0からはじまるので実用する際は、Month + 1する
console.log(`${days.getMonth() + 1}月 ${days.getDate()}日 `);


//confirm: アラートのような形で、確認orキャンセルのダイアログを表示す
// const answer = confirm("内容に同意しますか？")

// if(answer) {
//   console.log('同意しました')
// } else {
//   console.log('キャンセルしました')
// }


let i = 0;
const showTime = () => {
  console.log(new Date());
  i++
  if(i >= 2) {
    clearInterval(intervalId);
    //clearIntervalでsetIntervalを停止する。
    //この場合だとshowTimeを2回実行した後crearIntervalが実行されintervalId(setInterval)が停止する。
  }
}
const intervalId = setInterval(showTime, 1000);
//setInterval: 一定の遅延間隔を置いて関数やコードスニペットを繰り返し呼び出す
//(処理を行う要素を指定, 何ms事に処理を行うのか指定) 上記の場合だと1000msごとに処理を行う


//setTimeout: setIntervalと違い、繰り返し処理はされない。第一引数に処理を行う関数(要素)を指定し、第2引数にプログラムが開始するまでの秒数(ミリ秒)を指定する。
//また、setIntervalでは処理が終わっていなくても指定した秒数経つと次の処理を行うが、setTimeoutでは処理が完全に終わった後に次の処理を行うのでシステムにかかる負荷が軽減する

// const showTimeout = () => {
//   console.log(new Date());
//   i++
//   if(i < 2) {
//     setTimeout(showTimeout, 1000)
//   }
// }
// showTimeout();

//setTimeout関数をshowTimeout関数内に入れることで擬似的にsetIntervalのような繰り返し実行が可能となる


//例外処理
const exp = 1;
//try...catchで囲むことで例外(エラー)が発生した場合でもそのエラーを格納し、後の処理を行うことができる。
try {
  console.log(exp.toUpperCase());
  //大文字にする処理だが、数値は処理できないためエラーが発生
} catch(e) {
  //(e)にエラーを格納
  console.log(e)
}
console.log("finish!")


//class
class Post {
  constructor(text){
    //constructorで初期化
    this.text = text;
    //textは毎度違うものを入れたいので、constructorの引数から引き継ぐ
    this.likeCount = 0;
  }

  //メソッド
  show() {
    console.log(`${this.text} : ${this.likeCount}いいね`)
  }

  likes() {
    //2つ目のメソッド
    //良いねを増やし、再度表示させる処理
    this.likeCount++
    this.show();
  }

  //静的メソッド、インスタンスを介さずに直接classから呼び出すことができる
  //thisは使えない
  static showInfo() {
    console.log("このメソッドはstatic methodです！")
  }

}


//class 継承
// class SponsoredPost extends Post {
//   //親クラスと同じ機能を継承しているので、変更点のみ記載すれば良い
//   constructor(text, sponsor) {
//     super(text)
//     //ここでsuper()と記載することで親クラスのコンストラクターが呼ばれる
//     //コンストラクターで使用する場合、super キーワードを単独で置き、this キーワードが使われる前に使用する必要があります。super キーワードは、親オブジェクトの関数を呼び出すためにも使用できます。
//     this.sponsor = sponsor;
    
//   }
//   show() {
//     super.show();
//     console.log(`sponsored by ${this.sponsor}`);
//   }
// }
// const posts = [
//   new Post("JS study"),
//   new Post("JavaScript Like!"),
//   new SponsoredPost("Sho's sponsor", "sho program"),
// ]
// posts[2].show();
// posts[2].likes();


const posts = [
  new Post("JS study"),
  new Post("JavaScript Like!"),
]

console.log(posts);
//通常のメソッドの呼び出し
posts[0].show();
posts[1].show();
posts[0].likes();

//静的メソッドの呼び出し
Post.showInfo();
