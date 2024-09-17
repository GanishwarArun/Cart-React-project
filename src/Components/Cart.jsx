import PropTypes from 'prop-types'
import { useContext } from 'react'
import { CartContext } from '../Context/Cart.jsx'

function Cart({ showModal, toggle }) {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);
  
    return (
        showModal && (
            <div className="left-1/4 fixed inset-0 flex flex-col items-center gap-8 bg-white dark:bg-black p-10 font-normal text-black text-sm text-sm dark:text-white uppercase">

                <h1 className='font-bold text-2xl'>Cart</h1>
                <div className='top-10 right-16 absolute'>
                    <button className='bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded font-bold text-white text-xs uppercase focus:outline-none focus:bg-gray-700'
                        onClick={toggle}>Close
                    </button>
                </div>

                <div className='flex flex-col gap-4'>
                    {cartItems.map((item) => (
                        <div key={item.id} className='flex justify-between items-center'>
                            <div className='flex gap-4'>
                                <img src={item.thumbnail} alt={item.title} className='rounded-md h-24' />
                                <div className='flex flex-col'>
                                    <h1 className='font-bold text-lg'>{item.title}</h1>
                                    <p className='text-gray-600'>{item.price}</p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <button className='bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded font-bold text-white text-xs uppercase focus:outline-none focus:bg-gray-700' 
                                    onClick={() => {
                                    addToCart(item)
                                    }}
                                >+</button>
                                <p className='text-gray-600'>{item.quantity}</p>
                                <button className='bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded font-bold text-white text-xs uppercase focus:outline-none focus:bg-gray-700'
                               
                                    onClick={() => {
                                    removeFromCart(item)
                                    }}
                                >-</button>
                            </div>
                        </div>
                    ))}
                    
                </div>
                {
                    cartItems.length > 0 ? (
                        <div className='flex flex-col justify-between items-center'>
                            <h1 className='font-bold text-lg'>Total: ${getCartTotal()} </h1>
                            <button className='bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded font-bold text-white text-xs uppercase focus:outline-none focus:bg-gray-700'
                            onClick={() => {
                                clearCart()
                            }}>Clear Cart</button>
                        </div>
                    ) : (<h1 className='font-bold text-lg'>Your cart is empty</h1>)
                    
                }


            </div>
        )
  )
}

Cart.propTypes = {
    showModal: PropTypes.bool,
    toggle: PropTypes.func
}

export default Cart
