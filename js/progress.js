/**
 * ChemPortal - Progress Tracking
 * Uses localStorage to persist user progress
 */

const STORAGE_KEY = 'chemportal_progress';

// Default progress structure
const DEFAULT_PROGRESS = {
    chapters: {},      // { "01-02": true, "03-04": false, ... }
    exercises: {},     // { "lez05-lewis-O3": "done", "lez10-pila": "review", ... }
    exams: {},         // { "5-1": true, ... }
    lastVisited: null  // Last visited chapter/exercise
};

// Get progress from localStorage
function getProgress() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : { ...DEFAULT_PROGRESS };
    } catch (e) {
        console.error('Error reading progress:', e);
        return { ...DEFAULT_PROGRESS };
    }
}

// Save progress to localStorage
function saveProgress(progress) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
        console.error('Error saving progress:', e);
    }
}

// Mark chapter as completed
function markChapterComplete(chapterId, completed = true) {
    const progress = getProgress();
    if (!progress.chapters) progress.chapters = {};
    progress.chapters[chapterId] = completed;
    saveProgress(progress);
    updateProgressDisplay();
}

// Mark exercise status: 'done', 'review', or null (remove)
function markExercise(exerciseId, status) {
    const progress = getProgress();
    if (!progress.exercises) progress.exercises = {};

    if (status === null) {
        delete progress.exercises[exerciseId];
    } else {
        progress.exercises[exerciseId] = status;
    }
    saveProgress(progress);
    updateProgressDisplay();
}

// Mark exam as completed
function markExamComplete(examId, completed = true) {
    const progress = getProgress();
    if (!progress.exams) progress.exams = {};
    progress.exams[examId] = completed;
    saveProgress(progress);
    updateProgressDisplay();
}

// Set last visited
function setLastVisited(type, id) {
    const progress = getProgress();
    progress.lastVisited = { type, id, timestamp: Date.now() };
    saveProgress(progress);
}

// Calculate progress stats
function getProgressStats() {
    const progress = getProgress();

    const chaptersCompleted = Object.values(progress.chapters || {}).filter(v => v).length;
    const totalChapters = 7;

    const exercisesDone = Object.values(progress.exercises || {}).filter(v => v === 'done').length;
    const exercisesReview = Object.values(progress.exercises || {}).filter(v => v === 'review').length;
    const totalExercises = 88;

    const examsCompleted = Object.values(progress.exams || {}).filter(v => v).length;
    const totalExams = 7;

    return {
        chapters: { completed: chaptersCompleted, total: totalChapters },
        exercises: { done: exercisesDone, review: exercisesReview, total: totalExercises },
        exams: { completed: examsCompleted, total: totalExams }
    };
}

// Update progress display on page
function updateProgressDisplay() {
    const stats = getProgressStats();

    // Update chapters progress
    const chaptersProgress = document.getElementById('chaptersProgress');
    const chaptersBar = document.getElementById('chaptersBar');
    if (chaptersProgress) {
        chaptersProgress.textContent = `${stats.chapters.completed}/${stats.chapters.total}`;
    }
    if (chaptersBar) {
        const pct = (stats.chapters.completed / stats.chapters.total) * 100;
        chaptersBar.style.width = `${pct}%`;
    }

    // Update exercises progress
    const exercisesProgress = document.getElementById('exercisesProgress');
    const exercisesBar = document.getElementById('exercisesBar');
    if (exercisesProgress) {
        exercisesProgress.textContent = `${stats.exercises.done}/${stats.exercises.total}`;
    }
    if (exercisesBar) {
        const pct = (stats.exercises.done / stats.exercises.total) * 100;
        exercisesBar.style.width = `${pct}%`;
    }

    // Update exams progress
    const examsProgress = document.getElementById('examsProgress');
    const examsBar = document.getElementById('examsBar');
    if (examsProgress) {
        examsProgress.textContent = `${stats.exams.completed}/${stats.exams.total}`;
    }
    if (examsBar) {
        const pct = (stats.exams.completed / stats.exams.total) * 100;
        examsBar.style.width = `${pct}%`;
    }
}

// Reset all progress
function resetProgress() {
    if (confirm('Sei sicuro di voler azzerare tutto il progresso?')) {
        localStorage.removeItem(STORAGE_KEY);
        updateProgressDisplay();
        location.reload();
    }
}

// Export functions
window.Progress = {
    get: getProgress,
    save: saveProgress,
    markChapter: markChapterComplete,
    markExercise,
    markExam: markExamComplete,
    setLastVisited,
    getStats: getProgressStats,
    updateDisplay: updateProgressDisplay,
    reset: resetProgress
};
