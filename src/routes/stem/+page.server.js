import { getPostsByTag } from '$lib/api';

export async function load() {
    const posts = await getPostsByTag('STEM');
    return {
        posts
    };
}
