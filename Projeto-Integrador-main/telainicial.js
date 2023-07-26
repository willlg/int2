const searchInput = document.querySelector('.search-bar input[type="text"]');
const containers = document.querySelectorAll('.container');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  containers.forEach(container => {
    const containerText = container.textContent.toLowerCase();
    if (containerText.includes(searchTerm)) {
      container.style.display = 'flex';
    } else {
      container.style.display = 'none';
    }
  });
});