import React from "react";
import {FiCheck} from "react-icons/fi";

function DAMPost(props){
  return (<div>
            <section className="pt-0 pt-md-0 pb-0">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-12 col-lg-10 col-xl-9">
                    <p>
                      At our coworking space, we frequently meet inspiring organizations. One of them is the <a href="https://diplomeavantlamedaille.org">Diplome avant la médaille</a> nonprofit organization. Since its creation in 2012, it is making a huge difference in the fight against school dropouts in Quebec City: 95% of their students-atheletes have been able to pass their school year while 92% of the teachers witness academic improvement! Their secret is to promote sports in order to help students focus in class. It is normal if this reminds you of Coach Carter, it is a great source of inspiration for the organization. 
                    </p>
                    <p>
                      An important facet of their program is the tutoring. Students meet volunteers once a week for study sessions. In 2019, 110 students and tutors were engaged in the program. And this the number of inscriptions is expected to grow each year.      
                    </p>
                  </div>
                </div>
              </div>
            </section>


            <section className="pt-0 pt-md-0 my-6 bg-light mb-8">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-12 col-lg-10 col-xl-9">

                    <div className="pt-6 pb-2">
                      <h2 className="mb-5">
                        Diplome avant la médaille's stats  <br/>
                        <span className="text-primary h2">2019-2020 school year</span>
                      </h2>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="d-flex justify-content-center">
                            <span className="price display-2 mb-0" data-toggle="countup" data-from="0" data-to="95" data-aos data-aos-id="countup:in">0</span>
                            <span className="h2 align-self-end mb-1">%</span>
                          </div>
                          <p className="font-size-lg text-gray-700 mb-6">
                            Students participating in the program that have been able to pass their year 
                          </p>
                        </div>

                        <div className="col-md-4">
                          <div className="d-flex justify-content-center">
                            <span className="price display-2 mb-0" data-toggle="countup" data-from="0" data-to="197" data-aos data-aos-id="countup:in">0</span>
                          </div>
                          <p className="font-size-lg text-gray-700 mb-6">
                            Supported students in 2019-2020. It sums up to 400 supported students since 2012.
                          </p>
                        </div>

                        <div className="col-md-4">
                          <div className="d-flex justify-content-center">
                            <span className="price display-2 mb-0" data-toggle="countup" data-from="0" data-to="92" data-aos data-aos-id="countup:in">0</span>
                            <span className="h2 align-self-end mb-1">%</span>
                          </div>
                          <p className="font-size-lg text-gray-700 mb-6">
                            Fraction of teachers witnessing academic improvement
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="pt-0 pt-md-0 pb-0">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-12 col-lg-10 col-xl-9">
                    <p>
                      The success of DAM comes with the practical problem of pairing tutors and students. Until now, they matched people by hand on a large bulletin board. It takes days and human resources that could be better used elsewhere, and the result is probably not the best possible matching solution with respect to people's preferences (anyway, how can you verify it without a computer?). With the growth of the number of inscriptions, this manual pairing becomes impractical for the coming years. 
                    </p>
                    <p>
                      Pairing is a notoriously hard task, ask airlines companies, and can be framed as an integer constraint problem, also called a <i>maximum weight matching</i> or the <i>assignment problem</i>. Let say we have N students and N tutors. You can define N<sup>2</sup> unique pairs of students and tutors. Each pair has a score characterizing how much the student's and tutor's preferences (subject, availability, and schools) are alike. The optimization task consists in selecting the most number of pairs, at most N, but verifying that each tutor and student are selected only once and maximizing the scores over the selected pairs. 
                    </p>
                    <hr className="hr-md mb-7"/>
                    <blockquote className="blockquote mb-7">
                      <p className="h3 mb-0 text-center text-primary">
                        “The success of the project comes with the practical problem of pairing tutors and students. ”
                      </p>
                    </blockquote>
                    <hr className="hr-md mb-7"/>
                    <p>For instance, there is 100 possible pairs and over 3 million possible pairing solutions for only 10 students and 10 tutors (the number of solutions grows as the factorial of the number of students). Even for that number of students, the outcome of a manual pairing will most likely be a low quality solution. We must rely on computers to deal with such complexity and find valuable pairing solutions. This is where Hectiq can help. 
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="pt-0 pt-md-0 pb-0">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-12 col-lg-10 col-xl-9">
                    <figure className="figure pt-8 pb-8 pl-lg-8 pr-lg-8">
                      <img className="figure-img img-fluid" src="/assets/img/photos/dam.png" alt="..."/>
                      <figcaption className="figure-caption text-center">
                        All 24 possible pairing solutions for 4 students and 4 tutors, assuming everyone can be matched. The problem for DAM has another layer of complexity: We must select a pairing that most respect the preferences of the students and tutors.
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-0 pt-md-0 pb-0">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-12 col-lg-10 col-xl-9">

                    <p>
                      We built a script to automatically find pairings. Each student fills an online form indicating its weak/strong subjects, availability, and school. For tutors, they specify subjects they are comfortable with, their availability, and the schools they can commute to.
                    </p>
                    <p>
                      We then use OR-tools by Google, specifically the <a href="https://developers.google.com/optimization/cp/cp_solver">CP-SAT solver</a>, to find an optimized pairing. We first define the hard constraints: A student and a tutor can only be matched if:
                    </p>

                      <ul class="list-unstyled mb-0 ml-4">
                        <li class="d-flex m-0 p-0">
                          <div class="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                            <FiCheck/>
                          </div>
                          <p>
                            They share at least 1 hour availability
                          </p>
                        </li>
                        <li class="d-flex  m-0 p-0">
                          <div class="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                            <FiCheck/>
                          </div>
                          <p>
                            The student's school is part of the preferred tutor's schools. 
                          </p>
                        </li>
                        <li class="d-flex  m-0 p-0">
                          <div class="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                            <FiCheck/>
                          </div>
                          <p>
                            The tutor and the student is not yet matched (equivalent to impose a maximum of one tutor/student per student/tutor)
                          </p>
                        </li>
                      </ul>
                    <p>Then, we specify the soft constraints to maximize on:</p>
                    <ul class="list-unstyled mb-0 ml-4">
                        <li class="d-flex m-0 p-0">
                          <div class="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                            <FiCheck/>
                          </div>
                          <p>
                            Pair the most number of students.
                          </p>
                        </li>
                        <li class="d-flex m-0 p-0">
                          <div class="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                            <FiCheck/>
                          </div>
                          <p>
                            Pair the students most needed subjects with the tutors preferred subjects.
                          </p>
                        </li>
                        <li class="d-flex m-0 p-0">
                          <div class="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                            <FiCheck/>
                          </div>
                          <p>
                            Assign most tutors to their preferred schools.
                          </p>
                        </li>
                      </ul>
                    <p>
                    It results that the solver maximizes the number of pairings between students and tutors while optimizing on the people’s preferences. After multiple testing on historical and synthetic data, we were convinced that the program can be used on the autumn cohort. And it proved to be right, it took only few minutes between the end of the registration and getting the matching back. 
                    </p>
                    <hr className="hr-md mb-7"/>
                    <blockquote className="blockquote mb-7">
                      <p className="h3 mb-0 text-center text-primary">
                        The solver maximizes the number of pairings between students and tutors while optimizing on the people's preferences.”
                      </p>
                    </blockquote>
                    <hr className="hr-md mb-7"/>
                    <p>
                      We'll also call present in the future to help them add new features. For instance, the pandemic forces them to set up online tutoring. It is a small adjustment to the script, but it makes a huge difference as the program can continue through social distancing.
                    </p>
                    <p>
                    Le Diplome avant la médaille was facing an important issue for expanding tutoring offer. We helped them deal with it by providing a custom-build solution. We are proud to have volunteered to solve these practical engineering tasks while they focus on helping students.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>)
}


export default DAMPost;