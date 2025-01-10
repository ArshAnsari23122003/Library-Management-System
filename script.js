// Book class
class Book {
  constructor(title, author, photo) {
    this.title = title;
    this.author = author;
    this.photo = photo;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    this.displayBooks();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.displayBooks();
  }

  displayBooks() {
    const booksList = document.getElementById('booksList');
    booksList.innerHTML = '';

    this.books.forEach((book, index) => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${index + 1}</td>
        <td><img src="${book.photo}" alt="Book Photo" /></td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td class="actions">
          <button class="delete" onclick="library.removeBook(${index})">Delete</button>
        </td>
      `;

      booksList.appendChild(row);
    });
  }
}

// Initialize Library
const library = new Library();

// Camera Functionality
const cameraModal = document.getElementById('cameraModal');
const cameraStream = document.getElementById('cameraStream');
const captureBtn = document.getElementById('captureBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

let videoStream = null;
let capturedImage = null;

document.getElementById('addBookBtn').addEventListener('click', async () => {
  const title = document.getElementById('bookTitle').value.trim();
  const author = document.getElementById('bookAuthor').value.trim();

  if (!title || !author) {
    alert('Please fill out the title and author fields.');
    return;
  }

  // Open the camera modal
  cameraModal.style.display = 'flex';

  try {
    videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
    cameraStream.srcObject = videoStream;
  } catch (error) {
    alert('Unable to access camera.');
    console.error(error);
  }
});

// Capture Button
captureBtn.addEventListener('click', () => {
  const canvas = document.createElement('canvas');
  canvas.width = cameraStream.videoWidth;
  canvas.height = cameraStream.videoHeight;

  const context = canvas.getContext('2d');
  context.drawImage(cameraStream, 0, 0, canvas.width, canvas.height);

  capturedImage = canvas.toDataURL('image/png');

  // Add book to the library
  const title = document.getElementById('bookTitle').value.trim();
  const author = document.getElementById('bookAuthor').value.trim();
  const book = new Book(title, author, capturedImage);

  library.addBook(book);

  // Close the camera modal
  closeCameraModal();
});

// Close Modal
closeModalBtn.addEventListener('click', closeCameraModal);

function closeCameraModal() {
  cameraModal.style.display = 'none';
  if (videoStream) {
    const tracks = videoStream.getTracks();
    tracks.forEach(track => track.stop());
  }
  cameraStream.srcObject = null;
}
