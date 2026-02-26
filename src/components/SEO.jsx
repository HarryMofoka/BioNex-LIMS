/**
 * Programmable SEO Component for injecting document head meta tags dynamically.
 * 
 * Lessons & Explanations:
 * - `react-helmet-async`: The standard `react-helmet` library is outdated. The async version is thread-safe and acts precisely as a portal to `<head>`.
 * - **Dynamic SEO**: Since React applications execute strictly via JS within a `<div id="root">`, native search crawlers need `<head>` modifications immediately to understand context.
 * - **Open Graph (`og:`)**: These tags guarantee that links shared on Facebook, LinkedIn, iMessage, Slack, etc., render rich previews correctly (image, title, description).
 * - **Twitter (`twitter:`)**: Specific formatting enforced by Twitter/X to ensure large image cards render successfully.
 * 
 * @param {string} title - Optional page title. Automatically affixes root branding.
 * @param {string} description - Optional page description. Defaults to BioNex overview.
 * @param {string} url - Optional current page URL for canonical accuracy.
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url = 'https://bionex.co.za' }) => {
    // Fallbacks ensuring metadata is never null
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
