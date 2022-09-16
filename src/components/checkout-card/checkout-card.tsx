import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart-context/cart-context";
import Button from "../button/button";

const CheckoutCard = () => {
  const { cartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const checkout = () => {
    navigate('/thankyou')
  };

  return (
    <div className="relative mx-3 rounded-lg border shadow-sm tablet:w-80 tablet:float-right laptop:mx-20">
      <div className="m-5">
        <h5 className="mb-2 pb-3 border-b border-gray-300 text-center text-2xl font-bold tracking-tight text-gray-900">Checkout</h5>
        <div className="grid grid-cols-2 text-center">
          <div>
            Subtotal:
            <div>
              <div>
                Shipping:
              </div>
              <div>
                Total:
              </div>
            </div>
          </div>
          <div>
            ${cartTotal}
            <div>
              <div>
                $0
              </div>
              <div data-testid="test-total">
                ${cartTotal}
              </div>
            </div>
          </div>
        </div>
        <Button
          isLoading={false}
          type="button"
          onClick={checkout}
          buttonClass='w-full'
        >Pay
        </Button>
      </div>
    </div>
  )
}

export default CheckoutCard;