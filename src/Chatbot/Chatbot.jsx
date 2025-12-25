import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "سلام! كيف نقدر نعاونك اليوم؟ 😊" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");

    // هنا الرد من البوت
    setTimeout(() => {
      const botReply = getBotReply(input);
      setMessages([...newMessages, { sender: "bot", text: botReply }]);
    }, 600);
  };

  const getBotReply = (msg) => {
    const text = msg.toLowerCase();

    if (text.includes("سلام")) return "وعليكم السلام ورحمة الله 🌿";
    if (text.includes("اسمك")) return "أنا ChatBot ديالك، صُنع بأيادي مغربية 🇲🇦";
    if (text.includes("حال")) return "الحمد لله، وانت؟";
    if (text.includes("شكرا")) return "العفو! ديما هنا باش نعاونك 😊";
    if (text.includes("html")) return "HTML هي اللغة اللي كتعطي بنية لأي موقع 🧱";
    if (text.includes("react")) return "React مكتبة قوية من Facebook باش تبني واجهات تفاعلية ⚛️";
    if (text.includes("laravel")) return "Laravel إطار عمل PHP سهل ومنظم 💪";

    return "ما فهمتش، حاول تشرح أكثر 🤔";
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatBox}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              ...styles.message,
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.sender === "user" ? "#007bff" : "#eee",
              color: msg.sender === "user" ? "white" : "black",
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputArea}>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="اكتب رسالتك..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button style={styles.button} onClick={handleSend}>إرسال</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    margin: "50px auto",
    border: "2px solid #ddd",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    height: "500px",
    backgroundColor: "white",
  },
  chatBox: {
    flex: 1,
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    gap: "8px",
  },
  inputArea: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ddd",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    marginLeft: "8px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  message: {
    maxWidth: "75%",
    padding: "8px 12px",
    borderRadius: "10px",
  },
};
