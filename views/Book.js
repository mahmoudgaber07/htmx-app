const CreateBookTemplate = (book) => {
    return /* html */ `
    <li id="${book.id}">
        <div class="details" hx-get="/books/edit/${book.id}" hx-target="closest li">
            ${book.title} - ${book.author}
        </div>
        <button hx-delete="/books/${book.id}" hx-target="closest li" hx-swap="outerHTML">Delete</button>
    </li>
    `
}

export default CreateBookTemplate