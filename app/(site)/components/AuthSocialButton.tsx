import { IconType } from "react-icons"

// type-safety
interface AuthSocialButtonProps {
 icon: IconType,// (it helps to show type of icon(google, github))
 onClick: () => void// void means it doesn't return anything
}

//functional Component -> it knows what kind of props are expected
const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
        icon: Icon, //same as IconType
        onClick
}) => { 
        return (
        //now with typeSafety we can use icon and onClick directly
              <button type="button" onClick={onClick} 
              className="inline-flex w-full justify-center rounded-md
               bg-white px-2 py-2 text-gray-500 shadow-sm ring-1 
               ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0">
              <Icon/>
              {/*  same as IconType */}
              </button>  
        )
}

export default AuthSocialButton;