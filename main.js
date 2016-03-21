import {showRepositories} from './base';

'use strict';

window.addEventListener('load', () => {
  let input = document.querySelector('input');

  input.addEventListener('blur', function() {
    if(this.value == '') return;
    let xhr = new XMLHttpRequest();
    let url = 'https://api.github.com/users/' + this.value + '/repos';
    xhr.open('GET', url, false);
    xhr.send();
    if (xhr.status != 200) {
      console.log( xhr.status + ': ' + xhr.statusText );
    } else {
      let response = JSON.parse(xhr.responseText);
      showRepositories(response);
    }
  });
});