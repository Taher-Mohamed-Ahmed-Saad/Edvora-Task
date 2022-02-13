const BrandsController = () => {
    const handleScroll = (e) =>{
        console.log(e.target.name);
        document.getElementById(e.target.name).scrollLeft += 230;
        document.getElementById(e.target.name).scrollTop += 193;
    }
    return {
        handleScroll,
    };
}
 
export default BrandsController;