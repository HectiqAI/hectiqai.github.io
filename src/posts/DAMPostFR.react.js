import React from "react";
import {FiCheck} from "react-icons/fi";

function DAMPost(props){
  return (<div>
            <section className="pt-0 pt-md-0 pb-0">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-12 col-lg-10 col-xl-9">
                    <p>
                    Le <a href="https://diplomeavantlamedaille.org">Diplôme avant la médaille (DAM)</a> est une organisation bien connue de la Ville de Québec. La mission de l'organisme est de favoriser la persévérance et la réussite scolaires des élèves secondaires. 
                      Depuis 2012, 95 % des jeunes qui ont reçu le soutien de l’organisme ont obtenu, ou sont en voie d'obtenir, leur diplôme d’études secondaires. L’année dernière, 92% des enseignants ont remarqué des améliorations en classe. Le secret de DAM réside dans la promotion du sport pour garder les jeunes sur les bancs d'école, à la manière du célèbre Coach Carter.
                    </p>
                    <p>
                      Parmi les services offerts aux jeunes, l'un d'eux est le tutorat. Chaque semaine, les élèves travaillent les matières en besoin avec des tuteurs/tutrices bénévoles. En 2019, ce sont plus de 110 élèves-athlètes qui bénéficiaient du service de tutorat. Ce nombre est croître de façon importante chaque année.
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
                        Les statistiques <br/>
                        <span className="text-primary h2">Année scolaire 2019-2020</span>
                      </h2>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="d-flex justify-content-center">
                            <span className="price display-2 mb-0" data-toggle="countup" data-from="0" data-to="95" data-aos data-aos-id="countup:in">0</span>
                            <span className="h2 align-self-end mb-1">%</span>
                          </div>
                          <p className="font-size-lg text-gray-700 mb-6">
                            Élèves ont réussi leur année scolaire
                          </p>
                        </div>

                        <div className="col-md-4">
                          <div className="d-flex justify-content-center">
                            <span className="price display-2 mb-0" data-toggle="countup" data-from="0" data-to="197" data-aos data-aos-id="countup:in">0</span>
                          </div>
                          <p className="font-size-lg text-gray-700 mb-6">
                            Élèves supportés en 2019-2020. Depuis 2012, on compte un total de 400 jeunes.
                          </p>
                        </div>

                        <div className="col-md-4">
                          <div className="d-flex justify-content-center">
                            <span className="price display-2 mb-0" data-toggle="countup" data-from="0" data-to="92" data-aos data-aos-id="countup:in">0</span>
                            <span className="h2 align-self-end mb-1">%</span>
                          </div>
                          <p className="font-size-lg text-gray-700 mb-6">
                            Enseignants observant une amélioration des résultats et du comportement en classe
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
                      Traditionnellement, au début de l'année scolaire, DAM devait faire le jumelage entre les jeunes et les bénévoles. Cette tâche était accomplie en un peu plus d'une semaine sur un grand babillard pour trouver des jumelages de qualité. Cette technique est épuisante, lente et ne respecte probablement pas les préférences des jeunes aussi bien que nous l'aurions voulu. Sans surprise, l'organisme a voulu se doté d'un outil automatisé pour faire le jumelage, en plus qu'une croissance des inscriptions était attendu pour l'année scolaire 2020-2021.
                    </p>
                    <p>
                      Le travail de jumelage est réputé pour être difficile. Il est bien connu des compagnies aériennes qui font face au casse-tête d'assigner tous leurs employés aux vols prévus en respectant au maximum les préférences de chacun. Il est aussi bien connu des informaticiens sous le nom du problème d'entiers contraints, et plus précisément le problème de <i>maximum weight matching</i> ou <i> the assignment problem</i>, et qui occupe au moins un chapitre de tout bon livre d'optimisation.
                    </p>
                    <p> Le problème se formule ainsi. Il y a N jeunes et N bénévoles. Comme chaque élève peut être jumelé avec N bénévoles, alors il existe N<sup>2</sup> paires uniques de jeunes et de bénévoles. Chaque paire a une valeur qui indique à quel point l'élève et le bénévole ont des préférences similaires (matières, disponibilités, école). La tâche d'optimisation est de choisir le plus de paires tout en maximisant à la fois la valeur des paires choisies, le nombre d'étudiants et de bénévoles participants. Rajoutons à cela que les élèves et bénévoles ne peuvent être jumelés qu'au maximum une seule fois.
                    </p>
                    <hr className="hr-md mb-7"/>
                    <blockquote className="blockquote mb-7">
                      <p className="h3 mb-0 text-center text-primary">
                        “Le succès de leur projet vient avec le problème de faire chaque année le jumelage entre les élèves-athlètes et les bénévoles. ”
                      </p>
                    </blockquote>
                    <hr className="hr-md mb-7"/>
                    <p>Par exemple, pour 10 élèves et 10 bénévoles, il existe 100 paires élèves-bénévoles. Il nous faut sélectionner entre 1 et 10 paires parmi ces 100 paires. Soit 3 millions de sélections différentes à évaluer la qualité pour retenir le meilleur jumelage. Même pour aussi peu de jeunes, il est à toute fin pratique impossible de faire un jumelage à la main qui sera optimal. Il faut laisser ce travail aux ordinateurs. C'est là que Hectiq peut fournir de l'aide.
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
                        Pour 4 jeunes et 4 bénévoles, il existe 16 paires uniques. Nous avons affiché les 24 manières de choisir 4 paires différentes parmi ces 16 paires. Pour DAM, nous devons choisir un de ces jumelages qui maximise à la fois les préférences des jeunes et bénévoles et qui s'assure que le plus grand nombre de jeunes sera jumelés.
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
                      Nous avons développé un code qui trouve automatiquement le meilleur jumelage possible. Le processus va comme suit. À l'inscription, les élèves-athlètes et les bénévoles indiquent leurs matières fortes/faibles, disponibilités et leur école via un formulaire sur un site web. Ces informations sont compilées par DAM et exportées vers le programme.
                    </p>
                    <p>
                      Nous utilisons ensuite OR-tools de Google, plus précisement le <a href="https://developers.google.com/optimization/cp/cp_solver">CP-SAT solver</a> pour trouver une solution au problème. Nous devons définir formellement les contraintes d'optimisation. Un élève et un bénévole ne peuvent être jumelés que si:
                    </p>

                      <ul className="list-unstyled mb-0 ml-4">
                        <li className="d-flex m-0 p-0">
                          <div className="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                            <FiCheck/>
                          </div>
                          <p>
                            Ils partagent au moins 1 heure de disponibilités
                          </p>
                        </li>
                        <li className="d-flex  m-0 p-0">
                          <div className="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                            <FiCheck/>
                          </div>
                          <p>
                            Le bénévole peut se déplacer à l'école de l'élève
                          </p>
                        </li>
                        <li className="d-flex  m-0 p-0">
                          <div className="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                            <FiCheck/>
                          </div>
                          <p>
                            L'élève et le bénévoles ne sont pas déjà jumelés (équivalent à imposer une limite de 1 bénévole par jeune et 1 jeune par bénévole)
                          </p>
                        </li>
                      </ul>
                    <p>Nous spécifions ensuite les <b className="text-primary">contraintes souples à maximiser</b>:</p>
                    <ul className="list-unstyled mb-0 ml-4">
                        <li className="d-flex m-0 p-0">
                          <div className="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                            <FiCheck/>
                          </div>
                          <p>
                            Jumeler le plus grand nombre d'élèves
                          </p>
                        </li>
                        <li className="d-flex m-0 p-0">
                          <div className="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                            <FiCheck/>
                          </div>
                          <p>
                            Jumeler les élèves avec les matières en besoins qui sont les matières les plus fortes des bénévoles
                          </p>
                        </li>
                        <li className="d-flex m-0 p-0">
                          <div className="badge badge-rounded-circle badge-primary-soft mt-1 mr-4">
                            <FiCheck/>
                          </div>
                          <p>
                            Jumeler les tuteurs à leurs écoles préférées
                          </p>
                        </li>
                      </ul>
                    <p>
                    Après plusieurs tests avec DAM sur les données des années antérieures et synthétiques, nous avons pu nous convaincre de l'efficacité de l'approche. C'est ainsi que tout était prêt pour l'année scolaire 2020-2021 et que le jumelage a pu se faire en seulement quelques minutes. Les élèves ont alors pu commencer le tutorat une semaine plus tôt.
                    </p>
                    <hr className="hr-md mb-7"/>
                    <blockquote className="blockquote mb-7">
                      <p className="h3 mb-0 text-center text-primary">
                        ”Le programme maximise le nombre de jumelages tout en optimisant les préférences des élèves et des bénévoles.”
                      </p>
                    </blockquote>
                    <hr className="hr-md mb-7"/>
                    <p>
                      Cette belle collaboration avec DAM ne fait que commencer. Nous serons disponibles pour modifier le système en fonction de leurs besoins futurs. Par exemple, la pandémie imposait de faire de petits ajustements pour prendre en compte le tutorat en ligne. 
                    </p>
                    <p>
                      Le Diplôme avant la médaille faisait face à un problème important pour développer leur offre de tutorat. Hectiq a batî une solution sur mesure qui permettra aux jeunes de profiter encore longtemps du service offert par DAM. Il nous a fait un grand plaisir de contribuer bénévolement à leur succès et espérons que cette organisation continuera longtemps d'aider la communauté.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>)
}


export default DAMPost;