import React, { useEffect, useState } from 'react';
import './counter.cmponent.css';

const CounterComponent = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const counterBox = document.getElementById('counter-box');
      const oTop = counterBox.offsetTop - window.innerHeight;

      if (!animated && window.scrollY > oTop) {
        document.querySelectorAll('.count-number').forEach((counter) => {
          const countTo = counter.getAttribute('data-count');
          animateCounter(counter, countTo);
        });

        setAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animated]);

  const animateCounter = (element, countTo) => {
    let countNum = 0;
    const duration = 3000; // 3 seconds
    const steps = 70; // Number of steps
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      countNum += Math.ceil(parseInt(countTo, 10) / steps);
      element.innerText = countNum.toLocaleString('en-US', { minimumIntegerDigits: 1 });

      if (countNum >= parseInt(countTo, 10)) {
        clearInterval(interval);
        element.innerText = parseInt(countTo, 10).toLocaleString('en-US'); // Add custom suffix if present
      }
    }, stepDuration);
  };

  return (
    <section id="counter-box" className="mx-11 p-0 text-center">
      <div className="container mx-auto addbgimage">
        {/* <div class="theme-title z-index-1 pt-7">
          <h6 className='text-center'>Facts and Figures</h6>
        </div> */}
        <div className="p-8">
          <div className="flex flex-wrap">
            <CounterItem count={14} label="Years of Experience" suffix="+" />
            <CounterItem count={500} label="Fortune Companies" suffix="+" />
            <CounterItem count={500} label="Wordpress Websites" suffix="+" />
            <CounterItem count={800} label="Projects Delivered" suffix="+" />   
          </div>
        </div>
      </div>
    </section>
  );
};

const CounterItem = ({ count, label, suffix }) => (
  <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-2 mb-4">
    <div className="counter p-6">
      <div className="counter-desc">
        <span className="text-lg count-number block" data-count={count} data-suffix={suffix}>
          {count}
        </span>
        {suffix && <span className="block">{suffix}</span>}
        <h5 className="text-sm mt-2">{label}</h5>
      </div>
    </div>
  </div>
);

export default CounterComponent;
