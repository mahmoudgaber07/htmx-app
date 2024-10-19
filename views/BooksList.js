import CreateBookTemplate  from './Book.js';
const CreateBookListTemplate = (books) => {
    return /* html */ `
    <ul>
        ${books.map((book) => /* html */ `
            ${CreateBookTemplate(book)}
        `).join('')}
    </ul>
    `
}

export default CreateBookListTemplate