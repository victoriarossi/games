import '../css/Header.css';

export default function Header(props) {
    return (
        <h1 className="header-title">{props.name}</h1>
    );
}