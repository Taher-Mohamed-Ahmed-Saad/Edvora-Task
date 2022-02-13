import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import style from './Brands.module.scss';
import arrow from '../../assets/arrow.png'
import BrandsController from './Controller';

const Brands = ({products}) => {

    const [brands , setBrands] = useState(null);
    const {handleScroll} = BrandsController();

    useEffect(()=>{        
        setBrands([...new Set(products.map(product => product['brand_name']))]);
    },[products])  
   
        
    return ( 
        <div className={style.container}>
            {brands && 
                brands.map((brand, index1)=>(
                    <div className={style.wrapper} key={index1}>
                        <div className ={style.brandContent} key={4*index1}>
                            <h1  className ={style.h1} key={4*index1+1}>{brand}</h1>
                            <hr  key={4*index1+ 2}/>
                            <div  key={4*index1+3} className={style.brandContainer} id={brand} >                            
                                {                                
                                    products.filter(product => product['brand_name'] === brand).map((product, index2)=>(
                                        <ProductCard product={product} key={index2+1000000} />
                                    ))
                                }
                            </div>                         
                        </div>  
                        <div name={brand} className={style.img} onClick={handleScroll} >
                            <img name={brand} src={arrow} alt="arrow" /> 
                        </div>             
                    </div>             
                ))
            }    
        </div>
    );
}
 
export default Brands;