import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    // projectId: process.env.REACT_SANITY_PROJECT_ID,
    projectId: '8qqfwgf7',
    dataset: 'production',
    apiVersion: '2023-06-29',
    useCdn: true,
    // token: process.env.REACT_APP_SANITY_TOKEN
    token: 'skj3E9wCZajNfzayIB4r9rhJ7CChx62RinU4ZzgfOa0pluWCLrk1lA5vDiTKcbsR2LYXfaxdsw1kxdcyAvC8MUSQ8ZvmpZLghRlRuJgyjk78TFiDnayh76aCiJdFM6EkTM14PVx6owTvA5PakYM3etEpSRpwznqw3yKBqyOkQE2DcnjbFFjd'

})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)