<template>
  <header>
	  <nuxt-link to="/" class="main_logo">Sourrain</nuxt-link>
	  <nav>
		  <nuxt-link to="/work">Work</nuxt-link>
		  <nuxt-link to="/about">About</nuxt-link>
	  </nav>
  </header>
</template>
<style>
header {
	padding: 15px 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
header  {
	font-size: 24px;
	font-weight: 500;
}
.main_logo{
 font-family: "EksellDisplayWeb-Large";
font-weight: 600;
}
nav {
	display: flex;
	align-items: center;
	margin: 0 -15px;
}
nav a {
	display: block;
	margin: 0 15px;
}
</style>