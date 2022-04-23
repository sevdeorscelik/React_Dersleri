import '../App.scss'

const techs = ['HTML', 'CSS', 'JavaScript']

const TechList = () => {
    return (
        <div className='tech-list'>
           {techs.map((tech) => <li key={tech}>{tech}</li>)}
        </div>
    )
}
export default TechList