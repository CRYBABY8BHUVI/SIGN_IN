import './App.css'
import React from 'react'
import Left_side from './Components/left_side'
import Right_side from './Components/right_side'
import logo_1 from './assets/image_1.jpg'
import logo_2 from './assets/image_2.jpg'
import logo_3 from './assets/image_3.jpg'
import logo_4 from './assets/image_4.jpg'
import logo_5 from './assets/image_5.jpg'
function App() {
  const images = [logo_1, logo_2, logo_3, logo_4, logo_5];
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
  const randomImage = images[currentImageIndex];
  return (
    <div className='flex'>
      <Left_side />
      <div>
        <Right_side img={randomImage} />
      </div>
    </div>
  )
}

export default App
