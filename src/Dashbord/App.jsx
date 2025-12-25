import Dashboard from "./Dashbord";

function App() {
  const ventesData = [
    { mois: "Jan", montant: 1200 },
    { mois: "Fév", montant: 2100 },
    { mois: "Mars", montant: 1800 },
    { mois: "Avr", montant: 2500 },
    { mois: "Mai", montant: 2000 },
    { mois: "Juin", montant: 3000 },
    { mois: "Juil", montant: 2200 },
    { mois: "Aout", montant: 1900 },
    { mois: "Sept", montant: 2800 },
    { mois: "Oct", montant: 2400 },
    { mois: "Nov", montant: 1600 },
    { mois: "Déc", montant: 2700 },
  ];

  const notesData = [
    { nom: "Ayman", note: 16 },
    { nom: "Sara", note: 14 },
    { nom: "Yassine", note: 12 },
    { nom: "Khadija", note: 18 },
    { nom: "Mohamed", note: 20 },
    { nom: "Fatima", note: 15 },
    { nom: "Omar", note: 17 },
    { nom: "Hassan", note: 13 },
    { nom: "Amina", note: 19 },
    { nom: "Ali", note: 11 },
  ];

  const visitesData = [
    { nom: "Desktop", valeur: 45 },
    { nom: "Mobile", valeur: 40 },
    { nom: "Tablet", valeur: 15 },
  ];

  return (
    <div style={{ backgroundColor: "#f3f4f6", minHeight: "100vh" }}>
      <Dashboard ventes={ventesData} notes={notesData} visites={visitesData} />
    </div>
  );
}

export default App;
