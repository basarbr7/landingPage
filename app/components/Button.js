import { BsArrowRight } from "react-icons/bs"

const Button = ({icon, label, className, iconClass, labelClass}) => {
  return (
    <div className={`flex items-center gap-3 capitalize border rounded-full py-2 cursor-pointer  ${className}`}>
        <div className={`border rounded-full flex items-center justify-center ${iconClass}`}>
            {icon}
        </div> 
        <span className={`font-normal ${labelClass}`}>{label}</span>
    </div>
  )
}

export default Button