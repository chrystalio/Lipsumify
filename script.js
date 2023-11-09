const form = document.getElementById('lorem-form');
const amount = document.getElementById('amount');
const result = document.getElementById('lorem-text');

const sentences = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Mauris varius interdum erat id ultrices.',
    'Sed cursus, orci at ultricies cursus, mi quam aliquam sem, sit amet interdum diam lorem eget est.',
    'Vivamus non pellentesque felis.',
    'Sed sit amet massa pharetra, egestas ipsum a, auctor lacus.',
    'Aenean non diam orci.'
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
