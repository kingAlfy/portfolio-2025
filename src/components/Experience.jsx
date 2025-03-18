import { useLoadJsonDB } from '../contexts/LoadJsonDBContext';
import SectionTitle from './ui/SectionTitle';
import ExperienceCard from './ui/ExperienceCard';

const Experience = () => {
    const { resumeData, loading} = useLoadJsonDB();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section className="w-full bg-black text-white px-6 py-4">
            <header>
                    <SectionTitle title={resumeData.experience.title} />
            </header>
            <div className="container mx-auto">
                
                {resumeData.experience.experienceArray.map((experience) => (
                        <ExperienceCard key={experience.company} {...experience} seeLess={resumeData.experience.seeLess} seeMore={resumeData.experience.seeMore} />
                    ))}
            </div>
        </section>
    )
}

export default Experience;