import React from 'react'

function CounterComponent() {
  return (
    // <!--counter start-->

    <section class="p-0 text-center">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2">
         <div class="col">
          <div class="p-8 bg-white" data-bg-img="images/bg/02.png">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="col-span-1 sm:col-span-2 lg:col-span-1">
                <div class="counter">
                  <div class="counter-desc">
                    <span class="count-number" data-count="482">482</span>
                    <span>+</span>
                    <h5>Project Done</h5>
                  </div>
                </div>
              </div>
              <div class="col-span-1 sm:col-span-2 lg:col-span-1 mt-6 sm:mt-0">
                <div class="counter">
                  <div class="counter-desc">
                    <span class="count-number" data-count="98">98</span>
                    <span>%</span>
                    <h5>Success Rate</h5>
                  </div>
                </div>
              </div>
              <div class="col-span-1 sm:col-span-2 lg:col-span-1 mt-6 sm:mt-0">
                <div class="counter">
                  <div class="counter-desc">
                    <span class="count-number" data-count="234">234</span>
                    <span>+</span>
                    <h5>Winning Awards</h5>
                  </div>
                </div>
              </div>
              <div class="col-span-1 sm:col-span-2 lg:col-span-1 mt-6 sm:mt-0">
                <div class="counter">
                  <div class="counter-desc">
                    <span class="count-number" data-count="72">72</span>
                    <span>K</span>
                    <h5>Happy Client</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
        </div>
      </div>
    </section>
    
    // <!--counter end-->
  )
}

export default CounterComponent