import React from "react";

function Login() {
  return (
    <div
      className="Login border-t-4 p-6"
      style={{
        borderColor: "var(--main-color)",
      }}
    >
      <p className="mb-4">
        Login to access the full dashboard
      </p>

      <form className="flex flex-col sm:flex-row flex-wrap gap-2 items-start sm:items-center">
        <label htmlFor="email">
          Email:
        </label>

        <input
          id="email"
          className="border px-2 py-1 w-full sm:w-auto"
        />

        <label htmlFor="password">
          Password:
        </label>

        <input
          id="password"
          className="border px-2 py-1 w-full sm:w-auto"
        />

        <button
          type="submit"
          className="border px-3 py-1 w-full sm:w-auto"
        >
          OK
        </button>
      </form>
    </div>
  );
}

export default Login;