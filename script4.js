/* Get elements */

let bookInput = document.getElementById("book-title")

let bookAuthor = document.getElementById("book-author")

let bookList = document.getElementById("book-list")

let addBookForm = document.getElementById("add-book-form")

let invalidMsgBox = document.getElementById("invalid-msg-box")

let invalidMsg = document.getElementById("invalid-msg")


/* Create element with delete and completed buttons */

function createAndAppendListItem() {
    if (bookInput.value != "" && bookAuthor.value != "") {
        
        /*Clear invalid msg if any */

        invalidMsg.innerText = ""
        invalidMsg.className = ""
        

        /* Create li item */
        let listItem = document.createElement("li")
        
        
        /*Create to deleteBtn */

        let deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        deleteBtn.id = "delete-btn"

        
        /*Create completedBtn */

        let completedBtn = document.createElement("button")
        completedBtn.textContent = "Completed"
        completedBtn.id = "completed-btn"
        
        /* Save reference to initial bookinputvalue and bookauthor value*/

        let title = bookInput.value

        let author = bookAuthor.value

        /* Set text content of li item*/
        listItem.innerText = 
        `${title} by ${author}`

        /* Add Event listeners to delete and completed Btn */

        completedBtn.addEventListener("click", function() {
            listItem.innerHTML = `<strike>${title} by ${author}</strike>`
            listItem.appendChild(deleteBtn)
            listItem.appendChild(completedBtn)            

        })

        completedBtn.addEventListener("dblclick", function() {
            listItem.innerHTML = `${title} by ${author}`
            listItem.appendChild(deleteBtn)
            listItem.appendChild(completedBtn)            

        })

        deleteBtn.addEventListener("click", function() {
            listItem.remove()

        })
            

        /*Append btns to li item and append li item to book list */
        listItem.appendChild(deleteBtn)
        listItem.appendChild(completedBtn)
        bookList.appendChild(listItem)  
        

        
    } else {
        
        invalidMsg.innerText = "Please provide a book title and author before adding them to the list"
        invalidMsg.className = "invalid-msg"

    }
    
}


/* Listener for submit event in form */

addBookForm.addEventListener("submit", function(e) {
    e.preventDefault()
    createAndAppendListItem()
    bookInput.value = ""
    bookAuthor.value = ""
})



