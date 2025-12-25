import React,{useState} from 'react'
export default function Reservation2() {
    const [nom,setNom]=useState('');
    const [email,setEmail]=useState('');
    const [date,setDate]=useState('');
    const [personne,setPersonne]=useState('');
    const [message,setMessage]=useState('');
    const [result,setResult]=useState('');
    const [isError,setIsError]=useState(false);
    const [reservation,setReservation]=useState([]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(nom=="" || email=="" || date=="" || personne==""){
            alert('Veuillez remplir tous les champs');
            return;
        } 
        if (isNaN(personne) || personne <= 0 || personne > 10) {
            alert("Veuillez entrer un nombre valide entre 1 et 10 personnes.");
            return;
        }
         const exist = reservation.find(
          (r) => r.nom === nom && r.date === date
    );
    if (exist) {
      setResult(`Bonjour ${nom}, vous avez déjà réservé pour le ${date}.`);
      setIsError(true);
      return;
    }
           
        const newReservation={nom,email,date,personne,message};
        setReservation([...reservation,newReservation]);
        setResult(`Réservation confirmée pour ${nom} le ${date} pour ${personne} personne(s).`);
        setIsError(false);
        setNom('');
        setEmail('');
        setDate('');
        setPersonne('');
        setMessage('');
    }
    return (
        <>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h2 className="text-center mb-0">Formulaire de Réservation</h2>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="nom" className="form-label">Nom</label>
                                    <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} className="form-control" id="nom" />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="email" />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="date" className="form-label">Date</label>
                                    <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="form-control" id="date" />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="personne" className="form-label">Nombre de Personnes</label>
                                    <input type="number" value={personne} onChange={(e)=>setPersonne(e.target.value)} className="form-control" id="personne" />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="message"     className="form-label">Message</label>
                                    <textarea value={message} onChange={(e)=>setMessage(e.target.value)} className="form-control" id="message" rows="4"></textarea>
                                </div>
                                
                                <div className="text-center">
                                    <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-lg">Réserver</button>
                                </div>
                                <div className="text-center mt-3">
                                    {result && <p className={isError ? "text-danger" : "text-success"}>{result}</p>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
        </>
    );
}