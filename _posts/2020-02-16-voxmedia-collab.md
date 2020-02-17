---
layout: post
title:  "Hectiq completes a project with VoxMedia and Google"
date:   2020-02-16 09:59:11 -0500
header: "Big achievement"
categories: [project]
tags: [project, work, voxmedia, gnn]
frontImgUrl: '/assets/img/photos/default-post.jpg'
navBar: "light"
---
<section class="pt-8 pt-md-11 pb-8">
	<div class="container">
	  <div class="row justify-content-center">
	    <div class="col-12 col-md-10 col-lg-9 col-xl-8">
				<h1 class="display-4 text-center">
				   VoxMedia: Building a privacy-friendly first-party data segmentation platform.
				</h1>
				<p class="lead mb-7 text-center text-muted">
				  And this should be your summary. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam. Fusce pellentesque faucibus lorem at viverra. Integer at feugiat odio. In placerat euismod risus proin.
				</p>

				<p>
					Did you ever feel like someone was spying on you all over the web ? You watch a pair of shoes on a retail website … and curiously enough there is an ad about that specific pair of shoes 10min later on Facebook. I mean the EXACT same pair of shoes. What a coincidence ! It’s my lucky day I guess. For us at Hectiq it’s a Deep Learning Workstation ad… it’s following us everywhere. Turns out it’s not a coincidence at all. Welcome to the wonderful world of third-party cookies, real time bidding and data management platform.
				</p>
				<p>
				If you have no clue of what I’m talking about, I recommend you watch this excellent video from Vox explaining what is a third party and how it was at the center of the ad world for years
				</p>
				<a href="https://www.youtube.com/watch?v=HFyaW50GFOs&t=3s">Video
				</a>
				<p>
					You should totally watch the video as it will give you a much more comprehensive explanation, but long story short, a third-party cookie a little piece of data stored somewhere in your browser that can track your visits all across the web and it reports those visits to a third-party, an ad network for example. That’s exactly how ad networks know that you put a pair of yellow shoes in your basket yesterday. And you know what ? This little piece of information (you’re shopping for a pair of shoes) is actually quite valuable. Once they have this data, ad networks can use it to do ad retargeting, which means if they accounter you on another website they can show you specific ad specially tailored for you (spoiler: it involves shoes).
				</p>
				<h4 class="font-weight-bold mt-3">
				  All cookies are now created equal
				</h4>
				<p>
					Third-party cookies should not be confused with first-party cookies. First-party cookies are in a sense fulfilling the original intent of cookies when they were first invented, namely act a small and useful short term memory on a specific website. When you add an item to your cart on your favorite online store and you go back to the same store the next day,  you’re expecting the site to remember that. That short term memory is handled by a first-party cookie. A first-party cookie set by a website can only be accessed by the same website… that’s the key difference with third-party cookies. Third-party cookies on the other hand can be set by a third-party website and big ad networks are using them to effectively track you online, which is a big concern for user privacy. The good news is that the days of third-party cookies are counted.
				</p>

				<p>
					With new regulation in place like General Data Protection Regulation in Europe (GPDR)  and the new California Consumer Privacy Act (CCPA) , it means that it’s virtually impossible to be compliant if you are using third-party cookies. One of the key aspects of those regulations is the right to be forgotten. Users can now say no to the sale of personal data and they can delete their personal information at any time on your website. Those two simple requirements are virtually impossible to implementent in a system using third-party data. When an ad network tracks your visits on your favorite shoes website, this information is automatically broadcast to a  multitude of other systems and from that point it’s virtually impossible for the website to delete this information if a user asks for it. Those issues were known for some years now and most browsers (Edge, Chrome, Firefox) had the option to disable third-party cookies. Some companies like Apple, which unsurprisingly don’t have an ad network, even enabled this option by default for some years now.
				</p>

				<p>
					Two weeks ago Google announced their intention to completely phase out third-party cookies in Chrome within two years. This announcement pretty much puts the final nail in the coffin for third-party cookies.  Marketers and Brands now need to find ways to make their marketing as effective and they need to respect those new privacy rules at the same time. I would even argue that if companies don’t have any plan about this right now… they are really late in the process. Even though the new laws were not in place yet, the system based on third-party only we’re pretty much broken since a number of years now. Third-party cookies are disabled for a majority of the web traffic already, so if you’re retargeting only using this … your retargeting on noise essentially.
				</p>
				
				<p>
					Months ago VoxMedia, one of the most respected digital media companies in the US approached us with an interesting challenge. Would it be possible to leverage the latest state-of-the-art AI methods to build a more modern audience segmentation technology more respectful of the users privacy and based entirely on contextual data ? VoxMedia is one of the biggest digital media companies in the US, they have properties like The Verge, Vox, Eater, Polygon, Curbed, SB Nation, etc. They are receiving an incredible amount of visitors every day and they need to make a bunch of decisions at every clicks. Which content should they show him ?  Which ad content is the most relevant ? etc. They need to do that a thousand times per second… and now they want to do that without using third-party data and using only contextual data. We could qualify contextual data as the small set of first-party data (from the same site) immediately relevant to the current user experience. It could be the title of the articles read recently, the time of the day, the provenance of the user, the platform, etc.
				</p>

				<p>
					Doing ad retargeting by tracking users all over the web is pretty much like  fishing using bottom trawling. Yes it might work, but you’re gathering a whole lot of other data in the process which as we mentioned earlier is highly problematic for the user privacy. 
				</p>

				<p>
					It turns out that if you want to learn about your audience by using only contextual data, you need to be much smarter about how you’re using the few data points that you have. Most of the first-party that you have about the audience is how they are interacting about that content that you put on your website. For digital media companies, like VoxMedia, this content is mostly texts, images and videos. The good news is that, thanks to the latest advance in deep learning,  we are now much better at analyzing the content of images and texts than just a few years ago. Using Convolutional Neural Network we can now really get a sense of what an image is all about. We can do the same type of analysis on text using state-of-the-art Transformer models (like BERT, ELMO, GPT2, etc.) trained on huge amounts of data. Now if you know in minute details the nature of the content and we know how a user interacts with that content it is possible to have a pretty good sense of the interest and the current intent of the user just by looking at this interaction. We can illustrate this approach using a more classic example. If I have a restaurant and a new client comes in, I have essentially two ways to know more about him. I can either track him everywhere and note every restaurant he visited in the last months. This approach is equivalent to using a third-party cookie. Or I can use the first-party data approach and note what he ordered and liked the last time he visited my own restaurant. If I have a deep understanding of all the meals served in my restaurant, I can do a pretty good job of predicting his interest. We can add to that other contextual variables like the day of the week and the hour of the day and  now we can have a good idea of the intent of my client. This is in essence, the approach used in segmentation systems using first-party data. As a content provider, the beauty of this approach is that we are using most of the power of modern deep learning models on my own content.
				</p>

				<h2 class="font-weight-bold mt-8">
				  Making sense of the raw data
				</h2>

				<p>
					In order to be effective, a first-party segmentation system requires a number of properties. First we need to be able to leverage a large volume of historical data in order to find and learn interesting patterns and “natural” segments in the data that we’ll be able to refer to with new users. An example of those segments could be something specific like Camera Enthusiast Currently Shopping, We also need to compute the prediction of those segments in real time, in a high volume of requests (> 1k/sec) and within a reasonable latency (~100ms). We also want the model to be able to understand and leverage different types of content like images, texts, numerical attributes, labels, etc. Finally, the model(s) needs to be effective on the existing content/user and as well as new ones without requiring to be retrained from scratch every time.
				</p>

				<p>
					A natural way to model the interactions of the users with a set of contents is by using the concept of graph, more precisely a bipartite graph of user-content. In this setup we have two types of nodes, the user and the content, and those nodes are connected by edges representing the interactions of the users with the contents (a pageview for example). In this graph, our segmentation task is now corresponding to a user node classification. Given a specific user, with a set of attributes, interacting with a number of items, which also have their own attribute, a segmentation model needs to perform the classification of that user into a set of predefined classes or segments. The interaction itself (the pageview) also has its own set of attributes. All those attributes need to work together in a cohesive way to inform the final decision. In most cases the content nodes don’t really have a specific set of attributes out of the box, but raw data instead (texts or images). This is where modern deep learning models can be leverage effectively, namely to compute a compact representation associated with each image or pieces of text present in the graph. This representation (a big vector) learned by the different neural network(s) can then we use as a set of attributes for each node in the neighborhood, propagated correctly in the graph toward the target node for which we want to perform the classification. This type of model,  called Graph Neural Network, is really effective to perform a number of tasks on a graph like computing the node classification or computing a node representation. State-of-the-art Graph Neural Networks are at the core the VoxMedia’s first-party segmentation platform.
				</p>

				<p>
					Another interesting property of the models used in this segmentation platform is their ability to perform predictive tasks without requiring the actual identity of the node (user or content). As long as the model has access to those raw data and their interactions, a representation can be computed and propagated in the graph for a final classification. This type of prediction, called inductive predictions, is a key element that allows the platform, once it’s properly trained on historical data, to generalize really well on new pieces of content and/or on new combinations of user and content attributes never seen before on the platform. At the end, those contextual predictions are much more effective for the brand and more privacy-friendly. And all this is happening many hundreds of times per sec, everytime a user is interacting with a piece of content on VoxMedia Network!
				</p>

				<p>
					VoxMedia first-party segmentation platform is an impressive piece of technology and we’re are really proud, at Hectiq to have participate to his elaboration. Brands using VoxMedia's new platform can now connect effectively to their audience and they can do it in a privacy-friendly way.
				</p>
				
	    </div>
	  </div> <!-- / .row -->
	</div> <!-- / .container -->
</section>


