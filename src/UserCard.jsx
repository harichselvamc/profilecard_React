import React from 'react'

const UserData = [
    {
        name: "Adolf Hitler",
        city: "Austria",
        role: "Leader of the Nazi Party",
        skills: ["Oratory Skills", "Political Strategy", "Charisma and Charm", "Manipulative Tactics", "Strategic Vision"],
        online: false,
        profile: "images/hitler.jpg",
        colorr: "linear-gradient(to right, black, black 33%, #ff0000 33%, #ff0000 66%, #ffd700 66%, #ffd700)" // Custom gradient resembling the German flag
    
    },
    {
        name: "Shinzo Abe",
        city: "Japan",
        role: "Former Prime Minister of Japan",
        skills: ["Political Leadership", "Economic Policy", "Foreign Relations", "Diplomacy"],
        online: false,
        profile: "images/shinzo.jpg",
        colorr: "linear-gradient(to right, #ffffff, #ffffff 50%, #ff0000 50%, #ff0000)"
    },
   
    {
        name: "Martin Luther King Jr.",
        city: "United States",
        role: "Civil Rights Leader, Minister",
        skills: ["Oratory Skills", "Nonviolent Protest", "Leadership", "Inspiration"],
        online: false,
        profile: "images/martin.jpg",
        colorr: "linear-gradient(to right, #bf0a30, #bf0a30 33%, #ffffff 33%, #ffffff 66%, #3c3b6e 66%, #3c3b6e)" // US flag
    

    },
    {
        name: "Benito Mussolini",
        city: "Italy",
        role: "Leader of the National Fascist Party",
        skills: ["Political Manipulation", "Oratory Skills", "Fascist Ideology", "Authoritarian Leadership"],
        online: false,
        profile: "images/mus.jpg",
        colorr:  "linear-gradient(to right, #ffffff, #ffffff 33%, #009246 33%, #009246 66%, #ce2b37 66%, #ce2b37)" // Italian flag
    }
];







function User(props){
    return(
        <div className='cardcontainer' style={{ background: props.colorr }}>

        {/* // <div className='cardcontainer' style={{ background: 'linear-gradient(to right, #ffffff, #ffffff 50%, #ff0000 50%, #ff0000)' }}>
       //</div> <div className='cardcontainer' style={{ background: 'linear-gradient(to right, #ffffff, #ffffff 50%, #ff0000 50%, #ff0000)', backdropFilter: 'blur(10px)' }}> */}
 
            <span className={props.online ?"pro online"  : "pro offline"}>
                {props.online ? "ONLINE" : "OFFLINE"}
                </span>
            <img src={props.profile} alt={props.name} className='imgg'    />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <h2>{props.role}</h2>
            <div className='button'>
                <button className='primary'>Message</button>
                <button className='primary outline'> Following</button>
            </div>
            <div className='skills'>
                <h6 >Skills</h6>
                <ul>
                    {props.skills.map((skill,index)=>(
                        <li key={index}>{skill}</li>
                    ))}
               
                </ul>
            </div>


        </div>
    )

}


const UserCard = () => {
  return (
    UserData.map((user,index)=>(
        <User key={index} 
        name={user.name}
        city={user.city}
        role={user.role}
        skills={user.skills}
        online={user.online}
        profile={user.profile}
        colorr={user.colorr}
        />
    ))

  )
}

export default UserCard
