const Step1 = () => {
  const cityOption = [
    { name: '請選擇縣市', value: '' },
    { name: '基隆市', value: 'KLU' },
    { name: '新北市', value: 'TPH' },
    { name: '臺北市', value: 'TPE' },
    { name: '桃園市', value: 'TYC' },
    { name: '新竹縣', value: 'HSH' },
    { name: '新竹市', value: 'HSC' },
    { name: '苗栗市', value: 'MAC' },
    { name: '苗栗縣', value: 'MAL' },
    { name: '臺中市', value: 'TXG' },
    { name: '彰化縣', value: 'CWH' },
    { name: '彰化市', value: 'CWS' },
    { name: '南投市', value: 'NTC' },
    { name: '南投縣', value: 'NTO' },
    { name: '雲林縣', value: 'YLH' },
    { name: '嘉義縣', value: 'CHY' },
    { name: '嘉義市', value: 'CYI' },
    { name: '臺南市', value: 'TNN' },
    { name: '高雄市', value: 'KHH' },
    { name: '屏東縣', value: 'IUH' },
    { name: '屏東市', value: 'PTS' },
    { name: '宜蘭縣', value: 'ILN' },
    { name: '宜蘭市', value: 'ILC' },
    { name: '花蓮縣', value: 'HWA' },
    { name: '花蓮市', value: 'HWC' },
    { name: '臺東市', value: 'TTC' },
    { name: '臺東縣', value: 'TTT' },
    { name: '澎湖縣', value: 'PEH' },
    { name: '金門縣', value: 'KMN' },
    { name: '連江縣', value: 'LNN' },
  ];
  const genderOption = [
    { gender: '先生', value: 'mr', selected: 'selected' },
    { gender: '女士', value: 'ms', selected: '' },
    { gender: '不明', value: 'mx', selected: '' },
  ];
  const inputItem = [
    {
      id: 'gender',
      item: '稱謂',
      type: 'select',
      placeholder: '',
      col: 'col-4',
    },
    {
      id: 'name',
      item: '姓名',
      type: 'text',
      placeholder: '請輸入姓名',
      col: 'col-8',
    },
    {
      id: 'tel',
      item: '電話',
      type: 'tel',
      placeholder: '請輸入行動電話',
      col: 'col-6',
    },
    {
      id: 'email',
      item: 'Email',
      type: 'email',
      placeholder: '請輸入電子郵件',
      col: 'col-6',
    },
    {
      id: 'city',
      item: '縣市',
      type: 'select',
      placeholder: '請選擇縣市',
      col: 'col-4',
    },
    {
      id: 'address',
      item: '地址',
      type: 'text',
      placeholder: '請輸入地址',
      col: 'col-8',
    },
  ];

  const inputHtml = (item) => {
    return (
      <div className={item.col}>
        <div className="item-group mb-3">
          <label className="mb-1">{item.item}</label>
          <div className="input-group">
            <input
              type={item.type}
              className="form-control"
              id={item.id}
              placeholder={item.placeholder}
            />
          </div>
        </div>
      </div>
    );
  };
  const selectHtml = (item) => {
    const options = () => {
      console.log(item.id);
      return item.id === 'gender' ? genderOption : cityOption;
    };
    return (
      <div className={item.col}>
        <div className="item-group mb-3">
          <label className="mb-1">{item.item}</label>
          <div className="input-group">
            <select className="form-control" required>
              {options}
              {/* {options.map((x) => {
                return (
                  <option value={x.value} key={x.value}>
                    {x.name}
                  </option>
                );
              })} */}
            </select>
          </div>
        </div>
      </div>
    );
  };
  const Inputs = (item) => {
    return item.type.includes('select') ? selectHtml(item) : inputHtml(item);
  };
  return (
    <>
      {inputItem.map((item) => {
        return Inputs(item);
      })}
      {/* <h3 className="form-title">寄送地址</h3>
      <section className="form-body col col-12">
        <div className="row">
          <div className="input-group mb-3 col-2">
            <div className="input-label">稱謂</div>
            <div className="select-container">
              <select>
                {genderOption.map((option) => {
                  return (
                    <option value={option.value} key={option.value}>
                      {option.gender}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="item-group mb-3 col-2">
            <label className="mb-1">{inputItem[0].item}</label>
            <div className="input-group">
              <input
                type={inputItem[0].type}
                className="form-control"
                id={inputItem[0].id}
                placeholder={inputItem[0].placeholder}
              />
            </div>
          </div>

        </div>

        <div className="item-group mb-3 col-2">
          <label className="mb-1">地址</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="請輸入地址"
            />
          </div>
        </div>
        <div className="col col-12">
          <div className="item-group mb-3 col-2">
            <label className="mb-1">縣市</label>
            <div className="input-group">
              <select className="form-control" required>
                {cityOption.map((city) => {
                  return (
                    <option value={city.value} key={city.value}>
                      {city.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div> 
      </section> */}
    </>
  );
};

export default Step1;
