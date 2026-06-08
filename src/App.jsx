import React from 'react';
import './index.css';
import Home from './pages/Home';
function App(){
  return(
    <>

<Home />
   <div className=" absolute left-0 top-40">
       <svg width="200" height="420" viewBox="0 0 200 420">

        {/* Wave 1 - tight + deep */}
        <path
          d="M 60 0
             C 10 60, 110 120, 60 180
             C 10 240, 110 300, 60 360
             C 10 420, 110 480, 60 540"
          stroke="violet"
          strokeWidth="4"
          fill="none"
        />

        {/* Wave 2 - same style shifted */}
        <path
          d="M 130 0
             C 80 60, 180 120, 130 180
             C 80 240, 180 300, 130 360
             C 80 420, 180 480, 130 540"
          stroke="purple"
          strokeWidth="4"
          fill="none"
        />

      </svg>
    </div>

  <div class="relative w-40 h-40 border-4 border-pink-900 rounded-full">
  <div class="absolute top-0 right-0  rounded-full bg-pink-200/60 blur-[80px] scale-150"> gehehr</div>
</div>
</>
  )
}
export default App;