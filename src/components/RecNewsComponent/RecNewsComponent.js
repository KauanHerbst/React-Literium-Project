import React from 'react';
import { toast } from 'react-toastify';

function RecNewsComponent() {
  const [userData, setUserData] = React.useState({
    name: '',
    email: '',
  });

  function handleDataUser() {
    if (!userData.name) toast.error('Campo Nome Vázio!');
    if (!userData.email) toast.error('Campo Email Vázio!');
    if (userData.name && userData.email) {
      toast.success('Você receberá Novidades no Email!');
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <section className="container flex-start flex-column  flex-responsive-start-center">
      <div>
        <h2>Receba Novidades</h2>
        <div className="text-sub-bar width-sub-bar-100" />
      </div>
      <div className="container-recnews">
        <div className="mg-2 flex-start flex-column flex-no-center">
          <label htmlFor="name">Nome</label>
          <input required type="text" name="name" onChange={handleChange} />
        </div>
        <div className="mg-2 flex-start flex-column flex-no-center">
          <label htmlFor="email">Email</label>
          <input required type="email" name="email" onChange={handleChange} />
        </div>
        <button
          type="submit"
          className="btn-recnews mt-3"
          onClick={handleDataUser}
        >
          Receber Novidades
        </button>
      </div>
    </section>
  );
}

export default RecNewsComponent;
