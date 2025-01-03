const API_URL = 'https://cosmic-nxws.ghost.io/ghost/api/content';
const API_KEY = 'b9bda32fdf7e722dbbf64f0f8d';

export async function getPosts() {
    const response = await fetch(`${API_URL}/posts/?key=${API_KEY}&limit=all&include=authors,tags`);
    const data = await response.json();
    return data.posts;
}

export async function getPost(slug) {
    const response = await fetch(`${API_URL}/posts/slug/${slug}/?key=${API_KEY}&include=authors,tags`);
    const data = await response.json();
    return data.posts[0];
}

/**
 * Fetch posts filtered by a specific tag.
 * @param {string} tag - The tag to filter posts by (e.g., 'Launches').
 * @returns {Promise<Array>} - An array of filtered posts.
 */
export async function getPostsByTag(tag) {
    const response = await fetch(`${API_URL}/posts/?key=${API_KEY}&filter=tag:${tag}&limit=all&include=authors,tags`);
    const data = await response.json();
    return data.posts;
}

/**
 * Fetch all public tags from Ghost API
 * @returns {Promise<Array>} - An array of tags
 */
export async function getTopics() {
    const response = await fetch(`${API_URL}/tags/?key=${API_KEY}&limit=all&filter=visibility:public`);
    const data = await response.json();
    return data.tags;
}
