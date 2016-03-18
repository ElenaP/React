export let showRepositories = (data) => {
  data.forEach(function(item) {
    let arr = item.full_name.split('/');
    let div = document.createElement('div');
    div.innerHTML = arr[arr.length - 1];
    document.body.appendChild(div);
  });
};