import { SITE_CONFIG } from "./constants";

export function getLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE_CONFIG.baseUrl}/#legalservice`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.name,
    description: "Escritório de advocacia em Campinas/SP com mais de 50 anos de atuação, incluindo Direito Penal, Trabalhista, Civil, Família, Tributário e Administrativo.",
    url: SITE_CONFIG.baseUrl,
    telephone: SITE_CONFIG.phoneRaw,
    image: `${SITE_CONFIG.baseUrl}/og-institutional.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: "BR"
    },
    areaServed: [
      {
        "@type": "City",
        name: "Campinas"
      },
      {
        "@type": "AdministrativeArea",
        name: "São Paulo"
      },
      {
        "@type": "Country",
        name: "Brasil"
      }
    ],
    foundingDate: "1974",
    founder: {
      "@type": "Person",
      name: SITE_CONFIG.leadPartner
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "70",
      bestRating: "5",
      worstRating: "1"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        opens: "08:30",
        closes: "18:00"
      }
    ],
    priceRange: "$$"
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_CONFIG.baseUrl}${item.url}`
    }))
  };
}

export function getFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
  };
}
