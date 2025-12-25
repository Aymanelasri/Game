import { useState } from 'react';

export default function App() {
    const [isLogin, setIsLogin] = useState(true);
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <h3>{isLogin ? 'Connexion' : 'Inscription'}</h3>
                        </div>
                        <div className="card-body">
                            <form >
                              
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Mot de passe</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                {!isLogin && (
                                    <div className="mb-3">
                                        <label className="form-label">Confirmer mot de passe</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="confirmPassword"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                )}
                                <button type="submit" className="btn btn-primary w-100">
                                    {isLogin ? 'Se connecter' : "S'inscrire"}
                                </button>
                            </form>
                            <div className="text-center mt-3">
                                <button
                                    className="btn btn-link"
                                    onClick={() => setIsLogin(!isLogin)}
                                >
                                    {isLogin ? "Pas de compte? S'inscrire" : 'Déjà un compte? Se connecter'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}