const CreateHomepageTemplate = () => {
    return /* html */ `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTMX</title>
        <link rel="stylesheet" href="../styles.css"/>
    </head>
    <body>
    <main>
        <div class="container">
        <div class="search" style="text-align: center;">
            <input 
                type="search"
                name="search"
                placeholder="Search books by title..."
                hx-post="/books/search"
                hx-trigger="keyup changed delay:300ms"
                hx-target=".book-list"
            />
        </div> 
            <div class="book-list">
                <button hx-get="/books" hx-swap="innerhtml" hx-target=".book-list" hx-trigger="click">Show List</button>
            </div>
            <div class="add-book-form">
                <h2>Add New Book</h2>
                <form hx-post="/books" hx-swap="beforeend" hx-target=".book-list ul" hx-on:htmx:after-request="document.querySelector('form').reset()">
                    <input type="text" name="title" placeholder="Title" required />
                    <input type="text" name="author" placeholder="Author" required />
                    <button type="submit" >Add Book</button>
                </form>
            </div>
        </div>
    </main>
        <script src="https://unpkg.com/htmx.org@2.0.3"></script>
        <!-- <script src="https://cdn.tailwindcss.com"></script> -->
    </body>
</html>
    `
}

export default CreateHomepageTemplate