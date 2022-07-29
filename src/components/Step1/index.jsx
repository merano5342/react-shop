import React, { memo } from 'react';
// phase="address"

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
  { name: '先生', value: 'mr', selected: 'selected' },
  { name: '女士', value: 'ms', selected: '' },
  { name: '不明', value: 'mx', selected: '' },
];

const inputs = (item) => {
  const inputHtml = () => {
    return (
      <div className={item.col} key={item.id}>
        <div className="item-group mb-4">
          <label className="mb-2">{item.item}</label>
          <div className="input-group">
            <input
              type={item.type}
              className="form-control p-3"
              id={item.id}
              placeholder={item.placeholder}
            />
          </div>
        </div>
      </div>
    );
  };
  const selectHtml = () => {
    const optionList = () => {
      return item.id === 'gender' ? genderOption : cityOption;
    };
    return (
      <div className={item.col} key={item.id}>
        <div className="item-group mb-4">
          <label className="mb-2">{item.item}</label>
          <div className="input-group">
            <select className="form-control p-3" required>
              {optionList(item).map((x) => {
                return (
                  <option value={x.value} key={x.value}>
                    {x.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    );
  };
  return item.type.includes('select') ? selectHtml(item) : inputHtml(item);
};

const Step1 = React.memo((props) => {
  return (
    <section className="form-body col col-12" data-phase="address">
      <h3 className="form-title mb-3">寄送地址</h3>
      <div className="row">
        {inputs(inputItem[0])}
        {inputs(inputItem[1])}
      </div>
      <div className="row">
        {inputs(inputItem[2])}
        {inputs(inputItem[3])}
      </div>
      <div className="row">
        {inputs(inputItem[4])}
        {inputs(inputItem[5])}
      </div>
    </section>
  );
});

export default Step1;
