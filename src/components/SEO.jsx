import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url = 'https://bionex.co.za' }) => {
    const defaultTitle = "BioNex LIMS | The Intelligent Inventory Platform";
    const defaultDescription = "BioNex LIMS provides automated inventory tracking, POPIA & 21 CFR Part 11 compliant audit trails, and secure data residency for modern laboratories.";

    const metaTitle = title ? `${title} | BioNex LIMS` : defaultTitle;
    const metaDescription = description || defaultDescription;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{metaTitle}</title>
            <meta name="title" content={metaTitle} />
            <meta name="description" content={metaDescription} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={`${url}/logo.svg`} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={metaTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={`${url}/logo.svg`} />
        </Helmet>
    );
};

export default SEO;
