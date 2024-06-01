const ProductButton = ({onClick, icon, text, className}) => {
  return (
    <button onClick={onClick} className={`w-full bg-primOrange hover:bg-primOrange/70 duration-75 py-3 rounded-lg font-semibold ${className} flex justify-center shadow items-center gap-4`}>
      {icon}
      {text}
    </button>
  )
}

export default ProductButton
