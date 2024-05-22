// Global variables
const logInContainer = document.querySelector('.login-container');
const logInForm = document.querySelector('.login-form-container');
const errorMessage = document.querySelector('.error-message');

const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

const timelineContainer = document.querySelector('.timeline-container');
const timeline = document.querySelector('#timeline');

// Data bases
const usersDatabase = [
    { username: 'john_doe', password: 'password123' },
    { username: 'jane_smith', password: '123password' },
    { username: 'michael_brown', password: 'mikepass' },
    { username: 'sarah_jones', password: 'sarah2021' },
    { username: 'david_clark', password: 'davidpass' },
    { username: 'emma_martin', password: 'emma1234' },
    { username: 'chris_lee', password: 'chrislee2021' },
    { username: 'olivia_white', password: 'olivia123' },
    { username: 'liam_harris', password: 'liam2021' },
    { username: 'ava_thompson', password: 'ava_thompson' },
    { username: 'noah_rodriguez', password: 'noah_5678' },
    { username: 'isabella_green', password: 'isabella_pass' },
    { username: 'logan_moore', password: 'logan_4321' },
    { username: 'mia_wilson', password: 'mia_wilson1' },
    { username: 'lucas_taylor', password: 'lucaspassword' },
    { username: 'charlotte_anderson', password: 'charlotte123' },
    { username: 'ethan_thomas', password: 'ethan2021' },
    { username: 'amelia_jackson', password: 'amelia_pass' },
    { username: 'james_white', password: 'jamespass' },
    { username: 'harper_lee', password: 'harper2021' }
];

const usersTimeline = [
    { username: 'john_doe', content: 'Just had a great day!' },
    { username: 'jane_smith', content: 'Loving this new social media platform!' },
    { username: 'michael_brown', content: 'Check out my new blog post!' },
    { username: 'sarah_jones', content: 'Anyone up for a hike this weekend?' }

];

// Function to show timeline
function showTimeline() {
    timeline.innerHTML = '';

    usersTimeline.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.username}</h3>
            <p>${post.content}</p>
        `;
        timeline.appendChild(postElement);;
    })
}

// Listen to the event
logInForm.addEventListener('submit', logIn);

// Log in function
function logIn(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values entered by the user
    const usernameInputValue = usernameInput.value;
    const passwordInputValue = passwordInput.value;

    // Validate user
    const user = usersDatabase.find(user => user.username === usernameInputValue && user.password === passwordInputValue);
    
    // Show welcome message and timeline or error message
    if (user) {
        errorMessage.textContent = '';
        alert('Login successful. Welcome to Bondly!');

        logInContainer.classList.add('inactive');

        timelineContainer.classList.remove('inactive');

        showTimeline();
    } else {
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    };
};
