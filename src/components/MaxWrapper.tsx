
const MaxWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="px-8 lg:px-20 xl:px-40 2xl:px-80">
        {children}
    </div>
  )
}

export default MaxWrapper