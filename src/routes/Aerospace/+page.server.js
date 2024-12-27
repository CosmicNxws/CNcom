import { getPostsByTag } from '$lib/api';

export async function load() {
    const posts = await getPostsByTag('Aerospace');
    return {
        posts
    };
}
