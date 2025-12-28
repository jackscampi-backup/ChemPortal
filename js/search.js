/**
 * ChemPortal - Global Search
 */

function initGlobalSearch() {
    const searchInput = document.getElementById('globalSearch');
    const searchResults = document.getElementById('searchResults');

    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', debounceSearch(handleSearch, 300));
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.length >= 2) {
            searchResults.classList.remove('hidden');
        }
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.add('hidden');
        }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchResults.classList.add('hidden');
        }
    });
}

function debounceSearch(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function handleSearch() {
    const searchInput = document.getElementById('globalSearch');
    const searchResults = document.getElementById('searchResults');
    const query = searchInput.value.toLowerCase().trim();

    if (query.length < 2) {
        searchResults.classList.add('hidden');
        return;
    }

    const results = [];

    // Search in chapters
    if (typeof CHAPTERS_DATA !== 'undefined') {
        CHAPTERS_DATA.chapters.forEach(chapter => {
            const matches = chapter.title.toLowerCase().includes(query) ||
                           chapter.description.toLowerCase().includes(query) ||
                           chapter.topics.some(t => t.toLowerCase().includes(query));
            if (matches) {
                results.push({
                    type: 'chapter',
                    icon: chapter.icon,
                    title: chapter.title,
                    subtitle: chapter.description,
                    url: `manuale.html?cap=${chapter.id}`
                });
            }
        });
    }

    // Search in exercises
    if (typeof EXERCISES_DATA !== 'undefined') {
        EXERCISES_DATA.categories.forEach(category => {
            category.exercises.forEach(exercise => {
                const matches = exercise.title.toLowerCase().includes(query) ||
                               exercise.tags.some(t => t.toLowerCase().includes(query));
                if (matches) {
                    results.push({
                        type: 'exercise',
                        icon: category.icon,
                        title: exercise.title,
                        subtitle: category.title,
                        url: `esercizi.html?cat=${category.id}`
                    });
                }
            });
        });
    }

    renderSearchResults(results, query);
}

function renderSearchResults(results, query) {
    const searchResults = document.getElementById('searchResults');

    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="p-4 text-gray-500 text-center">
                Nessun risultato per "${query}"
            </div>
        `;
    } else {
        searchResults.innerHTML = results.slice(0, 10).map(r => `
            <a href="${r.url}" class="flex items-center p-3 hover:bg-gray-100 border-b last:border-b-0">
                <span class="text-2xl mr-3">${r.icon}</span>
                <div>
                    <p class="font-medium text-gray-800">${highlightMatch(r.title, query)}</p>
                    <p class="text-sm text-gray-500">${r.type === 'chapter' ? 'Capitolo' : 'Esercizio'} - ${r.subtitle}</p>
                </div>
            </a>
        `).join('');
    }
    searchResults.classList.remove('hidden');
}

function highlightMatch(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initGlobalSearch);
