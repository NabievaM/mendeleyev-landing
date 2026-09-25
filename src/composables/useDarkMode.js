import { ref } from 'vue'

const isDark = ref(document.documentElement.classList.contains('dark'))

function applyDark(value) {
  isDark.value = value
  document.documentElement.classList.toggle('dark', value)
  localStorage.setItem('theme', value ? 'dark' : 'light')
}

function toggleDark() {
  applyDark(!isDark.value)
}

export function useDarkMode() {
  return { isDark, toggleDark }
}
