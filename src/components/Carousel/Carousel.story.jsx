import * as React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { specs } from 'storybook-addon-specifications';
import { storiesOf } from '@storybook/react';
import { Carousel } from './Carousel';
import { Component, tests } from './Carousel.test';
import { Title } from '../../../lib/components/Typography/Title';
import { MobileCarousel } from './Mobile';

const stories = storiesOf('Carousel', module);

stories.addDecorator(withKnobs);

const margin = { marginTop: '20px' };

stories.add(
  'Overview',
  () => {
    return (
      <>
        <div>
          <Carousel>
            <Carousel.Slide>
              <div
                style={{
                  height: `200px`,
                  backgroundColor: `red`,
                  textAlign: `center`
                }}
              >
                <Title>REACT</Title>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div
                style={{
                  height: `100px`,
                  backgroundColor: `blue`,
                  textAlign: `center`
                }}
              >
                <Title>ATLANTIC</Title>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div
                style={{
                  height: `300px`,
                  backgroundColor: `pink`,
                  textAlign: `center`
                }}
              >
                <Title>IS BEST</Title>
              </div>
            </Carousel.Slide>
          </Carousel>
        </div>

        <div style={{ userSelect: `none` }}>
          <MobileCarousel>
            <Carousel.Slide>
              <div
                style={{
                  height: `500px`,
                  backgroundColor: `green`,
                  textAlign: `center`
                }}
              >
                <Title>REACT</Title>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div
                style={{
                  height: `100px`,
                  backgroundColor: `pink`,
                  textAlign: `center`
                }}
              >
                <Title>ATLANTIC</Title>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div
                style={{
                  height: `300px`,
                  backgroundColor: `yellow`,
                  textAlign: `center`
                }}
              >
                <Title>IS BEST</Title>
              </div>
            </Carousel.Slide>
          </MobileCarousel>
        </div>
      </>
    );
  },
  {
    info: { inline: true }
  }
);

stories.add(
  'Playground',
  () => {
    const autoHeight = boolean(`autoHeight:`, false);
    const activeSlide = text(`activeSlide`, `1`);
    const auto = text(`interval`, ``);
    const childs = text(`children`, `SPLIT FUNCTION IS HERE`);

    const children = childs.split(' ').map(item => (
      <Carousel.Slide>
        <div
          style={{
            height: `${(Math.random() + 0.1) * 200 + Math.random() * 90}px`,
            backgroundColor: `#${Math.random()
              .toString(16)
              .substring(9)}`,
            textAlign: `center`
          }}
        >
          <Title>{item}</Title>
        </div>
      </Carousel.Slide>
    ));

    const carousel = Component(
      children,
      parseInt(auto),
      autoHeight,
      parseInt(activeSlide)
    );

    specs(() => tests(carousel));

    return carousel;
  },
  {
    info: { inline: true }
  }
);
