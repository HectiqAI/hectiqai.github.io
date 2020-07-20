import React from "react";


function DAMPost(props){
  return (<div>
            <section class="pt-0 pt-md-0 pb-0">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-12 col-lg-10 col-xl-9">
                    <p>
                      At our coworking space, we meet inspiring organizations. One of them is the <a href="https://diplomeavantlamedaille.org">Diplome avant la médaille</a> nonprofit organization. Since its creation, it is making a huge difference in the fight against school dropout in Quebec city: 9 of 10 students participating in their program have been able to finish high school while 84% of the teachers witness academic improvement! Just like Coach Carter, they use sports to bring students into classes and they organize study sessions.
                    </p>
                    <p>
                      A critical facet of the program is the tutoring. Volunteers enroll to assist students once a week during study sessions. In 2019, almost 200 students were engaged in the program. In 2020, they expect to double this number.                       
                    </p>
                  </div>
                </div>
              </div>
            </section>


            <section class="pt-0 pt-md-0 my-6 bg-light">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-12 col-lg-10 col-xl-9">

                    <div class="pt-6 pb-2">
                      <h2>
                        Diplome avant la médaille's stats  <br/>
                        <span class="text-primary h3">2018-2019 school year</span>
                      </h2>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="d-flex justify-content-center">
                            <span class="price display-2 mb-0" data-toggle="countup" data-from="0" data-to="96" data-aos data-aos-id="countup:in">0</span>
                            <span class="h2 align-self-end mb-1">%</span>
                          </div>
                          <p class="font-size-lg text-gray-700 mb-6">
                            Ratio of students participating in their program have been able to pass their year 
                          </p>
                        </div>

                        <div class="col-md-4">
                          <div class="d-flex justify-content-center">
                            <span class="price display-2 mb-0" data-toggle="countup" data-from="0" data-to="8" data-aos data-aos-id="countup:in">0</span>
                            <span class="h2 align-self-end mb-1">/10</span>
                          </div>
                          <p class="font-size-lg text-gray-700 mb-6">
                            Students with grade retention that succeeded to pass their year with the program
                          </p>
                        </div>

                        <div class="col-md-4">
                          <div class="d-flex justify-content-center">
                            <span class="price display-2 mb-0" data-toggle="countup" data-from="0" data-to="84" data-aos data-aos-id="countup:in">0</span>
                            <span class="h2 align-self-end mb-1">%</span>
                          </div>
                          <p class="font-size-lg text-gray-700 mb-6">
                            Fraction of teachers witnessing academic improvement
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="pt-0 pt-md-0 pb-0">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-12 col-lg-10 col-xl-9">
                    <p>
                      The success of the project comes with the practical problem of pairing tutors and students. Since now, they used to match people by hand. This solution becomes impractical for the coming years. 
                    </p>
                    <p>
                      Pairing is notoriously hard and can be framed as an integer constraint problem. Let say we have N students and N tutors. You can define N<sup>2</sup> unique pairs of students and tutors. Each pair has a value characterizing how the student's and tutor's preferences (subject, availability, and schools) are alike. The optimization task consists in selecting the most number of pairs, at most N, but verifying that each tutor and student are selected only once and maximizing the values over the selected pairs. 
                    </p>
                    <p>For 10 students and 10 tutors, we count 100 possible pairs and over 3 million possible pairing solutions (it grows as the factorial of the number of students). Even for so few students, solving it hand will likely get you not the best possible pairings. We must rely on computers to deal with such complexity and find valuable pairing solutions. This is where Hectiq can help. 
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section class="pt-0 pt-md-0 pb-0">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-12 col-lg-10 col-xl-9">
                    <figure class="figure pt-8 pb-8 pl-lg-8 pr-lg-8">
                      <img class="figure-img img-fluid" src="/assets/img/photos/dam.png" alt="..."/>
                      <figcaption class="figure-caption text-center">
                        All 24 possible pairing solutions for 4 students and 4 tutors. The problem for DAM has another layer of complexity: We must select the pairings that respect the most of the preferences of the students and tutors. Due to people availability, it may not even exist a solution where all students are paired so that we also check other pairing possibilities.
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </section>

            <section class="pt-0 pt-md-0 pb-0">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-12 col-lg-10 col-xl-9">

                    <p>
                      We have been building a script for automatically finding pairings. Each student fills a form indicating its weak/strong subjects, availability, and school location. For tutors, they specify subjects they are comfortable to teach, their availability, and the schools they can commute to. Our code maximizes the number of pairings between students and tutors while optimizing on the people’s preferences. 
                    </p>
                    <hr class="hr-md mb-7"/>
                    <blockquote class="blockquote mb-7">
                      <p class="h3 mb-0 text-center text-primary">
                        “Our code maximizes the number of pairings between students and tutors while optimizing on the people's preferences.”
                      </p>
                    </blockquote>
                    <hr class="hr-md mb-7"/>
                    <p>
                      We'll also call present in the future to help them add new features. For instance, the pandemic forces them to set up online tutoring. It is a small adjustment to the script, but it makes a huge difference as the program can continue through social distancing.
                    </p>
                    <p>
                    Le Diplome avant la médaille was facing an important issue in their path to expanding their tutoring offer. We solved it by providing an optimization code. We are proud to be able to deal with these practical engineering tasks and let them focus on helping students get their diploma.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>)
}


export default DAMPost;