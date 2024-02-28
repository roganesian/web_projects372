
function changeImageOpacity() {
    const images = document.querySelectorAll('img');
    images.forEach((image) => {
        image.style.opacity = 0.5;
    });
}

function loadXMLData(index) {
    var xhr = new XMLHttpRequest();
    var detailsDiv = document.getElementById('details');
    detailsDiv.innerHTML = '';

    xhr.onload = function() {
        if (xhr.status === 200) {
            const xml = xhr.responseXML;
            const books = xml.getElementsByTagName('book');
            const selectedBook = books[index];

            const title = selectedBook.getElementsByTagName('title')[0].textContent;
            const author = selectedBook.getElementsByTagName('author')[0].textContent;
            const sold = selectedBook.getElementsByTagName('sold')[0].textContent;
            const description = selectedBook.getElementsByTagName('description')[0].textContent;

            const bookDetails = document.createElement('div');
            bookDetails.innerHTML = `
                <h2>${title}</h2>
                <p><strong>Author:</strong> ${author}</p>
                <p><strong>Sold:</strong> ${sold}</p>
                <p><strong>Description:</strong> ${description}</p>
            `;

            detailsDiv.appendChild(bookDetails);
        }
    };

    xhr.open('GET', 'data/book-data.xml', true);
    xhr.send();
}

const donQuixoteImage = document.getElementById('don-quixote-img');
donQuixoteImage.addEventListener('click', function() {
    loadXMLData(0);
    changeImageOpacity();
    donQuixoteImage.style.opacity = '1';
});

const taleOfTwoCitiesImage = document.getElementById('two-cities-img');
taleOfTwoCitiesImage.addEventListener('click', function() {
    loadXMLData(1);
    changeImageOpacity();
    taleOfTwoCitiesImage.style.opacity = '1';
});

const lordOfTheRingsImage = document.getElementById('lotr-img');
lordOfTheRingsImage.addEventListener('click', function() {
    loadXMLData(2);
    changeImageOpacity();
    lordOfTheRingsImage.style.opacity = '1';
});
