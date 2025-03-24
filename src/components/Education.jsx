import { useLoadJsonDB } from '../contexts/LoadJsonDBContext';
import Timeline from './ui/Timeline';
import SectionTitle from './ui/SectionTitle';

const Education = () => {
    
    const { resumeData, loading } = useLoadJsonDB();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section id={resumeData.webSiteInfo.navOptions.find(option => option.id === 'education').href.substring(1)} className="container mx-auto px-6 py-4">
            <header>
                <SectionTitle title={resumeData.education.title} />
            </header>
            <Timeline educationData={resumeData.education.educationArray}/>
        </section>
    )
}

export default Education;