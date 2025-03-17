const SectionTitle = ({ title }) => {
    return (
        <h2 className="text-3xl mx-auto text-center m-5">{title.split(' ')[0]} <span className="font-extrabold">{title.split(' ')[1]}</span></h2>
    )
}

export default SectionTitle;