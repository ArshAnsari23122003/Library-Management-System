# Library-Management-System
Library Management System
A simple, interactive Library Management System built with HTML, CSS, and JavaScript. This system allows users to add books by providing a title, author, and capturing a photo using their device's camera.

Features
Add books to the library by entering details (title, author) and capturing a photo.
Display the list of books with their title, author, and photo in a table.
Delete books from the library.
Responsive design for desktop and mobile devices.
Technologies Used
HTML: For structuring the web page.
CSS: For styling and making the interface visually appealing.
JavaScript: For handling the functionality, including adding, deleting books, and accessing the device camera.
Getting Started
Follow these steps to get the project running on your local machine:

Prerequisites
A modern web browser with camera support (e.g., Chrome, Firefox, Edge).
A device with a camera (e.g., laptop with a webcam, smartphone).

Usage
Open the Library Management System in your browser.
Fill in the book details:
Enter the Book Title.
Enter the Author.
Click the "Add Book" button:
The camera will open in a modal.
Capture a photo of the book.
The book will be added to the list with its title, author, and captured photo.
To delete a book, click the "Delete" button in the table.

Known Issues
Requires user permission to access the camera. If denied, the functionality won't work.
Some older browsers may not support the getUserMedia API.
Base64 images can increase memory usage if too many books are added.

Future Improvements
Add local storage or database integration to persist book data.
Add functionality to edit book details.
Implement better error handling for camera access issues.
Allow users to upload photos instead of capturing them.

License
This project is licensed under the MIT License.

