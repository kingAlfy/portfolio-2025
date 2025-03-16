const SkillsCard = ({ name, svg }) => {
    return (
        <div className="p-4 bg-white rounded-sm border-solid border-2 border-secondary transition-colors hover:bg-secondary group w-full flex flex-col items-center justify-center gap-3">
            <img src={svg} alt={name} className="w-15 h-15 transition-colors filter brightness-0 transition-colors group-hover:filter group-hover:invert" />
            <h1 className="text-sm font-bold transition-colors group-hover:filter group-hover:invert">{name}</h1>
        </div>
    )
}

export default SkillsCard;