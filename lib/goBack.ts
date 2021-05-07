/**
 * goBack is a function which makes the router go back by n.
 * 
 * @param {CombinedVueInstance} router
 */

function goBack(router, n) {
    console.log(router / n);
    
    return router.go(-n);
}

export default goBack