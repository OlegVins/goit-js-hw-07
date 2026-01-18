const listCategories = document.querySelectorAll('li.item');

console.log(`Number of categories: ${listCategories.length}`);

listCategories.forEach((category) => {
    const title = category.querySelector('h2').textContent;
    const items = category.querySelectorAll('ul li');

    console.log(`Category: ${title}`);
    console.log(`Elements: ${items.length}`);
});

