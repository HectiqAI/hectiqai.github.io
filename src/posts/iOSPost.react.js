import React from "react";

import {EfficientNetScalingGraph} from "../components/charts"

function iOSPost(props){
  return (<div>
            <section className="pt-0 pt-md-0 pb-0">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-12 col-lg-10 col-xl-9">
                    <p>
                      Nowadays, it takes less than 1/24th of a second to run a classification model on a cellphone. This critical interval means that live video streams can be analyzed directly on the devices. It opens up a world of opportunities. Yet, it is not surprising that more and more companies are investing in mobile solutions to run machine learning models.

                    In this post, we give an overview of the opportunities and challenges of mobile machine learning and briefly showcase our internal app to test models.
                    </p>

                    <h2 className="pt-6 font-weight-bold text-primary">Opportunities</h2>
                    <h3 className="pt-4 font-weight-bold">New products</h3>
                    <p>
                      The flagship of machine learning on mobiles is all the new usages it offers. Vision based models can be heavily exploited as cameras are getting better and ubiquitous. For instance, Apple showcased how a pose estimation model is used to count push-ups and squats. It is a promising avenue for health-related apps but imagine if used in a cooking app to guide users into a recipe, or in a DIY app for a step-by-step validation and tips. Also, more industrial applications can be developed for inspecting objects on a construction site. In the fashion industry, body measurements solutions and try-it-on AR models are already being promoted.
                    </p>
                    <p>
                      Other possiblities include language models. Classifying a text, extracting the entities, or answering questions are all typical tasks that use machine learning.  
                    </p>

                    <h3 className="pt-4 font-weight-bold">Saving computational cost</h3>
                    <p>
                      When deploying machine learning in the cloud, companies are often surprised how expensive it can be. To maximize the performance, models are often deployed on expensive GPU instances rather than cheap CPU instances. 
                    </p>
                    <p>
                      User devices offer an interesting alternative to reduce your computational cost. The models are deployed and run on on the devices. Sometimes, the machine learning results can be sent to and stored on a cloud server for future use. Hence, not only you no longer have to maintain GPUs instances in the cloud, but it can also reduces the bandwidth of information sent between users and your servers. 
                    </p>
                    <h3 className="pt-4 font-weight-bold">Improved user experience</h3>
                    <p>
                    The overall user experience is improved because the interaction between the user and the machine learning results will be made available faster. Compared with cloud solutions, users no longer have to wait for the server to respond with results. Unfortunately, it can also create a disparity in the experience from one device to the other, due to difference in phones performance. If you carefuly optimize the models, this difference will faint, even more as new devices are designed for running machine learning. Our team at Hectiq can help you optimize and sustain a uniform user experience on all devices.
                    </p>
                    

                    <h2 className="pt-6 font-weight-bold text-primary">Challenges</h2>
                    <p>
                      Developing mobile solutions comes with many challenges. Fortunately, this pathway has been cleared by strong players such as Facebook, Apple, and Google. They have spotted the difficulties and developed reliable solutions. We present what we think are the top challenges.
                    </p>

                    <h3 className="pt-4 font-weight-bold">Developing fast models</h3>
                    <p>
                      Nobody will enjoy the experience if the app is slow. Your models prediction has to be relatively fast, depending on the usage. If it’s an one-time inference, it probably can take at most 10 seconds. But if the user interacts with the prediction, then your model should run in the milliseconds frame. In vision, 50ms per inference is the reference threshold to achieve a live capture 18fps inference.
                    </p>
                    <div className="container-fluid container-xs">
                      <EfficientNetScalingGraph height={450}/>
                      <figcaption className="figure-caption text-center">
                        EfficientNet is a perfect classification model for devices because it has a low number of parameters and showcases high quality predictions. In this graph, the performance of the first 8 variations are displayed. ImageNet Top-1 accuracy is the probability that the label with the highest score is the correct label evaluated on the ImageNet dataset (1000 unique labels).
                      </figcaption>
                    </div>
                    <h3 className="pt-4 font-weight-bold">Validating the prediction on the devices</h3>
                    <p>
                      Models run differently on devices compared with computers. The reason is models are deployed and compiled using custom mobile libraries but are trained and tested using other libraries on your computer. It is likely that the conversion modifies certain aspects that impact the inference results. Make sure to validate the model performance on the devices. Document and characterize the differences between the mobile and computer -based models to organize your future work.
                    </p>
                    <p>
                      During conversion, most mobile librairies suggest to reduce the models using 16-bits or 8-bits encoding. While this is sometimes essential for running on devices, keep it mind that it can impact the accuracy of your model. 
                    </p>
                    <h3 className="pt-4 font-weight-bold">Keeping models up-to-date</h3>
                    <p>
                    It is a good practice to update the models according to their usage and their performance in real-world datasets. You should always periodically fine-tuned your models with failed cases and in-the-wild data. This continuous integration can be hard to maintain as you will need to make sure they don't degrade the models performance and that they don’t interfere with existing components of your app.
                    </p>
                    <p>
                    Pushing updated models to devices is a tricky task. A bad practice would be to include the model into your app and push app updates on the App Store whenever you update the model weights. A better practice is to include a routine in the app that checks whether a model update is available and downloads the new weights. The best practice is to use the recently introduced model manager by Apple. It organizes your models into collections (like a bundles of models) and the devices automatically update their models according to the release version.
                    </p>

                    <h3 className="pt-4 font-weight-bold">Have a fallback option if the models fail</h3>
                    <p>
                      Even with a 98% accuracy, a model is wrong in 2% cases. These 2% cases are critical as you need a backup plan so that the app does not crash. You should expect that the incorrect predictions are hard to detect so you need extra caution to validate on-device any outputs of the model. 
                    </p>
                    <p>
                      You will also need a backup plan if the model is incapable of making a prediction (due to invalid input or software error). One solution is to send and process the information in the cloud on cheap CPU instances, or a design that lets the user manually set the information.
                    </p>

                    <h2 className="pt-6 font-weight-bold text-primary">Performance</h2>
                    <p>
                      Models performance on devices must be validated and documented. It is why we have developed our internal app to push models and test whatever is needed to craft high quality mobile solutions.
                    </p>

                    <div>
                      <div className="row align-items-center">
                        <div className="col-12 col-md-6 col-lg-7">
                          <div className="device device-iphonex">
                            <video playsInline autoPlay muted loop src="/assets/img/ios/test.mp4" type="video/mp4" className="device-screen" alt="..."/>
                            <img src="/assets/img/shapes/iphonex.svg" className="img-fluid" alt="..."/>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-5">
                          <h2>
                            Our mobile lab
                          </h2>
                          <p>We have developed an internal iOS app to test our models.
                          </p>
                          <div className="d-flex">
                            <div className="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                              <i className="fe fe-play"></i>
                            </div>
                            <p>
                              Benchmark models and monitor activity
                            </p>
                          </div>
                          <div className="d-flex">
                            <div className="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                              <i className="fe fe-cpu"></i>
                            </div>
                            <p>
                              Optimize models
                            </p>
                          </div>
                          <div className="d-flex">
                            <div className="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                              <i className="fe fe-package"></i>
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