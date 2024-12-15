import { getPosts } from '$lib/api';

export async function load() {
    const posts = await getPosts();
    return { posts };
}
