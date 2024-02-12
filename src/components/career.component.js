import React, { useState } from "react";
import "./CareerComponent.css"; // Import a separate CSS file for styling

const CareerComponent = () => {
  const [accordion1, setAccordion1] = useState(true);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(false);
  const [accordion4, setAccordion4] = useState(false);

  const toggleAccordion = (accordionNumber) => {
    switch (accordionNumber) {
      case 1:
        setAccordion1(!accordion1);
        setAccordion2(false);
        setAccordion3(false);
        setAccordion4(false);
        break;
      case 2:
        setAccordion1(false);
        setAccordion2(!accordion2);
        setAccordion3(false);
        setAccordion4(false);
        break;
      case 3:
        setAccordion1(false);
        setAccordion2(false);
        setAccordion3(!accordion3);
        setAccordion4(false);
        break;
      case 4:
        setAccordion1(false);
        setAccordion2(false);
        setAccordion3(false);
        setAccordion4(!accordion4);
        break;
      default:
        break;
    }
  };

  return (
    <>
    <div class="theme-title flex items-center justify-center text-center">
            <h6 className='aboutusTitle'>Current Job Openings</h6>
    </div>
    <div className="flex edit-this-career-component">
    <div className="career-container w-full ms-24 jobopenings">
      <div className={`accordionji ${accordion1 ? "active" : ""}`}>
        <button onClick={() => toggleAccordion(1)}>Job ID: DME001 Digital Marketing Executive</button>
        {accordion1 && (
          <div className="description">
            <p className="mb-2"><strong>Min. Qualification:</strong> Graduate</p>
            <p className="mb-2"><strong>Min. Experience:</strong> 3 years</p>
            <p className="mb-2"><strong>Salary:</strong> Negotiable</p>
            <p className="mb-2"><strong>Required Skills:</strong> Google Adwords, Other PPC Platform, Lead Generation.</p>

            <h4><strong>Responsibilities:</strong></h4>
            <ul className="makelist1">
              <li className="makelistlikealist">Plan and monitor the ongoing company presence on social media (Twitter, Facebook etc.)</li>
              <li className="makelistlikealist">Launch optimized online adverts through Google Adwords, Facebook etc. to increase company and brand awareness.</li>
              <li className="makelistlikealist">Be actively involved in SEO efforts (keyword, image optimization etc.)</li>
              <li className="makelistlikealist">Provide creative ideas for content marketing and update website</li>
              <li className="makelistlikealist">Collaborate with designers to improve user experience.</li>
              <li className="makelistlikealist">Measure performance of digital marketing efforts using a variety of Web analytics tools (Google Analytics, WebTrends etc.).</li>
              <li className="makelistlikealist">Excellent understanding of digital marketing concepts and best practices.</li>
              <li className="makelistlikealist">Experience with B2C social media, Google Adwords and email campaigns and SEO/SEM.</li>
            </ul>

            <p><strong>Skills and experience in:</strong> Creative content writing.</p>
          </div>
        )}
      </div>

      <div className={`accordionji ${accordion2 ? "active" : ""}`}>
        <button onClick={() => toggleAccordion(2)}>Job ID: BDM001 Business Development Manager</button>
        {accordion2 && (
          <div className="description">
            <p className="mb-2"><strong>Min. Qualification:</strong> Post Graduate</p>
            <p className="mb-2"><strong>Min. Experience:</strong> 3 years</p>
            <p className="mb-2"><strong>Salary:</strong> Negotiable</p>
            <p className="mb-2"><strong>Required Skills:</strong> Bidding on Upwork, Freelancer, Linkedin, Fieverr and other freelacing website</p>

            <h4><strong>Responsibilities:</strong></h4>
            <ul className="makelist1">
              <li className="makelistlikealist">Develop a growth strategy focused both on financial gain and customer satisfaction</li>
              <li className="makelistlikealist">Conduct research to identify new markets and customer needs Arrange business meetings with prospective clients</li>
              <li className="makelistlikealist">Promote the company’s products/services addressing or predicting clients’ objectives Prepare sales contracts ensuring <br></br>adherence to law-established rules and guidelines</li>
              <li className="makelistlikealist">Keep records of sales, revenue, invoices etc.</li>
              <li className="makelistlikealist">Provide trustworthy feedback and after-sales support</li>
              <li className="makelistlikealist">Build long-term relationships with new and existing customers Develop entry level staff into valuable sales people.</li>
            </ul>

            {/* <p><strong>Skills and experience in:</strong> Creative content writing.</p> */}
          </div>
        )}
      </div>

      <div className={`accordionji ${accordion3 ? "active" : ""}`}>
        <button onClick={() => toggleAccordion(3)}>Job ID: SWD001: Software Engineer (PHP Developer)</button>
        {accordion3 && (
          <div className="description">
            <p className="mb-2"><strong>Min. Qualification:</strong> B-Tech(IT/CS), M-Tech, MCA</p>
            <p className="mb-2"><strong>Min. Experience:</strong> 3 years</p>
            <p className="mb-2"><strong>Salary:</strong> Negotiable</p>
            <p className="mb-2"><strong>Required Skills:</strong> PHP, Laravel, Code Igniter, MySQl, Mongo DB, API Development.</p>

            <h4><strong>Responsibilities:</strong></h4>
            <ul className="makelist1">
              <li className="makelistlikealist">Write “clean”, well-designed code</li>
              <li className="makelistlikealist">Produce detailed specifications<br></br> prospective clients</li>
              <li className="makelistlikealist">Troubleshoot, test and maintain the core product software and databases to ensure strong optimization and functionality</li>
              <li className="makelistlikealist">Contribute in all phases of the development lifecycle</li>
              <li className="makelistlikealist">Follow industry best practices</li>
              <li className="makelistlikealist">Develop and deploy new features to facilitate related procedures and tools if necessary</li>
            </ul>

            {/* <p><strong>Skills and experience in:</strong> Creative content writing.</p> */}
          </div>
        )}
      </div>

      <div className={`accordionji ${accordion4 ? "active" : ""}`}>
        <button onClick={() => toggleAccordion(4)}>Job ID: FLD001 Software Engineer (Flutter Developer) </button>
        {accordion4 && (
          <div className="description">
            <p className="mb-2"><strong>Min. Qualification:</strong> B-Tech(IT/CS), M-Tech, MCA</p>
            <p className="mb-2"><strong>Min. Experience:</strong> 3 years</p>
            <p className="mb-2"><strong>Salary:</strong> Negotiable</p>
            <p className="mb-2"><strong>Required Skills:</strong> Flutter, REST API, Android & IOS SDK Development. Android & IOS UI design principles,<br></br> patterns, and best practices, Framework Android Studio, React Native. Database: MongoDB, Google Firebase</p>

            <h4><strong>Responsibilities:</strong></h4>
            <ul className="makelist1">
              <li className="makelistlikealist">We are looking for an Flutter developer responsible for the development and maintenance of applications aimed <br></br> at a vast number of diverse web,Android & IOS devices. Your primary focus will be the development of Android applications <br></br> and their integration with back-end services. You will be working alongside other engineers and developers working on <br></br> different layers of the infrastructure. Therefore, commitment to collaborative <br></br> problem solving, sophisticated design, and creating quality products is essential.</li>
              <li className="makelistlikealist">Experience in Flutter-Dart, Android Studio Java, SQL, Git, and other technologies</li>
              <li className="makelistlikealist">Translate designs and wireframes into high-quality code Familiar with Architecture Pattern: MVP, MVC, MVVM</li>
              <li className="makelistlikealist">Proven ability to build the Web , android and IOS application from scratch and scale them up as per the business need.</li>
              <li className="makelistlikealist">Design, build, and maintain high-performance, reusable, and reliable code</li>
              <li className="makelistlikealist">Identify and correct bottlenecks and fix bugs</li>
              <li className="makelistlikealist">Collaborating with UI and UX Designers, as well as Software Testers, to ensure that each app is presentable and in <br></br> perfect working order.</li>
            </ul>

            {/* <p><strong>Skills and experience in:</strong> Creative content writing.</p> */}
          </div>
        )}
      </div>
    </div>

    <div className="career-container me-12 jobForm">

          <div class="w-full md:w-96 md:max-w-full mx-auto">
        <div class="p-6 border border-gray-300 sm:rounded-md">
          <form
            method="POST"
            action="https://herotofu.com/start"
            enctype="multipart/form-data"
          >
            <label class="block mb-6">
              <span class="text-gray-700 careerText">Your name</span>
              <input
                required
                name="name"
                type="text"
                class="
                  block
                  w-full
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                placeholder="Joe Bloggs"
              />
            </label>
            <label class="block mb-6">
              <span class="text-gray-700 careerText">Email address</span>
              <input
                required
                name="email"
                type="email"
                class="
                  block
                  w-full
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                placeholder="joe.bloggs@example.com"
              />
            </label>
            <label class="block mb-6">
              <span class="text-gray-700 careerText">Years of experience</span>
              <select
                required
                name="experience"
                class="
                  block
                  w-full
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
              >
                <option>Less than a year</option>
                <option>1 - 2 years</option>
                <option>2 - 4 years</option>
                <option>4 - 7 years</option>
                <option>7 - 10 years</option>
                <option>10+ years</option>
              </select>
            </label>
            <label class="block mb-6">
              <span class="text-gray-700 careerText">Tell us more about yourself</span>
              <textarea
                name="message"
                class="
                  block
                  w-full
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                rows="3"
                placeholder="What motivates you?"
              ></textarea>
            </label>
            <label class="block mb-6">
              <span class="text-gray-700 careerText">Your CV</span>
              <input
                required
                name="cv"
                type="file"
                class="
                  block
                  w-full
                  mt-1
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
              />
            </label>
            <div class="mb-6">
              <div class="mt-2">
                <div>
                  <label class="inline-flex items-center">
                    <input
                      name="remote"
                      value="yes"
                      type="radio"
                      class="
                        text-indigo-600
                        border-gray-300
                        rounded-full
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-offset-0
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                      "
                      checked
                    />
                    <span class="ml-2 careerText">You'd like to work remotely</span>
                  </label>
                </div>
                <div>
                  <label class="inline-flex items-center">
                    <input
                      name="re"
                      value="no"
                      type="radio"
                      class="
                        text-indigo-600
                        border-gray-300
                        rounded-full
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-offset-0
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                      "
                    />
                    <span class="ml-2 careerText">You'd prefer to work onsite</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="mb-6">
              <button
                type="submit"
                class="
                  h-10
                  px-5
                  text-indigo-100
                  bg-indigo-700
                  rounded-lg
                  transition-colors
                  duration-150
                  focus:shadow-outline
                  hover:bg-indigo-800
                "
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
    </div>

    </>
  );
};

export default CareerComponent;
