import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import BookService from '../../services/BookService/BookService';
import CategoryService from '../../services/CategoryService/CategoryService';

function EditBookComponent() {
  const blueCoverUrl =
    'https://raw.githubusercontent.com/KauanHerbst/React-Literium-Project/main/src/images/BookBlue.webp';
  const redCoverUrl =
    'https://raw.githubusercontent.com/KauanHerbst/React-Literium-Project/main/src/images/BookRed.webp';
  const yellowCoverUrl =
    'https://raw.githubusercontent.com/KauanHerbst/React-Literium-Project/main/src/images/BookYellow.webp';

  const { id } = useParams();
  const [categoryData, setCategoryData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();
  const [bookData, setBookData] = React.useState({
    name: '',
    author: '',
    year: '',
    description: '',
    price: '',
    category: '',
    categories: '',
    imageUrl: '',
  });
  const bookService = new BookService();
  const categoryService = new CategoryService();
  async function sendBookUpdate() {
    const [success, errors] = await bookService.updateBookById(bookData, id);
    if (success) {
      navigate('/management');
      toast.success('Livro Atualizado!');
    }
    if (errors) {
      errors.map((erro) => toast.error(erro));
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  React.useEffect(() => {
    async function handleBookData() {
      const response = await bookService.findBookById(id);
      response.category = JSON.stringify(response.categories[0]);
      setBookData(response);
    }

    async function findCategories() {
      const response = await categoryService.findCategories();
      setCategoryData(response.content);
    }

    findCategories();
    handleBookData();
    setLoading(false);
  }, [id]);

  return (
    <section className="container flex-start">
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="container-edit-book flex-start flex-column flex-no-center">
          <div className="mg-2">
            <h2>Editar livro</h2>
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
                <textarea
                  name="description"
                  onChange={handleChange}
                  value={bookData.description}
                />
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
                <select
                  name="category"
                  onChange={handleChange}
                  value={bookData.category}
                >
                  <option>Selecione</option>
                  {categoryData.length > 0 ? (
                    categoryData.map((category) => (
                      <option
                        key={category.id}
                        value={JSON.stringify(category)}
                      >
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
                <select
                  name="imageUrl"
                  onChange={handleChange}
                  value={bookData.imageUrl}
                >
                  <option>Selecione</option>
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
                    sendBookUpdate();
                  }}
                >
                  Editar Livro
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default EditBookComponent;
