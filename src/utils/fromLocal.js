function loadFromLocal(key) {
  const jsonString = localStorage.getItem(key)
  return JSON.parse(jsonString)
}

function saveToLocal(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

export { loadFromLocal, saveToLocal }
