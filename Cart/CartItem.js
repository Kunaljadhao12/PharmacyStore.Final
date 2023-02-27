
// import CartPage from "./Cart";

// const ProductInfo = (props) =>{
// return(

//     {cart.length > 0 && (
//         <CartPage cart={cart} totalPrice={totalPrice} setCart={setCart} />
//         )}
    
// )
//     }
// const CartItem = () => {
//     const handleAddProduct = (product) =>{
//         const ProductExist = cardItems.find((item) => item.id === product.id);
//         if(ProductExist){
//             setCartItems(cartItems.map((item) => item.id === product.id ?
//             {...ProductExist,quantity:ProductExist.quantity+1}:item)
//             );
//             }
//             else{
//                 setCartItems([...cartItems, {...product,quantity:1}]);
//             }
//     };
    
//     const handleRemoveProduct = (product) =>{
//         const ProductExist = cardItems.find((item) => item.id === product.id);
//         if(ProductExist.quantity===1){
//             setCartItems(cartItems.filter((item)=> item.id !== product.id));
//         }
//         else{
//             setCartItems(
//                 cartItems.map((item) =>
//                 item.id === product.id
//                 ? {...ProductExist,quantity:ProductExist.quantity-1}
//                 :item)
//             )
//         }
//     }
// };

// export default CartItem;