// Lazy load non-critical functionality
const initLazyFeatures = () => {
  // Load structured data
  const loadStructuredData = () => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebApplication',
          '@id': 'https://copycleanse.com/#webapp',
          name: 'CopyCleanse',
          alternateName: 'Copy Cleanse',
          url: 'https://copycleanse.com/',
          applicationCategory: 'UtilityApplication',
          operatingSystem: 'Web Browser',
          description:
            'Make AI-generated text undetectable by removing telltale signs like hidden characters, smart quotes, em dashes, Unicode artifacts, and AI tracking parameters. Clean AI text instantly in your browser.',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          author: {
            '@type': 'Person',
            '@id': 'https://copycleanse.com/#author',
            name: 'Ryan Roga',
            url: 'https://github.com/rogadev',
          },
          featureList: [
            'Remove zero-width characters',
            'Clean hidden whitespace',
            'Normalize smart quotes to straight quotes',
            'Convert em/en dashes',
            'Remove Unicode ellipses',
            'Strip soft hyphens',
            'Clean directional marks',
            'Remove non-breaking spaces',
            'Filter suspicious homoglyphs',
            'Remove URL UTM and AI tracking parameters',
          ],
          browserRequirements: 'Requires JavaScript',
          permissions: 'clipboard-write',
        },
        {
          '@type': 'Organization',
          '@id': 'https://copycleanse.com/#organization',
          name: 'CopyCleanse',
          url: 'https://copycleanse.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://copycleanse.com/logo.png',
          },
          sameAs: ['https://github.com/rogadev'],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://copycleanse.com/#website',
          url: 'https://copycleanse.com/',
          name: 'CopyCleanse',
          description:
            'Clean text automatically - remove hidden characters and AI tracking',
          publisher: {
            '@id': 'https://copycleanse.com/#organization',
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate:
                'https://clean.copycleanse.com/?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
        },
        {
          '@type': 'SoftwareApplication',
          '@id': 'https://copycleanse.com/#software',
          name: 'CopyCleanse Text Cleaner',
          applicationCategory: 'WebApplication',
          operatingSystem: 'Web Browser',
          description:
            'Browser-based text cleaning tool that removes hidden characters, normalizes formatting, and strips tracking parameters from text and URLs.',
          url: 'https://clean.copycleanse.com/',
          downloadUrl: 'https://clean.copycleanse.com/',
          softwareVersion: '1.0',
          datePublished: '2025-01-01',
          author: {
            '@id': 'https://copycleanse.com/#author',
          },
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://copycleanse.com/#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Can CopyCleanse make AI text undetectable?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "CopyCleanse removes many common artifacts that AI detection tools look for, including smart quotes, em dashes, Unicode characters, hidden whitespace, and tracking parameters. While no tool can guarantee 100% undetectability, removing these telltale signs significantly improves your text's human appearance.",
              },
            },
            {
              '@type': 'Question',
              name: 'Does CopyCleanse store my text data?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "No, CopyCleanse processes all text locally in your browser. Your content never leaves your device, ensuring complete privacy. We don't store, transmit, or analyze any of your text.",
              },
            },
            {
              '@type': 'Question',
              name: 'What AI artifacts does CopyCleanse remove?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CopyCleanse removes zero-width characters, hidden whitespace, smart quotes, em/en dashes, Unicode ellipses, soft hyphens, directional marks, non-breaking spaces, suspicious homoglyphs, and URL tracking parameters commonly found in AI-generated content.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is CopyCleanse free to use?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, CopyCleanse is completely free to use. There are no subscriptions, limits, or hidden fees. Simply paste your text and get instant results.',
              },
            },
          ],
        },
      ],
    })
    document.head.appendChild(script)
  }

  // Register service worker
  const registerSW = () => {
    if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
      navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then((registration) => {
          if (registration.waiting) {
            registration.waiting.postMessage({ type: 'SKIP_WAITING' })
          }
        })
        .catch(() => {
          // Silently fail for better performance
        })
    }
  }

  // Use requestIdleCallback for better performance
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadStructuredData, { timeout: 2000 })
    requestIdleCallback(registerSW, { timeout: 1000 })
  } else {
    setTimeout(loadStructuredData, 500)
    setTimeout(registerSW, 100)
  }
}

// Initialize when page is interactive
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLazyFeatures)
} else {
  initLazyFeatures()
}
