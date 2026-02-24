self.addEventListener('install', () => {
  console.log('XelaSign App installed')
})

self.addEventListener('activate', () => {
  console.log('XelaSign App activated')
})

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request))
})
