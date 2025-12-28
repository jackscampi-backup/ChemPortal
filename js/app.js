/**
 * ChemPortal - Main Application JavaScript
 * I dati sono in data.js (CHAPTERS_DATA, EXERCISES_DATA, EXAMS_DATA)
 */

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    loadChaptersList();
    updateProgressDisplay();
});

// Mobile menu toggle
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Load chapters list on homepage
function loadChaptersList() {
    const container = document.getElementById('chaptersList');
    if (!container) return;

    const data = CHAPTERS_DATA;

    container.innerHTML = data.chapters.map(chapter => `
        <a href="manuale.html?cap=${chapter.id}"
           class="chapter-nav-item flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all">
            <div class="flex items-center">
                <span class="text-2xl mr-4">${chapter.icon}</span>
                <div>
                    <h4 class="font-semibold text-gray-800">${chapter.title}</h4>
                    <p class="text-sm text-gray-500">${chapter.description}</p>
                </div>
            </div>
            <div class="flex items-center space-x-3">
                <span class="text-sm text-gray-400">${chapter.exerciseCount} esercizi</span>
                <span id="chapter-status-${chapter.id}" class="badge badge-pending">Da fare</span>
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
            </div>
        </a>
    `).join('');

    // Update chapter statuses from localStorage
    updateChapterStatuses();
}

// Update chapter status badges
function updateChapterStatuses() {
    const progress = getProgress();

    Object.keys(progress.chapters || {}).forEach(chapterId => {
        const statusEl = document.getElementById(`chapter-status-${chapterId}`);
        if (statusEl) {
            if (progress.chapters[chapterId]) {
                statusEl.className = 'badge badge-done';
                statusEl.textContent = 'Completato';
            }
        }
    });
}

// Utility: Get URL parameters
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Utility: Format topic tags
function formatTags(tags) {
    return tags.map(tag =>
        `<span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">${tag}</span>`
    ).join(' ');
}

// Utility: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Utility: Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg text-white z-50 fade-in ${
        type === 'success' ? 'bg-green-500' :
        type === 'error' ? 'bg-red-500' :
        'bg-blue-500'
    }`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Export for use in other modules
window.ChemPortal = {
    getUrlParam,
    formatTags,
    debounce,
    showNotification,
    loadChaptersList,
    updateChapterStatuses,
    CHAPTERS_DATA
};
