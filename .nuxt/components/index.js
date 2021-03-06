export { default as Card } from '../..\\components\\Card.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as LoadingPage } from '../..\\components\\LoadingPage.vue'

export const LazyCard = import('../..\\components\\Card.vue' /* webpackChunkName: "components/card" */).then(c => c.default || c)
export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyLoadingPage = import('../..\\components\\LoadingPage.vue' /* webpackChunkName: "components/loading-page" */).then(c => c.default || c)
