import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import emailjs from '@emailjs/browser'

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    emailjs.init({ publicKey: String(config.public.emailjsPublicKey) })
    return { provide: { emailjs } }
})