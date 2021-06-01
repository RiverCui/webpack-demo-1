import x from './x.js'
import jpg from './assets/1.jpg'
console.log(jpg)

const div = document.getElementById('app')
console.log('div')
console.log(div)
div.innerHTML = `
  <img src="${jpg}">
`

const button = document.createElement('button')
button.innerText ='懒加载'
button.onclick = ()=>{
  const promise = import('./lazy')
  promise.then((module)=>{
    const fn = module.default
    fn()
  }, ()=>{
    console.log('模块加载错误')
  })
}

div.appendChild(button)