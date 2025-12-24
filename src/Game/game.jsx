import { useState } from 'react';
import './game.css';

export default function Game() {
    const players = [
        { name: "Julian Alvarez", image: "images/joueur/alvarez.webp" },
        { name: "Ronald Araujo", image: "images/joueur/araujo.webp" },
        { name: "Jude Bellingham", image: "images/joueur/bellingham.webp" },
        { name: "Karim Benzema", image: "images/joueur/benzema.webp" },
        { name: "Sabir Bougrine", image: "images/joueur/bougrine.webp" },
        { name: "Thibaut Courtois", image: "images/joueur/courtois.webp" },
        { name: "Kevin De Bruyne", image: "images/joueur/de bruyne.webp" },
        { name: "Erling Haaland", image: "images/joueur/halland.webp" },
        { name: "Lionel Messi", image: "images/joueur/messi.webp" },
        { name: "Luka Modric", image: "images/joueur/modric.webp" },
        { name: "Kylian Mbappe", image: "images/joueur/mpappe.webp" },
        { name: "Neymar Jr", image: "images/joueur/neymar.webp" },
        { name: "Pedri", image: "images/joueur/pedri.webp" },
        { name: "Cristiano Ronaldo", image: "images/joueur/ronaldo.webp" },
        { name: "Son Heung-min", image: "images/joueur/son.webp" },
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