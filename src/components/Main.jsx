import { useClientLanguage } from '../contexts/ClientLanguageContext';
import { useLoadJsonDB } from '../contexts/LoadJsonDBContext';

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
			<header className="text-5xl font-regular leading-20">
				Hello, I' am <span className="font-extrabold">Alfonso,</span>
				<br />
				<span className="font-extrabold">Cloud</span> Engineer
				<br />
				Based in <span className="font-extrabold">Spain</span>
            </header>
            <section>
                <p className="text-lg">
                    {resumeData.main.description}
                </p>
            </section>
                
                <div className="flex space-x-4">
                  <a href="https://github.com/al2367" className="p-3 bg-white rounded-sm border-solid border-2 border-secondary transition-colors hover:bg-secondary group">
                    <img src={resumeData.webSiteInfo.socialLinks[0].icon} alt="GitHub" className="w-6 h-6 transition-colors group-hover:filter group-hover:invert" />
                  </a>
                  <a href="https://www.linkedin.com/in/alfonso-ravelo-gil" className="p-3 bg-white rounded-sm border-solid border-2 border-secondary transition-colors hover:bg-secondary group">
                    <img src={resumeData.webSiteInfo.socialLinks[1].icon} alt="LinkedIn" className="w-6 h-6 transition-colors group-hover:filter group-hover:invert" />
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <img src="/src/assets/illustrations/persona_programando.svg" alt="Programador" className="max-w-full h-auto" />
              </div>
            </div>
        </main>
    )
}

export default Main;