import { useState } from 'react';
import './game.css';

export default function Game() {
    const players = [
        { name: "Julian Alvarez", image: "images/joueur/alvarez.webp" },
        { name: "Antony", image: "images/joueur/antony.webp" },
        { name: "Ronald Araujo", image: "images/joueur/araujo.webp" },
        { name: "Trent Alexander-Arnold", image: "images/joueur/arnold.webp" },
        { name: "Jude Bellingham", image: "images/joueur/bellingham.webp" },
        { name: "Karim Benzema", image: "images/joueur/benzema.webp" },
        { name: "Sabir Bougrine", image: "images/joueur/bougrine.webp" },
        { name: "Yassine Bounou", image: "images/joueur/Bounou.webp" },
        { name: "Bruno Fernandes", image: "images/joueur/bruno.webp" },
        { name: "Thibaut Courtois", image: "images/joueur/courtois.webp" },
        { name: "Kevin De Bruyne", image: "images/joueur/de bruyne.webp" },
        { name: "Matthijs de Ligt", image: "images/joueur/deligt.webp" },
        { name: "Ousmane Dembele", image: "images/joueur/dembele.webp" },
        { name: "Gianluigi Donnarumma", image: "images/joueur/donnarumma.webp" },
        { name: "Paulo Dybala", image: "images/joueur/dybala.webp" },
        { name: "Phil Foden", image: "images/joueur/foden.webp" },
        { name: "Cody Gakpo", image: "images/joueur/gakbo.webp" },
        { name: "Alejandro Garnacho", image: "images/joueur/garnacho.webp" },
        { name: "Josko Gvardiol", image: "images/joueur/gvardiol.webp" },
        { name: "Achraf Hakimi", image: "images/joueur/hakimi.webp" },
        { name: "Erling Haaland", image: "images/joueur/halland.webp" },
        { name: "Kai Havertz", image: "images/joueur/havertz.webp" },
        { name: "Harry Kane", image: "images/joueur/kane.webp" },
        { name: "N'Golo Kante", image: "images/joueur/kante.webp" },
        { name: "Joshua Kimmich", image: "images/joueur/kimmich.webp" },
        { name: "Khvicha Kvaratskhelia", image: "images/joueur/kvara.webp" },
        { name: "Lamine Yamal", image: "images/joueur/lamine.webp" },
        { name: "Rafael Leao", image: "images/joueur/leao.web" },
        { name: "Romelu Lukaku", image: "images/joueur/lukaku.webp" },
        { name: "Riyad Mahrez", image: "images/joueur/mahrez.webp" },
        { name: "Marquinhos", image: "images/joueur/marquinhos.webp" },
        { name: "Gabriel Martinelli", image: "images/joueur/martinelli.webp" },
        { name: "lautaro Martinez", image: "images/joueur/martinez.webp" },
        { name: "Lionel Messi", image: "images/joueur/messi.webp" },
        { name: "Luka Modric", image: "images/joueur/modric.webp" },
        { name: "Mohamed Salah", image: "images/joueur/mohamad salah.webp" },
        { name: "Kylian Mbappe", image: "images/joueur/mpappe.webp" },
        { name: "Jamal Musiala", image: "images/joueur/musiala.webp" },
        { name: "Neymar Jr", image: "images/joueur/neymar.webp" },
        { name: "Jan Oblak", image: "images/joueur/oblak.webp" },
        { name: "Cole Palmer", image: "images/joueur/palmer.webp" },
        { name: "Lucas Paqueta", image: "images/joueur/paqueta.webp" },
        { name: "Pedri", image: "images/joueur/pedri.webp" },
        { name: "Marcus Rashford", image: "images/joueur/rashford.webp" },
        { name: "Declan Rice", image: "images/joueur/Rice.webp" },
        { name: "Cristiano Ronaldo", image: "images/joueur/ronaldo.webp" },
        { name: "Antonio Rudiger", image: "images/joueur/Rudiger.webp" },
        { name: "Alexis Sanchez", image: "images/joueur/sanchez.webp" },
        { name: "Son Heung-min", image: "images/joueur/son.webp" },
        { name: "Raheem Sterling", image: "images/joueur/sterling.webp" },
        { name: "Luis Suarez", image: "images/joueur/suarez.webp" },
        { name: "Federico Valverde", image: "images/joueur/valverde.webp" },
        { name: "Virgil van Dijk", image: "images/joueur/vandijk.webp" },
        { name: "Vinicius Jr", image: "images/joueur/vinicius.webp" },
        { name: "Florian Wirtz", image: "images/joueur/wirtz.webp" },
        { name: "Hakim Ziyech", image: "images/joueur/ziyech.webp" }
    ];

    const [currentPlayer, setCurrentPlayer] = useState(null);
    const [showWelcome, setShowWelcome] = useState(true);
    

    const getRandomPlayer = () => {
        const randomIndex = Math.floor(Math.random() * players.length);
        const player = players[randomIndex];
        setCurrentPlayer(player);
    };

    const startGame = () => {
        setShowWelcome(false);
    };

    return (
        <div className="game-container">
            {showWelcome ? (
                <div className="welcome-screen">
                    <div className="welcome-content">
                        <h1 className="welcome-title">⚽ Bienvenue dans le Jeu ⚽</h1>
                        <p className="welcome-text">Découvrez les joueurs de football les plus célèbres!</p>
                        <div className="football-animation">⚽</div>
                        <button className="enter-btn" onClick={startGame}>
                            Entrer dans le Jeu
                        </button>
                    </div>
                </div>
            ) : (
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="game-card">
                            <div className="game-header">
                                <h3>⚽ Devine le Joueur ⚽</h3>
                            </div>
                            <div className="game-body">
                                {!currentPlayer ? (
                                    <button 
                                        className="start-btn"
                                        onClick={getRandomPlayer}
                                    >
                                        🎮 Commencer le Jeu
                                    </button>
                                ) : (
                                    <div className="player-content">  
                                        <div className="image-container">
                                            <img 
                                                src={currentPlayer.image} 
                                                alt="Joueur" 
                                                className="player-image"
                                            />
                                        </div>
                                        <h4 className="player-name">{currentPlayer.name}</h4>
                                        <button 
                                            className="replay-btn"
                                            onClick={getRandomPlayer}
                                        >
                                            🔄 Rejouer
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}