import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type SEOProps = {
  title?: string
  description?: string
  image?: string
}

type MetaProps = {
  site: {
    siteMetadata: {
      title: string
      description: string
      siteUrl: string
    }
  }
}

const SEO: FunctionComponent<SEOProps> = function ({
  title,
  description,
  image
}) {
  const { site }: MetaProps = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  );

  const SEOtitle = title || site.siteMetadata.title;
  const SEOdescription = description || site.siteMetadata.description;
  const SEOurl = image || site.siteMetadata.siteUrl;

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'ko'
        }}
        title={SEOtitle}
        meta={[
          {
            name: `title`,
            content: SEOtitle
          },
          {
            name: `description`,
            content: SEOdescription
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
          {
            httpEquiv: 'Content-Type',
            content: 'text/html; charset=UTF-8',
          },
          {
            name: 'keywords',
            content:
              'HTML, CSS, JavaScript, TypeScript, React, Next.js, Gatsby, GitHub, FrontEnd',
          },
          {
            name: 'author',
            content: '허예진',
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: SEOdescription,
          },
          {
            property: `og:image`,
            content: `${site.siteMetadata.siteUrl}/`
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: 'og:site_name',
            content: "Heo-It DevLog",
          },
        ]}
      >
      </Helmet>
    </>
  )
}

export default SEO