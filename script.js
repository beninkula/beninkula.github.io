//index.html

function game() {
        // The list of words that the player can guess
        const words = ["driving", "cars", "theory", "practice", "test", "school", "driver ed"];

        // Choose a random word from the list
        const word = words[Math.floor(Math.random() * words.length)];

        // Create an array of underscores the same length as the word
        const answerArray = new Array(word.length);
        for (let i = 0; i < answerArray.length; i++) {
            answerArray[i] = '_';
        }

        let remainingLetters = word.length;

        // The main game loop
        while (remainingLetters > 0) {
            // Show the player their progress
            alert(answerArray.join(' '));

            // Get a guess from the player
            const guess = prompt('Guess a letter, or click Cancel to stop playing.');
            if (guess === null) {
                break;
            } else if (guess.length !== 1) {
                alert('Please enter a single letter.');
            } else {
                // Update the game with the guess
                for (let j = 0; j < word.length; j++) {
                    if (word[j] === guess) {
                        answerArray[j] = guess;
                        remainingLetters--;
                    }
                }
            }
        }

        // Show the final answer and congratulate the player
        alert(answerArray.join(' '));
        alert('Good job! The answer was ' + word);

}

//contact.html

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Validate form fields
  let isValid = true;

  // Name validation
  if (name === '') {
    isValid = false;
    document.getElementById('nameError').innerText = 'Name is required';
  } else {
    document.getElementById('nameError').innerText = '';
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    isValid = false;
    document.getElementById('emailError').innerText = 'Invalid email address';
  } else {
    document.getElementById('emailError').innerText = '';
  }

  // Phone validation
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phone)) {
    isValid = false;
    document.getElementById('phoneError').innerText = 'Invalid phone number';
  } else {
    document.getElementById('phoneError').innerText = '';
  }

  // Subject validation
  if (subject === '') {
    isValid = false;
    document.getElementById('subjectError').innerText = 'Subject is required';
  } else {
    document.getElementById('subjectError').innerText = '';
  }

  // Message validation
  if (message === '') {
    isValid = false;
    document.getElementById('messageError').innerText = 'Message is required';
  } else {
    document.getElementById('messageError').innerText = '';
  }

  // If form is valid, display success message
  if (isValid) {
    alert('Form submitted successfully!');
    // Reset form
    document.getElementById('contactForm').reset();
  }
});
