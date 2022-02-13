const FilterController =  () =>{

    const handleSelect = (handleFilters , e) =>{
        const name = e.target.name;
        const value = e.target.value;
        
        if(name === 'products'){
            document.getElementById('state').value = 'state';            
            document.getElementById('city').value = 'city';            
        }else if(name === 'state'){            
            document.getElementById('city').value = 'city';
        }
        handleFilters(name , value);  
    }
    return {
        handleSelect,
    }
}

export default FilterController ;