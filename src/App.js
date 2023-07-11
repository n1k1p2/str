import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='media-container'>
        <div className='media-container-text'> 
          <h1>
Инарко Строй</h1>
<div className='media-line'></div>
          <h1>Лучшие решения
для вашего дома</h1>
        </div>
          
      </div>
      <div className='aboutus-container'>
        <div className='aboutus-1'><h2>О компании</h2></div>
        <div className='aboutus-2'><h1>Мы — компания, которая проектирует и строит дома от эскиза до интерьера. С момента основания наша цель – строить красивые и качественные дома для комфортной жизни.</h1></div>
      </div>
      <div className='gallery'>
        <Gallery></Gallery>
      </div>
      <div className='adv-container'>
        <div className='adv-container-title'>
          <h1>Наши преимущества:</h1>
        </div>
        <div className='adv-container-poss'>
          <div className='adv-container-spos'>
            <h2>Качество</h2>
            <div className='media-line1'></div>
            <h3>Строение из клееного бруса отличается теплом, уютом. Это обуславливается не только толщиной стены, но также и соблюдением технологии при строительстве и проектировании. Мы имеем десятки проверенных проектов, среди которых обязательно найдется тот, который покажется идеальным</h3>

          </div>
          <div className='adv-container-spos'>
            <h2>Цена</h2>
            <div className='media-line1'></div>
            <h3>Предлагаем привлекательные условия строительства
</h3>

          </div>
          <div className='adv-container-spos'>
            <h2>Экологичность</h2>
            <div className='media-line1'></div>
            <h3>Строение из клееного бруса – полностью экологично, так как для склейки производителями используется специальный клей, который прошел проверку на экологичность. Он не мешает древесине «дышать», а значит – строение сохраняет все преимущества деревянного материала</h3>
          </div>
          <div className='adv-container-spos'>
            <h2>Быстрота</h2>
            <div className='media-line1'></div>
            <h3>Все детали будущего дома изготавливаются с высокой точностью в заводских условиях, сборка на месте строительства производится в сжатые сроки</h3>
          </div>
        </div>
      </div>
      <div className='services-container'>
        <div className='services-title'><h2>Услуги</h2></div>
        <div className='services-positions-first'>
          <div className='services-pos'><img src={logo}></img><h1>Расчет стоимости дома</h1></div>
          <div className='services-pos'><img src={logo}></img><h1>Проектирование</h1></div>
          <div className='services-pos'><img src={logo}></img><h1>Дизайн</h1></div>
        </div>
        <div className='services-positions-second'>
          <div className='services-pos'><img src={logo}></img><h1>Инженерные коммуникации</h1></div>
          <div className='services-pos'><img src={logo}></img><h1>Электрика</h1></div>
          <div className='services-pos'><img src={logo}></img><h1>Строительство дома
"под ключ"</h1></div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
