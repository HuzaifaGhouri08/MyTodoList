 let btnp = document.getElementById('btn');
    let input = document.getElementById('input');
    input.addEventListener('keyup', function (e) {
      let val = e.target.value;
      if (val == '') {
        btnp.style.display = 'none';
      } else {
        btnp.style.display = 'block';
      }
    });

    function addMore() {
      document.getElementById('section2').style.animation = '1s slidein';
      let btn = (document.getElementById('btn').style.display = 'none');
      let input = document.getElementById('input').value;
      if (input == '') {
        alert('please Enter Your Task');
      } else {
        let list = document.getElementById('box');
        let li = document.createElement('li');
        li.textContent = input;
        list.appendChild(li);
        document.querySelector('li').style.animation = '1s text';

        let a = document.createElement('a');
        a.textContent = 'x';
        a.href = '#';
        a.className = 'remove';
        li.appendChild(a);
        document.getElementById('rem').style.display = 'block';
      }
      document.getElementById('input').value = '';
    }
    let btn = document.querySelector('ul');
    btn.addEventListener('click', function (e) {
      let list = document.getElementById('box');
      let li = e.target.parentNode;
      list.removeChild(li);
    });

    function removeAll() {
      document.getElementById('section2').style.animation = '2s fadeout';
      let animation = setTimeout(fadeOut, 2000);
      function fadeOut() {
        let list = (document.getElementById('box').innerHTML = '');
        document.getElementById('rem').style.display = 'none';
      }
    }