import React, { useState, useCallback } from 'react';
import { Box, xcss, Inline } from '@atlaskit/primitives';
import { Section } from '../Section';
import { ProjectPic } from './ProjectPic';
import { projectMedia } from './projectMedia';
import Carousel from 'react-multi-carousel';
import { ProjectOverlay } from './ProjectOverlay';

import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const containerStyle = xcss({
  justifyContent: 'center',
  display: 'flex',
});

const carouselStyles = xcss({
  position: 'relative',
  padding: 'space.300',
  width: '800px',
  alignItems: 'center',

  '> ul > li': {
    marginTop: '0px',
  },
});

export function Portfolio({ onEnter }) {
  const [currentUrl, setCurrentUrl] = useState(null);

  const onProjectClick = useCallback(
    (url) => {
      setCurrentUrl(url);
    },
    [setCurrentUrl]
  );

  const onClose = useCallback(
    (e) => {
      setCurrentUrl(null);
      e.stopPropagation();
    },
    [setCurrentUrl]
  );

  return (
    <Section onEnter={onEnter} title="Portfolio">
      <Box xcss={containerStyle}>
        {currentUrl && <ProjectOverlay onClose={onClose} url={currentUrl} />}
        <Box xcss={carouselStyles}>
          <Carousel
            additionalTransfrom={0}
            infinite
            itemClass=""
            minimumTouchDrag={80}
            renderDotsOutside
            renderArrowsWhenDisabled={false}
            showDots
            responsive={responsive}
          >
            {projectMedia.map(({ projectPic, url }) => (
              <ProjectPic projectPic={projectPic} url={url} onClick={() => onProjectClick(url)} />
            ))}
          </Carousel>
        </Box>
      </Box>
    </Section>
  );
}
