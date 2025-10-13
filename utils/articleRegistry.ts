// utils/articleRegistry.ts
import type { DefineComponent } from 'vue'

/** SEO per card + social: ogImage è OBBLIGATORIA */
type SEO = {
    title?: string
    description?: string
    /** URL pubblico dell’immagine (metti i file in /public/img/...) */
    ogImage: string
    keywords?: string
    structuredData?: Record<string, any>
}

export type Article = {
    /** Titolo visibile (plain text) */
    title: string
    /** Versione HTML del titolo (facoltativa, usa v-html dove serve) */
    titleHtml?: string
    /** Breve descrizione (facoltativa, utile per SEO/snippet) */
    description?: string
    /** Dynamic import del componente dell’articolo */
    component: () => Promise<{ default: DefineComponent }>
    /** Categoria/sezione (facoltativa) */
    category?: string
    /** Cover alternativa (di default usiamo seo.ogImage) */
    cover?: string
    /** SEO obbligatoria con ogImage */
    seo: SEO
}

/** =========================
 *  REGISTRO ARTICOLI
 *  =======================*/
export const articles: Record<string, Article> = {
    // ---------------------------
    // ‘PAINT IT BLACK’ — CRC (Mar–Apr 2024)
    // ---------------------------
    'come-ristrutturare-la-casa': {
        title: 'PAINT IT BLACK — Come Ristrutturare La Casa (Mar–Apr 2024)',
        titleHtml: `
      <span class="uppercase">"PAINT IT BLACK"</span><br>
      <span class="text-black text-sm">è su CRC, Marzo - Aprile 2024</span>
    `,
        description:
            'Rinascita in nero: bilocale a Viareggio trasformato in open space con palette scura, dettagli in rovere e design su misura che ottimizza spazio e funzionalità.',
        category: 'press',
        component: () =>
            import('~/components/articles/Come_ristrutturare_la_casa.vue') as Promise<{ default: DefineComponent }>,
        seo: {
            title: 'PAINT IT BLACK — su Come Ristrutturare La Casa (Mar–Apr 2024)',
            description:
                'Open space dominato dal nero con dettagli in rovere. Un progetto su misura che esalta funzionalità ed estetica.',
            ogImage: '/img/pubblicazioni/CRC_marzo_aprile_2024/crc_marzo_2024_copertina.webp',
            keywords:
                'press, rivista, come ristrutturare la casa, paint it black, interni, open space, palette scura, rovere',
            structuredData: {
                '@context': 'https://schema.org',
                '@type': 'NewsArticle',
                headline: 'PAINT IT BLACK — Come Ristrutturare La Casa',
                datePublished: '2024-04-01',
                inLanguage: 'it-IT',
                image: [
                    '/img/pubblicazioni/CRC_marzo_aprile_2024/crc_marzo_2024_copertina.webp',
                    '/img/pubblicazioni/CRC_marzo_aprile_2024/pagina1.webp',
                    '/img/pubblicazioni/CRC_marzo_aprile_2024/pagina2.webp',
                    '/img/pubblicazioni/CRC_marzo_aprile_2024/pagina3.webp',
                    '/img/pubblicazioni/CRC_marzo_aprile_2024/pagina4.webp',
                    '/img/pubblicazioni/CRC_marzo_aprile_2024/pagina5.webp'
                ],
                publisher: { '@type': 'Organization', name: 'Come Ristrutturare La Casa' }
            }
        }
    },

    // ---------------------------
    // Cose di Casa (Ago 2022)
    // ---------------------------
    'cose-di-casa': {
        title: 'Cose di Casa — Agosto 2022',
        titleHtml: `
      <span class="uppercase">“CASA GRAMSCI”</span><br>
      <span class="text-black text-sm">è su Cose Di Casa, Agosto 2022</span><br>
    `,
        description:
            'Casa Gramsci: 55 mq riconfigurati con arredi su misura e materiali naturali, ambienti in comunicazione.',
        category: 'press',
        component: () =>
            import('~/components/articles/Cose_di_casa.vue') as Promise<{ default: DefineComponent }>,
        seo: {
            title: 'Casa Gramsci su Cose di Casa — Agosto 2022',
            description:
                'Riconfigurazione funzionale e arredi su misura per un appartamento compatto, luminoso e connesso.',
            ogImage: '/img/pubblicazioni/cosedicasa_luglio2022/copertina_cose.webp',
            keywords: 'press, rivista, cose di casa, casa gramsci, interni, arredi su misura, ristrutturazione',
            structuredData: {
                '@context': 'https://schema.org',
                '@type': 'NewsArticle',
                headline: 'Casa Gramsci — Cose di Casa',
                datePublished: '2022-08-01',
                inLanguage: 'it-IT',
                image: ['/img/pubblicazioni/cosedicasa_luglio2022/copertina_cose.webp'],
                publisher: { '@type': 'Organization', name: 'Cose di Casa' }
            }
        }
    },

    // ---------------------------
    // 100 Idee per Ristrutturare (Lug 2022)
    // ---------------------------
    'cento-idee': {
        title: '100 Idee per Ristrutturare — Luglio 2022',
        titleHtml: `
      <span class="uppercase">“CASA RIVOLI”</span><br>
      <span class="text-black text-sm">è su 100 Idee Per Ristrutturare, Luglio 2022</span><br>
    `,
        description:
            'Casa Rivoli: bianco e legno come filo conduttore degli ambienti, soluzioni funzionali e coerenti.',
        category: 'press',
        component: () =>
            import('~/components/articles/Cento_idee.vue') as Promise<{ default: DefineComponent }>,
        seo: {
            title: 'Casa Rivoli su 100 Idee per Ristrutturare — Luglio 2022',
            description:
                'Contrasto bianco/legno come segno di continuità tra gli ambienti, con attenzione al dettaglio.',
            ogImage: '/img/pubblicazioni/100idee_luglio2022/copertina_idee.webp',
            keywords: 'press, rivista, 100 idee, casa rivoli, interni, legno, ristrutturazione',
            structuredData: {
                '@context': 'https://schema.org',
                '@type': 'NewsArticle',
                headline: 'Casa Rivoli — 100 Idee per Ristrutturare',
                datePublished: '2022-07-01',
                inLanguage: 'it-IT',
                image: ['/img/pubblicazioni/100idee_luglio2022/copertina_idee.webp'],
                publisher: { '@type': 'Organization', name: '100 Idee per Ristrutturare' }
            }
        }
    }
}

/** Cover da usare in home: per default è la ogImage, fallback a cover. */
function articleCover(a: Article, i: number) {
    const url = a.seo?.ogImage || a.cover || `https://picsum.photos/400/560?random=${800 + i}`
    if (import.meta.dev && !a.seo?.ogImage) {
        // eslint-disable-next-line no-console
        console.warn(`[articleRegistry] "${a.title}" non ha seo.ogImage: userò ${url}`)
    }
    return url
}

/** Elenco per la griglia della pagina articoli */
export function publicArticles() {
    return Object.entries(articles).map(([slug, a], i) => ({
        slug,
        title: a.title,
        titleHtml: a.titleHtml,
        cover: articleCover(a, i),
        description: a.description
    }))
}

/** Dati completi del singolo articolo */
export function getArticleBySlug(slug: string) {
    return articles[slug]
}

/** Carica dinamicamente il componente dell’articolo */
export async function loadArticleComponent(slug: string) {
    const entry = articles[slug]
    if (!entry) return null
    const mod = await entry.component()
    return mod.default
}


