document.addEventListener('DOMContentLoaded', function() {
  const task = ["掃除","買い物","散歩"];
  let inputTask = '';
  
  displayTask(task);
  inputTask = prompt('タスクを入力してください');
  task.push(inputTask);
  displayTask(task);
  alert('新しいタスクを追加しました。');
});

function displayTask(array) {

  console.log('==========================');
  console.log('現在持っているタスク一覧');
  console.log('==========================');
  array.forEach(function(element, index) {console.log(`${index}：${element}`)} );
}