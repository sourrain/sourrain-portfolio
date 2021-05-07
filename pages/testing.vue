
<template>
    <div>
        {{ }}
    </div>
</template>
<script>
import Prismic from '@prismicio/client'

export default {
async asyncData(context) {
        console.log(context)
        const params = context.params
        const commit = context.commit

        const api = await Prismic.api(
            "https://sourrain-site.cdn.prismic.io/api/v2"//asnyc API from CMS
        )
        // api.query('').then((res) => {//async all projects
        //     commit("loadProjects", res.results)
        // })
        
        const res = await api.getByUID('project', "chamber404");//async a project which has type with project by UID

        console.log(res)
        // commit('loadProject', res)
    }
}
</script>