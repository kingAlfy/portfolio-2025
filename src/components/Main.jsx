import { useClientLanguage } from '../contexts/ClientLanguageContext';
import { useLoadJsonDB } from '../contexts/LoadJsonDBContext';
import SocialNetworkButton from './ui/SocialNetworkButton';
const Main = () => {

    const { clientLanguage } = useClientLanguage();
    const { resumeData, loading} = useLoadJsonDB();

    if (loading) {
        return <div>Loading...</div>;
    }

    console.log(resumeData);

    return (
        <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
		        <div className="flex flex-col space-y-6">
                    <header className="text-3xl font-regular leading-13">
                        Hello, I' am <span className="font-extrabold">Alfonso,</span>
                        <br />
                        <span className="font-extrabold">Cloud</span> Engineer
                        <br />
                        Based in <span className="font-extrabold">Spain</span>
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