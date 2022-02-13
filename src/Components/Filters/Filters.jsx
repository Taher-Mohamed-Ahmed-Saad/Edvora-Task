import { useEffect, useState } from 'react';
import style from './Filters.module.scss';
import FilterController from './Controller';

const Filters = ({names , statess , cites , handleFilters}) => {

    const [selectedProducts , setSelectedProducts] = useState(null);
    const [states , setStates] = useState(null);
    const [cityes , setCityes] = useState(null);
    const {handleSelect} = FilterController();

    useEffect(()=>{
        setSelectedProducts([...new Set(names.map(product => product['product_name']))]);
        setStates([...new Set(statess.map(product => product.address.state))]);
        setCityes([...new Set(cites.map(product => product.address.city))]);
    },[names,statess , cites]);
    
    return ( 
        <div className={style.container}>
            <div>Filters</div>
            <hr />
            <div className={style.arrow1}> &#9660;</div>
            <select id='products' name='products' onChange={(e) => handleSelect(handleFilters ,e)} defaultValue='products'>
                <option value='products' > Products </option>
                {selectedProducts &&
                    selectedProducts.map((product , index)=>(
                        <option value={product} key= {index}>{product}</option>
                    ))
                }               
            </select>
            <div className={style.arrow2}> &#9660;</div>
            <select id='state' name='state' onChange={(e) => handleSelect(handleFilters ,e)} defaultValue='state'>
                <option value='state' > State  </option>
                {states &&
                    states.map((state, index)=>(
                        <option value={state} key= {index}>{state} </option>
                    ))
                }  
            </select>
            <div className={style.arrow3}> &#9660;</div>
            <select id='city' name='city' onChange={(e) => handleSelect(handleFilters ,e)} defaultValue='city'>
                <option value='city' > City </option>
                {cityes &&
                    cityes.map((city, index)=>(
                        <option value={city} key= {index}>{city}</option>
                    ))
                }
            </select>
        </div>
     );
}
 
export default Filters;