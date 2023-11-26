const Modal = ({children}) => {
  return (
    <div className="fixed z-40 left-0 right-0 top-0 bottom-0 bg-gray">
      <section className='relative h-[97%] rounded-3xl lg:h-[90%] bg-dark m-3 lg:m-14 overflow-y-auto overflow-x-hidden text-white'>
        {children}
      </section>
    </div>
  )
}

export default Modal