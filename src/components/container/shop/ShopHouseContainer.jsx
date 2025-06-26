import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HouseList() {
  const [houses, setHouses] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/house')
      .then(res => res.json())
      .then(data => setHouses(data))
      .catch(error => console.error('데이터 불러오기 실패:', error));
  }, []);

  const dogHouses = houses.filter(item => item.category === 'DogHouse');
  const catHouses = houses.filter(item => item.category === 'CatHouse');
  const petHouses = houses.filter(item => item.category === 'Pethouse');

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="ShopHouseContainer">

      <h2>강아지 하우스</h2>
      <div className="ShopHouseContainer-top">
        {dogHouses.map(item => (
          <div key={item.id} className="house-item" onClick={() => openModal(item)}>
            <img src={`http://localhost:3001${item.img}`} alt={item.title} />
            <h3>{item.title}</h3>
            <p>가격: {item.price.toLocaleString()}원</p>
          </div>
        ))}
      </div>

      <h2>고양이 하우스</h2>
      <div className="ShopHouseContainer-middle">
        {catHouses.map(item => (
          <div key={item.id} className="house-item" onClick={() => openModal(item)}>
            <img src={`http://localhost:3001${item.img}`} alt={item.title} />
            <h3>{item.title}</h3>
            <p>가격: {item.price.toLocaleString()}원</p>
          </div>
        ))}
      </div>

      <h2>소형펫 하우스</h2>
      <div className="ShopHouseContainer-bottom">
        {petHouses.map(item => (
          <div key={item.id} className="house-item" onClick={() => openModal(item)}>
            <img src={`http://localhost:3001${item.img}`} alt={item.title} />
            <h3>{item.title}</h3>
            <p>가격: {item.price.toLocaleString()}원</p>
          </div>
        ))}
      </div>

      {/* 모달 창 */}
      {selectedItem && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={`http://localhost:3001${selectedItem.img}`} alt={selectedItem.title} />
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.size?.toLocaleString()}</p>
            <p>가격: {selectedItem.price.toLocaleString()}원</p>

            {/* 오른쪽 하단 버튼 그룹 */}
            <div className="right-buttons">
              <button
                onClick={() => navigate('/admin/order')}
                className="admin-button" >주문처로 이동
              </button>

              <a href="/cart" className="cart-button">
                <img src="/images/cart.png" alt="장바구니로 이동" />
              </a>
            </div>

            {/* 모달 하단 중앙 닫기 버튼 */}
            <div className="close-button">
              <button onClick={closeModal} className="modal-close">닫기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HouseList;