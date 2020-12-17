import { useEffect, useRef, useState } from 'preact/hooks';
import './modal.css'

export default function Modal ({msg = 'Welcome!', mask = true}) {
  const node = useRef(null)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setTimeout(() => setOpacity(1), 200)
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const closeModal = () => node.current.remove()
  const handleSubmit = () => {
    console.log('Submit Modal')
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
    <div ref={node} class={{modalMask: mask}} style={{opacity: opacity}}>
      <div class="modal-body">
        <div class="close-modal" onClick={closeModal}>╳</div>
        <main>
          <span class='modal-bold'>{msg}</span><br />
          <p>You can play some games here!</p>
          <button onClick={handleSubmit}>Go ›</button>
        </main>
      </div>
    </div>
  );
};
