/* eslint-disable no-undef */
let socket
let isOpen = false

connectSocket()

function connectSocket() {
  socket = uni.connectSocket({
    url: 'ws://172.31.57.121:3398'
  })
}

uni.onSocketOpen(function (res) {
  console.log(res)
  isOpen = true
})

uni.onSocketError(function (err) {
  console.log(err)
  isOpen = false
  setTimeout(() => {
    connectSocket()
  }, 200)
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
