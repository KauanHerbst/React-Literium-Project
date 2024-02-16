import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import BookService from '../../services/BookService/BookService';
import CategoryService from '../../services/CategoryService/CategoryService';

function CreateBookComponent() {
  const bookService = new BookService();
  const navigate = useNavigate();
  const blueCoverUrl =
    'https://raw.githubusercontent.com/KauanHerbst/React-Literium-Project/main/src/images/BookBlue.webp';
  const redCoverUrl =
    'https://raw.githubusercontent.com/KauanHerbst/React-Literium-Project/main/src/images/BookRed.webp';
  const yellowCoverUrl =
    'https://raw.githubusercontent.com/KauanHerbst/React-Literium-Project/main/src/images/BookYellow.webp';

  const [bookData, setBookData] = React.useState({
    name: '',
    author: '',
    year: '',
    description: '',
    price: '',
    category: '',
    imageUrl: '',
  });

  const [categoryData, setCategoryData] = React.useState([]);
  const categoryService = new CategoryService();

  function handleChange(event) {
    const { name, value } = event.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function createBook() {
    const response = await bookService.sendBookData(bookData);
    const [sucess, errors] = response;
    if (sucess) {
      navigate('/management');
      toast.success('Livro Cadastrado!');
    }
    if (errors) {
      errors.map((error) => toast.error(error));
    }
  }

  React.useEffect(() => {
    async function findCategories() {
      const response = await categoryService.findCategories();
      setCategoryData(response.content);
    }

    findCategories();
  }, []);

  return (
    <section className="container flex-start">
      <div className="container-create-book flex-start flex-column flex-no-center">
        <div className="mg-2">
          <h2>Cadastrar novo livro</h2>
          <div className="text-sub-bar width-sub-bar-100" />
        </div>
        <div>
          <form method="post" className="mg-4">
            <div>
              <label htmlFor="name">Nome</label>
              <input
                required
                type="text"
                name="name"
                value={bookData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="author">Autor</label>
              <input
                required
                type="text"
                name="author"
                value={bookData.author}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="year">Ano</label>
              <input
                required
                type="text"
                name="year"
                value={bookData.year}
                onChange={handleChange}
              />
            </div>
            <div className="flex-start flex-column flex-no-center mt-1">
              <label htmlFor="description">Descrição</label>
              <textarea name="description" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="price">Preço</label>
              <input
                required
                type="text"
                name="price"
                value={bookData.price}
                onChange={handleChange}
              />
            </div>
            <div className="flex-start flex-column flex-no-center mt-1">
              <label htmlFor="category">Categoria</label>
              <select name="category" onChange={handleChange}>
                <option value={null}>Selecione</option>
                {categoryData.length > 0 ? (
                  categoryData.map((category) => (
                    <option key={category.id} value={JSON.stringify(category)}>
                      {category.name}
                    </option>
                  ))
                ) : (
                  <option>carregando...</option>
                )}
              </select>
            </div>
            <div className="flex-start flex-column flex-no-center mt-1">
              <label htmlFor="imageUrl">Capa</label>
              <select name="imageUrl" onChange={handleChange}>
                <option value={null}>Selecione</option>
                <option value={blueCoverUrl}>Capa Azul</option>
                <option value={yellowCoverUrl}>Capa Amarela</option>
                <option value={redCoverUrl}>Capa Vermelha</option>
              </select>
            </div>
            <div className="flex-start mg-2">
              <button
                type="submit"
                className="buttonPattern"
                onClick={(e) => {
                  e.preventDefault();
                  createBook();
                }}
              >
                Cadastrar Livro
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateBookComponent;
