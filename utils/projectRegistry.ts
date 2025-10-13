// utils/projectRegistry.ts
import type { DefineComponent } from 'vue'

/** SEO per card + social: ogImage è obbligatoria */
type SEO = {
    title?: string
    description?: string
    /** URL pubblico dell’immagine (metti i file in /public/img/...) */
    ogImage: string
    keywords?: string
    structuredData?: Record<string, any>
}

export type Tool = {
    /** Titolo visibile */
    title: string
    /** Breve descrizione (facoltativa, utile per SEO/snippet) */
    description?: string
    /** Dynamic import del componente del progetto */
    component: () => Promise<{ default: DefineComponent }>
    /** Categoria (facoltativa) */
    category?: string
    /** Cover alternativa (di default usiamo seo.ogImage) */
    cover?: string
    /** SEO obbligatoria con ogImage */
    seo: SEO
}

/** =========================
 *  REGISTRO PROGETTI
 *  =======================*/
export const tools: Record<string, Tool> = {
    'project_paint_it_black': {
        title: 'PAINT IT BLACK',
        description:
            'Appartamento a Viareggio: interni su misura, palette scura, isola lignea e boiserie. Bagno in resina nera a contrasto con rovere e sanitari bianchi.',
        category: 'residenziale',
        component: () =>
            import('~/components/projects/Project_paint_it_black.vue') as Promise<{ default: DefineComponent }>,
        seo: {
            title: 'Paint it black – Progetto residenziale a Viareggio',
            description:
                'Rinnovo con layout aperto: isola in listelli di legno nero, boiserie su misura e bagno in resina nera. Viareggio (LU), 2023.',
            ogImage: '/img/PaintIt/SantAmbrogio_21bis.webp',
            keywords:
                'architettura interni, residenza privata, Viareggio, arredi su misura, legno nero, boiserie, ristrutturazione',
            structuredData: {
                '@context': 'https://schema.org',
                '@type': 'CreativeWork',
                name: 'Paint it black',
                description:
                    'Ristrutturazione di un appartamento a Viareggio (LU) con palette scura e arredi su misura. 2023.',
                datePublished: '2023-01-01',
                inLanguage: 'it-IT',
                locationCreated: { '@type': 'Place', name: 'Viareggio (LU), Italia' },
                image: ['/img/PaintIt/SantAmbrogio_21bis.webp'],
                author: { '@type': 'Organization', name: 'Claudio Fava Architetto' },
                keywords: ['interior design', 'residenza privata', 'legno nero', 'boiserie', 'ristrutturazione'],
                breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
                        { '@type': 'ListItem', position: 2, name: 'Progetti', item: '/projects' },
                        { '@type': 'ListItem', position: 3, name: 'Paint it black', item: '/projects/project_paint_it_black' }
                    ]
                }
            }
        }
    },

    'project_dante': {
        title: 'DANTE',
        description:
            'Torino: rinnovamento mirato con blocco multifunzione che integra cucina, mobile TV, stereo e vinili. Continuità visiva con Fenix grigio bromo e sfondato in ALPIWOOD Sienna Cherry.',
        category: 'residenziale',
        component: () =>
            import('~/components/projects/Project_dante.vue') as Promise<{ default: DefineComponent }>,
        seo: {
            title: 'DANTE – Residenza a Torino',
            description:
                'Open space con arredi su misura: blocco cucina/TV/stereo/vinili, linee continue e materiali coordinati. Torino (TO), 2023.',
            ogImage: '/img/dante/PR_R0550 copy-min.webp',
            keywords:
                'architettura interni, Torino, residenza privata, arredi su misura, Fenix grigio bromo, ALPIWOOD Sienna Cherry, open space',
            structuredData: {
                '@context': 'https://schema.org',
                '@type': 'CreativeWork',
                name: 'DANTE',
                description:
                    'Progetto residenziale a Torino con riorganizzazione zona giorno e blocco multifunzione su misura. 2023.',
                datePublished: '2023-01-01',
                inLanguage: 'it-IT',
                locationCreated: { '@type': 'Place', name: 'Torino (TO), Italia' },
                image: [
                    '/img/dante/PR_R0550 copy-min.webp',
                    '/img/dante/PR_R0609-HDR-min.webp',
                    '/img/dante/PR_R0646-min.webp'
                ],
                author: { '@type': 'Organization', name: 'Claudio Fava Architetto' },
                keywords: ['interior design', 'residenza privata', 'open space', 'arredi su misura'],
                breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
                        { '@type': 'ListItem', position: 2, name: 'Progetti', item: '/projects' },
                        { '@type': 'ListItem', position: 3, name: 'DANTE', item: '/projects/project_dante' }
                    ]
                }
            }
        }
    },

    'project_torre_rinalda': {
        title: 'TORRE RINALDA',
        description:
            'Torre belvedere in legno, costruita “dentro” la torre storica minimizzando l’impatto e lasciando il paesaggio intatto. Struttura prefab in legno e dettagli in acciaio.',
        category: 'concorsi',
        component: () =>
            import('~/components/projects/Project_torre_rinalda.vue') as Promise<{ default: DefineComponent }>,
        seo: {
            title: 'TORRE RINALDA – International Architecture Competition',
            description:
                'Viewpoint tower in legno con nucleo in X-Lam e telaio esterno portante. Accessi leggeri, paesaggio preservato. Lecce (LE), 2023.',
            ogImage: '/img/torre/01-min.webp',
            keywords: 'torre belvedere, Lecce, Torre Rinalda, concorso di architettura, X-Lam, legno, struttura prefabbricata',
            structuredData: {
                '@context': 'https://schema.org',
                '@type': 'CreativeWork',
                name: 'TORRE RINALDA',
                description:
                    'Concorso internazionale: torre belvedere in legno inserita nella torre storica, con accessi leggeri e paesaggio preservato.',
                datePublished: '2023-01-01',
                inLanguage: 'it-IT',
                locationCreated: { '@type': 'Place', name: 'Lecce (LE), Italia' },
                image: ['/img/torre/01-min.webp', '/img/torre/02-min.webp', '/img/torre/03-min.webp'],
                author: { '@type': 'Organization', name: 'Claudio Fava Architetto' },
                keywords: ['concorso', 'architettura', 'legno', 'X-Lam', 'belvedere'],
                breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
                        { '@type': 'ListItem', position: 2, name: 'Progetti', item: '/projects' },
                        { '@type': 'ListItem', position: 3, name: 'TORRE RINALDA', item: '/projects/project_torre_rinalda' }
                    ]
                }
            }
        }
    },

    'casa-gramsci': {
        title: 'CASA GRAMSCI',
        description:
            '55 mq riconfigurati con arredi su misura, materiali naturali e spazi in comunicazione: rovere e verde Guatemala come identità.',
        category: 'residenziale',
        component: () =>
            import('~/components/projects/Project_casa_gramsci.vue') as Promise<{ default: DefineComponent }>,
        seo: {
            title: 'CASA GRAMSCI – Residenziale a Condove',
            description:
                'Open space con boiserie a nastro, rovere “nordico”, bagno a zone e pozzo di luce. Condove (TO), 2022.',
            ogImage: '/img/casagramsci/01.webp',
            keywords: 'casa gramsci, condove, residenza privata, boiserie, rovere, bagno a zone, interior design',
            structuredData: {
                '@context': 'https://schema.org',
                '@type': 'CreativeWork',
                name: 'CASA GRAMSCI',
                description:
                    'Riconfigurazione appartamento anni ’60 con arredi su misura in rovere, boiserie a nastro e bagno a zone. Condove (TO), 2022.',
                datePublished: '2022-01-01',
                inLanguage: 'it-IT',
                locationCreated: { '@type': 'Place', name: 'Condove (TO), Italia' },
                image: ['/img/casagramsci/01.webp'],
                author: { '@type': 'Organization', name: 'Claudio Fava Architetto' },
                keywords: ['boiserie', 'rovere', 'bagno a zone', 'open space', 'interior design'],
                breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
                        { '@type': 'ListItem', position: 2, name: 'Progetti', item: '/projects' },
                        { '@type': 'ListItem', position: 3, name: 'Casa Gramsci', item: '/projects/casa-gramsci' }
                    ]
                }
            }
        }
    },

    'flush-house': {
        title: 'FLUSH HOUSE',
        description:
            'Casa-studio per “Lo spazio abitativo del terzo millennio”: flussi separati, arredi integrati, spazio flessibile e frangisole Rasoparete.',
        category: 'concept / concorsi',
        component: () =>
            import('~/components/projects/Project_flush_house.vue') as Promise<{ default: DefineComponent }>,
        seo: {
            title: 'FLUSH HOUSE – Concorso Rasoparete (2020)',
            description:
                'Proposta per il concorso “Lo spazio abitativo del terzo millennio”: scala filtro, arredi raso-muro, parete vetrata scorrevole e pannelli frangisole.',
            ogImage: '/img/rasoparete/vista-03-1-scaled.jpg',
            keywords: 'Rasoparete, concorso, flush house, arredi integrati, frangisole, open space, casa-studio',
            structuredData: {
                '@context': 'https://schema.org',
                '@type': 'CreativeWork',
                name: 'FLUSH HOUSE',
                description:
                    'Casa-studio con flussi separati, arredi integrati, spazio flessibile e frangisole per il concorso Rasoparete 2020.',
                datePublished: '2020-01-01',
                inLanguage: 'it-IT',
                image: ['/img/rasoparete/vista-03-1-scaled.jpg'],
                author: { '@type': 'Organization', name: 'Claudio Fava Architetto' },
                keywords: ['Rasoparete', 'flush house', 'arredi integrati', 'frangisole', 'open space'],
                breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
                        { '@type': 'ListItem', position: 2, name: 'Progetti', item: '/projects' },
                        { '@type': 'ListItem', position: 3, name: 'FLUSH HOUSE', item: '/projects/flush-house' }
                    ]
                }
            }
        }
    },

    'oragiusta-moncalieri': {
        title: "L'ORAGIUSTA MONCALIERI",
        description:
            "Locale nel centro di Moncalieri: bancone nero e top in rovere, controsoffitto scuro puntinato di luci, cella della birra a vista in metallo e vetro.",
        category: 'retail / hospitality',
        component: () =>
            import('~/components/projects/Project_oragiusta_moncalieri.vue') as Promise<{ default: DefineComponent }>,
        seo: {
            title: "L'Oragiusta Moncalieri – Interior per locale",
            description:
                "Bancone a contrasto, atmosfere calde e cella della birra esposta all’ingresso. Moncalieri (TO), 2020.",
            ogImage: '/img/loragiusta/foto-3-scaled.jpg',
            keywords: 'retail, locale, bar, moncalieri, rovere, bancone nero, interior design',
            structuredData: {
                '@context': 'https://schema.org',
                '@type': 'CreativeWork',
                name: "L'Oragiusta Moncalieri",
                description:
                    'Progetto di interior per locale a Moncalieri: volumi neri, top in rovere, illuminazione integrata e cella della birra a vista.',
                datePublished: '2020-01-01',
                inLanguage: 'it-IT',
                locationCreated: { '@type': 'Place', name: 'Moncalieri (TO), Italia' },
                image: ['/img/loragiusta/foto-3-scaled.jpg'],
                author: { '@type': 'Organization', name: 'Claudio Fava Architetto' },
                keywords: ['retail', 'bar', 'rovere', 'bancone', 'illuminazione'],
                breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
                        { '@type': 'ListItem', position: 2, name: 'Progetti', item: '/projects' },
                        { '@type': 'ListItem', position: 3, name: "L'Oragiusta Moncalieri", item: '/projects/oragiusta-moncalieri' }
                    ]
                }
            }
        }
    },

    'vivere-20-mq': {
        title: 'VIVERE IN 20 MQ',
        description:
            'Mini-appartamento indipendente in 20 m²: parete attrezzata, letto rialzato o letto a scomparsa per massima flessibilità.',
        category: 'residenziale / concept',
        component: () =>
            import('~/components/projects/Project_vivere_20mq.vue') as Promise<{ default: DefineComponent }>,
        seo: {
            title: 'Vivere in 20 mq – Mini appartamento flessibile',
            description:
                'Due strategie di layout (letto rialzato o a scomparsa) per ottenere funzionalità e comfort in soli 20 m². Rivalta di Torino (TO), 2020.',
            ogImage: '/img/vivere20metri/01-scaled.jpg',
            keywords: 'micro living, small apartment, letto a scomparsa, arredi su misura, mini appartamento, 20 mq',
            structuredData: {
                '@context': 'https://schema.org',
                '@type': 'CreativeWork',
                name: 'Vivere in 20 mq',
                description:
                    'Concept per mini appartamento in 20 m² con arredi integrati e layout flessibili.',
                datePublished: '2020-01-01',
                inLanguage: 'it-IT',
                locationCreated: { '@type': 'Place', name: 'Rivalta di Torino (TO), Italia' },
                image: ['/img/vivere20metri/01-scaled.jpg'],
                author: { '@type': 'Organization', name: 'Claudio Fava Architetto' },
                keywords: ['micro living', 'small apartment', 'arredi su misura', 'letto a scomparsa'],
                breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
                        { '@type': 'ListItem', position: 2, name: 'Progetti', item: '/projects' },
                        { '@type': 'ListItem', position: 3, name: 'Vivere in 20 mq', item: '/projects/vivere-20-mq' }
                    ]
                }
            }
        }
    },

    'centrale-operativa-telecontrol': {
        title: 'SALA CONGRESSI TELECONTROL',
        description:
            'Rifunzionalizzazione autorimessa in sala congressi polifunzionale da 400 m² con soppalco. Aree lounge, break, catering e pareti a soffietto per configurazioni flessibili.',
        category: 'spazi di lavoro / allestimenti',
        component: () =>
            import('~/components/projects/Project_telecontrol.vue') as Promise<{ default: DefineComponent }>,
        seo: {
            title: 'Sala Congressi Telecontrol – Spazio polifunzionale a Rivoli',
            description:
                'Progetto di sala congressi flessibile con scatolari metallici sospesi e pareti a soffietto. Rivoli (TO), 2016.',
            ogImage: '/img/vista-01.jpg',
            keywords: 'sala congressi, spazio polifunzionale, allestimenti, corporate, Rivoli, Telecontrol',
            structuredData: {
                '@context': 'https://schema.org',
                '@type': 'CreativeWork',
                name: 'Sala Congressi Telecontrol',
                description:
                    'Rifunzionalizzazione in sala congressi di 400 m² con soluzioni flessibili e allestimenti su misura.',
                datePublished: '2016-01-01',
                inLanguage: 'it-IT',
                locationCreated: { '@type': 'Place', name: 'Rivoli (TO), Italia' },
                image: ['/img/vista-01.jpg'],
                author: { '@type': 'Organization', name: 'Claudio Fava Architetto' },
                keywords: ['sala congressi', 'spazio flessibile', 'allestimenti', 'corporate'],
                breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
                        { '@type': 'ListItem', position: 2, name: 'Progetti', item: '/projects' },
                        { '@type': 'ListItem', position: 3, name: 'Sala Congressi Telecontrol', item: '/projects/centrale-operativa-telecontrol' }
                    ]
                }
            }
        }
    },

    'casa-nel-parco': {
        title: 'CASA NEL PARCO',
        description:
            'Ristrutturazione di un ex fienile: tradizione e contemporaneità, nuove aperture verso il parco e doppia altezza interna.',
        category: 'residenziale',
        component: () =>
            import('~/components/projects/Project_casa_nel_parco.vue') as Promise<{ default: DefineComponent }>,
        seo: {
            title: 'Casa nel Parco – Ristrutturazione ex fienile a Rivalta',
            description:
                'Residenza ottenuta dal recupero di un fienile: elementi storici preservati, nuove aperture e spazio a doppia altezza. Rivalta di Torino, 2016.',
            ogImage: '/img/vista-esterna-01.jpg',
            keywords: 'ristrutturazione fienile, Rivalta di Torino, recupero, legno e mattoni, doppia altezza, residenza privata',
            structuredData: {
                '@context': 'https://schema.org',
                '@type': 'CreativeWork',
                name: 'Casa nel Parco',
                description:
                    'Recupero di un fienile in residenza contemporanea mantenendo volumetria e materiali originari.',
                datePublished: '2016-01-01',
                inLanguage: 'it-IT',
                locationCreated: { '@type': 'Place', name: 'Rivalta di Torino (TO), Italia' },
                image: ['/img/vista-esterna-01.jpg'],
                author: { '@type': 'Organization', name: 'Claudio Fava Architetto' },
                keywords: ['ristrutturazione', 'ex fienile', 'residenza privata', 'parco', 'doppia altezza'],
                breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
                        { '@type': 'ListItem', position: 2, name: 'Progetti', item: '/projects' },
                        { '@type': 'ListItem', position: 3, name: 'Casa nel Parco', item: '/projects/casa-nel-parco' }
                    ]
                }
            }
        }
    },

    'project_villa_perrault': {
        title: 'VILLA PERRAULT',
        description:
            'Interni contemporanei in villa seicentesca: rispetto delle strutture storiche, continuità materica e arredi su misura.',
        category: 'residenziale',
        component: () =>
            import('~/components/projects/Project_villa_perrault.vue') as Promise<{ default: DefineComponent }>,
        seo: {
            title: 'Villa Perrault – Interior in villa storica a Rivoli',
            description:
                'Progetto d’interni in villa seicentesca: linguaggio contemporaneo in dialogo con muri portanti e soffitti cassettonati. Rivoli (TO), 2018.',
            ogImage: '/img/villaperrault/vista-01-scaled.jpg',
            keywords: 'villa storica, interior design, rivoli, arredi su misura, restauro interni, pavimento spina di pesce',
            structuredData: {
                '@context': 'https://schema.org',
                '@type': 'CreativeWork',
                name: 'Villa Perrault',
                description:
                    'Progetto d’interni in villa seicentesca a Rivoli (TO) con arredi su misura e materiali caldi in dialogo con le strutture storiche.',
                datePublished: '2018-01-01',
                inLanguage: 'it-IT',
                locationCreated: { '@type': 'Place', name: 'Rivoli (TO), Italia' },
                image: ['/img/villaperrault/vista-01-scaled.jpg'],
                author: { '@type': 'Organization', name: 'Claudio Fava Architetto' },
                keywords: ['villa storica', 'interior design', 'arredi su misura', 'spina di pesce', 'restyling interni'],
                breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
                        { '@type': 'ListItem', position: 2, name: 'Progetti', item: '/projects' },
                        { '@type': 'ListItem', position: 3, name: 'Villa Perrault', item: '/projects/project_villa_perrault' }
                    ]
                }
            }
        }
    },

    'casa-rivoli': {
        title: 'CASA RIVOLI',
        description:
            'Contrasto bianco/legno come filo conduttore: arredi su misura, scala a sbalzo, camino fulcro del living.',
        category: 'residenziale',
        component: () =>
            import('~/components/projects/Project_casa_rivoli.vue') as Promise<{ default: DefineComponent }>,
        seo: {
            title: 'Casa Rivoli – Residenziale a Rivoli (TO)',
            description:
                'Interni con parquet in rovere sbiancato, arredi su misura e cucina con isola in Carrara. Rivoli (TO), 2016.',
            ogImage: '/img/PRO_7700.jpg',
            keywords: 'ristrutturazione, interior design, rovere sbiancato, scala a sbalzo, cucina su misura, Rivoli',
            structuredData: {
                '@context': 'https://schema.org',
                '@type': 'CreativeWork',
                name: 'Casa Rivoli',
                description:
                    'Ristrutturazione residenziale a Rivoli (TO): contrasto bianco/legno, arredi su misura e scala a sbalzo.',
                datePublished: '2016-01-01',
                inLanguage: 'it-IT',
                locationCreated: { '@type': 'Place', name: 'Rivoli (TO), Italia' },
                image: ['/img/PRO_7700.jpg'],
                author: { '@type': 'Organization', name: 'Claudio Fava Architetto' },
                keywords: ['ristrutturazione', 'interior design', 'rovere sbiancato', 'scala a sbalzo', 'cucina su misura'],
                breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
                        { '@type': 'ListItem', position: 2, name: 'Progetti', item: '/projects' },
                        { '@type': 'ListItem', position: 3, name: 'Casa Rivoli', item: '/projects/casa-rivoli' }
                    ]
                }
            }
        }
    },

    'sala-centrale-operativa-telecontrol': {
        title: 'CENTRALE OPERATIVA TELECONTROL',
        description:
            'Spazio direzionale a Rivoli: uffici luminosi con vetrate a tutta altezza e percorsi leggibili.',
        category: 'uffici',
        component: () =>
            import('~/components/projects/Project_centrale_operativa_telecontrol.vue') as Promise<{ default: DefineComponent }>,
        seo: {
            title: 'Centrale Operativa Telecontrol – Uffici a Rivoli (TO)',
            description:
                'Riprogettazione di spazi direzionali con uffici trasparenti e percorsi distinti. Rivoli (TO), 2014.',
            ogImage: '/img/PRO_7942.jpg',
            keywords: 'uffici, interior design, vetrate, lamiere forate, spazi direzionali, Rivoli',
            structuredData: {
                '@context': 'https://schema.org',
                '@type': 'CreativeWork',
                name: 'Centrale Operativa Telecontrol',
                description:
                    'Spazi direzionali a Rivoli (TO) con uffici luminosi e percorsi leggibili, caratterizzati da vetrate e lamiere forate.',
                datePublished: '2014-01-01',
                inLanguage: 'it-IT',
                locationCreated: { '@type': 'Place', name: 'Rivoli (TO), Italia' },
                image: ['/img/PRO_7942.jpg'],
                author: { '@type': 'Organization', name: 'Claudio Fava Architetto' },
                keywords: ['uffici', 'interior design', 'vetrate', 'lamiere forate', 'spazi direzionali'],
                breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
                        { '@type': 'ListItem', position: 2, name: 'Progetti', item: '/projects' },
                        { '@type': 'ListItem', position: 3, name: 'Centrale Operativa Telecontrol', item: '/projects/centrale-operativa-telecontrol' }
                    ]
                }
            }
        }
    }
}

/** Cover da usare in home: per default è la ogImage, fallback a cover. */
function projectCover(t: Tool, i: number) {
    const url = t.seo?.ogImage || t.cover || `https://picsum.photos/800/600?random=${300 + i}`
    if (import.meta.dev && !t.seo?.ogImage) {
        // eslint-disable-next-line no-console
        console.warn(`[projectRegistry] "${t.title}" non ha seo.ogImage: userò ${url}`)
    }
    return url
}

/** Elenco per la griglia della home */
export function publicProjects() {
    return Object.entries(tools).map(([slug, t], i) => ({
        slug,
        title: t.title,
        cover: projectCover(t, i)
    }))
}

/** Dati completi del singolo progetto */
export function getProjectBySlug(slug: string) {
    return tools[slug]
}

/** Carica dinamicamente il componente del progetto */
export async function loadProjectComponent(slug: string) {
    const entry = tools[slug]
    if (!entry) return null
    const mod = await entry.component()
    return mod.default
}


