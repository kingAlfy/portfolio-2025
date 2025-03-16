import { useClientLanguage } from '../contexts/ClientLanguageContext';
import { useLoadJsonDB } from '../contexts/LoadJsonDBContext';
import SocialNetworkButton from './ui/SocialNetworkButton';

const Main = () => {

    const { clientLanguage } = useClientLanguage();
    const { resumeData, loading} = useLoadJsonDB();

    if (loading) {
        return <div>Loading...</div>;
    }
    
    

    console.log(resumeData.resume.currentPosition);

    return (
        <main className="container mx-auto px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
		        <div className="flex flex-col space-y-6">
                    <header className="text-3xl font-regular leading-13">
                        {resumeData.main.greeting} <span className="font-extrabold">{resumeData.resume.name.split(' ')[0]}.</span>
                        <br />
                        <span className="font-extrabold">{resumeData.resume.currentPosition[0]}</span> <img src={resumeData.main.positionSVG} alt="Engineer" className="inline-block h-[1.1em] w-auto align-text-bottom" />
                        <br />
                        {resumeData.main.basedIn} <span className="font-extrabold">{resumeData.main.basedIn && resumeData.resume.address.split(',')[1]+"."}</span>
                    </header>
                    <section>
                        <p className="text-md">
                            {resumeData.main.description}
                        </p>
                    </section>
                    <footer className="flex space-x-4">
                        <SocialNetworkButton icon={resumeData.webSiteInfo.socialLinks[0].icon} url={resumeData.webSiteInfo.socialLinks[0].url} />
                        <SocialNetworkButton icon={resumeData.webSiteInfo.socialLinks[1].icon} url={resumeData.webSiteInfo.socialLinks[1].url} />
                    </footer>
                </div>

                <div className="flex justify-center">
                    <img src="/src/assets/illustrations/persona_programando_mobile.svg" alt="Programador" className="object-cover w-full h-auto" />
                </div>
            </div>
        </main>
    )
}

export default Main;