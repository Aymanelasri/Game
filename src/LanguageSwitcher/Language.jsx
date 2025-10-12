export default function LanguageSwitcher({ onLanguageChange }) {
    const handleLangChange = (e) => {
        e.preventDefault();
        const lang = e.currentTarget.dataset.lang
        onLanguageChange(lang);
    };

    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" data-lang="ar" href="#" onClick={handleLangChange}>Arabic</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-lang="fr" href="#" onClick={handleLangChange}>FR</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-lang="en" href="#" onClick={handleLangChange}>EN</a>
                </li>
            </ul>
        </div>
    );
}