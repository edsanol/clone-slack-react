import { useSelector } from 'react-redux';
import '../assets//styles/components/ChatCountLike.scss';
import like from '../assets/images/like.png';

export const ChatCountLike = ({ likes }) => {
  const { user } = useSelector((state) => state.userReducer);
  const verifiLikeToUser = likes.map((e) => e.userId === user._id);

  return (
    <div
      className={
        verifiLikeToUser.includes(true)
          ? 'span-like-count-like'
          : 'span-like-count'
      }>
      <div className="img-like-container">
        <img className="img-like-style" src={like} alt="like" />
      </div>

      <p className="p-like-count">{likes.length}</p>
    </div>
  );
};
