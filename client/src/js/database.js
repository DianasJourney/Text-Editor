import { openDB } from 'idb'

const initdb = async () =>
  openDB('jate', 2, {
    upgrade (db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists')
        return
      }
      db.createObjectStore('jate')
      console.log('jate database created')
    }
  })


export const putDb = async content => {

  const contactDb = await openDB('jate')

  const tx = contactDb.transaction('jate', 'readwrite')

  const store = tx.objectStore('jate')

  const request = store.put(content, 'Editor')

  const result = await request
  console.log('🚀 - data saved to the database', result)
}

export const getDb = async () => {
  console.log('GET from the database')

  // Create connection to the database and version we want to use
  const contactDb = await openDB('jate')

  const tx = contactDb.transaction('jate', 'readonly')

  const store = tx.objectStore('jate')


  const request = store.get('Editor')

  // Get confirmation of the request.
  const result = await request
  console.log('result.value', result)
  return result
}

initdb()
