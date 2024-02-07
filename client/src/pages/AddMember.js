import { useState } from "react";
const AddMembers = () => {

    // states
    const [userData, setUserData] = useState({})

    const handleInputs = (e) => {
        console.log(e);
        setUserData({ ...userData, [e.target.name]: e.target.value
    })
};
    const addUser = (e) => {
        e.preventDefault();
        console.log('user data: ', userData);
    }



    return(
        <>
            <h3>Add Members</h3>
            <div className="memberForm">
                <form onSubmit = {(e) => addUser(e)}>
                    <input 
                        type="text"
                        placeholder="Full Name"
                        onChange = {handleInputs}
                        name = "userFullName"
                    /><br/> 
                    <input 
                        type="email"
                        placeholder="Email Address"
                        onChange = {handleInputs}
                        name = "userEmail"
                    /><br/> 
                    <input 
                        type="text"
                        placeholder="Contact Number"
                        onChange = {handleInputs}
                        name = "userPhone"
                    /> <br/> <br/> 
                    <button type="submit">Add</button>
                </form>
            </div>
            <div>
                <p>
                    this is form of addmembers details informations
                </p>
            </div>
            
        </>
    )
}

export default AddMembers;