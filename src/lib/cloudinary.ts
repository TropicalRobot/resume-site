export function getCloudinaryUrl(
    publicId: string,
    width?: number,
    quality: number | 'auto' = 'auto'
) {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dw2a0dfrl'

    const transformations = []

    if (width) {
        transformations.push(`w_${width}`)
    }

    transformations.push(`q_${quality}`)
    transformations.push('f_auto') // Auto format (WebP when supported)

    const transformationString = transformations.join(',')

    return `https://res.cloudinary.com/${cloudName}/image/upload/${transformationString}/${publicId}`
}

// Helper for responsive images
export function getCloudinaryResponsiveSrcSet(publicId: string) {
    const sizes = [400, 800, 1200, 1600, 2000]
    return sizes.map((size) => `${getCloudinaryUrl(publicId, size)} ${size}w`).join(', ')
}
