// debugger;
//A. Console log the content of the list items in seperate lines.
// console.log("---exercise 1---");
// let listItems = document.querySelectorAll('li');
// for (let item of listItems){
//     console.log(item.innerHTML);
// }

// // B. Console log the first word of the second paragraph.
// console.log("---exercise 2---");
// let paragraphs = document.querySelectorAll('p');
// let secondParagraph = paragraphs[1];
// let secondParagraphText = secondParagraph.innerText;
// let firstWordOfSecondParagraphText = secondParagraphText.split(' ')[0];
// console.log(firstWordOfSecondParagraphText);

// // C. Console log the number of paragraphs on the website.
// console.log("---exercise 3---");
// console.log(paragraphs.length);

// Console log the second and the fourth list itewm inside the second serction only.
// A. You're allowed to use the class .js-second-section.
console.log("---exercise 4---");
const selectedListItemsA = document.querySelectorAll(
        '.js-second-section > .js-item-list > li:nth-child(2n) '
    );
for (let item of selectedListItemsA){
    console.log(item.innerText);
}

// B. Yopu're not allowed to use the class .js-second-section, but you're allowed to use .js-second-section-title.
console.log("---exercise 5---");
const selectedListItemsB = document.querySelectorAll(
    ".js-second-section-title ~ .js-item-list > li:nth-child(2n)" 
);
for (let item of selectedListItemsA){
    console.log(item.innerText);
}