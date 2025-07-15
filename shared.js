// shared.js

function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function getCampgroundJsonUrl(fileName) {
    const username = 'mamahubbs'; 
    const repo = 'hoth'; 
    const branch = 'main';
    return `https://raw.githubusercontent.com/${username}/${repo}/${branch}/campgrounds/${fileName}.json`;
}
