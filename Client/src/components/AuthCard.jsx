
const AuthCard = ({ children, title, className }) => {
  return (
    <div className={`md:w-[25rem] md:h-[20rem] bg-[#1D1D1D] text-center rounded-xl p-[1.5rem] ${className}`}>
      <h2 className="font-semibold text-2xl capitalize my-2">{title}</h2>
      {children}
    </div>
  )
}

export default AuthCard