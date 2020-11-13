import React, {
  useState, useCallback, useEffect,
} from 'react';
import Arrow from '../Arrow';
import ButtonScroll from '../ButtonScroll';
import Image from '../ImageGrid';

import {
  MasonryContainer, Grid, ButtonScrollContainer,
} from './styles';

const Masonry: React.FC = () => {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    const top = scrollTop ? document.body.scrollHeight : 0;
    window.scrollTo({ top, behavior: 'smooth' });
  }, [scrollTop]);

  const handleScroll = useCallback(() => {
    setScrollTop(!scrollTop);
  }, [scrollTop]);

  return (
    <MasonryContainer>
      <Grid>
        <Image alt="Grid" src="https://source.unsplash.com/random/1" />
        <div className="body">
          <div className="relative">
            <h1 className="title">Title 1</h1>
            <p className="author">Mario Rossi</p>
          </div>
          <div className="mt-auto">
            <a href="#last">
              <span className="tag">#tag1</span>
            </a>
          </div>
        </div>
      </Grid>
      <Grid>
        <Image alt="Grid" src="https://source.unsplash.com/random/2" />
        <div className="body">
          <div className="relative">
            <h1 className="title">Title 1</h1>
            <p className="author">Mario Rossi</p>
          </div>
          <div className="mt-auto">
            <span className="tag">#tag1</span>
          </div>
        </div>
      </Grid>
      <Grid>
        <Image alt="Grid" src="https://source.unsplash.com/random/3" />
        <div className="body">
          <div className="relative">
            <h1 className="title">Title 1</h1>
            <p className="author">Mario Rossi</p>
          </div>
          <div className="mt-auto">
            <span className="tag">#tag1</span>
          </div>
        </div>
      </Grid>
      <Grid>
        <Image alt="Grid" src="https://source.unsplash.com/random/4" />
        <div className="body">
          <div className="relative">
            <h1 className="title">Title 1</h1>
            <p className="author">Mario Rossi</p>
          </div>
          <div className="mt-auto">
            <span className="tag">#tag1</span>
          </div>
        </div>
      </Grid>
      <Grid>
        <Image alt="Grid" src="https://source.unsplash.com/random/5" />
        <div className="body">
          <div className="relative">
            <h1 className="title">Title 1</h1>
            <p className="author">Mario Rossi</p>
          </div>
          <div className="mt-auto">
            <span className="tag">#tag1</span>
          </div>
        </div>
      </Grid>
      <Grid>
        <Image alt="Grid" src="https://source.unsplash.com/random/6" />
        <div className="body">
          <div className="relative">
            <h1 className="title">Title 1</h1>
            <p className="author">Mario Rossi</p>
          </div>
          <div className="mt-auto">
            <span className="tag">#tag1</span>
          </div>
        </div>
      </Grid>
      <Grid>
        <Image alt="Grid" src="https://source.unsplash.com/random/7" />
        <div className="body">
          <div className="relative">
            <h1 className="title">Title 1</h1>
            <p className="author">Mario Rossi</p>
          </div>
          <div className="mt-auto">
            <span className="tag">#tag1</span>
          </div>
        </div>
      </Grid>
      <Grid>
        <Image alt="Grid" src="https://source.unsplash.com/random/8" />
        <div className="body">
          <div className="relative">
            <h1 className="title">Title 1</h1>
            <p className="author">Mario Rossi</p>
          </div>
          <div className="mt-auto">
            <span className="tag">#tag1</span>
          </div>
        </div>
      </Grid>
      <Grid>
        <Image alt="Grid" src="https://source.unsplash.com/random/9" />
        <div className="body">
          <div className="relative">
            <h1 className="title">Title 1</h1>
            <p className="author">Mario Rossi</p>
          </div>
          <div className="mt-auto">
            <span className="tag">#tag1</span>
          </div>
        </div>
      </Grid>
      <Grid>
        <Image alt="Grid" src="https://source.unsplash.com/random/10" />
        <div className="body">
          <div className="relative">
            <h1 className="title">Title 1</h1>
            <p className="author">Mario Rossi</p>
          </div>
          <div className="mt-auto">
            <span className="tag">#tag1</span>
          </div>
        </div>
      </Grid>
      <Grid>
        <Image alt="Grid" src="https://source.unsplash.com/random/11" />
        <div className="body">
          <div className="relative">
            <h1 className="title">Title 1</h1>
            <p className="author">Mario Rossi</p>
          </div>
          <div className="mt-auto">
            <span className="tag">#tag1</span>
          </div>
        </div>
      </Grid>
      <Grid id="last">
        <Image alt="Grid" src="https://source.unsplash.com/random/12" />
        <div className="body">
          <div className="relative">
            <h1 className="title">Title 1</h1>
            <p className="author">Mario Rossi</p>
          </div>
          <div className="mt-auto">
            <span className="tag">#tag1</span>
          </div>
        </div>
      </Grid>
      <ButtonScrollContainer>
        <ButtonScroll onClick={handleScroll}>
          <Arrow up={!scrollTop} />
        </ButtonScroll>
      </ButtonScrollContainer>
    </MasonryContainer>
  );
};

export default Masonry;
