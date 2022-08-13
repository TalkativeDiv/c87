import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { Flex, Spacer, Center, Box } from '@chakra-ui/react';
import rr from '/rr.jpg';
import gr from '/gr.png';
import yr from '/yr.png';
import pr from '/pr.png';
import br from '/br.png';
let canvas: any;
const Canvas = () => {
  const canvasEl = useRef(null);
  useEffect(() => {
    const options = {};
    canvas = new fabric.Canvas(canvasEl.current, options);
    // make the fabric.Canvas instance available to your app
    return () => {
      canvas.dispose();
    };
  }, []);
  const draw = (url: any, x: any, y: any, w: any, h: any) => {
    fabric.Image.fromURL(url, (img) => {
      img.scaleToWidth(w);
      img.scaleToHeight(h);
      img.set({
        top: y,
        left: x,
      });
      canvas.add(img);
    });
  };
  const handleKeyDown = (e: any) => {
    switch (e.key) {
      case 'r':
        draw(rr, 100, 200, 500, 500);
        break;
      case 'g':
        draw(gr, 370, 200, 600, 500);
        break;
      case 'y':
        draw(yr, 550, 200, 600, 500);
        break;
      case 'p':
        draw(pr, 800, 200, 600, 500);
        break;
      case 'b':
        draw(br, 900, 200, 600, 500);
        break;
    }
  };

  window.addEventListener('keydown', (e) => handleKeyDown(e));
  return (
    <canvas
      width={1600}
      height={800}
      ref={canvasEl}
      className="border-2 border-gray-200 rounded-xl"
    ></canvas>
  );
};
export default Canvas;
