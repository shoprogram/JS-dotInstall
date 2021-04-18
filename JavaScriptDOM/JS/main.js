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

    const ul = document.querySelector('ul');
    const item3 = document.querySelectorAll('li')[2];
    ul.insertBefore(copy, item2);
  }) 
  
}