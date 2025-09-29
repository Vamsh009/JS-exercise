// You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

function saveNoteToLocalStorage(note) {
    // Convert the note object to a JSON string
    const noteString = JSON.stringify(note);
    // Save the JSON string to local storage with a key
    localStorage.setItem('note', noteString);
}
// Example usage:
const myNote = {
    title: "Meeting Notes",
    content: "Discuss project timeline and milestones.",
    date: "29-09-2025"
};