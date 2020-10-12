
import Component from '../packages/component'

const components = [
  Component
]

const install = function (Vue) {
  components.forEach(component => {
    if (component && component.name) {
      Vue.component(component.name, component)
    }
  })
}

// 提供版本号，install方法
export default {
  version: '0.0.1',
  install,
  Component
}
