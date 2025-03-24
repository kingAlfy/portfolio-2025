import { useLoadJsonDB } from '../contexts/LoadJsonDBContext';
import SectionTitle from './ui/SectionTitle';
import Accordion from './ui/Accordion';

const Faqs = () => {
    const { resumeData, loading } = useLoadJsonDB();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section id={resumeData.webSiteInfo.navOptions.find(option => option.id === 'faqs').href.substring(1)} className="w-full bg-black text-white px-6 py-4">
            <div className="container mx-auto">
                <header>
                    <SectionTitle title={resumeData.faqs.title} />
                </header>
                <Accordion faqsArray={resumeData.faqs.faqsArray} />
            </div>
        </section>
    )
}

export default Faqs;