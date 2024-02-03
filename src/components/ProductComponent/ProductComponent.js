import React from 'react';
import BookBlue from '../../images/BookBlue.webp';
import StarsSvg from '../LandPageComponents/SvgComponents/StarsSvg/StarsSvg';

function ProductComponent() {
  const [productAmount, setProductAmount] = React.useState(0);

  React.useEffect(() => {
    const btnSub = document.querySelector('.btn-sub');
    const btnSum = document.querySelector('.btn-sum');

    function addProduct() {
      setProductAmount((prevAmount) => prevAmount + 1);
    }
    function subProduct() {
      if (productAmount > 0) {
        setProductAmount((prevAmount) => prevAmount - 1);
      }
    }

    btnSub.addEventListener('click', subProduct);
    btnSum.addEventListener('click', addProduct);

    return () => {
      btnSub.removeEventListener('click', subProduct);
      btnSum.removeEventListener('click', addProduct);
    };
  }, [productAmount]);

  return (
    <section className="container container-product flex-column">
      <div className="flex-start flex-no-center">
        <div className="image-product flex-start">
          <img src={BookBlue} />
        </div>
        <div className="product-info">
          <div className="info flex-start flex-column flex-no-center">
            <div className="flex-start">
              <div className="small-img flex-start">
                <img src={BookBlue} />
              </div>
              <div className="mg-2">
                <h2 className="mg-1">Livro</h2>
                <h5 className="mg-1">Autor</h5>
                <h5 className="mg-1">R$: 999</h5>
              </div>
            </div>
            <div className="flex-start flex-column flex-no-center mg-2">
              <div className="flex-start">
                <h5 className="calc-frete">Calcular Frete</h5>
                <StarsSvg />
              </div>
              <div className="flex-start mt-2">
                <div className="flex-start container-add-product">
                  <div className="mg-1 btn-sub">-</div>
                  <div className="mg-1">{productAmount}</div>
                  <div className="mg-1 btn-sum">+</div>
                </div>
                <button type="button" className="buttonAddCart ml-2">
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-start product-desc flex-column flex-no-center">
        <div className="mg-2">
          <h2>Descrição</h2>
        </div>
        <div className="mg-3">
          <p>
            Lorem ipsum dolor sit amet consectetur. Et sollicitudin tincidunt
            egestas rhoncus habitant netus. Rhoncus tempus amet vestibulum
            pharetra vestibulum pellentesque. Nec egestas facilisi elementum mi
            faucibus pellentesque amet. Pulvinar amet habitant proin risus.
            Condimentum sodales nec facilisis diam gravida ac. Est a fermentum
            adipiscing faucibus eget risus tempus nunc. Netus sollicitudin nibh
            mauris malesuada morbi sit. Quam mattis adipiscing ullamcorper cras
            lacus lectus. Purus justo sit consequat est congue risus. Mus quam
            augue cras amet auctor ut. Interdum mattis aliquet vestibulum in
            faucibus auctor senectus non. Ut eget faucibus potenti quisque purus
            convallis feugiat ullamcorper adipiscing. Habitant est sed molestie
            vel faucibus in enim aliquet blandit. Faucibus amet ac vestibulum a.
            Elementum amet diam ultricies mollis lectus integer
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductComponent;
