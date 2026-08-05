import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

export const Posts: CollectionConfig = {
    slug: 'posts',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug', 'updatedAt']
    },
    access: {
        read: () => true
    },
    defaultSort: '-publishedAt',
    versions: {
        drafts: true
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true
        },
        slugField({
            useAsSlug: 'title'
        }),
        {
            name: 'excerpt',
            type: 'textarea'
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'publishedAt',
            type: 'date',
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'content',
            type: 'richText',
            required: true
        }
    ]
}
