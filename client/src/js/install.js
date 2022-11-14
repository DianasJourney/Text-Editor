const butInstall = document.getElementById('buttonInstall')

window.addEventListener('beforeinstallprompt', event => {
  window.deferredPrompt = event

  // Show button.
  butInstall.classList.toggle('hidden', false)
})

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt
  if (!promptEvent) {
    return
  }

  // Show prompt.
  promptEvent.prompt()


  window.deferredPrompt = null

  // Hide the button.
  butInstall.classList.toggle('hidden', true)
})

window.addEventListener('appinstalled', event => {
  window.deferredPrompt = null
})
