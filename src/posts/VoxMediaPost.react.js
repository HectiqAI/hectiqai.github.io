import React from "react";


function VoxMediaPost(props){
  return (
        <section class="pt-0 pt-md-0 pb-0">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-md-12 col-lg-10 col-xl-9">
                <p>
                  Have you ever felt like someone is spying on you all over the web? You shop for a pair of shoes online... and curiously enough Facebook Ads suggest that specific pair of shoes 10 min later. Not any pair of shoes: The EXACT same pair. What a coincidence! Turns out it’s not a coincidence at all. Welcome to the wonderful world of third-party cookies, real time bidding and data management platforms.
                </p>
                <h2 class="font-weight-bold mt-8">
                  Third-party vs first-party cookies
                </h2>
                <p class="mb-6">
                  If you have never heard of cookies, I would recommend that you watch this excellent video from Vox. It explains what a third-party cookie is and how it has been the core of the Ad industry for years.
                </p>
                <a href="https://www.youtube.com/watch?v=HFyaW50GFOs" data-fancybox >
                  <img src="https://img.youtube.com/vi/HFyaW50GFOs/maxresdefault.jpg" class="img-fluid" alt="..."/>
                </a>
                <p class="mt-6">
                  A cookie is a little piece of data stored somewhere on your browser's device. Cookies were first invented to act as small and useful short term memory for a specific website. When you add an item to your cart, you’re expecting the site to remember it when you come back the next day. That short term memory is handled by a <i>first-party cookie</i>. It can only be accessed by the website itself. A third-party cookie can be set and accessed by a different website than the one it was created on. They are usually managed by ad networks or analytics tools.  And that’s exactly how they know you have placed a pair of yellow shoes in an online cart yesterday. 
                </p>
                <blockquote class="blockquote mb-7 mt-7">
                  <p class="h2 mb-0 text-center text-primary-desat">
                    “A first-party cookie can only be accessed by the website that has set it. A third-party cookie can be set and accessed by a different website than the one it was created on.”
                  </p>
                </blockquote>
                <p>
                  That little piece of information (you shopping for a pair of shoes) is actually quite valuable. Ad networks collect all that data about you for ad retargeting. The next time they see you online, they can show you an ad specially tailored for you (spoiler: it involves shoes). 
                </p>
                <p>
                  Usage of third-party cookies raises serious concerns for user privacy and the good news is that the days of third-party cookies are numbered.
                </p>
                <p>
                  With new regulation in place like General Data Protection Regulation in Europe (GPDR) and the new California Consumer Privacy Act (CCPA), using a third-party cookie while staying fully compliant will become more and more difficult. One of the key aspects of these regulations is the right to be forgotten. More crucially:
                </p>
                <ul class="list-unstyled mb-6 mt-7">
                  <li class="d-flex">
                    <div class="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i class="fe fe-check"></i>
                    </div>
                    <p>
                      Users can now refuse the sale of their personal data.
                    </p>
                  </li>
                  <li class="d-flex">
                    <div class="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i class="fe fe-check"></i>
                    </div>
                    <p>
                       Users are able to request deletion of their personal information at any time from a website. 
                    </p>
                  </li>
                </ul>
                <p>
                  Fulfilling those two simple requirements is nearly impossible with third-party data. For instance, when an ad network tracks your movements on your favorite shoes website, that information is automatically broadcasted and shared among a multitude of other systems. From that point on, the shoes website no longer controls where this data flows. Even if requested, it becomes practically impossible to delete this data or even to find where it went.
                </p>

                <p>
                  Those issues have been known for some years now and most browsers (Edge, Chrome, Firefox) had the option to retire third-party cookies. Others like Apple, whom unsurprisingly doesn't own any Ad network, even disabled third-party cookies by default.
                </p>

                <p>
                  Recently, Google announced their intentions to completely phase out third-party cookies in Chrome within two years. This announcement puts the final nail in the coffin for third-party cookies. Marketers and Brands now need to find other ways to make their marketing just as effective while respecting the new privacy rules. <span class="text-info">Companies that still have not invested in a forward-looking plan to manage audience will be left behind. </span>
                </p>
                <h2 class="font-weight-bold mt-8">
                  Learning to know your audience using first-party contextual data only
                </h2>

                <p>
                  Vox Media is one of the biggest and most respected digital media companies in the US. They have properties like The Verge, Vox, Eater, Polygon, Curbed, SB Nation, etc. They are receiving an incredible amount of visitors every day. Their system makes a great deal of decisions with every click. What content should they show the user? What ad content is the most relevant? And they need to answer those questions a thousand times per second.
                </p>

                <p>
                  Months ago, Vox Media approached us with an interesting challenge. Would it be possible to leverage the latest AI methods to build a more privacy-friendly audience segmentation technology without relying on any third-party data? Instead, the prediction could be based on actions users took on their properties, or in other words, the first party-data. It could be the title of the clicked articles, the type of concent within the article, the time of the day, the level of engagement, the user's device, etc.
                </p>
                <blockquote class="blockquote mb-7 mt-7">
                  <p class="h2 mb-0 text-center text-primary-desat">
                    “ Would it be possible to leverage the latest AI methods to build a more privacy-friendly audience segmentation technology without relying on any third-party data? ”
                  </p>
                </blockquote>
                <p>
                  Ad retargeting by tracking users all over the web is similar to fishing using bottom trawling. It might work, but you’re gathering a whole lot of other data in the process which is highly problematic for a user's privacy. It turns out that if you want to learn more about your audience by using only first-party data, you need to be much smarter about how you’re using the few data points you have. 
                </p>

                <figure class="figure pt-8 pb-8 pl-lg-8 pr-lg-8">
                  <img class="figure-img img-fluid rounded lift lift-lg" src="/assets/img/photos/fishing.png" alt="..."/>
                  <figcaption class="figure-caption text-center">
                    Doing ad retargeting by tracking users all over the web is similar to fishing using bottom trawling. It might work, but you’re gathering a whole lot of other data in the process which is highly problematic for a user's privacy.
                  </figcaption>
                </figure>
                <p>
                  Most of the data you have about the audience is how they are interacting with the content you placed on your website. For digital media companies, like Vox Media, this content is mostly texts, images, and videos. Thanks to the latest advance in deep learning, we are now much better at analyzing the content of images and texts than just a few years ago. Using Convolutional Neural Network, we can now really get a sense of what an image is all about. 
                </p>
                <p>
                  The same type of analysis can be achieved on texts using state-of-the-art Transformer models (like BERT, ELMO, GPT2, etc.) trained on huge amounts of data. Assuming that you can describe in great detail the nature of the content, the challenge is to turn users interactions with your content into interests and intentions.
                </p>
                <blockquote class="blockquote mb-7 mt-7">
                  <p class="h2 mb-0 text-center text-primary-desat">
                    “ As a content provider, the beauty of this approach is that the deep learning models are powered by your own content. ”
                  </p>
                </blockquote>
                <p>
                  We can illustrate this task using a classic example. You have a restaurant and a new client comes in. You have essentially two ways to know more about him. You can track him everywhere and note every restaurant he visits. This would be quite creepy and the equivalent of using a third-party cookie. Or you can use the first-party data approach and keep track of what he orders and likes in your own restaurant. If you have a deep understanding of all the meals served in your restaurant, you can do a pretty good job of predicting his interests. You can even add up other variables like the day and hour of the week the client visited to push further your understanding. 
                </p>
                <p>
                  As a content provider, the beauty of this approach is that the deep learning models are powered by your own content. As the amount of content increases in volume and diversity, the more refined your knowledge of your own audience will be.
                </p>
                <h2 class="font-weight-bold mt-8">
                  Toward a first-party segmentation system
                </h2>

                <p>
                  A first-party segmentation system is designed to describe the audience interests and intents based on its viewed content. An example of these segments could be something specific like <i>Camera Enthusiast Currently Shopping</i>. In order to be effective, this system is required to fulfill a number of features: 
                </p>
                <ul class="list-unstyled mb-7">
                  <li class="d-flex">
                    <div class="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i class="fe fe-check"></i>
                    </div>
                    <p>
                      <span class="font-weight-bold text-primary">The model needs to learn from large volume of historical data.</span><br/>
                      <span class="text-muted">
                      It must find and learn interesting patterns and "natural" segments in the data. For instance, it may find that a group of users visit the same content because of a similar interest. It will then be labelled as something like <i>Camera Enthusiast Currently Shopping</i>. 
                      </span>
                    </p>
                  </li>
                  <li class="d-flex">
                    <div class="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i class="fe fe-check"></i>
                    </div>
                    <p>
                      <span class="font-weight-bold text-primary">The predictions must be computed in real time.</span><br/>
                      <span class="text-muted">
                      It must handle a high volume of requests (> 1k/sec) within a reasonable latency (~100ms). 
                      </span>
                    </p>
                  </li>
                  <li class="d-flex">
                    <div class="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i class="fe fe-check"></i>
                    </div>
                    <p>
                      <span class="font-weight-bold text-primary">The model should understand all content types.</span><br/>
                      <span class="text-muted">
                      Content may come in any form like images, texts, numerical attributes, labels, etc.
                      </span>
                    </p>
                  </li>
                  <li class="d-flex">
                    <div class="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i class="fe fe-check"></i>
                    </div>
                    <p>
                      <span class="font-weight-bold text-primary">The prediction should be valid on unseen data.</span><br/>
                      <span class="text-muted">
                      For instance, if a user clicks on a recently published article about a new camera, the model should be able to assign the <i>Camera Enthusiast</i> segment even if the article is absent from the historical data. 
                      </span>
                    </p>
                  </li>
                </ul>

                <p>
                  A natural way to model the interactions of the users with a set of content is by using the concept of graphs. In this setup we have two types of components: The users and the content. A user and a piece of content are connected if the user clicked on the content. For each content component, we convert raw data (texts and images) into compact attributes (a big vector), using recent deep learning models, and store them for later use. The interaction itself (the pageviews) may also have its own set of attributes.
                </p>
                <figure class="figure pt-8 pb-8 pl-lg-8 pr-lg-8">
                  <img class="figure-img img-fluid rounded" src="/assets/img/photos/graph.png" alt="..."/>
                  <figcaption class="figure-caption text-center">
                    A natural representation of the Vox Media dataset. Users are connected with contents they have seen. The model is trained to predict users segments based on this graph structure.
                  </figcaption>
                </figure>
                <p>
                  In this graph framework, the model task is to assign segments to users. This is done by crunching all the component features and even propagating information from users with similar records. All those attributes need to work together in a cohesive way to inform the final decision. These models, called Graph Neural Networks, are known to be extremely effective on a large variety of machine learning tasks. That's why state-of-the-art Graph Neural Networks are at the core the Vox Media’s first-party segmentation platform.
                </p>

                <figure class="figure pt-8 pb-8 pt-8 pb-8 pl-lg-10 pr-lg-10">
                  <img class="figure-img img-fluid rounded pl-lg-10 pr-lg-10" src="/assets/img/photos/graph2.png" alt="..."/>
                  <figcaption class="figure-caption text-center">
                    User segments are computed using the attributes of the contents they have seen. Higher level attributes can be built by looking deeper in the graph.
                  </figcaption>
                </figure>

                <p>
                  These models fulfill all the requirements and even more: 
                </p>

                <ul class="list-unstyled mb-6 mt-7">
                  <li class="d-flex">
                    <div class="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i class="fe fe-check"></i>
                    </div>
                    <p>
                      The prediction does not require the actual identity of the user.
                    </p>
                  </li>
                  <li class="d-flex">
                    <div class="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i class="fe fe-check"></i>
                    </div>
                    <p>
                      It is powered by the content owned by the platform, not the demographic user features.
                    </p>
                  </li>
                  <li class="d-flex">
                    <div class="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i class="fe fe-check"></i>
                    </div>
                    <p>
                      The segments are also perfectly inductive, meaning that the model is trained on historical data but the segments extend to unseen pieces of content.
                    </p>
                  </li>
                </ul>
            
                <p>
                  At the end, those first-party predictions are much more effective for the brand and more privacy-friendly than third-party cookies. And all this is happening many hundreds of times per sec; every time a user is interacting with a piece of content on Vox Media Network!
                </p>
                <blockquote class="blockquote mb-7 mt-7">
                  <p class="h2 mb-0 text-center text-primary-desat">
                    “        At the end, those contextual predictions are much more effective for the brand and more privacy-friendly than third-party cookies.
                    ”
                  </p>
                </blockquote>
                <p>
                  Vox Media first-party segmentation platform is an impressive piece of technology and we’re are really proud, at Hectiq.AI, to have participated in its generation. Brands using Vox Media's new platform can now connect effectively to their audience and more importantly, they can do it in a privacy-friendly way.
                </p>
              </div>
            </div> 
          </div> 
        </section>)
}


export default VoxMediaPost;