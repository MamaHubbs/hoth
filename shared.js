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
 * It intelligently determines the correct subdirectory based on the filename.
 *
 * @param {string} fileName The base name of the JSON file (e.g., 'campground_index', 'showerhead', '20250629pohick'). Do NOT include '.json' extension.
 * @returns {string} The full raw URL to the JSON file.
 */
function getCampgroundJsonUrl(fileName) { // Renamed from getProductJsonUrl/getCampgroundJsonUrl earlier to be more generic for shared usage
    const username = 'MamaHubbs';
    const repo = 'hoth';
    const branch = 'main'; // Your default branch (e.g., 'main' or 'master')

    let subdirectory = ''; // Default to no subdirectory

    // Logic to determine the subdirectory
    if (fileName === 'campground_index' || fileName.startsWith('20') || fileName.startsWith('pohick-bay')) {
        // Assume all campground-related JSONs are in 'campgrounds/'
        // '20' prefix is for old filenames like 20250629pohick.json
        // 'pohick-bay' prefix is for ID-based filenames like pohick-bay-regional-park-06-2025.json
        subdirectory = 'campgrounds/';
    } else if (fileName === 'product_index' || fileName === 'showerhead' || fileName.startsWith('high-pressure') || fileName.startsWith('rv-leveling')) {
        // Assume all product-related JSONs are in 'products/'
        subdirectory = 'products/';
    }
    // You might need to refine this logic (e.g., use a more explicit mapping if filenames are very varied)
    // For now, this approach intelligently guesses based on known patterns.

    return `https://raw.githubusercontent.com/${username}/${repo}/${branch}/${subdirectory}${fileName}.json`;
}
