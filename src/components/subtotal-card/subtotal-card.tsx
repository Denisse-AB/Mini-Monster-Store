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
      console.log('thankyou page');
    }
  };

  return (
    <div className="relative mx-3 w-96 float-right rounded-lg border shadow-sm hover:bg-gray-100">
      <div className="m-5">
        <h5 className="mb-2 pb-3 border-b border-gray-300 text-center text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        Subtotal: ${cartTotal}
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