import React, { useState } from "react";

export default function Reservation() {
  const [step, setStep] = useState(1); // خطوة: 1 = choix, 2 = places, 3 = résumé
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [time, setTime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [userName, setUserName] = useState("");
  const [reservedSeats, setReservedSeats] = useState({});
  const [reservationCode, setReservationCode] = useState("");

  const generateReservationCode = () => {
    const timestamp = Date.now().toString();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `RES-${timestamp.slice(-6)}-${random}`;
  };

  const resetForm = () => {
    setStep(1);
    setDate(new Date().toISOString().substring(0, 10));
    setTime("");
    setSelectedSeats([]);
    setUserName("");
  };

  const isDateValid = (selectedDate) => {
    const today = new Date().toISOString().substring(0, 10);
    return selectedDate >= today;
  };

  // المقاعد المتاحة
  const seats = ["A1", "A2", "A3", "B1", "B2", "B3"];

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };
  
  const handleConfirm = () => {
    if (!isDateValid(date)) {
      alert("لا يمكن اختيار تاريخ في الماضي! 📅");
      return;
    }
    if (!date || !time || selectedSeats.length === 0 || !userName) {
      alert("المرجو إدخال جميع المعلومات 😅");
      return;
    }
    const key = `${date}-${time}`;
    const code = generateReservationCode();
    setReservationCode(code);
    setReservedSeats({
      ...reservedSeats,
      [key]: [...(reservedSeats[key] || []), ...selectedSeats]
    });
    setStep(3);
  };

  const getCurrentReservedSeats = () => {
    const key = `${date}-${time}`;
    return reservedSeats[key] || [];
  };

  const handleNextStep = () => {
    if (!isDateValid(date)) {
      alert("لا يمكن اختيار تاريخ في الماضي! 📅");
      return;
    }
    if (!date || !time) {
      alert("المرجو اختيار التاريخ والوقت");
      return;
    }
    setStep(2);
  };

  return (
    <div style={styles.container}>
      <h2>🎟️ Application de Réservation</h2>

      {/* 🔹 Étape 1: Choix de la date et de l'heure */}
      {step === 1 && (
        <div style={styles.card}>
          <h3>1️⃣ Choisissez une date et un horaire</h3>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.input}
          />
          <select value={time} onChange={(e) => setTime(e.target.value)} style={styles.input}>
            <option value="">-- Sélectionnez l'heure --</option>
            <option value="12:00">12:00</option>
            <option value="14:00">14:00</option>
            <option value="18:00">18:00</option>
            <option value="21:00">21:00</option>
          </select>
          <button onClick={handleNextStep} style={styles.button}>Suivant →</button>
        </div>
      )}

      {/* 🔹 Étape 2: Sélection des places */}
      {step === 2 && (
        <div style={styles.card}>
          <h3>2️⃣ Sélectionnez vos places</h3>
          <div style={styles.restaurantLayout}>
            <div style={styles.screenLabel}>🎬 ÉCRAN</div>
            <div style={styles.grid}>
              {seats.map((seat) => {
                const currentReserved = getCurrentReservedSeats();
                const isReserved = currentReserved.includes(seat);
                const isSelected = selectedSeats.includes(seat);
                return (
                  <div
                    key={seat}
                    onClick={() => !isReserved && toggleSeat(seat)}
                    style={{
                      ...styles.seat,
                      backgroundColor: isReserved ? "#e74c3c" : isSelected ? "#27ae60" : "#ecf0f1",
                      border: isSelected ? "3px solid #2ecc71" : isReserved ? "3px solid #c0392b" : "2px solid #bdc3c7",
                      cursor: isReserved ? "not-allowed" : "pointer",
                      transform: isSelected ? "scale(1.05)" : "scale(1)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div style={styles.seatIcon}>🪑</div>
                    <div style={styles.seatNumber}>{seat}</div>
                  </div>
                );
              })}
            </div>
            <div style={styles.legend}>
              <div style={styles.legendItem}>
                <div style={{...styles.legendColor, backgroundColor: "#ecf0f1"}}></div>
                <span>Disponible</span>
              </div>
              <div style={styles.legendItem}>
                <div style={{...styles.legendColor, backgroundColor: "#27ae60"}}></div>
                <span>Sélectionné</span>
              </div>
              <div style={styles.legendItem}>
                <div style={{...styles.legendColor, backgroundColor: "#e74c3c"}}></div>
                <span>Réservé</span>
              </div>
            </div>
          </div>
          <input
            placeholder="Votre nom"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={styles.input}
          />
          <button onClick={() => setStep(1)} style={{...styles.button, backgroundColor: "#6c757d", marginRight: "10px"}}>Retour</button>
          <button onClick={handleConfirm} style={styles.button}>Confirmer</button>
        </div>
      )}

      {/* 🔹 Étape 3: Résumé */}
      {step === 3 && (
        <div style={styles.card}>
          <h3>✅ Résumé de votre réservation</h3>
          <div style={styles.ticketContainer}>
            <div style={styles.ticketHeader}>
              <h4>🎫 BILLET DE RÉSERVATION</h4>
            </div>
            <div style={styles.ticketBody}>
              <p><strong>📅 Date :</strong> {date}</p>
              <p><strong>🕐 Heure :</strong> {time}</p>
              <p><strong>👤 Nom :</strong> {userName}</p>
              <p><strong>🪑 Places :</strong> {selectedSeats.join(", ")}</p>
              <div style={styles.barcodeContainer}>
                <div style={styles.barcode}>
                  <div style={styles.barcodeLines}>
                    {Array.from({length: 30}, (_, i) => (
                      <div key={i} style={{
                        ...styles.barcodeLine,
                        height: Math.random() > 0.5 ? '40px' : '20px'
                      }}></div>
                    ))}
                  </div>
                  <p style={styles.barcodeText}>{reservationCode}</p>
                </div>
              </div>
            </div>
          </div>
          <button onClick={() => setStep(2)} style={{...styles.button, backgroundColor: "#6c757d", marginRight: "10px"}}>Retour</button>
          <button onClick={() => { alert(`Réservation confirmée! 🎉\nCode: ${reservationCode}`); resetForm(); }} style={styles.button}>
            Confirmer définitivement
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    minHeight: "100vh",
    padding: "20px",
  },
  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
    marginTop: "20px",
    backdropFilter: "blur(10px)",
  },
  input: {
    display: "block",
    width: "100%",
    margin: "15px 0",
    padding: "12px 15px",
    fontSize: "16px",
    border: "2px solid #e1e8ed",
    borderRadius: "10px",
    transition: "border-color 0.3s ease",
  },
  button: {
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    padding: "12px 25px",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(52, 152, 219, 0.3)",
  },
  restaurantLayout: {
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderRadius: "15px",
    margin: "20px 0",
  },
  screenLabel: {
    backgroundColor: "#2c3e50",
    color: "white",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "20px",
    fontSize: "18px",
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
    margin: "20px 0",
  },
  seat: {
    padding: "20px",
    borderRadius: "15px",
    cursor: "pointer",
    textAlign: "center",
    minHeight: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  seatIcon: {
    fontSize: "24px",
    marginBottom: "5px",
  },
  seatNumber: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#2c3e50",
  },
  legend: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
    flexWrap: "wrap",
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
  },
  legendColor: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    border: "2px solid #bdc3c7",
  },
  ticketContainer: {
    border: "3px dashed #3498db",
    borderRadius: "15px",
    margin: "20px 0",
    backgroundColor: "#f8f9fa",
  },
  ticketHeader: {
    backgroundColor: "#3498db",
    color: "white",
    padding: "15px",
    borderRadius: "12px 12px 0 0",
    margin: "0",
  },
  ticketBody: {
    padding: "20px",
    textAlign: "left",
  },
  barcodeContainer: {
    textAlign: "center",
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "white",
    borderRadius: "10px",
    border: "2px solid #ecf0f1",
  },
  barcode: {
    display: "inline-block",
  },
  barcodeLines: {
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    gap: "2px",
    marginBottom: "10px",
  },
  barcodeLine: {
    width: "3px",
    backgroundColor: "#000",
    borderRadius: "1px",
  },
  barcodeText: {
    fontSize: "12px",
    fontFamily: "monospace",
    fontWeight: "bold",
    color: "#2c3e50",
    margin: "0",
    letterSpacing: "2px",
  },
};
