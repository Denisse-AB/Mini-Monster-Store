import { FC, ButtonHTMLAttributes} from 'react';

type Props = {
  children?: string,
  buttonClass: string,
  isLoading: boolean
}& ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({children, isLoading, buttonClass, ...otherProps}) => {
  return (
    <button
      disabled={isLoading}
      className={'text-white border border-card-bg bg-card-bg mt-5 rounded-full hover:bg-button-hv pb-1 ' + (buttonClass)}
      {...otherProps}
    >{children}
    </button>
  )
}

export default Button;