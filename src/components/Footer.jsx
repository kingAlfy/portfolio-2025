import { useLoadJsonDB } from '../contexts/LoadJsonDBContext';

const Footer = () => {
    const { resumeData, loading } = useLoadJsonDB();

    if (loading) {
        return <div>Loading...</div>;
    }

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo */}
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="text-xl font-bold">
                            {resumeData.webSiteInfo.brandingTitle}
                        </a>
                    </div>
                    
                    {/* Copyright */}
                    <p className="text-quaternary text-right">
                        &copy; {currentYear} {resumeData.resume.name}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 