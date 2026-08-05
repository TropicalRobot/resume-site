import config from '@payload-config'
import { getPayload } from 'payload'

export default async function BlogPage() {
    const payload = await getPayload({ config })

    const posts = await payload.find({
        collection: 'posts',
        where: {
            _status: {
                equals: 'published'
            }
        },
        sort: '-publishedAt',
        limit: 20
    })

    return (
        <main className='mx-auto'>
            <h1 className='mb-8 text-4xl font-bold'>Blog</h1>

            <div className='space-y-8'>
                {posts.docs.map((post) => (
                    <article key={post.id} className='border-b pb-8'>
                        <h2 className='text-2xl font-semibold'>
                            <a href={`/blog/${post.slug}`}>{post.title}</a>
                        </h2>

                        {post.excerpt && <p className='mt-2 text-gray-600'>{post.excerpt}</p>}

                        {post.publishedAt && (
                            <p className='mt-3 text-sm text-gray-500'>
                                {new Date(post.publishedAt).toLocaleDateString()}
                            </p>
                        )}
                    </article>
                ))}
            </div>
        </main>
    )
}
