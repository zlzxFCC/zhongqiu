import App from '../App'

const index = r => require.ensure([], () => r(require('../page/index/index')), 'index')
const Edit = r => require.ensure([], () => r(require('../components/Edit')), 'Edit')
const Result = r => require.ensure([], () => r(require('../components/Result')), 'Result')
const Answer = r => require.ensure([], () => r(require('../components/Answer')), 'Answer')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        {
            path: '',
            redirect: '/Edit'
        },
        {
          path: '/Edit',
          component: Edit,
        },
        {
          path: '/Result',
          component: Result,
        },
        {
          path: '/Answer',
          component: Answer,
        }
    ]
}]
