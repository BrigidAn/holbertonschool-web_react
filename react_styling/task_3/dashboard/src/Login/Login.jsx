import React from "react";

function Login() {
  return (
    <div className="p-6 border-t-4" style={{ borderColor: "var(--main-color)" }}>
      <p className="mb-4">Login to access the full dashboard</p>

      <form className="flex flex-col gap-4 w-64">
        <label className="flex flex-col">
          Email:
          <input className="border p-1" type="email" id="email" />
        </label>

        <label className="flex flex-col">
          Password:
          <input className="border p-1" type="password" id="password" />
        </label>

        <button className="bg-gray-200 p-2" type="submit">
          OK
        </button>
      </form>
    </div>
  );
}

export default Login;