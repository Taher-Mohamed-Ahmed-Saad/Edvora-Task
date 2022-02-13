import style from './ProductCard.module.scss';

const ProductCard = ({product}) => {  

    return ( 
        <div className={style.card} >
            <div className={style.img}>
                <img src={product.image} alt="Product_Image" fallback=""/>
            </div>
            <div className={style.productData}>
                <div>{product['product_name']}</div>
                <div>{product['brand_name']}</div>
                <div> <span> $ </span> {product.price}</div>
            </div>
            <div className={style.bottom} >
                <div>{product.address.state} /{product.address.city}</div>
                <div>
                    <span>Date: </span>
                    <span> {product.date.toString().substr(0,10)} </span>
                </div>
                <div>{product.discription}</div>
            </div>
        </div>
     );
}
 
export default ProductCard;