document.addEventListener('DOMContentLoaded', () => {
  const quotes = [
    {
      text: "Nawet najdłuższa podróż zaczyna się od pierwszego kroku.",
      author: "Laozi"
    },
    {
      text: "Nie idź tam, gdzie prowadzi droga. Idź tam, gdzie nie ma ścieżki i zostaw swój ślad.",
      author: "Ralph Waldo Emerson"
    },
    {
      text: "Twoje życie to twoje dzieło sztuki. Codziennie je rzeźb.",
      author: "Bob Proctor"
    },
    {
      text: "Sekretem szczęścia jest wolność, tajemnicą wolności jest odwaga.",
      author: "Thucydides"
    },
    {
      text: "Dramatem życia jest to, że starzejemy się zbyt szybko, a mądrzejemy zbyt późno.",
      author: "Benjamin Franklin"
    }
  ];

  const index = Math.floor(Math.random() * quotes.length);
  const { text, author } = quotes[index];

  const quoteEl = document.getElementById('quote');
  quoteEl.innerHTML = `"${text}"<br><strong>${author}</strong>`;
});