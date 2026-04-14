import { useState } from "react";
export default function Forms() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") as string).trim();
    const surname = (data.get("surname") as string).trim();
    const email = (data.get("email") as string).trim();
    const message = (data.get("message") as string).trim();

    const newErrors: Record<string, string> = {};

    if (!name) newErrors.name = "El nombre es obligatorio.";
    if (!surname) newErrors.surname = "El apellido es obligatorio.";
    if (!email) newErrors.email = "El email es obligatorio.";
    if (!message) newErrors.message = "El mensaje no puede estar vacío.";

    setErrors(newErrors);
    setSubmitted(true);

    if (Object.keys(newErrors).length === 0) {
      alert("Formulario enviado correctamente");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 flex flex-col w-full">

      <div aria-live="polite" className="text-red-600 font-semibold mb-4 min-h-[1.5rem]">
        {submitted && Object.keys(errors).length > 0 &&
          "Hay errores en el formulario. Revísalos."}
      </div>

      <div>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          className="input"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "error-name" : undefined}
        />
        {errors.name && <p id="error-name" className="text-red-600 text-sm">{errors.name}</p>}
      </div>

      <div className="mt-4">
        <label htmlFor="surname">Apellido</label>
        <input
          type="text"
          id="surname"
          name="surname"
          className="input"
          aria-invalid={errors.surname ? "true" : "false"}
          aria-describedby={errors.surname ? "error-surname" : undefined}
        />
        {errors.surname && <p id="error-surname" className="text-red-600 text-sm">{errors.surname}</p>}
      </div>

      <div className="mt-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="input"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "error-email" : undefined}
        />
        {errors.email && <p id="error-email" className="text-red-600 text-sm">{errors.email}</p>}
      </div>

      <div className="mt-4">
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          className="input"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "error-message" : undefined}
        />
        {errors.message && <p id="error-message" className="text-red-600 text-sm">{errors.message}</p>}
      </div>

      <div className="m-auto mt-4">
        <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-myred border border-[var(--color-text)]">
          Enviar
        </button>
      </div>
    </form>
  );
}
