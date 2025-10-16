<!-- pages/privacy-policy.vue -->
<template>
  <section class="bg-white px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
    <div class="mx-auto max-w-3xl text-gray-700">
      <h1 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        Privacy Policy
      </h1>

      <p class="mt-6 text-xl leading-8">
        In questa pagina si descrivono le modalità di gestione del sito internet
        <NuxtLink to="/" class="text-indigo-500 hover:underline">www.favaclaudio.com</NuxtLink>
        in riferimento al trattamento dei dati personali degli utenti che lo consultano.
        Si tratta di un’informativa resa ai sensi dell’art. 13 del GDPR 2016/679
        (“Regolamento Europeo Privacy”) per gli utenti che usufruiscono dei servizi del
        nostro sito Internet. L’informativa è resa solo per il presente sito e non per
        altri siti web eventualmente consultati tramite link.
      </p>

      <h2 class="mt-16 text-3xl font-semibold tracking-tight text-gray-900">
        Titolare del trattamento
      </h2>
      <p class="mt-6 leading-7">
        Il Titolare del trattamento dei dati personali è:
        <strong>Arch. Claudio Fava</strong><br>
        P.IVA 10620700012<br>
        VIA FREJUS, 41 - 10139 TORINO (TO - IT)<br>
        Indirizzo email:
        <a href="mailto:info@favaclaudio.com" class="text-indigo-500 hover:underline">info@favaclaudio.com</a>
      </p>

      <h2 class="mt-16 text-3xl font-semibold tracking-tight text-gray-900">
        Dati di navigazione
      </h2>
      <p class="mt-6 leading-7">
        I sistemi informatici e le procedure software preposte al funzionamento di questo sito web
        acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione
        è implicita nell’uso dei protocolli di comunicazione di Internet (es. indirizzi IP, URI delle
        risorse richieste, orario della richiesta, metodo utilizzato, dimensione del file ottenuto in
        risposta, codice numerico sullo stato della risposta, parametri del sistema operativo e del
        browser). Questi dati sono utilizzati al solo fine di ricavare informazioni statistiche anonime
        sull’uso del sito e per controllarne il corretto funzionamento e vengono cancellati
        immediatamente dopo l’elaborazione, salvo necessità di accertamento di responsabilità in caso
        di ipotetici reati informatici.
      </p>

      <h2 class="mt-16 text-3xl font-semibold tracking-tight text-gray-900">
        Finalità del trattamento
      </h2>
      <p class="mt-6 leading-7">
        I dati personali forniti dall’utente saranno trattati per finalità di statistica
        (es. Google Analytics con IP anonimo) e per l’eventuale invio di newsletter, ove richiesto.
      </p>

      <h2 class="mt-16 text-3xl font-semibold tracking-tight text-gray-900">
        Luogo del trattamento
      </h2>
      <p class="mt-6 leading-7">
        I trattamenti connessi ai servizi web di questo sito hanno luogo presso la sede del Titolare
        e sono curati solo da personale autorizzato.
      </p>

      <h2 class="mt-16 text-3xl font-semibold tracking-tight text-gray-900">
        Modalità di trattamento dei dati
      </h2>
      <p class="mt-6 leading-7">
        I dati personali sono trattati con strumenti informatici e/o telematici. Sono adottate
        adeguate misure di sicurezza per prevenire perdita dei dati, usi illeciti o non corretti ed
        accessi non autorizzati.
      </p>

      <h2 class="mt-16 text-3xl font-semibold tracking-tight text-gray-900">
        Comunicazione e diffusione dei dati
      </h2>
      <p class="mt-6 leading-7">
        I dati personali forniti dall’utente non saranno diffusi né trasferiti fuori dall’UE.
        Potranno essere comunicati a soggetti terzi in qualità di responsabili del trattamento o
        autonomi titolari per servizi strettamente strumentali alle finalità sopra indicate.
        L’elenco aggiornato è disponibile presso la sede legale del Titolare.
      </p>

      <h2 class="mt-16 text-3xl font-semibold tracking-tight text-gray-900">
        Cookies
      </h2>
      <p class="mt-6 leading-7">
        I cookie sono file di testo che il sito può memorizzare sul dispositivo, previo consenso
        ove richiesto. È possibile abilitare/disabilitare i cookie tramite le impostazioni del
        browser. L’abilitazione dei cookie consente un’esperienza di navigazione più fluida e
        il riconoscimento dell’utente nelle visite successive.
      </p>

      <h2 class="mt-16 text-3xl font-semibold tracking-tight text-gray-900">
        Diritti degli interessati
      </h2>
      <p class="mt-6 leading-7">
        Gli interessati possono, in qualsiasi momento, esercitare i diritti previsti dagli artt. 15–22
        del GDPR: revocare il consenso, richiedere accesso, rettifica, cancellazione, limitazione,
        opposizione al trattamento, portabilità dei dati, nonché proporre reclamo al Garante per la
        protezione dei dati personali.
      </p>

      <h2 class="mt-16 text-3xl font-semibold tracking-tight text-gray-900">
        Condizioni per il consenso dei minori
      </h2>
      <p class="mt-6 leading-7">
        Se l’utente ha meno di 16 anni, il consenso al trattamento dei dati deve essere fornito da
        un genitore o da un tutore legale.
      </p>

      <h2 class="mt-16 text-3xl font-semibold tracking-tight text-gray-900">
        Periodo di conservazione dei dati
      </h2>
      <p class="mt-6 leading-7">
        I dati sono conservati per il tempo necessario a evadere la richiesta dell’utente e, comunque,
        per il tempo massimo previsto dalla normativa applicabile.
      </p>

      <h2 class="mt-16 text-3xl font-semibold tracking-tight text-gray-900">
        Modifiche all’informativa
      </h2>
      <p class="mt-6 leading-7">
        Il Titolare si riserva il diritto di modificare la presente informativa privacy in qualsiasi
        momento. Si invita l’utente a consultare periodicamente questa pagina per eventuali aggiornamenti.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSeoMeta, useHead, useRuntimeConfig } from '#imports'

// Recupera URL del sito da runtimeConfig
const config = useRuntimeConfig()
const SITE_NAME = 'Claudio Fava Architetto'
const SITE_URL = config.public.siteUrl || 'https://www.favaclaudio.com'
const OG_IMAGE = `${SITE_URL}/img/PaintIt/SantAmbrogio_01b.webp`
const PAGE_URL = `${SITE_URL}/privacy-policy`
const PAGE_DESC = 'Informativa sulla privacy e sul trattamento dei dati personali ai sensi del GDPR (Regolamento UE 2016/679) per gli utenti del sito www.favaclaudio.com.'

// ----------------------
// SEO META TAGS
// ----------------------
useSeoMeta({
  title: `Privacy Policy — ${SITE_NAME}`,
  description: PAGE_DESC,
  ogTitle: `Privacy Policy — ${SITE_NAME}`,
  ogDescription: PAGE_DESC,
  ogType: 'article',
  ogUrl: PAGE_URL,
  ogImage: OG_IMAGE,
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterCard: 'summary_large_image',
  twitterTitle: `Privacy Policy — ${SITE_NAME}`,
  twitterDescription: PAGE_DESC,
  twitterImage: OG_IMAGE,
  robots: 'index, follow'
})

// ----------------------
// HEAD TAGS & JSON-LD
// ----------------------
useHead({
  link: [
    { rel: 'canonical', href: PAGE_URL },
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
  ],
  meta: [
    { name: 'keywords', content: 'privacy policy, GDPR, protezione dati personali, architetto, Torino' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Privacy Policy',
        url: PAGE_URL,
        description: PAGE_DESC,
        isPartOf: {
          '@type': 'WebSite',
          name: SITE_NAME,
          url: SITE_URL
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/img/logo_black.png`
          }
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: PAGE_URL }
          ]
        }
      })
    }
  ] as any
})
</script>

