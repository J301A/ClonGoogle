function redirectToGoogle(event) {
    event.preventDefault();
    const query = document.getElementById("searchInput").value;
    if (query.trim()) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
  }
  
  function redirectToDoodles() {
    window.location.href = "https://doodles.google/";
  }
  