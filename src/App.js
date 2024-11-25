import React from 'react';
import './App.css';

function App() {
  const courses = [
    {
      title: "POLİVAGAL TEORİ / İLKELER VE UYGULAMA",
      level: "seviye bilgisi",
      trainer: "Deb Dana",
      duration: "süre",
      certificate: "sertifika",
      price: "€32",
      oldPrice: "€55",
      specialOffer: true,
  
    },
    {
      title: "POLİVAGAL TEORİ / İLKELER VE UYGULAMA",
      level: "seviye bilgisi",
      trainer: "Deb Dana",
      duration: "süre",
      certificate: "sertifika",
      price: "€32",
      oldPrice: "€55",
      specialOffer: true,
  
    },
  ];

  return (
    <div className="App">
      <header className="header">
        <nav>
          <ul>
           <li>
            <button className='filter-button'>Tümü</button>
            
           </li>
            <li>
              <button className='filter-button'>Yeni</button>
            </li>

          </ul>
        
        </nav>
      </header>
      <main className="course-list">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>

            
            <h3>{course.title}</h3>
            <p>{course.level}</p>
            {course.trainer && (
              <div className="trainer">
                <span>{course.trainer}</span>
              </div>
            )}
            <div className="price">
              {course.oldPrice && <span className="old-price">{course.oldPrice}</span>}
              <span className="new-price">{course.price}</span>
            </div>
            <button className="enroll-button">KAYDOL</button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
