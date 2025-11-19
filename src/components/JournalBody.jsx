import React, { useState } from 'react';
import { useRef } from 'react';
import { JournalFiles } from './JournalFiles';
import './style.css';
import { useDraggable } from 'react-use-draggable-scroll';

const JournalBody = () => {
  const [enemyFile, setEnemyFile] = useState(true); 
  const [enemyId, setEnemyId] = useState(JournalFiles.find((item) => item.id === 1)); 
  const [selectedArea, setSelectedArea] = useState(null);
  const ref = useRef();
  const { events } = useDraggable(ref);

  const handleIdClick = (id) => {
    const info = JournalFiles.find((item) => item.id === id);
    setEnemyId(info);
    setEnemyFile(true); 
  };

  const handleAreaClick = (area) => {
    setSelectedArea(area);
  }






  return (
    <div>
      <div className="enemyList" {...events} ref={ref}>
        {JournalFiles.map((hkEnemy) => (
          <button key={hkEnemy.id} onClick={() => handleIdClick(hkEnemy.id)}  className="enemyButton">
            <img src={hkEnemy.icon} alt={hkEnemy.nome} className="enemyIcon" />
           
          </button>
          
      
          
        
        ))}


        


      
          </div>
     <div className='secondLine'></div>
    <div className='line'></div>
   

    
    
    
        {enemyFile && enemyId && (
           <>
                
    <div className="enemyFile">
          

           <p className="enemyName">{enemyId.nome}</p>
           <p className="enemyDescription">{enemyId.descricao}</p>
           <div className="enemyImgbox">
           <img src={enemyId.imagem} alt={enemyId.nome} className="enemyImg" />
           </div>
           <p className="enemyHunter">{enemyId.hunter}</p> 
           
</div>

          </> 
        )}

        <footer className="credits">
  <small>© Team Cherry. </small> 
  <small>All rights belong to them. </small>
      <small><b>Site made by CheeseOmelette.</b></small>

  <div className="social-links">
    
    <a href="https://github.com/CheeseOmelette" target="_blank" rel="noopener noreferrer">
      GitHub
    </a>
    <a href="https://www.linkedin.com/in/valdemar-fontenele-855144237/" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
  </div>
</footer>

        

      
    </div>
  );
};

export default JournalBody;
