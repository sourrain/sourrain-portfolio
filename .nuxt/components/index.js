export { default as ArtworkBlock } from '../..\\components\\ArtworkBlock.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as LoadingPage } from '../..\\components\\LoadingPage.vue'
export { default as PrismicElement } from '../..\\components\\PrismicElement.vue'
export { default as Tag } from '../..\\components\\Tag.vue'
export { default as Three } from '../..\\components\\Three.vue'

export const LazyArtworkBlock = import('../..\\components\\ArtworkBlock.vue' /* webpackChunkName: "components/artwork-block" */).then(c => c.default || c)
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyLoadingPage = import('../..\\components\\LoadingPage.vue' /* webpackChunkName: "components/loading-page" */).then(c => c.default || c)
export const LazyPrismicElement = import('../..\\components\\PrismicElement.vue' /* webpackChunkName: "components/prismic-element" */).then(c => c.default || c)
export const LazyTag = import('../..\\components\\Tag.vue' /* webpackChunkName: "components/tag" */).then(c => c.default || c)
export const LazyThree = import('../..\\components\\Three.vue' /* webpackChunkName: "components/three" */).then(c => c.default || c)
