

const Items = ({product_name,price,currency,thumb}) => {
    return(
        <div className="items-info">
            <div className="product-img">
                <img src={thumb} />
            </div>
            <div className="product-name">
                <h3>{product_name}</h3>
            </div>
            <div className="product-name">
                <h3>{currency}</h3>
            </div> 
            <div className="product-name">
                <h3>{price}</h3>
            </div>     
        </div>
    )
}

export default Items;