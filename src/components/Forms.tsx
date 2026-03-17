export default function Forms() {
  return (
    <div className="p-6">
      <div>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" className="input" />
      </div>
      <div>
        <label htmlFor="surname">Apellido</label>
        <input type="text" id="surname" className="input" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" className="input" />
      </div>
      <div>
        <label htmlFor="message">Mensaje</label>
        <textarea id="message" className="input" />
      </div>
      <div>
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-600">Enviar</button>
      </div>
    </div>
  );
}
