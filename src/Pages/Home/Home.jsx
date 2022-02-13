import { useEffect, useState } from "react";
import Brands from "../../Components/Brands/Brands";
import Filters from "../../Components/Filters/Filters";
import style from './Home.module.scss';

const Home = () => {
    
    const [products , setProducts ] = useState(null);
    const [isPending ,setIsPending] = useState(true);
    const [error , setError] = useState(null);
    const [filters, setFilters] = useState({}); 
    const [filteredProducts , setFilteredProducts ]  = useState(null);
    const [filteredOptions , setFilteredOptions ]  = useState([]);
    const [filteredOptionss , setFilteredOptionsss ]  = useState([]);

    const handleFilters = (name , value)=>{

        if (name === 'products'){
            if (value === 'products'){
                setFilters({});
            } else {
                setFilters({[name] : value});
            }
        }else if (name === 'state'){
            if(filters.products){
                if(value === 'state'){
                    setFilters({'products':filters.products});    
                } else{
                    setFilters({'products':filters.products , [name] : value});    
                }
            } else{
                if(value === 'state'){
                    setFilters({});    
                }else{
                    setFilters({[name] : value});
                }
            }
            
        }else {
            if(value === 'city'){
                setFilters(Object.fromEntries(Object.entries(filters).filter(([key]) => key !== name)));
            }else{
                setFilters({
                    ...filters,
                    [name] :value
                });
            }
        }  
    }

    useEffect(()=>{
        fetch('https://assessment-edvora.herokuapp.com/')
            .then(res =>res.json())
            .then(data => {setProducts(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => setError(err.message));
    },[]); 

    useEffect(()=>{  
        if (!isPending){
            let a = products.filter((product) => !filters['products'] || filters.products === product['product_name']);
            setFilteredOptions(a);
            a = a.filter((product) => !filters['state'] || filters.state === product.address.state);
            setFilteredOptionsss(a);
            a = a.filter((product) => !filters['city'] || filters.city === product.address.city);
            setFilteredProducts(a);
        }
    },[filters , isPending]);

    return (         
        <div className={style.container}>
            <h1 className={style.h1Hidden}>Edvora</h1>
            <div className={style.filters}>
                {filteredProducts && 
                    <Filters 
                    names = {products} 
                        statess={filteredOptions} 
                        cites={filteredOptionss}
                        handleFilters={handleFilters}
                        />  
                    }  
            </div>
            <div className={style.content}>
                <h1 className={style.h1}>Edvora</h1>
                <h3 className={style.h3}>Products</h3>

                { isPending && <div> Loading data ........ </div>   }

                { error && <div> {error} </div> }

                {filteredProducts &&   
                    <div className={style.list} >
                        <Brands products={filteredProducts} />
                    </div>            
                } 
            </div>
            
        </div>
     );
}
 
export default Home;