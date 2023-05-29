import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, useEffect, useRef, useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

interface FeedCardTitleProps {
  title: string;
}

const FeedCardTitle: FC<FeedCardTitleProps> = ({ title }) => {
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
      <CardTitle
        data-tooltip-id={hasEllipsis ? 'cardTitle' : undefined}
        data-tooltip-content={title}
        ref={textRef}
      >
        {title}
      </CardTitle>
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

export default FeedCardTitle;

const CardTitle = styled.div`
  height: 48px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
