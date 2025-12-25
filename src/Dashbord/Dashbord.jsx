import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, Cell, Legend
} from "recharts";

export default function Dashboard({ ventes, notes, visites }) {
  const colors = ["#8884d8", "#82ca9d", "#ffc658"];

  return (
    <div style={styles.container}>
      <h2>📊 Tableau de bord des statistiques</h2>

      {/* 🟩 Graphique des ventes */}
      <div style={styles.card}>
        <h3>Ventes mensuelles</h3>
        <LineChart width={500} height={250} data={ventes}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mois" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="montant" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </div>

      {/* 🟦 Graphique des notes */}
      <div style={styles.card}>
        <h3>Notes des étudiants</h3>
        <BarChart width={500} height={250} data={notes}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nom" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="note" fill="#82ca9d" />
        </BarChart>
      </div>

      {/* 🟨 Fréquentation du site */}
      <div style={styles.card}>
        <h3>Fréquentation du site</h3>
        <PieChart width={400} height={300}>
          <Pie
            data={visites}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="valeur"
            label
          >
            {visites.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    padding: "20px",
  },
};


