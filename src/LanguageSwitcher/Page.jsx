import { useState } from 'react';
import Language from './Language';
export default function Page() {
    const [currentLang, setCurrentLang] = useState('fr');
    const messages = {
        ar: 'السلام عليكم',
        fr: 'Salut',
        en: 'Hello'
    };
    
    return (
        <>
        
            <Language onLanguageChange={(lang) => setCurrentLang(lang)} />
                <hr />
                Current Language : {currentLang}
        

                 <div class="alert alert-primary" role="alert">
                    <strong> {messages[currentLang]}</strong>
                </div>
        </>
    );
}
