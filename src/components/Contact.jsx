import { useLoadJsonDB } from '../contexts/LoadJsonDBContext';
import SectionTitle from './ui/SectionTitle';
import { useState } from 'react';
import SocialNetworkButton from './ui/SocialNetworkButton';
import Button from './ui/Button';
const Contact = () => {
    const { resumeData, loading } = useLoadJsonDB();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Simulación de envío exitoso
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            setSubmitStatus({ success: true, message: resumeData.contact.success });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setSubmitStatus({ success: false, message: resumeData.contact.error });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id={resumeData.webSiteInfo.navOptions.find(option => option.id === 'contact').href.substring(1)} className="container mx-auto px-6 py-4">
            <header>
                <SectionTitle title={resumeData.contact.title} />
            </header>
            
            <div className="container mx-auto flex flex-col md:flex-row gap-8 max-w-7xl">
                {/* Formulario y enlaces sociales */}
                <div className="w-full">
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        {/* Formulario */}
                        <div className="md:col-span-4 w-full">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-tertiary mb-1">
                                        {resumeData.contact.form.name} 
                                        <span className="text-xs text-gray-500 ml-1">
                                            (máx. 50 {resumeData.contact.form.maxLengthName})
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        maxLength={50}
                                        className="w-full px-4 py-2 bg-white text-black border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-tertiary"
                                    />
                                    <div className="text-xs text-right mt-1 text-gray-500">
                                        {formData.name.length}/50
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-tertiary mb-1">
                                        {resumeData.contact.form.email}
                                        <span className="text-xs text-gray-500 ml-1">
                                            (máx. 60 {resumeData.contact.form.maxLengthName})
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        maxLength={60}
                                        className="w-full px-4 py-2 bg-white text-black border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-tertiary"
                                    />
                                    <div className="text-xs text-right mt-1 text-gray-500">
                                        {formData.email.length}/60
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-tertiary mb-1">
                                        {resumeData.contact.form.subject}
                                        <span className="text-xs text-gray-500 ml-1">
                                            (máx. 120 {resumeData.contact.form.maxLengthName})
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        maxLength={120}
                                        className="w-full px-4 py-2 bg-white text-black border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-tertiary"
                                    />
                                    <div className="text-xs text-right mt-1 text-gray-500">
                                        {formData.subject.length}/120
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-tertiary mb-1">
                                        {resumeData.contact.form.message}
                                        <span className="text-xs text-gray-500 ml-1">
                                            (máx. 1800 {resumeData.contact.form.maxLengthMessage})
                                        </span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        maxLength={1800}
                                        rows="5"
                                        className="w-full px-4 py-2 bg-white text-black border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-tertiary"
                                    ></textarea>
                                    <div className="text-xs text-right mt-1 text-gray-500">
                                        {formData.message.length}/1800
                                    </div>
                                </div>

                                <div className="flex flex-row flex-wrap gap-4 md:flex-nowrap">
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? resumeData.contact.sending : resumeData.contact.form.send}
                                    </Button>

                                    {resumeData.webSiteInfo.socialLinks.map((socialLink, index) => (
                                        <SocialNetworkButton 
                                            key={index} 
                                            icon={socialLink.icon} 
                                            url={socialLink.url} 
                                        />
                                    ))}
                                </div>
                                
                                {submitStatus && (
                                    <div className={`mt-4 p-3 rounded-md border ${submitStatus.success ? 'bg-green-100 text-green-800 border-green-800' : 'bg-red-100 text-red-800 border-red-800'}`}>
                                        {submitStatus.message}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
                
                {/* Información de contacto y mapa */}
                <div className="w-full">
                    <div className="bg-white border-2 border-black rounded-lg p-6 h-full flex flex-col">
                        <div className="mb-8">
                            <h3 className="text-lg font-medium mb-2 text-tertiary">{resumeData.contact.form.email}</h3>
                            <a 
                                href={`mailto:${resumeData.resume.email}`} 
                                className="text-black hover:text-tertiary transition-colors"
                            >
                                {resumeData.resume.email}
                            </a>
                        </div>
                        
                        <div className="flex-grow">
                            <h3 className="text-lg font-medium mb-2 text-tertiary">{resumeData.contact.locationLabel}</h3>
                            <p className="text-black mb-4">{resumeData.resume.address}</p>
                            
                            {/* Mapa de Google Maps */}
                            <div className="w-full h-64 rounded-md overflow-hidden border-2 border-black">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11946.698558344383!2d-4.7372!3d41.6372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd476cde13c9ea19%3A0xc54421ea5d124aff!2sDelicias%2C%20Valladolid!5e0!3m2!1ses!2ses!4v1623456789012!5m2!1ses!2ses" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen="" 
                                    loading="lazy"
                                    title="Ubicación en Delicias, Valladolid"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 