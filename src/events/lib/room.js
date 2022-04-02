/*
Tips:
1. 必须加上模块名称，避免和其他模块冲突
2. 务必按照命名规范(Should代表请求操作,Will代表将要操作,Did代表已经操作)
*/

const namespace = 'Room/'

const events = ['DidClickMenu', 'Reset', 'DidClickAside']

const result = {}
events.forEach(event => {
  result[event] = namespace + event
})

export default result
