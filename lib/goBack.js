/**
 * goBack is a function which makes the router go back by n.
 * 
 * @param {any} router - The default Vuejs $router object (access with this.$router)
 * @param {Number} n - The number of pages to go back.
 * @returns
 */
function goBack(router, n) {
    router.go(-n);
}

export default goBack