import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    ticketType: "general",
    dietary: "none",
    specialRequests: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Name is required.";
    if (!formData.email.includes("@")) newErrors.email = "Kindly enter a valid email address.";
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    console.log("Form submitted:", formData);
    alert("Registration successful!");
    setSubmittedData(formData);

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    setFormData({
      fullName: "",
      email: "",
      ticketType: "general",
      dietary: "none",
      specialRequests: "",
    });
  };

  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto", fontFamily: "system-ui, sans-serif" }}>
      <h1>Event Registration</h1>

      {showSuccess && (
        <p style={{ color: "green", fontWeight: "bold" }}>Registration successful!</p>
      )}

      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: "1rem" }}>
          Full name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
        </label>
        {errors.fullName && <p style={{ color: "red", margin: "0.25rem 0" }}>{errors.fullName}</p>}

        <label style={{ display: "block", marginBottom: "1rem" }}>
          Email:
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </label>
        {errors.email && <p style={{ color: "red", margin: "0.25rem 0" }}>{errors.email}</p>}

        <label style={{ display: "block", marginBottom: "1rem" }}>
          Ticket type:
          <select name="ticketType" value={formData.ticketType} onChange={handleChange}>
            <option value="general">General</option>
            <option value="vip">VIP</option>
            <option value="student">Student</option>
          </select>
        </label>

        <p>Dietary preference:</p>
        <label>
          <input type="radio" name="dietary" value="none" checked={formData.dietary === "none"} onChange={handleChange} /> None
        </label>
        <label>
          <input type="radio" name="dietary" value="vegetarian" checked={formData.dietary === "vegetarian"} onChange={handleChange} /> Vegetarian
        </label>
        <label>
          <input type="radio" name="dietary" value="vegan" checked={formData.dietary === "vegan"} onChange={handleChange} /> vegan
        </label>

        <label style={{ display: "block", marginTop: "1rem" }}>
          Special requests:
          <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange} />
        </label>

        <button type="submit" style={{ display: "block", marginTop: "1rem" }}>Register</button>
      </form>

      {submittedData && (
        <div className="summary-card">
          <h2>Registration Summary</h2>
          <p>Name: {submittedData.fullName}</p>
          <p>Email: {submittedData.email}</p>
          <p>Ticket Type: {submittedData.ticketType}</p>
          <p>Dietary Preference: {submittedData.dietary}</p>
          <p>Special Requests: {submittedData.specialRequests}</p>
        </div>
      )}
    </div>
  );
}

export default App;