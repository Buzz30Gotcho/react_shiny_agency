import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
]

const number =[1,2,3,4]
const list_number=number.map((num)=>
    <li>{num}</li>
)
    


function Freelances() {
    return (
        <div>
                u{list_number}

            <h1>Freelances 👩·💻👨·💻👩·💻</h1>
            {freelanceProfiles.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
        </div>
    )
}
export default Freelances