<template>
  <div class="flex flex-col items-center">
      <p class="text-xl w-screen h-40 flex items-center p-3">Hello I am an Animator who love to make some creative coding magic combined with Theatre vibe
      </p>
        <!-- tags -->
    <div class="flex justify-around w-screen h-5 text-sm">
        <button @click="resetTag">all</button>
    <tag 
      v-for="(t, index) of tags"
      :key="index"
      v-bind:tag="t"
      @filterChange="changeFilter"
    ></tag>
    </div>
     <!-- search -->
    <input class="" type="text" v-model="search" placeholder="search projects" />
    <!-- card -->
  <div class="  bg-blue text-xs flex justify-around h-screen w-screen p-5">
    <card class="w-80 p-5"
      v-for="(b, index) of searchProjects"
      :key="index"
      v-bind:block="b"
      :reset="resetTheTag"
    >
    </card>
  </div>
  </div>
</template>

<script>
import Prismic from "@prismicio/client";
export default {
  data() {
    return {
      blocks: [],
      tags: [],
      test: [],
      resetTheTag: [],
      selectedTag: "",
      search: "",
    };
  },
  methods: {
    resetTag() {
      this.selectedTag = "";
    },
    changeFilter(newTag) {
      this.selectedTag = newTag;
    },
  },
  computed: {
    filteredProjects() {
      //if user didn't click any tag then display all projects
      if (!this.selectedTag == "") {
        let projects = [];
        //display only what user selected by tags
        for (let project of this.blocks) {
          if (project.tags.includes(this.selectedTag)) {
            projects.push(project);
          }
        }
        //.type==="project"
        return projects;
      } else {
        return this.blocks
        // let f_projects = [];
        // for (let project of this.blocks) {
        //   if (project.type === "project") {
        //     f_projects.push(project);
        //     return f_projects
        //   }
        // }
      }
    },
    //searchbar
    searchProjects() {
      if (this.search) {
        return this.filteredProjects.filter((project) => {
          console.log(project.data.title[0].text);
          //return any project matched with the title
          const s_title = project.data.title[0].text;
  //         const s_subtitle =''
  //         if(project.type==="project"){
  // return s_subtitle=project.data.subtitle[0].text
         // }
          
          //manage the input into same lowercase
          return s_title.toLowerCase().match(this.search.toLowerCase());
        });
      } else {
        return this.filteredProjects;
      }
    },
  },
  mounted() {
    const client = Prismic.client(
      "https://sourrain-site.cdn.prismic.io/api/v2"
    );

    client.query("").then((res) => {
      console.log(res); //take a look at Prismic api structure
      this.blocks = res.results;
      const tagObject = res.results.reduce((a, c) => {
        a[c.tags] = c.tags;
        return a;
      }, {}); //keep the tags object only
      const tagList = Object.values(tagObject).flat(); //flatten array
      const tagCat = tagList.reduce((a, c) => {
        a[c] = c;
        return a;
      }, {}); //overwrite the duplicates by turn array into a new object with the value
      this.tags = Object.values(tagCat);
      console.log(tags);
      return this.tags; //return the tags
    });
  },
};
</script>
<style scoped>
</style>