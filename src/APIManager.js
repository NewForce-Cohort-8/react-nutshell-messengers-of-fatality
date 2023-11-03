export const getAllArticleEntries = () => {
    return fetch(`  http://localhost:8088/articles`)
    .then(response => response.json())
}