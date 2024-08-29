const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const message = [
  'message one',
  'message two',
  'message three',
  'message four',
]

button.addEventListener('click', () => createNotification()) 

  function createNotification() {
    const notification = document.createElement('div')
    notification.classList.add('toast')
    notification.innerText = message[Math.floor(Math.random() * message.length)]
    toasts.appendChild(notification)

    setTimeout(() =>{
      notification.remove()
    }, 3000)


  }
