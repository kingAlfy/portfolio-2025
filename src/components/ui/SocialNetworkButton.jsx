const SocialNetworkButton = ({ icon, url }) => {
    return (
        <a href={url} className="p-3 bg-white rounded-sm border-solid border-2 border-secondary transition-colors hover:bg-secondary group">
            <img src={icon} alt="Social Network" className="w-6 h-6 transition-colors group-hover:filter group-hover:invert" />
        </a>
    )
}

export default SocialNetworkButton;