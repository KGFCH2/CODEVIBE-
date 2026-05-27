import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import API_BASE_URL from "../config/api";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      setResponseMsg("Invalid or missing reset token.");
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setResponseMsg("Passwords do not match.");
      return;
    }

    setLoading(true);
    setResponseMsg("");
    try {
      console.log("Using Backend URL:", API_BASE_URL);
      console.log("Current Hostname:", window.location.hostname);

      const res = await axios.post(`${API_BASE_URL}/api/auth/reset-password`, {
        token,
        newPassword,
      });
      setResponseMsg(res.data.message);

      if (res.data.success) {
        setTimeout(() => navigate("/login"), 1500); // auto redirect after success
      }
    } catch (err) {
      setResponseMsg(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Reset Password</h1>

        {!token ? (
          <p style={{ color: "var(--primary-red)" }}>Missing reset token in URL.</p>
        ) : (
          <>
            <label>NEW PASSWORD:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            {newPassword && (
              <ul style={{ color: "lightgray", fontSize: "0.85rem", marginTop: "8px", marginBottom: "15px", listStyleType: "none", paddingLeft: 0 }}>
                <li style={{ color: newPassword.length >= 8 ? "#2ecc71" : "#ff4d6d", display: "flex", gap: "6px", alignItems: "center" }}>
                  <span>{newPassword.length >= 8 ? "✔" : "✖"}</span> Minimum 8 characters
                </li>
                <li style={{ color: /[A-Z]/.test(newPassword) && /[a-z]/.test(newPassword) ? "#2ecc71" : "#ff4d6d", display: "flex", gap: "6px", alignItems: "center" }}>
                  <span>{/[A-Z]/.test(newPassword) && /[a-z]/.test(newPassword) ? "✔" : "✖"}</span> Uppercase & lowercase letters
                </li>
                <li style={{ color: /[0-9]/.test(newPassword) ? "#2ecc71" : "#ff4d6d", display: "flex", gap: "6px", alignItems: "center" }}>
                  <span>{/[0-9]/.test(newPassword) ? "✔" : "✖"}</span> At least one number
                </li>
                <li style={{ color: /[^A-Za-z0-9]/.test(newPassword) ? "#2ecc71" : "#ff4d6d", display: "flex", gap: "6px", alignItems: "center" }}>
                  <span>{/[^A-Za-z0-9]/.test(newPassword) ? "✔" : "✖"}</span> At least one special character
                </li>
              </ul>
            )}

            <label>CONFIRM PASSWORD:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </>
        )}

        {responseMsg && <p style={{ color: "white", marginTop: "1rem" }}>{responseMsg}</p>}

        <p style={{marginTop: "1.5rem"}}>
          Back to <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default ResetPassword;
