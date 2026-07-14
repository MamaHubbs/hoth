// shared.js

const DATA_BASE_URL =
    "https://raw.githubusercontent.com/MamaHubbs/hoth/main";

/**
 * Extracts a query parameter from the current URL.
 *
 * @param {string} name
 * @returns {string|null}
 */
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

/**
 * Builds a JSON URL for a specific data folder.
 *
 * @param {string} folder
 * @param {string} fileName Base filename without .json
 * @returns {string}
 */
function getJsonUrl(folder, fileName) {
    const cleanFolder = String(folder).replace(/^\/|\/$/g, "");
    const cleanFileName = String(fileName).replace(/\.json$/i, "");

    return `${DATA_BASE_URL}/${cleanFolder}/${cleanFileName}.json`;
}

/**
 * Returns a campground JSON URL.
 *
 * @param {string} fileName
 * @returns {string}
 */
function getCampgroundJsonUrl(fileName) {
    return getJsonUrl("campgrounds", fileName);
}

/**
 * Returns a product JSON URL.
 *
 * @param {string} fileName
 * @returns {string}
 */
function getProductJsonUrl(fileName) {
    return getJsonUrl("products", fileName);
}

/**
 * Returns a blog JSON URL.
 *
 * @param {string} fileName
 * @returns {string}
 */
function getBlogJsonUrl(fileName) {
    return getJsonUrl("blog", fileName);
}
