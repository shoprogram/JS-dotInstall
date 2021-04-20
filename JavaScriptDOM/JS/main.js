'use strict'
{
  const update = () => {
    document.querySelector('h1').textContent = "Change success!";

    // document.getElementById("hello").textContent = "Hello!";
    //document.querySelector("#hello")でも同じように取得できる
    // document.querySelectorAll('p')[2].textContent = "Changed!";

    document.querySelectorAll('p').forEach((p, index) => {
      p.textContent = `${index}番目です`;
    });

    const targetNode = document.getElementById('target');

    targetNode.title = 'Change Title!';
    // targetNode.style.color = "red";
    // targetNode.style.backgroundColor = "skyblue";
    targetNode.classList.toggle("d-color");
  }

  // setTimeout(update, 1000);


   document.getElementById('change').addEventListener('click', update);
  // document.querySelector('button').addEventListener('click', update);
  //複数回関数を使わないのであれば第2引数にそのまま関数を書き込んでも良い。
  // document.querySelector('button').addEventListener('click', () => {
  //   document.querySelector('h1').textContent = "Change success!";
  //   document.querySelectorAll('p').forEach((p, index) => {
  //     p.textContent = `${index}番目です`;
  //   });
  // })

  const addText = () => {
    const item3 = document.createElement('li');
    //liタグ作成(中身は空)
    item3.textContent = "item3"
    //作成したliタグの中にtextを追加

    const ul = document.querySelector('ul');
    //index.htmlからulタグ所得
    ul.appendChild(item3);
    //親ノードの子ノードリストの末尾にノードを追加する。追加しようとしたノードが既に存在していたら、それは現在の親ノードから除かれ、新しい親ノードに追加される。
    //今回は親ノード(ul)の子ノード(li)リストの末尾にitem3が追加される。

  }

  document.getElementById('add').addEventListener('click', addText);

  document.getElementById('copy').addEventListener('click', ()=>{
    const item1 = document.querySelectorAll('li')[0];
    const cloneItem = item1.cloneNode(true); 
      //trueとすることで子孫も複製できる。falseではnodeのみの複製になる。
    const ul = document.querySelector('ul');
    const item3 = document.querySelectorAll('li')[2];
    ul.insertBefore(cloneItem, item3);
  }) 

  document.getElementById('delete').addEventListener('click', () => {
    const item2  = document.querySelectorAll('li')[1]

    // item2.remove();
    // ↑これでも削除できるが、使えないブラウザがあるで、その場合は
    // 親Node.removeChild(削除するNode)
    // を使うことで対応可↓
    document.querySelector('ul').removeChild(item2);
  })

  document.getElementById('addButton').addEventListener('click', () => {
    const li = document.createElement('li');
    const inputText = document.querySelector('input');
    // .valueにinputしたテキストが入る
    li.textContent = inputText.value;
    document.getElementById('list').appendChild(li);

    //appendChildでテキストを追加した後.valueの中身をからにし、inputフォームをfocusさせる
    inputText.value = "";
    inputText.focus();
  })
  
  document.getElementById('radio').addEventListener('click', ()=>{
    const colors = document.querySelectorAll('input')
    // console.log(colors);
    let selectedColor;
    
    console.log(colors)
    colors.forEach(color => {
      if(color.checked === true) {
        //radioボタンのチェックが付いている要素を判定する
        selectedColor = color.value;
      }
    })
    
    const li = document.createElement('li');
    li.textContent = selectedColor;
    document.getElementById('radioList').appendChild(li);
  })

  document.getElementById('event').addEventListener('dblclick',() => {
    console.log('double clicked!');
    //ダブルクリックで発火
  })

  // document.addEventListener('mousemove', e => {
  //   //マウスを動かした時点で発火
  //   console.log(e.clientX, e.clientY);
  //   //引数にeを取り、e.clientX, e.clientYで画面内の座標を獲得できる
  // })

  // document.addEventListener('keydown', e => {
  //   console.log(e.key)
  //   //押したキーを判定できる。
  // })


  const area = document.getElementById('area');

  area.addEventListener('focus', () => {
    console.log('focus');
  })
  
  area.addEventListener('blur', () => {
    console.log('blur');
    //focusが外れたときに発火する。(focusと逆の効果)
  })

  area.addEventListener('input', () => {
    console.log('input');
    //内容が更新されたときに発火

    console.log(area.value.length);
    //文字数を判定することも可能
  })
  
  area.addEventListener('change', () => {
    console.log('change');
    //内容が確定したときに発火
  })
  
  document.querySelector('form').addEventListener('submit', e  => {
    e.preventDefault();
    //通常formを送信するとページがリロードされるので、それを回避するためにe.preventDefaultを使う
    console.log('sibmit');
  })
}