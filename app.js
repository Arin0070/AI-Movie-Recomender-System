// Sample Data for Netflix Clone
const sampleData = [
    {
        id: 1,
        title: 'Stranger Things',
        imageUrl: 'https://via.placeholder.com/200x300.png?text=Stranger+Things',
        category: 'Trending Now'
    },
    {
        id: 2,
        title: 'The Witcher',
        imageUrl: 'https://via.placeholder.com/200x300.png?text=The+Witcher',
        category: 'Trending Now'
    },
    {
        id: 3,
        title: 'Bridgerton',
        imageUrl: 'https://via.placeholder.com/200x300.png?text=Bridgerton',
        category: 'Trending Now'
    },
    {
        id: 4,
        title: 'The Office',
        imageUrl: 'https://via.placeholder.com/200x300.png?text=The+Office',
        category: 'Comedies'
    },
    {
        id: 5,
        title: 'Friends',
        imageUrl: 'https://via.placeholder.com/200x300.png?text=Friends',
        category: 'Comedies'
    },
    {
        id: 6,
        title: 'Extraction 2',
        imageUrl: 'https://via.placeholder.com/200x300.png?text=Extraction+2',
        category: 'Action'
    },
    {
        id: 7,
        title: 'John Wick: Chapter 4',
        imageUrl: 'https://via.placeholder.com/200x300.png?text=John+Wick+4',
        category: 'Action'
    },
    {
        id: 8,
        title: 'Squid Game',
        imageUrl: 'https://via.placeholder.com/200x300.png?text=Squid+Game',
        category: 'Trending Now'
    }
];

// Function to render content rows
function renderContentRows(data) {
    const mainElement = document.querySelector('main');
    if (!mainElement) {
        console.error('Main element not found!');
        return;
    }
    mainElement.innerHTML = ''; // Clear main content before rendering

    const categories = {};
    // Group data by category
    data.forEach(item => {
        if (!categories[item.category]) {
            categories[item.category] = [];
        }
        categories[item.category].push(item);
    });

    // Create and append rows for each category
    for (const category in categories) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'content-row';

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        rowDiv.appendChild(categoryTitle);

        const thumbnailsContainer = document.createElement('div');
        thumbnailsContainer.className = 'thumbnails-container';

        categories[category].forEach(item => {
            const thumbnailDiv = document.createElement('div');
            thumbnailDiv.className = 'thumbnail';
            thumbnailDiv.style.backgroundImage = `url('${item.imageUrl}')`;
            
            // Add title as a span inside the thumbnail
            const titleSpan = document.createElement('span');
            titleSpan.className = 'thumbnail-title'; 
            titleSpan.textContent = item.title;
            thumbnailDiv.appendChild(titleSpan);

            thumbnailsContainer.appendChild(thumbnailDiv);
        });

        rowDiv.appendChild(thumbnailsContainer);
        mainElement.appendChild(rowDiv);
    }
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("app.js loaded, sample data created.");
    // console.log(sampleData); // Optional: keep for debugging
    renderContentRows(sampleData); // Call the function to render content
});
