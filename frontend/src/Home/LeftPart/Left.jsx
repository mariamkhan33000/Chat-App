import User from './User'
import Search from './Search'
import Logout from './Logout'


const Left = () => {
  return (
    <div className='w-[30%] bg-slate-700'>
        <Search/>
        <User/>
        <Logout/>
    </div>
  )
}

export default Left