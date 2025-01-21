const CONTENT_API_URL = 'https://cosmic-nxws.ghost.io/ghost/api/content';
const ADMIN_API_URL = 'https://cosmic-nxws.ghost.io/ghost/api/admin';
const CONTENT_API_KEY = 'b9bda32fdf7e722dbbf64f0f8d';

/**
 * Fetch all public posts.
 */
export async function getPosts() {
    const response = await fetch(`${CONTENT_API_URL}/posts/?key=${CONTENT_API_KEY}&limit=all&include=authors,tags`);
    const data = await response.json();
    return data.posts;
}

/**
 * Fetch a single post by its slug.
 */
export async function getPost(slug) {
    const response = await fetch(`${CONTENT_API_URL}/posts/slug/${slug}/?key=${CONTENT_API_KEY}&include=authors,tags`);
    const data = await response.json();
    return data.posts[0];
}

/**
 * Fetch posts filtered by a specific tag.
 */
export async function getPostsByTag(tag) {
    const response = await fetch(`${CONTENT_API_URL}/posts/?key=${CONTENT_API_KEY}&filter=tag:${tag}&limit=all&include=authors,tags`);
    const data = await response.json();
    return data.posts;
}

/**
 * Fetch all public tags from Ghost API.
 */
export async function getTopics() {
    const response = await fetch(`${CONTENT_API_URL}/tags/?key=${CONTENT_API_KEY}&limit=all&filter=visibility:public`);
    const data = await response.json();
    return data.tags;
}

/**
 * Log in a user and create a session using a magic link.
 * @param {string} email - User's email address.
 * @returns {Promise<Object>} - User session data (after they confirm their login).
 */
export async function logIn(email) {
    const response = await fetch(`${ADMIN_API_URL}/session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.errors[0].message || 'Login failed');
    }

    return await response.json(); // Contains session data, including user info after magic link confirmation
}

/**
 * Log out the current user by destroying the session.
 * @param {string} token - Session token (retrieved after login).
 */
export async function logOut(token) {
    const response = await fetch(`${ADMIN_API_URL}/session`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Logout failed');
    }
}

/**
 * Fetch the currently authenticated user's details.
 * @param {string} token - Session token (retrieved after login).
 * @returns {Promise<Object>} - User details.
 */
export async function getCurrentUser(token) {
    const response = await fetch(`${ADMIN_API_URL}/users/me/`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user details');
    }

    return await response.json();
}
