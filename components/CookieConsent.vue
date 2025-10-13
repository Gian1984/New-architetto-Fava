<template>
  <!-- Banner -->
  <div
      v-if="mounted && !decision"
      class="fixed inset-x-0 bottom-0 z-50 border-t border-gray-800 bg-gray-900/95 text-white backdrop-blur"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-modal="true"
  >
    <div class="mx-auto max-w-7xl p-4 md:p-5">
      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <!-- Testo -->
        <div class="text-sm leading-6 md:max-w-3xl">
          <p id="cookie-title" class="font-semibold tracking-wide">Cookie & Privacy</p>
          <p class="text-gray-300">
            Utilizziamo solo cookie tecnici essenziali e, con il tuo consenso, cookie di
            statistica e di marketing. Puoi gestire le preferenze qui sotto. Maggiori
            dettagli nella
            <NuxtLink to="/privacy-policy" class="text-indigo-400 underline hover:text-indigo-300">
              Privacy Policy
            </NuxtLink>.
          </p>

          <div class="mt-3 flex flex-wrap gap-6">
            <label class="flex items-center gap-2 text-xs text-gray-300">
              <input type="checkbox" checked disabled class="h-4 w-4 rounded border-gray-600 bg-gray-800" />
              Essenziali (sempre attivi)
            </label>

            <label class="flex items-center gap-2 text-xs text-gray-300">
              <input type="checkbox" v-model="prefs.analytics" class="h-4 w-4 rounded border-gray-600 bg-gray-800" />
              Statistica (Analytics)
            </label>

            <label class="flex items-center gap-2 text-xs text-gray-300">
              <input type="checkbox" v-model="prefs.ads" class="h-4 w-4 rounded border-gray-600 bg-gray-800" />
              Marketing / Personalizzazione
            </label>
          </div>
        </div>

        <!-- Azioni -->
        <div class="flex gap-2 self-end md:self-auto">
          <button
              type="button"
              class="rounded px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600"
              @click="rejectAll"
          >
            Rifiuta
          </button>
          <button
              type="button"
              class="rounded px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-700"
              @click="save"
          >
            Salva
          </button>
          <button
              type="button"
              class="rounded px-4 py-2 text-sm bg-green-600 hover:bg-green-700"
              @click="acceptAll"
          >
            Accetta tutto
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Floating button to reopen -->
  <button
      v-if="mounted && decision"
      @click="resetConsent"
      class="fixed bottom-4 left-4 z-50 rounded-full bg-gray-800 p-3 shadow-lg ring-1 ring-black/10 hover:bg-gray-700"
      title="Modifica preferenze cookie"
      aria-label="Modifica preferenze cookie"
  >
    <!-- Cookie SVG -->
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

      <g id="SVGRepo_bgCarrier" stroke-width="0"/>

      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

      <g id="SVGRepo_iconCarrier"> <path d="M9 16H9.01M12 11H12.01M7 10H7.01M15 16H15.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C12 5.76142 13.7909 8 16 8C16 10.2091 18.2386 12 21 12Z" stroke="#f5f5f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>

    </svg>
  </button>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'

type ConsentPrefs = { analytics: boolean; ads: boolean }
const STORAGE_KEY = 'cookieConsent.v1'

const mounted = ref(false)
const decision = ref<null | 'accepted' | 'rejected' | 'custom'>(null)
const prefs = reactive<ConsentPrefs>({ analytics: true, ads: false })

onMounted(() => {
  mounted.value = true
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const saved = JSON.parse(raw) as { decision: typeof decision.value; prefs: ConsentPrefs }
      if (saved?.prefs) Object.assign(prefs, saved.prefs)
      if (saved?.decision) {
        decision.value = saved.decision
        applyConsent(prefs)
      }
    }
  } catch {
    // ignore
  }
})

function saveState(kind: typeof decision.value) {
  decision.value = kind
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ decision: kind, prefs }))
}

function acceptAll() {
  prefs.analytics = true
  prefs.ads = true
  applyConsent(prefs)
  saveState('accepted')
  // pushChoiceEvent('accept_all')
}

function rejectAll() {
  prefs.analytics = false
  prefs.ads = false
  applyConsent(prefs)
  saveState('rejected')
  // pushChoiceEvent('reject_all')
}

function save() {
  applyConsent(prefs)
  saveState('custom')
  // pushChoiceEvent('custom')
}

function resetConsent() {
  decision.value = null
  localStorage.removeItem(STORAGE_KEY)
}

/**
 * Applica le preferenze.
 * In assenza di Tag Manager/gtag, qui ci limitiamo
 * a predisporre gli hook commentati per uso futuro.
 */
function applyConsent(p: ConsentPrefs) {
  if (typeof window === 'undefined') return

  // Esempio (commentato) per quando aggiungerai gtag/GTManager:
  /*
  const gtag = (window as any).gtag || ((...args: any[]) => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(args)
  })

  gtag('consent', 'update', {
    analytics_storage: p.analytics ? 'granted' : 'denied',
    ad_storage: p.ads ? 'granted' : 'denied',
    ad_user_data: p.ads ? 'granted' : 'denied',
    ad_personalization: p.ads ? 'granted' : 'denied'
  })

  if (p.analytics) {
    const payload = {
      page_path: location.pathname + location.search + location.hash,
      page_location: location.href,
      page_title: document.title
    }
    window.dataLayer?.push({ event: 'page_view', ...payload })
    gtag('event', 'page_view', payload)
  }
  */
}

/* Hook per dataLayer (commentato finché non avrai un TM)
function pushChoiceEvent(action: 'accept_all' | 'reject_all' | 'custom') {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'consent_choice',
    consent_action: action,
    consent_analytics: prefs.analytics,
    consent_ads: prefs.ads
  })
}
*/
</script>



