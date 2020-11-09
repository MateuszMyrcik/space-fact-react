import React from 'react';
import SliderCardAtom from '../../../resources/features/atoms/slider-card'

const imagePath = '../../../resources/features/atoms/slider-card/mocked-images/1.jpg'

function TestPage() {
  return (
  <div className="page page__test">
   <h1>Test Page</h1>
   <SliderCardAtom config={{ text: { content: 'Napis kontent'}}} type="text" />
   <SliderCardAtom config={{ image: { src: './logo512.png'}}} type="image" />
 </div>
  );
}

export default TestPage;