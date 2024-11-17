document.addEventListener('DOMContentLoaded', async () => {
    const getJokeButton = document.getElementById('get-joke');
    const jokeElement = document.getElementById('joke');
    const punchlineElement = document.getElementById('joke-punchline');

    // Function to fetch and display a joke
    const fetchAndDisplayJoke = async () => {
        try {
            const response = await fetch('/api/v1/random-joke')
            const { joke, punchline } = await response.json()
            console.log("Joke fetched:", { joke, punchline })

            // Set joke immediately
            jokeElement.textContent = joke
            punchlineElement.textContent = ''
            punchlineElement.style.opacity = 0
            punchlineElement.style.transition = 'none' 

            // Delay and then display punchline with fade-in effect
            setTimeout(() => {
                punchlineElement.textContent = punchline 
                punchlineElement.style.transition = 'opacity 1s ease-in' 
                punchlineElement.style.opacity = 1 
            }, 3000);
        } catch (err) {
            console.error("Error fetching joke:", err) 
        }
    }

    // Fetch and display a joke immediately on page load
    await fetchAndDisplayJoke()

    // Fetch and display a new joke when the button is clicked
    getJokeButton.addEventListener('click', fetchAndDisplayJoke)
});
