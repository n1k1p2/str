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
      
      <section id='section-first'>
  <h3 className='h3-title'>Наши услуги</h3>
  <div class="services-grid">
    <div class="service service1">
      <i class="ti-bar-chart"></i>
      <h4>Расчет стоимости дома</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
    </div>

    <div class="service service2">
      <i class="ti-light-bulb"></i>
      <h4>Проектирование</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
    </div>

    <div class="service service3">
      <i class="ti-money"></i>
      <h4>Дизайн</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
    </div>
    
  </div>
</section>
<section id='section-serv'>
  <div class="services-grid">
    <div class="service service1">
      <i class="ti-bar-chart"></i>
      <h4>Инженерные коммуникации</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
    </div>

    <div class="service service2">
      <i class="ti-light-bulb"></i>
      <h4>Электрика</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
    </div>

    <div class="service service3">
      <i class="ti-money"></i>
      <h4>Строительство дома
"под ключ"</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
    </div>
  </div>
</section>
  <footer className="footer">
		<div className="footer-1"><h1>г. Москва, Карамышевская набережная, 44</h1></div>
		<div className="footer-2"><h1 class="k13">+74957248687</h1></div>
	</footer>
    </div>
    
    
  );
}

export default App;
