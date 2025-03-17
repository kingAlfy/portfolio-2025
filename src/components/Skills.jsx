import { useLoadJsonDB } from '../contexts/LoadJsonDBContext';
import SkillsCard from './ui/SkillsCard';

const Skills = () => {
    const { resumeData, loading} = useLoadJsonDB();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section >
            <header>
                <h2 className="text-3xl mx-auto text-center m-5">{resumeData.skills.title.split(' ')[0]} <span className="font-extrabold">{resumeData.skills.title.split(' ')[1]}</span></h2>
            </header>

            <ul className="grid grid-cols-2 gap-4 max-w-7xl mx-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-8">
                {resumeData.skills.skillArray.map((skill) => (
                    <li key={skill.name}>
                        <SkillsCard name={skill.name} svg={skill.svg} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Skills;