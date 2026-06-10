import React from "react";

function Login() {
  return (
    <div
      className="border-t-4 p-6"
      style={{
        borderColor: "var(--main-color)",
      }}
    >
      <p className="mb-4">
        Login to access the full dashboard
      </p>

      <form className="flex flex-wrap items-center gap-3">
        <label htmlFor="email">
          Email:
        </label>

        <input
          id="email"
          name="email"
          type="text"
          className="border px-2 py-1"
        />

        <label htmlFor="password">
          Password:
        </label>

        <input
          id="password"
          name="password"
          type="password"
          className="border px-2 py-1"
        />

        <button
          type="submit"
          className="border px-3 py-1"
        >
          OK
        </button>
      </form>
    </div>
  );
}

export default Login;