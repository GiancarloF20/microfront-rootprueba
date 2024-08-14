import '../App.css'
import { useEffect, useRef, useState } from 'react'
export default function Header() {
    const [count] = useState(0)
    const iframeRef = useRef<HTMLIFrameElement | null>(null);

    // Enviar datos al iframe cuando count cambie
    useEffect(() => {
        if (iframeRef.current) {
          iframeRef.current.contentWindow?.postMessage({ count }, '*');
        }
      }, [count]);
  return (
    <>
       <h1>Header MicrofrontEnd</h1>
       <iframe 
        ref={iframeRef} 
        src="https://main.d1m1csbzu34v7e.amplifyapp.com/" 
        style={{ width: '100%', height: '100vh', border: 'none' }} 
        title="Microfront-2"
      />
   </>
  )
}