// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example function to add new posts dynamically
function addPost(title, date, description) {
    const postList = document.querySelector('.post-list');
    const article = document.createElement('article');
    article.className = 'post';
    
    article.innerHTML = `
        <h3><a href="#${title.toLowerCase().replace(/\s+/g, '-')}">${title}</a></h3>
        <time>${date}</time>
        <p>${description}</p>
    `;
    
    postList.insertBefore(article, postList.firstChild);
}