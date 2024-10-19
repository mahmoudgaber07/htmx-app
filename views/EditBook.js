const CreateEditBookTemplate = (book) => {
    return /* html */ `
   <form hx-put="/books/${book.id}" hx-target="closest li" hx-swap="outerHTML">
       <input type="text" name="title" value="${book.title}" required placeholder="Title" />
       <input type="text" name="author" value="${book.author}" required placeholder="Author" />
       <button type="submit">Edit</button>
   </form>
    `
}

export default CreateEditBookTemplate