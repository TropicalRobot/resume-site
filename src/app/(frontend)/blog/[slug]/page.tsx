import { notFound } from 'next/navigation'
import config from '@payload-config'
import { getPayload } from 'payload'
import RichText from '@/components/ui/RichText'
import Hero from '@/components/Hero'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    const payload = await getPayload({ config })

    const result = await payload.find({
        collection: 'posts',
        where: {
            and: [
                {
                    slug: {
                        equals: slug
                    }
                },
                {
                    _status: {
                        equals: 'published'
                    }
                }
            ]
        },
        limit: 1
    })

    const post = result.docs[0]

    if (!post) {
        notFound()
    }

    const heroImageUrl =
        typeof post.image === 'object' && post.image !== null
            ? (post.image.url ?? undefined)
            : undefined

    return (
        <main className='mx-auto px-6 py-12'>
            <article className='prose'>
                <Hero heading={post.title} imgSrc={heroImageUrl} />
                <div className='mx-auto max-w-3xl'>
                    {post.publishedAt && <p>{new Date(post.publishedAt).toLocaleDateString()}</p>}

                    <RichText content={post.content} />
                </div>
            </article>
        </main>
    )
}
