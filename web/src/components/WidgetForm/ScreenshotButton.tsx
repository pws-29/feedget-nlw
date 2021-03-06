import { Camera, Trash } from 'phosphor-react'
import html2canvas from 'html2canvas'
import { useState } from 'react';
import { Loading } from './Loading';

interface ScreenshotButtonProps {
  screenshot: string | null;
  setScreenshot: (screenshot: string | null) => void;
  setIsTakingScreenshot: (isTakingScreenshot: boolean) => void;
  isTakingScreenshot: boolean;
}

export default function ScreenshotButton({
  screenshot,
  setScreenshot,
  setIsTakingScreenshot,
  isTakingScreenshot
}: ScreenshotButtonProps) {

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    // tira a foto do elemento escolhido na página
    const canvas = await html2canvas(document.querySelector('html')!);
    // converte para uma imagem png no formato base64 (texto que representa uma imagem)
    const base64image = canvas.toDataURL('image/png');



    setTimeout(() => {
      setScreenshot(base64image);
      setIsTakingScreenshot(false);
    }, 700)
  }
  // Caso a screenshot tenha sido tirada
  if (screenshot) {
    return (
      <button
        type='button'
        className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors'
        onClick={() => setScreenshot(null)}
        style={{
          backgroundImage: `url(${isTakingScreenshot ? null : screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
      >
        <Trash weight='fill' />
      </button>
    )
  }

  // Sem screenshot
  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
};
