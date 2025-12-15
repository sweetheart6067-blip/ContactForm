import React from "react";
import { useForm } from "@formspree/react";

export default function App() {
  const [state, handleSubmit] = useForm("myzrapgj");

  if (state.succeeded) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Form Submitted</h2>
          <p>Your information has been delivered successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Re-Form</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <label>Requested Account Email:</label>
          <input
            type="email"
            name="requested_account_email"
            required
            style={styles.input}
          />

          <label>Desired Username:</label>
          <input
            type="text"
            name="desired_username"
            required
            style={styles.input}
          />

          <label>Preferences:</label>
          <input type="text" name="preferences" style={styles.input} />

          <label>Notes:</label>
          <input type="text" name="notes" style={styles.input} />

          <button
            type="submit"
            disabled={state.submitting}
            style={styles.button}
          >
            {state.submitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

// INLINE STYLES
const styles: any = {
  container: {
    minHeight: "100vh",
    background: "#f5f6fa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "26px",
    fontWeight: "600",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "16px",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    background: "#2979ff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};
