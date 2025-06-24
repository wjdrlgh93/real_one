import React, { useEffect, useState } from 'react';

function HouseList() {
  const [houses, setHouses] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // 선택된 아이템

  useEffect(() => {
    fetch('http://localhost:3001/fashion')
      .then(res => res.json())
      .then(data => setHouses(data))
      .catch(error => console.error('데이터 불러오기 실패:', error));
  }, []);

  const clothes = houses.filter(item => item.category === 'cloth');
  const hats = houses.filter(item => item.category === 'hat');
  const sunglasses = houses.filter(item => item.category === 'sunglass');
  const ties = houses.filter(item => item.category === 'tie');

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="ShopHouseContainer">

      <h2>펫 옷</h2>
      <div className="ShopHouseContainer-top">
        {clothes.map(item => (
          <div key={item.id} className="house-item" onClick={() => openModal(item)}>
            <img src={`http://localhost:3001${item.img}`} alt={item.title} />
            <h3>{item.title}</h3>
            <p>가격: {item.price.toLocaleString()}원</p>
          </div>
        ))}
      </div>

      <h2>펫 모자</h2>
      <div className="ShopHouseContainer-middle">
        {hats.map(item => (
          <div key={item.id} className="house-item" onClick={() => openModal(item)}>
            <img src={`http://localhost:3001${item.img}`} alt={item.title} />
            <h3>{item.title}</h3>
            <p>가격: {item.price.toLocaleString()}원</p>
          </div>
        ))}
      </div>

      <h2>펫 선글라스</h2>
      <div className="ShopHouseContainer-bottom">
        {sunglasses.map(item => (
          <div key={item.id} className="house-item" onClick={() => openModal(item)}>
            <img src={`http://localhost:3001${item.img}`} alt={item.title} />
            <h3>{item.title}</h3>
            <p>가격: {item.price.toLocaleString()}원</p>
          </div>
        ))}
      </div>

      <h2>펫 넥타이</h2>
      <div className="ShopHouseContainer-bottoms">
        {ties.map(item => (
          <div key={item.id} className="house-item" onClick={() => openModal(item)}>
            <img src={`http://localhost:3001${item.img}`} alt={item.title} />
            <h3>{item.title}</h3>
            <p>가격: {item.price.toLocaleString()}원</p>
          </div>
        ))}
      </div>

      
      {selectedItem && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={`http://localhost:3001${selectedItem.img}`} alt={selectedItem.title} />
            <h2> {selectedItem.category}</h2>
            <h3> {selectedItem.title}</h3>
            <p>가격: {selectedItem.price.toLocaleString()}원</p>
            <button onClick={closeModal} className="modal-close">CLOSE</button>
            <a href="/cart" className="cart">
            <img src="/images/cart.png" alt="장바구니로 이동"/>
        </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default HouseList;