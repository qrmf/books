/**
 * Copyright 2021 Alexander McDonald
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Imports
const dialog = new mdc.dialog.MDCDialog(document.querySelector('.mdc-dialog'));

// Functions
const createBookListItem = (bookObject) => {
  const booklist = document.getElementById('booklist');
  const listItem = document.createElement('li');
  const rippleSpan = document.createElement('span');
  const textSpan = document.createElement('span');
  const primaryTextSpan = document.createElement('span');
  const secondaryTextSpan = document.createElement('span');

  //@debug
  console.info(`DEBUG: Creating and populating a book entry for book ID: ${bookObject.id}`);

  // Root LI Element
  listItem.classList = 'mdc-list-item';
  listItem.tabIndex = 0;

  // Ripple Span Element
  rippleSpan.classList = 'mdc-list-item__ripple';

  // Text Span Element
  textSpan.classList = 'mdc-list-item__text';

  // Primary Text Span Element
  primaryTextSpan.classList = 'mdc-list-item__primary-text';
  primaryTextSpan.innerText = bookObject.title;

  // Secondary Text Span Element
  secondaryTextSpan.classList = 'mdc-list-item__secondary-text';
  secondaryTextSpan.innerText = `by ${bookObject.author}${bookObject.platform ? ` on ${bookObject.platform}` : ''}${bookObject.fandom ? ` in ${bookObject.fandom}` : ''}`;

  // Create Hierarchy
  //@debug
  console.info(`DEBUG: Creating element hierarchy for book ID: ${bookObject.id}`);

  textSpan.appendChild(primaryTextSpan);
  textSpan.appendChild(secondaryTextSpan);

  listItem.appendChild(rippleSpan);
  listItem.appendChild(textSpan);

  //@debug
  console.info(`DEBUG: Adding book ID: ${bookObject.id} to booklist`);

  booklist.appendChild(listItem);

  // Event handlers
  listItem.onclick = () => {
    // Manipulate Dialog content
    dialog.content.innerText = bookObject.blurb;

    // Edit Click events for Dialog buttons
    dialog.buttons[0].onclick = () => {
      //@debug
      console.info(`DEBUG: Opening book ID: ${bookObject.id} (${bookObject.link})`);
      location.assign(bookObject.link);
    }

    // Open Dialog
    //@debug
    console.info(`DEBUG: Open dialog for book ID: ${bookObject.id}`);
    dialog.open();
  }
}

// Function Calls
let _books = [...window.books].reverse();

_books.forEach(book => createBookListItem(book));
