// plugins/fancybox.client.ts
import { Fancybox } from '@fancyapps/ui'

export default defineNuxtPlugin(() => {
    // Siamo sicuramente lato client grazie al suffisso .client.ts

    const router = useRouter()

    const rebind = () => {
        try {
            Fancybox.destroy()
        } catch { /* ignore */ }

        // Se vuoi evitare errori TS usa il cast a any sulle opzioni
        Fancybox.bind('[data-fancybox]', {
            groupAll: true,
            hideScrollbar: false,
            // thumbs: { autoStart: false },
        } as any)
    }

    // Primo bind quando l’app è pronta (dopo il primo render)
    queueMicrotask(rebind)

    // Re-bind ad ogni cambio di route (dopo l'aggiornamento del DOM)
    router.afterEach(() => {
        setTimeout(rebind, 0)
    })

    // Espone $fancybox in app (useNuxtApp().$fancybox)
    return {
        provide: {
            fancybox: Fancybox
        }
    }
})
