import React from 'react'
import UserCard from './UserCard'

const Users = (props) => {
    return (
        <div style={{display:"flex"}}>
            {/* {console.log(props)} */}
            {props.persons.map((el, i)=>(<UserCard user={el} key={i} />))}
        </div>
    )
}

export default Users
