// Muda o tema com toggle da classe 'dark' em <body>
const toggler = document.getElementById('toggleTheme')
const body = document.body

toggler.addEventListener('input', (e) => {
  const isChecked = e.target.checked

  if(isChecked) {
    body.classList.add('dark')
  } else {
    body.classList.remove('dark')
  }
})