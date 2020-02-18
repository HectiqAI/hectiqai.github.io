---
layout: post
title:  "Hectiq completes a project with VoxMedia and Google"
date:   2020-02-16 09:59:11 -0500
header: "Big achievement"
categories: [project]
tags: [project, work, voxmedia, gnn]
frontImgUrl: '/assets/img/photos/voxmediapost.svg'
frontWideImg: "/assets/img/photos/voxmediapost-wide.svg"
navBar: "light"
by: "Martin Laprise, Chief Scientist & Founder of Hectiq.ai"
authors: ["Martin Laprise"]
summary: "Hectiq.Ai completed a first project"
---

<section class="pt-0 pt-md-0 pb-0">
	<div class="container">
	  <div class="row justify-content-center">
	    <div class="col-12 col-md-12 col-lg-10 col-xl-9">
				<p>
					Have you ever felt like someone is spying on you all over the web? You shop for a pair of shoes online... and curiously enough Facebook Ads suggests you that specific pair of shoes 10 min later. Not any pair of shoes: The EXACT same. What a coincidence!  At Hectiq, we prefer calling this a Deep Learning Workstation Ad Network, and it’s following us everywhere. Welcome to the wonderful world of third-party cookies, real time bidding and data management platform.
				</p>
				<h2 class="font-weight-bold mt-8">
				  Third-party vs first-party cookies
				</h2>
				<p class="mb-6">
					If you have never heard of cookies, I recommend you watch this excellent video from Vox. It explains what a third-party cookie is and how it has been the core of the Ad industry for years.
				</p>
        <!-- Youtube video -->
        <a href="https://www.youtube.com/watch?v=HFyaW50GFOs" data-fancybox >
          <img src="https://img.youtube.com/vi/HFyaW50GFOs/maxresdefault.jpg" class="img-fluid" alt="...">
        </a>
				<p class="mt-6">
					A cookie is a little piece of data stored somewhere on your browser device. Cookies has been first invented to act as a small and useful short term memory on a specific website. When you add an item to your cart, you’re expecting the site to remember it when you come back the next day. That short term memory is handled by a <i>first-party cookie</i>. A first-party cookie can only be accessed by the website that has set it. Whereas a third-party cookies can be set and accessible by a different website than the one visited. Usually managed by Ad networks, their main job has always been to track you online. And that’s exactly how third-party Ad networks know that you have placed a pair of yellow shoes in your cart yesterday. 
				</p>
				<blockquote class="blockquote mb-7 mt-7">
          <p class="h2 mb-0 text-center text-primary-desat">
            “A first-party cookie can only be accessed by the website that has set it. Whereas a third-party cookies can be set and accessible by a different website than the one visited”
          </p>
        </blockquote>
        <p>
        	This little piece of information (you’re shopping for a pair of shoes) is actually quite valuable. Ad networks collect all these data about you for ad retargeting. Next time they see you online, they can show you the ad specially tailored for you (spoiler: it involves shoes). 
        </p>
        <p>
        	Usage of third-party cookies raises serious concerns for user privacy. The good news is that the days of third-party cookies are counted.
        </p>
				<p>
					With new regulation in place like General Data Protection Regulation in Europe (GPDR) and the new California Consumer Privacy Act (CCPA), usage of third-party cookies will become essentially illegal. One of the key aspects of those regulations is the right to be forgotten:
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
               Users should be able to delete their personal information at any time on a website. 
            </p>
          </li>
        </ul>

        <p>
        	Fulfilling those two simple requirements is nearly impossible with third-party data. For instance, when an ad network tracks your action on your favorite shoes website, this information is automatically broadcasted and shared among multitudes of other systems. From that point, the shoes website no longer controls where this data goes. Even if requested, it becomes practically impossible to delete this data or even diging up where it went.
        </p>

        <p>
        	Those issues were known for some years now and most browsers (Edge, Chrome, Firefox) had the option to disable third-party cookies. Others like Apple, whom unsurprisingly doesn't own any Ad network, even disabled third-party cookies by default.
        </p>

        <p>
        	Two weeks ago Google announced their intentions to completely phase out third-party cookies in Chrome within two years. This announcement puts the final nail in the coffin for third-party cookies. Marketers and Brands now need to find other ways to make their marketing as effective while respecting the new privacy rules. <span class="text-primary">Compagnies that still don't have any plan about this right now will be left behind. </span>
        </p>
        <h2 class="font-weight-bold mt-8">
				  Learning to know your audience using first-party contextual data only.
				</h2>

				<p>
					VoxMedia is one of the biggest and most respected digital media companies in the US. They have properties like The Verge, Vox, Eater, Polygon, Curbed, SB Nation, etc. They are receiving an incredible amount of visitors every day. On every clicks, their system makes a bunch of serious decisions. Which content should they show the user? Which Ad content is the most relevant? And they need to do that a thousand times per second.
				</p>

				<p>
					Months ago, VoxMedia approached us with an interesting challenge. Would it be possible to leverage the latest AI methods to build a respectful audience segmentation technology without relying on any third-party data? Instead, the prediction could be based on what users have interacted on their properties, namely <span class="text-primary">contextual data</span>.  It can be the title of the clicked articles, the time of the day, the user device, etc..
				</p>

				<p>
					Doing ad retargeting by tracking users all over the web is pretty much like fishing using bottom trawling. It might work, but you’re gathering a whole lot of other data in the process which is highly problematic for the user privacy. It turns out that if you want to learn more about your audience by using only contextual data, you need to be much smarter about how you’re using the few data points you have. 
				</p>
				<p>
					Most of the data you have about the audience is how they are interacting with the content you placed on your website. For digital media companies, like VoxMedia, this content is mostly texts, images, and videos. Thanks to the latest advance in deep learning, we are now much better at analyzing the content of images and texts than just a few years ago. Using Convolutional Neural Network we can now really get a sense of what an image is all about. The same type of analysis can be achieved on texts using state-of-the-art Transformer models (like BERT, ELMO, GPT2, etc.) trained on huge amounts of data. Assuming you can describe in minute details the nature of the content, the challenge is to turn how users interact with your content into interests and intends.
				</p>

				<p>
					We can illustrate the task using a classic example. You have a restaurant and a new client comes in. You have essentially two ways to know more about him. You can either track him everywhere and note every restaurants he visited in the last months. This would be quite creepy and equivalent of using a third-party cookie. Or you can use the first-party data approach and note what he ordered and liked the last time he visited you own restaurant. If you have a deep understanding of all the meals served in your restaurant, you can do a pretty good job of predicting his interests. You can even add up other variables like the day and hour of the week to polish it. As a content provider, the beauty of this approach is that the deep learning models are powered by your own content. 
				</p>

				<h2 class="font-weight-bold mt-8">
				  Toward a first-party segmentation system
				</h2>

				<p>
					A first-party segmentation system is designed to describe the audience interests based on the viewed content. An example of those segments could be something specific like Camera Enthusiast Currently Shopping. In order to be effective, this system is required to fulfill a number of features. 
				</p>
				<ul class="list-unstyled mb-7">
          <li class="d-flex">
            <div class="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
              <i class="fe fe-check"></i>
            </div>
            <p>
            	<span class="font-weight-bold text-primary">The model needs to learn from large volume of historical data.</span><br>
            	<span class="text-muted">
              It must find and learn interesting patterns and “natural” segments in the data. For instance, it may find that a group of users visit the same content because of a similar interest. It will then be labelled "Camera Enthusiast Currently Shopping". 
            	</span>
            </p>
          </li>
          <li class="d-flex">
            <div class="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
              <i class="fe fe-check"></i>
            </div>
            <p>
            	<span class="font-weight-bold text-primary">The predictions must be computed in real time.</span><br>
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
            	<span class="font-weight-bold text-primary">The model should understand all content types.</span><br>
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
            	<span class="font-weight-bold text-primary">The prediction should be valid on unseen data.</span><br>
            	<span class="text-muted">
              For instance, if a user clicks on a recently published article about a new camera, the model should be able to assign the "Camera Enthusiast" segment even if the article is absent from the historical data. 
            	</span>
            </p>
          </li>

        </ul>

        <p>
        	A natural way to model the interactions of the users with a set of contents is by using the concept of graphs. In this setup we have two types of components: The users and the contents. A user and a content are connected if the user clicked on the content. For each content component, we convert raw data (texts and images) into compact attributes (a big vector), using recent deep learning models, and store them for later use. The interaction itself (the pageviews) may also have its own set of attributes.
        </p>

        <p>
        	In this graph framework, the model task is to assign segments to users. This is done by crunching all the component features and even propagating information from users with similar records. All those attributes need to work together in a cohesive way to inform the final decision. These models, called Graph Neural Network, are known to be really effective. That's why state-of-the-art Graph Neural Networks are at the core the VoxMedia’s first-party segmentation platform.
        </p>

        <p>
        	These models fulfill all the requirements and even more. The prediction does not require the actual identity of the user. It is powered by the content owned by the plateform, not the user features. The segments are also perfectly inductive, namely that it is trained on historical data but generalize to unseen pieces of content.
        </p>

        <p>
        	At the end, those contextual predictions are much more effective for the brand and more privacy-friendly. And all this is happening many hundreds of times per sec, everytime a user is interacting with a piece of content on VoxMedia Network!
        </p>
        <p>
        	VoxMedia first-party segmentation platform is an impressive piece of technology and we’re are really proud, at Hectiq to have participate to his elaboration. Brands using VoxMedia's new platform can now connect effectively to their audience and they can do it in a privacy-friendly way.
        </p>


	    </div>
	  </div> <!-- / .row -->
	</div> <!-- / .container -->
</section>
