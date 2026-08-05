import { postgresAdapter } from '@payloadcms/db-postgres'
import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import path from 'path'

import { Users } from '@/collections/Users'
import { Posts } from '@/collections/Posts'
import { Media } from '@/collections/Media'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname)
        }
    },
    collections: [Users, Posts, Media],
    // If you'd like to use Rich Text, pass your editor here
    editor: lexicalEditor(),

    // Your Payload secret - should be a complex and secure string, unguessable
    secret: process.env.PAYLOAD_SECRET || '',
    // Whichever Database Adapter you're using should go here
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URL || ''
        }
    }),
    // If you want to resize images, crop, set focal point, etc.
    // make sure to install it and pass it to the config.
    // This is optional - if you don't need to do these things,
    // you don't need it!
    sharp,
    typescript: {
        outputFile: path.resolve(process.cwd(), 'src/payload-types.ts')
    }
})
