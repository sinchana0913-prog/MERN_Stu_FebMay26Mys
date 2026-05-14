import { useRef, useState } from "react";

// Controlled and Uncontrolled components

const initialFormData = {
  username: "",
  bio: "",
  country: "",
  gender: "",
  agree: false,
  uploadedFileName: "",
};

export function ControlledForm() {
  const [formData, setFormData] = useState(initialFormData);

  // Uncontrolled file input
  const fileref = useRef(null);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  // Form submit
  function handleSubmit(event) {
    event.preventDefault();

    const uploadedFile = fileref.current.files?.[0] || null;

    const submittedData = {
      ...formData,
      uploadedFileName: uploadedFile
        ? uploadedFile.name
        : "No file uploaded",
    };

    console.log("Submitted FormData:", submittedData);

    setFormData((prev) => ({
      ...prev,
      uploadedFileName: uploadedFile
        ? uploadedFile.name
        : "No file uploaded",
    }));

    alert("Form submitted successfully");
  }

  // Reset form
  function handleReset() {
    setFormData(initialFormData);

    if (fileref.current) {
      fileref.current.value = "";
    }
  }

  return (
    <section>
      <h2>Controlled Components</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
          />

          <br />

          <textarea
            name="bio"
            id="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Write a short bio"
          />

          <br />

          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
          </select>

          <br />

          <fieldset>
            <legend>Gender</legend>

            <input
              type="radio"
              name="gender"
              id="female"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            <label htmlFor="female">Female</label>

            <input
              type="radio"
              name="gender"
              id="male"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            <label htmlFor="male">Male</label>

            <br />

            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <label htmlFor="agree">
              I agree to the terms and conditions
            </label>

            <br />

            <label htmlFor="resume">Upload Resume</label>

            <input
              type="file"
              name="resume"
              id="resume"
              ref={fileref}
            />

            <br />

            <button type="submit">Submit</button>

            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </fieldset>
        </div>
      </form>

      <hr />

      <h3>Live Form Data Preview</h3>

      <p>Username: {formData.username || "Not entered"}</p>
      <p>Bio: {formData.bio || "Not entered"}</p>
      <p>Country: {formData.country || "Not entered"}</p>
      <p>Gender: {formData.gender || "Not selected"}</p>

      <p>
        Accepted terms and conditions:
        {formData.agree ? " Yes" : " No"}
      </p>

      <p>
        Selected file:
        {formData.uploadedFileName || " No file selected"}
      </p>
    </section>
  );
}