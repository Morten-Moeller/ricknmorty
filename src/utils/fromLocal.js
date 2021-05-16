function loadFromLocal(key) {
  const jsonString = localStorage.getItem(key)
  const data = JSON.parse(jsonString)
  return JSON.parse(data)
}

function saveToLocal(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

export { loadFromLocal, saveToLocal }
