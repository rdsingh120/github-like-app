import { MdLogout } from 'react-icons/md'

const Logout = () => {
  
  return (
    <>
      <img
        src="https://camo.githubusercontent.com/9b8b8a146bce006c401fd383719ee3e7c9b89758b8bdf1c379a691de7dd72f8a/68747470733a2f2f7261772e6769746875622e636f6d2f68617368646f672f6e6f64652d6964656e7469636f6e2d6769746875622f6d61737465722f6578616d706c65732f696d616765732f6769746875622e706e67"
        alt=""
        className="w-10 h-10 rounded-full border border-gray-800"
      />
      <div
        className="flex items-center p-2 border border-gray-800 
        rounded-lg bg-glass mt-auto cursor-pointer hover:bg-gray-800 
        transition-colors duration-200"
      >
        <MdLogout size={22} />
      </div>
    </>
  )
}
export default Logout
