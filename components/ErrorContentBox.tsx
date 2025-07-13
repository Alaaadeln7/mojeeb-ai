import React from "react";

type ErrorProps = {
  error: {
    message: string;
    errors?: Record<string, string[]>;
  };
};

const ErrorContentBox = ({ error }: ErrorProps) => {
  return (
    <div className="bg-red-100 text-red-800 p-4 rounded shadow space-y-2">
      {/* General message */}
      {error.message && <p>{error.message}</p>}

      {/* Field-specific errors */}
      {error.errors && (
        <ul className="list-disc list-inside text-sm text-red-700">
          {Object.entries(error.errors).map(([field, messages]) =>
            messages.map((msg, idx) => (
              <li key={`${field}-${idx}`}>
                <strong className="capitalize">{field}</strong>: {msg}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default ErrorContentBox;
