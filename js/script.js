document.addEventListener('DOMContentLoaded', function() {
  const tasks = [
    {'[内容]':'机を片付ける','[ジャンル]':'掃除'},
    {'[内容]':'牛乳を買う','[ジャンル]':'買い物'},
    {'[内容]':'散歩する','[ジャンル]':'運動'},
  ];
  displayTask(tasks);

  let inputTask = prompt('タスクを入力してください');
  let inputGenre = prompt('ジャンルを入力してください');
  let newObj = {'[内容]':inputTask,'[ジャンル]':inputGenre}; 
  tasks.push(newObj);

  displayTask(tasks);

  alert('新しいタスクを追加しました。')
});

function displayTask(array) {

  console.log('==========================');
  console.log('現在持っているタスク一覧');
  console.log('==========================');
  array.forEach((elm, index) => {
    console.log(`${index}：[内容]${elm["[内容]"]}、[ジャンル]${elm["[ジャンル]"]}`)    
  })
}