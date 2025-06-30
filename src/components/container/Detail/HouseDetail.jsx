import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// 메인 컴포넌트
function HouseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [mainImg, setMainImg] = useState('');

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:3001/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('데이터를 불러오는 데 실패했습니다.');
        return res.json();
      })
      .then((data) => {
        setItem(data);
        setMainImg(`http://localhost:3001${data.img}`);
      })
      .catch((err) => {
        console.error(err);
        alert('존재하지 않는 상품입니다.');
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
          <p className="house-description">
            {item.description ||
              '우리 아이들이 안전하게 생활할 수 있도록 최대한 불필요한 요소들은 제거하고 제작했습니다. 많은 관심 부탁드립니다~'}
          </p>
        </div>
      </div>

      <HouseDetailTabs item={item} />
    </div>
  );
}

// Detail Page
function HouseDetailTabs({ item }) {
  const [activeTab, setActiveTab] = useState('detail');
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ author: '', content: '' });

  useEffect(() => {
    if (!item) return;

    fetch(`http://localhost:3001/reviews?productId=${item.id}`)
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error('후기 로딩 실패:', err));
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3001/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...newReview,
        productId: item.id,
        time: new Date().toISOString()  //현재 시간 추가
      }),
    })
      .then(res => res.json())
      .then((savedReview) => {
        setReviews(prev => [...prev, savedReview]);
        setNewReview({ author: '', content: ''});
      })
      .catch(err => alert('후기 등록 실패'));
  };

  return (
    <div className="detail-tabs-container">
      <ul className="tabs">
        <li className={`tab-item ${activeTab === 'detail' ? 'active' : ''}`} onClick={() => setActiveTab('detail')}>
          상품 상세 정보
        </li>
        <li className={`tab-item ${activeTab === 'review' ? 'active' : ''}`} onClick={() => setActiveTab('review')}>
          상품 후기
        </li>
        <li className={`tab-item ${activeTab === 'qna' ? 'active' : ''}`} onClick={() => setActiveTab('qna')}>
          상품 문의
        </li>
        <li className={`tab-item ${activeTab === 'exchange' ? 'active' : ''}`} onClick={() => setActiveTab('exchange')}>
          교환/반품/배송
        </li>
      </ul>

      <div className="tab-content">
        {activeTab === 'detail' && (
          <>
            <p>{item.detailText}</p>
            <div className="detail-images">
              <img src="/images/PetDetail1.png" alt="detail1" />
              <img src="/images/PetDetail2.png" alt="detail2" />
              <img src="/images/PetDetail3.png" alt="detail3" />
              <img src="/images/PetDetail4.png" alt="detail4" />
              <img src="/images/PetDetail5.png" alt="detail5" />
            </div>
          </>
        )}

        {activeTab === 'review' && (
          <>
           <div className="review-con">
           <h4>후기 작성</h4>
           <form onSubmit={handleSubmit}>

           <div className="review-con-top">
           <input type="text" placeholder="작성자" value={newReview.author}
              onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
              required/>
            <textarea
              className="review-textarea"
              placeholder="내용을 입력하세요"
              value={newReview.content}
              onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
              required/>
            <button type="submit" className="submit-button">등록</button>
           </div>
    <div className="review-con-bottom">
    <div className="reviews">
      <h4>후기 목록</h4>
      {reviews.length === 0 ? (
        <p>등록된 후기가 없습니다.</p>
      ) : (
        <ul>
        {reviews.map((review) => {
          const date = review.time ? new Date(review.time) : null;
          return (
            <li key={review.id} className="review-item">
              <strong>{review.author}</strong>
              <p>{review.content}</p>
              <small>{date && !isNaN(date) ? date.toLocaleString() : '날짜 정보 없음'}</small>
            </li>
          );
          })}
        </ul>
          )}
          </div>
         </div>
        </form>
        </div>


  </>
)}
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


export default HouseDetail;