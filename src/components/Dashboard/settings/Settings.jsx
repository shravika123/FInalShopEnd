import React, {useState} from 'react'
import Navbar from './navbar/Navbar'
import Security from './security/Security'
import Storeprofile from './storeprofile/Storeprofile'
import Userprofile from './userprofile/Userprofile'
import Users from './users/Users'

function Settings() {

  const [navitem, setNavitem] = useState("profile")

  const [UserDetails,setUserDetails] = useState( {
    name: "Raees Alam",
    dob: "12-jan-2022",
    email: "raees786@ameen.com",
    contact: "0123456789",
    address: "Fatehpur, Gujarat -01"
  })

  const [StoreDetails, setStoreDetails] = useState({
    storename: 'Apni duniya',
    description: "Koi dhanda chhota nhi hota or dhande se bada koi dharm nahi hota"
  })

  return (
    <>
    <Navbar setNavitem={setNavitem} navitem={navitem} />

      {navitem === "profile" && <div className='p-3 grid grid-cols-1 mt-4 md:mt-8 md:grid-cols-5 gap-6'>
        <div className='col-span-2 border shadow-xl rounded-md min-h-[80vh]'>
          <Userprofile user={UserDetails} setUser={setUserDetails} />
        </div>
        <div className='col-span-3 border shadow-xl rounded-md min-h-[80vh]'>
          <Storeprofile store={StoreDetails} setStore={setStoreDetails} />
        </div>
      </div>
      }
      {navitem==="security" && <Security />}
      {navitem==="users" && <Users />}
    </>
  )
}

export default Settings