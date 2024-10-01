import { FaHeart } from 'react-icons/fa'

const LikesPage = () => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg
     px-4">
      <table
        className="w-full text-sm text-left  rtl:text-right bg-glass 
      overflow-hidden border"
      >
        <thead className="text-xs uppercase">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">No</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Username</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Date</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Action</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className= "bg-glass">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <span>1</span>
              </div>
            </td>
            <td scope='row' className="w-4 p-4">
              <div className="flex gap-2 items-center whitespace-nowrap">
                <img
                  src="https://camo.githubusercontent.com/9b8b8a146bce006c401fd383719ee3e7c9b89758b8bdf1c379a691de7dd72f8a/68747470733a2f2f7261772e6769746875622e636f6d2f68617368646f672f6e6f64652d6964656e7469636f6e2d6769746875622f6d61737465722f6578616d706c65732f696d616765732f6769746875622e706e67"
                  alt=""
                  className="w-7 h-7 rounded-full border border-gray-800"
                />
                <span>rdsingh120</span>
              </div>
            </td>
            <td className="w-4 p-4">
              <div className="flex items-center">
                <span className='text-base font-semibold'>September 30, 2024</span>
              </div>
            </td>
            <td className="w-4 p-4">
              <div className="flex gap-2 items-center">
                <FaHeart size={18} className='text-red-500' />
                <span>Liked by you</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default LikesPage
