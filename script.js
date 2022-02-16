let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}
function popup_form() {
  overlay.classList.add('active');
}
function close_popup(){
  overlay.classList.remove('active');
}
const popup = document.getElementById('popup_btn');
const overlay = document.querySelector('.box');
const closeform = document.getElementById('close_form');
popup.addEventListener('click',popup_form);
closeform.addEventListener('click',close_popup);



/*    
const ddinfo = document.getElementById('Dinfo');
const finfo = document.getElementById('forminfo');
let mylibrary = [];

addBookTolibrary();

function Book(title,authtor,no_of_pages,status) {
this.title = title
this.author = authtor
this.no_of_pages = no_of_pages
this.status = status    
}


function addBookTolibrary(){
  //const newbook = new Book('onepiece','oda',1040,'yes')
  //const newbook1 = new Book('onepiece1','oda1',10401,'yes')

  mylibrary.push(newbook);
  mylibrary.push(newbook1);

  console.log(mylibrary);
}

addinfo();

function addinfo(){
    for (index = 0; index < mylibrary.length; index++) {
        ddinfo.textContent = mylibrary[index].title;
        console.log(mylibrary[index]);
    }
}

function getVal() {
  const val = document. querySelector('input'). value;
  console.log(val);}

//const newbook = new Book('onepiece','oda',1040,'yes')
function openForm() {
  document.getElementById('formContainer').style.display = "block";
  getVal()

}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";

}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target.className === "loginPopup") {
    event.target.style.display = "none";
  }
}
 
    */
