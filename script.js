//your JS code here. If required.
const titleInp=document.getElementById("title");
const authorInp=document.getElementById("author");
const isbnInp=document.getElementById("isbn");
const btnSubmit=document.getElementById("submit");
const bookList=document.getElementById("book-list");

btnSubmit.addEventListener("click",function(e){
	e.preventDefault();
	const title=titleInp.value.trim();
	const author=authorInp.value.trim();
	const isbn=isbnInp.value.trim();
	if(!title||!author||!isbn){
	prompt("Enter All Field");
		return;
		}
const row=document.createElement('tr');
row.innerHTML=`
		<td>${title}</td>
		<td>${author}</td>
		<td>${isbn}</td>
		<td><button class="delete">X</button></td>
`;
bookList.appendChild(row);
	titleInp.value="";
	authorInp.value="";
	isbnInp.value="";
});
 bookList.addEventListener('click', function (e) {
      if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove(); // Remove the row
      }
    });