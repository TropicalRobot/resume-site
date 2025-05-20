export type ImageProps = {
    url: string
    alt: string
    width: number
    height: number
}

export type FormInputProps = {
    id: string
    type?: string
    label: string
    placeholder?: string
    validation?: Record<string, unknown>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errors: any
}
