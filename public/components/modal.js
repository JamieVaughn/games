import { useEffect, useRef, useState } from 'preact/hooks';
import './modal.css'

export default function Modal ({msg = 'Welcome!', mask = true, emitter}) {
  const node = useRef(null)
  const [opacity, setOpacity] = useState(0)
  const [file, setFile] = useState('')

  useEffect(() => {
    setTimeout(() => setOpacity(1), 200)
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const closeModal = () => {
    emitter('')
    node.current.remove()
  }
  const handleSubmit = () => {
    if(file.length) emitter(file)
  };

  const handleClickOutside = (e) => {
    if (node && node.current && node.current.contains(e.target)) {
      // inside click
      console.log('clicked modal')
      return;
    }
    // outside click removes modal
    closeModal()
  };

  return (
    <div ref={node} class={mask ? 'modal-mask' : ''} style={{opacity: opacity}}>
      <div class="modal-body">
        <div class="close-modal" onClick={closeModal}>╳</div>
        <main>
          <span class='modal-bold'>{msg}</span><br />
          <p>Please enter a file name to save this drawing under.</p>
          <input value={file} onChange={e => setFile(e.target.value)} />
          <button onClick={handleSubmit}>Save ›</button>
        </main>
      </div>
    </div>
  );
};
