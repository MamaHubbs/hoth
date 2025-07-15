// shared.js

/**
 * Extracts a specific query parameter from the current URL.
 * @param {string} name The name of the query parameter to extract.
 * @returns {string|null} The value of the parameter, or null if not found.
 */
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

/**
 * Constructs the full raw GitHub URL for a JSON file based on its filename.
 * IMPORTANT: Replace YOUR_USERNAME, YOUR_REPO, and YOUR_BRANCH with your actual GitHub details.
 * @param {string} fileName The name of the JSON file (e.g., '20250629pohick.json').
 * @returns {string} The full raw URL to the JSON file.
 */
function getCampgroundJsonUrl(fileName) {
    // Assuming JSON files are in a 'campgrounds' folder
    // And your repo is YOUR_REPO under YOUR_USERNAME, on YOUR_BRANCH (e.g., 'main')
    const username = 'mamahubbs'; // <<< Replace this
    const repo = 'hoth';         // <<< Replace this
    const branch = 'main';     // <<< Replace this (commonly 'main' or 'master')
    return `https://raw.githubusercontent.com/${username}/${repo}/${branch}/campgrounds/${fileName}.json`;
}
