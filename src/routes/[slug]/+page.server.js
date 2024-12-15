import { getPost } from '$lib/api';

export async function load({ params }) {
    const post = await getPost(params.slug);
    return { post };
}
