export { default as Cardold } from '../..\\components\\Cardold.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as LoadingPage } from '../..\\components\\LoadingPage.vue'
export { default as Projects } from '../..\\components\\Projects.vue'

export const LazyCardold = import('../..\\components\\Cardold.vue' /* webpackChunkName: "components/cardold" */).then(c => c.default || c)
export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyLoadingPage = import('../..\\components\\LoadingPage.vue' /* webpackChunkName: "components/loading-page" */).then(c => c.default || c)
export const LazyProjects = import('../..\\components\\Projects.vue' /* webpackChunkName: "components/projects" */).then(c => c.default || c)
