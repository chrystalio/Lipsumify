const form = document.getElementById('lorem-form');
const amount = document.getElementById('amount');
const result = document.getElementById('lorem-text');

const sentences = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Mauris varius interdum erat id ultrices.',
    'Sed cursus, orci at ultricies cursus, mi quam aliquam sem, sit amet interdum diam lorem eget est.',
    'Vivamus non pellentesque felis.',
    'Sed sit amet massa pharetra, egestas ipsum a, auctor lacus.',
    'Aenean non diam orci.',
    'Fusce consequat arcu et nisi lobortis, ac lacinia augue ullamcorper.',
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    'Nulla facilisi. Nullam efficitur interdum diam, vitae aliquam tortor posuere non.',
    'Cras eget urna sed metus maximus ultrices id et magna.',
    'Donec eget sapien non quam rhoncus ultricies id a ligula.',
    'Curabitur ac libero ac sapien consequat aliquet.',
    'Phasellus nec ipsum ut justo tincidunt lacinia vitae nec justo.',
];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateParagraph() {
    const numSentences = Math.floor(Math.random() * 8) + 3; // Random number of sentences between 3 and 10
    const paragraphSentences = Array.from({ length: numSentences }, () => getRandomElement(sentences));
    return paragraphSentences.join(' ');
}

function generateLoremIpsum(numParagraphs) {
    const loremParagraphs = Array.from({ length: numParagraphs }, () => generateParagraph());
    return loremParagraphs.map(paragraph => `<p>${paragraph}</p>`).join('');
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const value = parseInt(amount.value);
    const paragraphs = isNaN(value) || value < 1 ? 1 : Math.min(value, 10);

    result.innerHTML = generateLoremIpsum(paragraphs);
});
