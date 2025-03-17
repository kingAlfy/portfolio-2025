import { useLoadJsonDB } from '../contexts/LoadJsonDBContext';
import SkillsCard from './ui/SkillsCard';
import SectionTitle from './ui/SectionTitle';

const Skills = () => {
    const { resumeData, loading} = useLoadJsonDB();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section className="container mx-auto px-6 py-4">
            <header>
                <SectionTitle title={resumeData.skills.title} />
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