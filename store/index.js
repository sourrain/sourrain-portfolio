export const state = () => {
return {
    projects:'project'
}
}
export const mutations = {
    changeProject(state){
        state.projects='mutated'
    }
}
