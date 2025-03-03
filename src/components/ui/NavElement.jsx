
const NavElement = ({ text, href }) => {
    return (
        <a href={href} className="hover:underline">{text}</a>
    );
};

export default NavElement;