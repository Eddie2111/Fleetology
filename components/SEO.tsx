import Head from 'next/head'

interface Props {
    title: string
    description: string
    image: string
    url: string
}

export default function SEO({ title, description, image, url }: Props) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} key="title" />
            <meta
                property="og:description"
                content={description}
                key="description"
            />
            <meta property="og:image" content={image} key="image" />
            <meta property="og:url" content={url} key="url" />
        </Head>
    )
}
