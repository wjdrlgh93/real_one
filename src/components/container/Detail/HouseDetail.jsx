import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function HouseDetailTabs({ item }) {
  const [activeTab, setActiveTab] = useState('detail');

  return (
    <div className="detail-tabs-container">
      <ul className="tabs">
        <li
          className={`tab-item ${activeTab === 'detail' ? 'active' : ''}`}
          onClick={() => setActiveTab('detail')}
        >
          상품 상세 정보
        </li>
        <li
          className={`tab-item ${activeTab === 'review' ? 'active' : ''}`}
          onClick={() => setActiveTab('review')}
        >
          상품 후기
        </li>
        <li
          className={`tab-item ${activeTab === 'qna' ? 'active' : ''}`}
          onClick={() => setActiveTab('qna')}
        >
          상품 문의
        </li>
        <li
          className={`tab-item ${activeTab === 'exchange' ? 'active' : ''}`}
          onClick={() => setActiveTab('exchange')}
        >
          교환/반품/배송
        </li>
      </ul>

      <div className="tab-content">
        {activeTab === 'detail' && (
          <>
            <p>{item.detailText }</p>
            <div className="detail-images">
              <img src="/images/PetDetail1.png" alt="detail1" />
              <img src="/images/PetDetail2.png" alt="detail2" />
              <img src="/images/PetDetail3.png" alt="detail3" />
              <img src="/images/PetDetail4.png" alt="detail4" />
              <img src="/images/PetDetail5.png" alt="detail5" />
            </div>
          </>
        )}
        {activeTab === 'review' && <p>상품 후기 </p>}
        {activeTab === 'qna' && <p>상품 문의 내용</p>}
        {activeTab === 'exchange' && (
        <div className="exchange-content">
        <div className="exchange-images">
            <img src="/images/PetDetail6.png" alt="교환 배송 안내" />
    </div>
  </div>
)}
      </div>
    </div>
  );
}

function HouseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [mainImg, setMainImg] = useState('');

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:3001/house/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('데이터를 불러오는 데 실패했습니다.');
        }
        return res.json();
      })
      .then((data) => {
        setItem(data);
        setMainImg(`http://localhost:3001${data.img}`);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  if (!item) return <div className="loading">로딩 중...</div>;

  return (
    <div className="house-detail-page">
      <div className="house-detail-header">
        <h1 className="house-title">{item.title}</h1>
      </div>

      <div className="house-detail-body">
        <div className="house-image-gallery">
          <img className="main-image" src={mainImg} alt={item.title} />
        </div>

        <div className="house-info">
          <p className="house-price">
            가격: <strong>{item.price.toLocaleString()}원</strong>
          </p>
          <p className="house-size">사이즈: {item.size || '정보 없음'}</p>
          <p className="house-description">{item.description || '우리 아이들이 안전하게 생활할수 있도록 최대한 불필요한 요소들은 제거하고 제작했습니다 많은 관심 부탁드립니다~'}</p>

          {/* <div className="house-actions">
            <button className="btn-cart" onClick={() => navigate('/cart')}>
              장바구니 담기
            </button>
            <button className="btn-order" onClick={() => navigate('/admin/order')}>
              주문하기
            </button>
          </div> */}
        </div>
      </div>

      {/* 탭 영역 */}
      <HouseDetailTabs item={item} />
    </div>
  );
}

export default HouseDetail;