import Head from 'next/head'
import MetaProps from '../../../types/meta'

const Meta = ({title, keywords, description}: MetaProps) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Showwcase',
    keywords: "Web Application, Showwcase, Where developer meets, software community",
    description: "Web Application for developers community"
}

export default Meta