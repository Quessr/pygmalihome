import AlertBellIcon from "./AlertBellIcon";
import FeedContainer from "./FeedContainer";
import ShackeBellIcon from "./ShakeBellIcon";

const Feed = () => {
  return (
    <div>
      <FeedContainer
        icon={<AlertBellIcon />}
        title="청약기간 입니다, 지금 바로 신청하세요!"
      />
      <FeedContainer
        icon={<ShackeBellIcon />}
        title="청약신청일까지 이주이내의 공고들 입니다!"
      />
    </div>
  );
};

export default Feed;
