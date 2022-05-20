import { useEffect } from "react"
import $script from 'scriptjs';

const useScript = (url, selector = 'body', async = true) => {

  useEffect(() => {
    const element = document.querySelector('body')
    const script = document.createElement('script')
    script.src = url
    script.async = async
    element.appendChild(script)
    return () => {
      element.removeChild(script)
    }

  }, [url])
}

export default useScript


