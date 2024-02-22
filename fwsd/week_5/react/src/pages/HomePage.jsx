export const HomePage = ({user}) => {
    return (<div>This is from homepage component <br/> 
    { user.email ? 
    <div>The username/email is {user.email}
        </div> : ""
}
    </div>)
}
