import './steps.scss';

const radioData = [
  {
    id: 'shipping-standard',
    name: '標準運送',
    period: '約 3~7 個工作天',
    price: 0,
  },
  {
    id: 'shipping-dhl',
    name: 'DHL 貨運',
    period: '48 小時內送達',
    price: 500,
  },
];

const Step2 = () => {
  return (
    <section className="form-body col col-12" data-phase="shipping">
      <h3 className="form-title mb-3">運送方式</h3>
      {radioData.map((x) => {
        return (
          <div className="radio-group col col-12 mb-3" key={x.id}>
            <div className="radio-right">
              <input id={x.id} type="radio" name="shipping" className="radio" />
              <label htmlFor="radio" />
              <div className="radio-info">
                <div className="radio-text">{x.name}</div>
                <div className="radio-period col col-12">{x.period}</div>
              </div>
            </div>
            <div className="radio-price">
              {x.price === 0 ? '免費' : `$${x.price}`}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Step2;
