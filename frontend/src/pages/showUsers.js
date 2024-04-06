import { useEffect }from 'react'
import { useUserContext } from "../hooks/PurchasingEquipment"
import { useAuthContext } from "../hooks/useAuthContext"

// components
import AddUser from '../components/AddUserTable'

const Adduser = () => {
  const {Adduser, dispatch} = useUserContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchadduser = async () => {
      const response = await fetch('/api/addUser/', {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()
    
      if (response.ok) {
        dispatch({type: 'SET_Adduser', payload: json})
      }
    }

    if (user) {
      fetchadduser()
      console.log(AddUser)
    }
  }, [dispatch, user])

  return (
    <div className="home">
      <div className="workout">
        {Adduser && Adduser.map((adduser) => (
          <AddUser key={adduser._id} addUser={adduser} />
        ))}
      </div>
     
    </div>
  )
}

export default Adduser