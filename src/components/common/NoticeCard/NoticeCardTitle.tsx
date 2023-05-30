import styled from '@emotion/styled';
import { FC, useEffect, useRef, useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

interface NoticeCardTitleProps {
  title: string;
}

const NoticeCardTitle: FC<NoticeCardTitleProps> = ({ title }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [hasEllipsis, setHasEllipsis] = useState(false);

  useEffect(() => {
    if (textRef.current && title) {
      const clientHeight = textRef.current.clientHeight;
      const scrollHeight = textRef.current.scrollHeight;
      setHasEllipsis(clientHeight < scrollHeight);
    }
  }, [title]);
  return (
    <>
      <StyledCardTitle
        data-tooltip-id={hasEllipsis ? 'cardTitle' : undefined}
        data-tooltip-content={title}
        ref={textRef}
      >
        {title}
      </StyledCardTitle>
      <ReactTooltip
        id="cardTitle"
        place="bottom"
        style={{
          backgroundColor: '#29a19c',
          color: 'white',
          maxWidth: '240px',
        }}
      />
    </>
  );
};

export default NoticeCardTitle;

const StyledCardTitle = styled.div`
  height: 48px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
