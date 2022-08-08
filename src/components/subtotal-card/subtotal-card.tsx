import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart-context/cart-context";
import Button from "../button/button";

type SubtotalProps = {
  title: string,
  buttonLabel: string
}

const SubTotalCard = ({title, buttonLabel}:SubtotalProps) => {
  const { cartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const checkout = () => {
    if (buttonLabel === 'Subtotal') {
      navigate('/checkout')
    } else {
      navigate('/thankyou')
    }
  };

  return (
    <div className="relative mx-3 rounded-lg border shadow-sm tablet:w-80 tablet:float-right laptop:mx-20">
      <div className="m-5">
        <h5 className="mb-2 pb-3 border-b border-gray-300 text-center text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        <div className="grid grid-cols-2 text-center">
          <div>
            Subtotal:
            {
              buttonLabel !== 'Subtotal' ?
              <div>
                <div>
                  Shipping:
                </div>
                <div>
                  Total:
                </div>
              </div> : ''
            }
          </div>
          <div>
            ${cartTotal}
            {
              buttonLabel !== 'Subtotal' ?
              <div>
                <div>
                  $0
                </div>
                <div>
                  ${cartTotal}
                </div>
              </div> : ''
            }
          </div>
        </div>
        <Button
          type="button"
          onClick={checkout}
          buttonType='w-full'
        >{buttonLabel}
        </Button>
      </div>
    </div>
  )
}

export default SubTotalCard;