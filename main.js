import './style.css'
import javascriptLogo from './javascript.svg'
import { barcodeMaker, download } from './functions.js'

document.querySelector('#app').innerHTML = `
  <div class="app">
   
    
    <h1>Hello BarCode!</h1>
    <canvas  id="canvas">
    
    </canvas>

    <button >
    <a id="download" download="image.png">
    Download  barcode as png    
    </a>

    </button>
   
  </div>
`

barcodeMaker()
download(document.querySelector('#download'),document.querySelector('#canvas'))

