import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HouseList() {
  const [houses, setHouses] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const [dogPage, setdogPage] = useState(1);
  const [catPage, setcatPage] = useState(1);
  const [petPage, setpetPage] = useState(1);

  const itemsPerPage = 6;

  useEffect(() => {
    fetch('http://localhost:3001/house')
      .then(res => res.json())
      .then(data => setHouses(data))
      .catch(error => console.error('데이터 불러오기 실패:', error));
  }, []);

  const dogHouses = houses.filter(item => item.category === 'DogHouse');
  const catHouses = houses.filter(item => item.category === 'CatHouse');
  const petHouses = houses.filter(item => item.category === 'Pethouse');

  // 페이징 함수
  const getCurrentItems = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return items.slice(start, end);
  };

  

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };
  
  const items = Array.from({length: 50}, (_, i) => `Item${i+1}`);
  
  return (
    <div className="ShopHouseContainer">
      <h2>강아지 하우스</h2>
      <div className="ShopHouseContainer-top">
        {dogHouses.map(item => (
          <div
            key={item.id}
            className="house-item"
            onClick={() => openModal(item)}  // 리스트 아이템 클릭 시 모달 열림
            style={{ cursor: 'pointer' }}
          >
            <img
              src={`http://localhost:3001${item.img}`}
              alt={item.title}
              // 이미지에는 클릭 이벤트 없음 → 이미지 눌러도 모달 열림
            />
            <h3>{item.title}</h3>
            <p>가격: {item.price.toLocaleString()}원</p>
          </div>
        ))}
      </div>

      <h2>고양이 하우스</h2>
      <div className="ShopHouseContainer-middle">
        {catHouses.map(item => (
          <div
            key={item.id}
            className="house-item"
            onClick={() => openModal(item)}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={`http://localhost:3001${item.img}`}
              alt={item.title}
            />
            <h3>{item.title}</h3>
            <p>가격: {item.price.toLocaleString()}원</p>
          </div>
        ))}
      </div>

      <h2>소형펫 하우스</h2>
      <div className="ShopHouseContainer-bottom">
        {petHouses.map(item => (
          <div
            key={item.id}
            className="house-item"
            onClick={() => openModal(item)}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={`http://localhost:3001${item.img}`}
              alt={item.title}
            />
            <h3>{item.title}</h3>
            <p>가격: {item.price.toLocaleString()}원</p>
          </div>
        ))}
      </div>

      {/* 모달 */}
      {selectedItem && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img
              src={`http://localhost:3001${selectedItem.img}`}
              title={`상세보기`}
              alt={selectedItem.title}
              style={{ cursor: 'pointer' }}
              onClick={() => navigate(`/shop/house/${selectedItem.id}`)}  // 모달 이미지 클릭 시 상세페이지 이동
            />
            <h2>{selectedItem.title}</h2>
            <p>size: {selectedItem.size?.toLocaleString()}</p>
            <p>가격: {selectedItem.price.toLocaleString()}원</p>

            <div className="modal-bottom-left">
              <button onClick={() => navigate('/admin/order')} className="admin-button">
                주문처로 이동
              </button>
            </div>

            <div className="modal-bottom-right">
              <a href="/cart" className="cart">
                <img src="/images/cart.png" alt="장바구니로 이동" />
              </a>
            </div>

            <button onClick={closeModal} className="modal-close">
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HouseList;