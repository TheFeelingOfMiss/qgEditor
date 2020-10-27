
import HatechWebComponentEditor from '../packages/component'

const components = [
  HatechWebComponentEditor
]

const install = function (Vue) {
  components.forEach(component => {
    if (component && component.name) {
      Vue.component(component.name, component)
    }
  })
}

// 版本号，与package.json中的版本保持一致
const version = '0.0.1'

export default {
  version,
  install,
  HatechWebComponentEditor
}
export {
  version,
  install,
  HatechWebComponentEditor
}
