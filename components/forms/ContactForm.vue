<!-- components/forms/ContactForm.vue -->
<template>
  <section :id="id" class="bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
      <!-- titolo -->
      <div class="text-center">
        <h2 class="text-xl mx-auto max-w-full text-gray-900 tracking-tight border-b border-black leading-10 pb-2">
          {{ title }}
        </h2>
      </div>

      <!-- spazio tra linea nera e box grigio -->
      <div class="mt-10 lg:mt-12">
        <!-- contenitore allineato agli altri blocchi -->
        <div class="bg-gray-200 px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
          <div class="mx-auto max-w-2xl text-center">
            <p class="text-gray-900 text-xl">{{ subtitle }}</p>
          </div>

          <!-- Form -->
          <form ref="form" @submit.prevent="sendEmail" class="mx-auto mt-12 sm:mt-14 max-w-2xl">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label for="first-name" class="block text-sm font-light text-gray-900">Nome</label>
                <div class="mt-2.5">
                  <input v-model="firstName" type="text" id="first-name" name="from_name" autocomplete="given-name"
                         required class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-gray-300 focus:outline-indigo-400" />
                </div>
              </div>

              <div>
                <label for="last-name" class="block text-sm font-light text-gray-900">Cognome</label>
                <div class="mt-2.5">
                  <input v-model="lastName" type="text" id="last-name" name="last_name" autocomplete="family-name"
                         required class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-gray-300 focus:outline-indigo-400" />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="location" class="block text-sm font-light text-gray-900">Area di interesse</label>
                <div class="mt-2.5 relative">
                  <select v-model="interestArea" id="location" name="interest_area"
                          class="w-full appearance-none rounded-md bg-white py-2 pl-3 pr-9 text-base text-gray-900 outline-gray-300 focus:outline-indigo-400 sm:text-sm">
                    <option>Scenografie e allestimenti</option>
                    <option selected>Ristrutturazioni</option>
                    <option>Product design</option>
                    <option>Retail</option>
                    <option>Nuove costruzioni</option>
                  </select>
                  <ChevronDownIcon class="pointer-events-none absolute right-2 top-2.5 h-5 w-5 text-gray-500" aria-hidden="true" />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-light text-gray-900">Email</label>
                <div class="mt-2.5">
                  <input v-model="email" type="email" id="email" name="from_email" autocomplete="email" required
                         class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-gray-300 focus:outline-indigo-400" />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="phone-number" class="block text-sm font-light text-gray-900">Telefono</label>
                <div class="mt-2.5">
                  <input v-model="phoneNumber" type="text" id="phone-number" name="phone"
                         class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-gray-300 focus:outline-indigo-400" />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="message" class="block text-sm font-light text-gray-900">Messaggio</label>
                <div class="mt-2.5">
                  <textarea v-model="message" id="message" name="message" rows="4" required
                            class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-gray-300 focus:outline-indigo-400"></textarea>
                </div>
              </div>

              <!-- Honeypot antispam (nascosto) -->
              <div class="hidden">
                <label>Company</label>
                <input type="text" name="company_hp" autocomplete="off">
              </div>

              <div class="sm:col-span-2">
                <label for="captcha" class="block text-sm font-light text-gray-900">CAPTCHA verification: 6 + 6 = ?</label>
                <div class="mt-2.5">
                  <input v-model="captchaAnswer" type="number" id="captcha" name="captcha"
                         class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border focus:outline-indigo-400" />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label class="flex gap-3 items-start">
                  <input v-model="consent" type="checkbox" id="consent"
                         class="mt-1 rounded border-gray-300 focus:outline-indigo-600">
                  <span class="font-light text-gray-900 text-sm">
                    Ho letto e accetto
                    <NuxtLink class="text-indigo-500 hover:text-indigo-600" to="/privacy-policy">i termini e le condizioni</NuxtLink>.
                  </span>
                </label>
              </div>
            </div>

            <div class="mt-10">
              <button
                  :disabled="sending || captchaAnswer !== 12"
                  type="submit"
                  class="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline-indigo-400"
                  :class="captchaAnswer === 12 ? 'bg-indigo-400 hover:bg-indigo-500' : 'bg-gray-400 cursor-not-allowed'">
                <span v-if="!sending">Invia</span>
                <span v-else>Invio…</span>
              </button>
            </div>

            <div v-if="errorMessage" class="mt-3 rounded-md bg-red-500 p-4 text-center text-white">
              <p class="text-sm font-medium">{{ errorMessage }}</p>
            </div>

            <div v-if="confirmation" class="mt-3 rounded-md bg-green-50 p-4 text-center">
              <p class="text-sm font-medium text-green-800">{{ confirmation }}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'
import { useRuntimeConfig, useNuxtApp } from '#imports'

type Props = {
  id?: string
  title?: string
  subtitle?: string
}
const props = withDefaults(defineProps<Props>(), {
  id: 'formCont',
  title: 'CONTATTI',
  subtitle: 'RICEVI LA TUA CONSULENZA GRATUITA'
})

const form = ref<HTMLFormElement | null>(null)
const firstName = ref('')
const lastName = ref('')
const interestArea = ref<'Ristrutturazioni' | string>('Ristrutturazioni')
const email = ref('')
const phoneNumber = ref('')
const message = ref('')
const consent = ref(false)
const confirmation = ref('')
const errorMessage = ref('')
const captchaAnswer = ref<number | null>(null)
const sending = ref(false)

const config = useRuntimeConfig()
const { $emailjs } = useNuxtApp()

async function sendEmail () {
  if (!consent.value) { errorMessage.value = 'Devi accettare i termini e le condizioni.'; return }
  if (captchaAnswer.value !== 12) { errorMessage.value = 'Captcha errato. Riprova.'; return }
  if (!form.value) { errorMessage.value = 'Modulo non trovato.'; return }
  // honeypot
  const hp = (new FormData(form.value).get('company_hp') || '').toString()
  if (hp.trim() !== '') { confirmation.value = 'Grazie!'; return } // bot: fai finta di inviare

  try {
    sending.value = true
    errorMessage.value = ''
    confirmation.value = ''
    await ($emailjs as any).sendForm(
        String(config.public.emailjsServiceId),
        String(config.public.emailjsTemplateId),
        form.value,
        { publicKey: String(config.public.emailjsPublicKey) }
    )
    confirmation.value = 'Il tuo messaggio è stato correttamente inviato!'
    // reset campi
    form.value.reset()
    firstName.value = lastName.value = email.value = phoneNumber.value = message.value = ''
    interestArea.value = 'Ristrutturazioni'
    consent.value = false
    captchaAnswer.value = null
  } catch (e: any) {
    errorMessage.value = e?.text || 'Si è verificato un errore. Riprova più tardi.'
    // console.error('EmailJS error:', e)
  } finally {
    sending.value = false
  }
}
</script>
