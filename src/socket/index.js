let socket = undefined
let isOpen = false

connectSocket()

function connectSocket() {
  socket = uni.connectSocket({
    url: 'ws://172.31.57.13:3399'
  })
}

uni.onSocketOpen(function (res) {
  console.log(res)
  isOpen = true
})

uni.onSocketError(function (err) {
  console.log(err)
  isOpen = false
  connectSocket()
})

uni.onSocketClose(function (res) {
  console.log(res)
  isOpen = false
  connectSocket()
})

export function send(msg) {
  console.log(msg)
  if (isOpen) {
    uni.sendSocketMessage({
      data: msg
    })
  } else {
    uni.showToast({ title: '未连接到服务器', icon: 'error' })
  }
}

export default socket
