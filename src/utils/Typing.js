import React from "react"
import Typed from "typed.js";

function Typing() {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'Yo!',
        "안녕하세요 !",
        "What's up?",
        'Hello!',
        "こんにちは !",
        'Howdy!',
        "Salutations",
        "How are ya?",
        "你 好 !",
      ],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
      loopCount: Infinity,
      smartBackspace: true,
    
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <div className="wrap">
      <div className="type-wrap text-3xl font-medium text-yellow-200">
        <span style={{ whiteSpace: 'pre' }} ref={el} />
      </div>
    </div>
  );
}

export default Typing