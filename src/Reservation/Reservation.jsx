import{ useState } from "react";

function Reservation() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // تخزين البيانات في localStorage (مؤقت)
    const reservation = { date, time, name, phone };
    localStorage.setItem("reservation", JSON.stringify(reservation));

    setConfirmed(true);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>📅 حجز طاولة / مقعد</h2>

      {!confirmed ? (
        <form onSubmit={handleSubmit}>
          <label>التاريخ:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <br /><br />

          <label>الوقت:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />

          <br /><br />

          <label>الاسم:</label>
          <input
            type="text"
            placeholder="اسمك الكامل"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <br /><br />

          <label>الهاتف:</label>
          <input
            type="tel"
            placeholder="06XXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <br /><br />

          <button type="submit">✅ تأكيد الحجز</button>
        </form>
      ) : (
        <div>
          <h3>🎉 تم تأكيد الحجز بنجاح!</h3>
          <p><b>الاسم:</b> {name}</p>
          <p><b>الهاتف:</b> {phone}</p>
          <p><b>التاريخ:</b> {date}</p>
          <p><b>الوقت:</b> {time}</p>
        </div>
      )}
    </div>
  );
}

export default Reservation;