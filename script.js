const popup = document.getElementById('popup_btn');
const overlay = document.querySelector('.box');
const closeform = document.getElementById('close_form');
const submit_btn = document.getElementById('submit');
const radio = document.getElementsByName('status');
const $tableBody = document.querySelector("#book-table-body");
const bookContainer = document.querySelector('.bookContainer');

let myLibrary = [];  i = 0;

class Book {
  constructor(title, author, status) {
    this.Title = title;
    this.Author = author;
    this.status = status;
  }
}


function addBookToLibrary(event) {
event.preventDefault();
let title = document.getElementById('title').value;
let auhtor = document.getElementById('auhtor').value;
let status;
  if (radio[0].checked) {
    status = radio[0].value;
  } else {
    status = radio[1].value;
  }
  let newbook = new Book (title,auhtor,status);
  myLibrary.push(newbook);

  update(); 
  form.reset();
  close_popup();


}

let toggleButton, removeButton, divCard;

function update() {
  for (i; i < myLibrary.length; i++) {
    // card div for display book details
    divCard = document.createElement('div');
    divCard.classList.add('card');
    divCard.setAttribute('data-index', i);
    // toggleButton for read or not read
    toggleButton = document.createElement('button');
    toggleButton.classList.add('toggleStatus');
    toggleButton.setAttribute('id', i);
    // removeButton the data from array
    removeButton = document.createElement('button');
    removeButton.classList.add('remove');
    removeButton.textContent = 'X';
    removeButton.setAttribute('data-index', i);
    for (let j in myLibrary[i]) {
      if (j === 'status') {
        if (myLibrary[i][j] === 'yes') {
          toggleButton.textContent = 'Read';
          toggleButton.style.background = '#6bf250';
        } else {
          toggleButton.textContent = 'Not Read';
          toggleButton.style.background = '#f76d3b';
        }
        divCard.append(toggleButton);
        divCard.append(removeButton);
      } else {
        let p = document.createElement('p');
        p.textContent = `${j}: ${myLibrary[i][j]}`;
        divCard.appendChild(p);
      }
    }

    bookContainer.appendChild(divCard);
  }
  // read status function
  function toggle(b) {
    if (b.textContent === 'Read') {
      b.textContent = 'Not Read';
      b.style.background = '#f76d3b';
    } else {
      b.textContent = 'Read';
      b.style.background = '#6bf250';
    }
  }

  document.querySelectorAll('.toggleStatus').forEach((b) => {
    b.onclick = function () {
      toggle(b);
    };
  });

  // delete function
  function trash(r) {
    document.querySelectorAll('.card').forEach((c) => {
      if (c.dataset.index === r.dataset.index) {
        bookContainer.removeChild(c);
        myLibrary.splice(c.dataset.index, 1);
        i = myLibrary.length;
      }
    });
  }

  document.querySelectorAll('.remove').forEach((r) => {
    r.onclick = function () {
      trash(r);
    };
  });
}



function popup_form() {
  overlay.classList.add('active');
}
function close_popup(){
  overlay.classList.remove('active');
}


submit_btn.addEventListener('click',addBookToLibrary)
popup.addEventListener('click',popup_form);
closeform.addEventListener('click',close_popup);

