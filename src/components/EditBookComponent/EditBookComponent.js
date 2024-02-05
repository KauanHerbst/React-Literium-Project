import React from 'react';
import InputComponent from '../LandPageComponents/InputsComponents/InputComponent';

function EditBookComponent() {
  return (
    <section className="container flex-start">
      <div className="container-edit-book flex-start flex-column flex-no-center">
        <div className="mg-2">
          <h2>Editar livro</h2>
          <div className="text-sub-bar width-sub-bar-100" />
        </div>
        <div>
          <form method="post" className="mg-4">
            <InputComponent type="text" association="name">
              Nome
            </InputComponent>
            <InputComponent type="text" association="author">
              Autor
            </InputComponent>
            <InputComponent type="text" association="year">
              Ano
            </InputComponent>
            <div className="flex-start flex-column flex-no-center mt-1">
              <label htmlFor="description">Descrição</label>
              <textarea name="description" />
            </div>
            <InputComponent type="text" association="price">
              Preço
            </InputComponent>
            <div className="flex-start flex-column flex-no-center mt-1">
              <label htmlFor="categories">Categorias</label>
              <select name="categories">
                <option>Selecione</option>
                <option value="romance">Romance</option>
              </select>
            </div>
            <div className="flex-start flex-column flex-no-center mt-1">
              <label htmlFor="cover">Capa</label>
              <select name="cover">
                <option>Selecione</option>
                <option value="blueCover">Capa Azul</option>
              </select>
            </div>
            <div className="flex-start mg-2">
              <button
                type="submit"
                className="buttonPattern"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Editar Livro
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EditBookComponent;
