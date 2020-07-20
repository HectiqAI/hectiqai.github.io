import React from "react";

function iOSPost(props){
  return (<div>
            <section class="pt-0 pt-md-0 pb-0">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-12 col-lg-10 col-xl-9">
                    <p>
                    As cellphones are getting more performant, more companies are developing solutions directly on the user devices.
                    </p>

                    <h2 class="pt-6 font-weight-bold text-primary">Opportunities</h2>
                    <h3 class="pt-4 font-weight-bold">Saving computational cost</h3>
                    <p>
                      When deploying machine learning in the cloud, companies are often surprised how expensive it can be. To be performant and effective, models are often deployed on expensive GPU instances rather than cheap CPU instances. 
                    </p>
                    <p>
                      User devices offer an interesting alternative to reduce your computational cost. The models are deployed on the devices and the computation is done locally. Sometimes, the machine learning results can be sent to and stored on a cloud server for future use. Hence, not only you no longer have to maintain GPUs instances in the cloud, but it can also reduces the bandwidth of information sent between users and your servers. 
                    </p>
                    <h3 class="pt-4 font-weight-bold">Improved user experience</h3>
                    <p>
                    The overall user experience is improved because the interaction between the user and the machine learning results will be made available faster. Compared with cloud solutions, users no longer have to wait for the server to respond with results. Unfortunately, it can also create a disparity in the experience from one device to the other, due to difference in phones performance. If you carefuly optimize the models, this difference will faint, even more as new devices are designed for running machine learning. Our team at Hectiq can help you optimize and sustain a uniform user experience on all devices.
                    </p>
                    <h3 class="pt-4 font-weight-bold">New products</h3>
                    <p>
                      The flagship of mobile machine learning is all the new applications it opens to. Vision based models can be heavily exploited as camera are getting better and overused. For instance, Apple recently showcased how a pose estimation model can be used to count push-ups and squats made by a user. It seems a promising avenue for gym-related apps but imagine if used in a cooking app to guide users into a recipe, or in a DIY-app for step-by-step image validation and advices. Fashion businesses can also be seriously advantaged by developing body measurements solutions or try-it-on AR models.
                    </p>
                    <p>
                      Language models also benefits from being deployed on mobiles. Classifying a text, extracting the entities, or answering questions are all typical tasks performed by language models. 
                    </p>

                    <h2 class="pt-6 font-weight-bold text-primary">Challenges</h2>
                    <p>
                      Developing mobile solutions comes with many challenges. Fortunately, this pathway has been cleared by strong players such as Facebook, Apple, and Google. They have spotted the difficulties and developed reliable solutions. We present what we think are the top challenges.
                    </p>

                    <h3 class="pt-4 font-weight-bold">Developing fast models</h3>
                    <p>
                      Nobody will enjoy the experience if the app is slow. Your models prediction has to be relatively fast, depending on the usage. If it’s an one-time inference, it probably can take at most 10 seconds. But if the user interacts with the prediction, then your model should run in the milliseconds frame. In vision, 50ms per inference is the reference threshold to achieve a live capture 18fps inference.
                    </p>
                    <h3 class="pt-4 font-weight-bold">Validating the prediction on the devices</h3>
                    <p>
                      Models run differently on devices compared with computers. The reason is models are deployed and compiled using custom mobile libraries but are trained and tested using other libraries on your computer. It is likely that the conversion modifies certain aspects that impact the inference results. Make sure to validate the model performance on the devices. Document and characterize the differences between the mobile and computer-based models to organize your future work.
                    </p>
                    <p>
                      During conversion, most mobile librairies suggest to reduce the models using 16-bits or 8-bits encoding. While this is sometimes essential for running on devices, keep it mind that it can impact the accuracy of your model. 
                    </p>
                    <h3 class="pt-4 font-weight-bold">Keeping models up-to-date</h3>
                    <p>
                    It is a good practice to update the models according to their usage and their performance in real-world datasets. You should always periodically fine-tuned your models with failed cases and in-the-wild data. This continuous integration can be hard to maintain as you will need to make sure they don't degrade the models performance and that they don’t interfere with existing components of your app.
                    </p>
                    <p>
                    Pushing updated models to devices is a tricky task. A bad practice would be to include the model into your app and push app updates on the App Store whenever you update the model weights. A better practice is to include a routine in the app that checks whether a model update is available and downloads the new weights. The best practice is to use the recently introduced model manager by Apple. It organizes your models into collections (such as bundles of models) and the devices automatically update their models according to the release version.
                    </p>

                    <h3 class="pt-4 font-weight-bold">Have a fallback option if the models fail</h3>
                    <p>
                      Even with a 98% accuracy, a model is wrong in 2% cases. These 2% cases are critical as you need a backup plan so that the app does not crash. You should expect that the incorrect predictions are hard to detect so you need extra caution to validate on-device any outputs of the model. 
                    </p>
                    <p>
                      You will also need a backup plan if the model is incapable of making a prediction (due to invalid input or software error). One solution is to send and process the information in the cloud on cheap CPU instances, or a design that lets the user manually set the information.
                    </p>

                    <h2 class="pt-6 font-weight-bold text-primary">Performance</h2>
                    <p>
                      Wondering
                    </p>
                    <div>
                      <div class="row align-items-center">
                        <div class="col-12 col-md-6 col-lg-7">
                          <div class="device device-iphonex">
                            <video playsinline autoplay muted loop src="/assets/img/ios/test.mp4" type="video/mp4" class="device-screen" alt="..."/>
                            <img src="/assets/img/shapes/iphonex.svg" class="img-fluid" alt="..."/>
                          </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-5">
                          <h2>
                            Our mobile lab
                          </h2>
                          <p>We have developed an internal iOS app.
                          </p>
                          <div class="d-flex">
                            <div class="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                              <i class="fe fe-play"></i>
                            </div>
                            <p>
                              Benchmark models and monitor activity
                            </p>
                          </div>
                          <div class="d-flex">
                            <div class="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                              <i class="fe fe-cpu"></i>
                            </div>
                            <p>
                              Optimize models
                            </p>
                          </div>
                          <div class="d-flex">
                            <div class="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                              <i class="fe fe-package"></i>
                            </div>
                            <p>
                              Test deployment strategies
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>)
}


export default iOSPost;