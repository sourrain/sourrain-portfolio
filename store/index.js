//headless CMS API
import Prismic from '@prismicio/client'

export const state = () => {
    return {
        projects: [],//a list of projects
        goback: null,//back to previous page
        theProject: {},//the project 
    }
}
export const mutations = {
    loadProjects(state, project) {
        state.projects.push(...project)
    },//add projects into the state array
    goBack(state) {
        state.goBack = this.$router.go(-1)
    },//back to previous page
    loadProject(state, theProject) {
        state.theProject=theProject
    }
}
export const actions = {
    async getProjects({ commit,params }) {
        const api = await Prismic.api(
            "https://sourrain-site.cdn.prismic.io/api/v2"//asnyc API from CMS
        )
    if(this.$store.projects===[]){
        api.query('').then((res) => {//async all projects
            commit("loadProjects", res.results)
        }
        )
    }else{

        }
        const res = await api.getByUID('project',params.commit);//async a project which has type with project by UID
        commit('loadProject', res)
    }

}
