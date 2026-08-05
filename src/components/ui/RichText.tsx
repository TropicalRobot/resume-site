import { RichText as RenderRichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

type Props = {
    content: SerializedEditorState
}

export default function RichText({ content }: Props) {
    return <RenderRichText data={content} />
}
