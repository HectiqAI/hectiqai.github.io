import React from "react";


export default function DecadeOfSciencePost(props){

  return (
      <section class="pt-0 pt-md-0 pb-0">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-12 col-lg-10 col-xl-9">
              <p>
                It’s the beginning of 2020 and like every new year, we see an abundance of the usual “year-in-review” blog posts. Looking back is not completely meaningless, but there is something deeply repetitive about those articles. This year I felt it was slightly different - because of the new decade, we saw a bunch of reviews of the previous one. Not all of them are great of course, but I think there is actually something more interesting that results from a look back over the past decade. 
              </p>
              <p>
                Ten years is long enough to see trends happening but still short enough to be experienced and remembered by a bunch of people. I thought it would be fun to go through some of the trends & hypes <strong class="text-primary">I personally experienced</strong> as a Data Scientist / Data Engineer / CTO / Algo Guy or Machine Learning Engineer or whatever you want to call it over the past ten years.
              </p>
              <p>
                Coincidently and on a more personal note, I also realized lately that I started doing data science fulltime in 2010. As a Physics PhD student for almost 5 years at that time (yes it's way too long !!!), I was eager to start something new, something more in line with my true passion for physics, numerical computation, software, the web..., a bunch of things that seem totally orthogonal to each other back then. At the time, working on web-related projects was not really viewed as hardcore software engineering and most importantly, no serious physicists were working on software. At least this opinion was part of the common wisdom of that time. 
              </p>
              <p>
                To be honest, I felt like my interest profile was a little bit off for a physicist. But then around 2008 something interesting started happening... for some reason people started searching for  people like me. They were looking for a strange mix of skills: software engineering, web tech knowledge, statistics, machine learning, etc. I was not really aware of this at that time, but an increasing amount of companies had started gathering a significant amount of data and they were looking for ways to leverage this in some form or other.
              </p>

              <h2 class="font-weight-bold mt-8">
                The infamous Data Scientist
              </h2>

              <p>
                Naming something is often a good first step toward understanding something and a decade ago, some software engineers & product managers started realizing that they had a new type of “problem”. They were accumulating a lot of data and they started hiring people to handle & analyze this data, create statistical experiments, build data products, etc. It turns out that it’s really handy to have a job title when you’re looking to hire people, so they coined the term: <i>Data Scientist</i> with all it’s glorious ambiguity on purpose. That’s all it is.
              </p>
              <p>
                When I first started working in startups, I was not really aware of this term nor was my employer, which made the “market” much less efficient. One of the trends I noticed pretty early one is the rise of this term <i>Data Scientist</i> as a job title to a point of almost laughable hype. Nevertheless, I think overall it was a good thing as it crystallized a genuine set of skills which lead to a much more efficient job market. People interested in those things can now find interesting jobs much more easily than a decade ago.
              </p>
              <hr class="hr-md mt-7 mb-4"/>
              <h5 class="text-uppercase mt-8 text-info">Early 2009</h5>
              <h2 class="font-weight-bold mt-0">
                Recommendation System
              </h2>
              <p>
                From my perspective, recommendation systems were one the first big trends and big wins in Data Science. On September 18th, 2009, Netflix announced the winner of the Netflix prize. The challenge, announced 3 years earlier, was one of the first kaggle-like machine learning challenges and as such, it had a huge influence on the industry. Machine Learning is all about optimizing parameters: The parameters of models, the parameters of training, etc. The idea of treating the “model builder” just as another parameter in the process was a relatively new idea at the time, at least in a non-academic setting.  
              </p>
              <p>
                The open nature of this challenge (and the $1M Grand Prize attached to it !) also lead to interesting contributions from a different set of people not normally engaged with this kind of work. That challenge was also where methods based on regularized Matrix Factorization (“MF”) were introduced for the first time in the context of collaborative filtering. All the winning methods (mostly big ensemble models) involved one or many MF models at some point or another. 
              </p>
              <p>
                Those methods are now part of most machine learning libraries and to this day, they are still the backbone of many recommendation engines. MF models were also one of the first to popularize the notion of embedding in a different context than in text analysis where they were initially used.
              </p>
              <img src="/assets/img/photos/recommandation.jpeg" class="img-fluid pt-8 pb-8 pl-lg-11 pr-lg-11" alt="..."/>
              <p>
                In a way, recommendation models were (and still are) the perfect candidate to kick off the Data Science effort in a company. For many managers, the fact that a successful company would be willing to give $1M to improve their recommendation by 10% was an eye opener. It turns out that if you have a long tail of items to “sell” to a big audience, that audience's  discovery will be imperfect; if you have some basic analytics it’s pretty easy to quantify the financial impact of having better discovery by introducing a recommendation algorithm in the loop. In that sense, it was the perfect project to sell a new Data Science effort to executives. They could easily see a potential return on investment. 
              </p>
              <blockquote class="blockquote mb-7 mt-7">
                <p class="h2 mb-0 text-center text-primary-desat">
                  “Most successful projects involving machine learning essentially generate their own labels by some clever process, UX mechanic or by leveraging existing datasets”
                </p>
              </blockquote>
              <p>
                Another interesting aspect was the unsupervised nature of the models. As we are now discovering with modern deep learning models, the requirement for a huge volume of labeled data to train a supervised model can be a big problem for a project. “Classic” Machine Learning used back then was less “greedy” but it was nevertheless problematic. Having to manually label data in order to train and deploy a model in production can put a stop to a DS project in a spectacular fashion if it’s not carefully planned. 
              </p>
              <p>
                In my experience, most successful projects involving machine learning essentially “generate their own labels” by some clever process, UX mechanic or by leveraging existing datasets. Unsupervised recommendation models didn’t have that problem. From a product perspective it was “magic”: you fed in your historical data and the model takes care of the rest.
              </p>
              <hr class="hr-md mt-7 mb-4"/>
              <h5 class="text-uppercase mt-8 text-info">2013 - 2015</h5>
              <h2 class="font-weight-bold">
                Big Data!
              </h2>
              <p>
                A long time ago, before companies like Google, Facebook or LinkedIn even existed,  data meant a very specific thing for a data analyst. If you would ask them back then what was “data”,  they would probably describe something similar to a row in a SQL database. Data is a bunch of rows, with some specific typed field that we can export to a beautiful CSV file and import it in Excel to do some kind of analysis with it. Then came companies like Google, who literally transform data into money. 
              </p>
              <blockquote class="blockquote mb-7 mt-7">
                <p class="h2 mb-0 text-center text-primary-desat">
                  “Then came companies like Google, who literally transform data into money. ”
                </p>
              </blockquote>
              <p>
                Needless to say that if you’re transforming data into money you’ll probably have a very different perspective of what data is and how to handle it. In 2004, Google published a hugely influential paper titled <a href="https://dl.acm.org/doi/abs/10.1145/1327452.1327492">MapReduce: Simplified Data Processing on Large Clusters</a>. In this paper, Jeffrey Dean and Sanjay Ghemawat described in length the programming model used in one of the earlier versions of the data pipeline used in Google clusters. Technicality aside, the paper was also one of the first sneak peeks into their infrastructure and the philosophy behind it. 
              </p>
              <img src="/assets/img/photos/solvecartoon.jpeg" class="img-fluid pt-8 pb-8 mx-auto d-block" alt="..."/>
              <p>
                The “machine” they described was a completely different beast than most database specialists were using at the time. It was running on a bunch of distributed & cheap computers and the raw data (like web requests logs, crawled documents) were at the center of everything.
              </p>
              <p>
                Apache Hadoop, one of the first open source implementations of the MapReduce approach was the poster child of the <i>Big Data</i> marketing craze at the time.  Around 2013-2015, the hype was in full swing. <span class="text-primary">Exactly like Data Scientist, the term Big Data was a loosely defined term used mostly by non technical people</span>, but like other buzzword it was also useful to promote some interesting ideas. A lot of definitions of Big Data (because there are a lot !)  seem fixated on the volume of the data, but in my mind the core idea behind the concept and the main takeaway is what I call the Diogenes Syndrome Principle:
              </p>
              <blockquote class="blockquote mb-7 mt-7">
                <p class="h3 mb-0 text-center text-secondary">
                  "Log everything and, never, ever, delete data."
                </p>
              </blockquote>

              <p>
                The idea is that you never know the analysis that you’ll want to do in the future, so you save everything and structure the data later. Another more modern way to articulate this idea is what some refer to as the “log-oriented” architecture or the lambda architecture (which is similar in essence). In log-oriented architecture, like the one popularized by Jay Kreps (the creator of Apache Kafka), we acknowledge that the metrics or the objects we store in a database are in fact the result of a series of events. Those events, if they are saved somewhere and replayed to the system can effectively rebuild all the metrics from scratch. In that sense, the log events are a more fundamental piece of data then the aggregate metrics that we store in the db, so building the data pipeline around them make sense. Most modern data pipelines are now built using this principle with tools like Apache Kafka, Spark, Storm, etc. 
              </p>
              <p>
                Of course, for most sizable companies, this principle will lead to a significant volume and variety of data (raw event, text, images, etc..) which will have a significant impact on the engineering aspects... most SQL databases at the time were not equipped to deal with this. That’s why the number of different databases pretty much exploded at the same time. If you google the term <i>NoSQL</i> (yes … another buzzword) you will probably find a bunch of articles written during that inflation era. Most software engineering in the 90s would work mostly with a single type database, a big central SQL (<i>MySQL, Postgres, Oracle,</i> etc..). 
              </p>
              <p>
                Now most engineers and data scientists need to handle a wide variety of databases: Full text search databases for text, document-based  databases for documents, and so on covering key-values, time series, columnar, graphs, etc.  A side effect of this explosion of possibilities is what I would call database-FOMO (Fear Of Missing Out) where a bunch of curious engineers in a team can’t help themself…. They need to try the latest db tech out there. 
              </p>
              <p>
                There are a lot of things that can slowdown a software project and choosing an exotic database just for the sake of it is a really effective one. And if you want to slow down your project even more… mix them up ! A tip that I’ve found to work in many situations: when in doubt, simply use a good old Postgres database. However in the end, having all those databases for different types of data is obviously a good thing. Fortunately, it looks like we’re back to a more classic SQL way of thinking and lot of those databases (<i>Elasticsearch, Cassandra, Redshift, BigQuery</i>, etc..), even though they are using widely different technologies, are now offering an SQL-like querying layer.
              </p>
              <hr class="hr-md mt-7 mb-4"/>
              <h5 class="text-uppercase mt-8 text-info">2010 - 2012</h5>
              <h2 class="font-weight-bold">
                GPU Computing & CUDA
              </h2>
              <p>
                My first contact with Data Science was related to GPU Computing. GPU Computing (and CUDA specifically) is all the rage these days, but people would be surprised to learn how "old" it is. I started poking around with CUDA around 2009 in order to accelerate a critical computation in my PhD project. In order to validate an hypothesis we had about the behavior of a really intense & short pulse of light propagating in a laser, we needed to numerically solve something called the nonlinear Schrödinger equation. There were well-established methods to do that, but it turns out that solving that equation on a 2009 CPU was pretty time consuming especially if it's part of an optimization process where you need to solve this equation a TON of times. Long story short, reimplementing our code to PyCUDA gave us a HUGE performance improvement. 
              </p>
              <p>
                During my journey into this GPU rabbit hole I started doing some consulting around it. My first client was a financial startup in San Diego looking for some help to optimize their computation pipeline using GPU. I decided to put on hold my thesis to work on this... and ... never went back of course :).
              </p>
              <p>
                Going back to CUDA a little bit. GPU computing really had a huge impact on machine learning in the last years, it's essentially the technological backbone that allowed researchers to unlock the power of deep learning. Around 2007, I remember watching a talk by Geoffrey Hinton about restricted Boltzmann machines and deep autoencoders (on Google Video ... Youtube was still mostly about cat videos at the time). I was really impressed, but it became clear pretty quickly that this kind of model was really CPU intensive and worked mostly with tiny images in toy datasets. 
              </p>
              <blockquote class="blockquote mb-7 mt-7">
                <p class="h2 mb-0 text-center  text-primary-desat">
                  "GPUs are essentially the technological backbone that allowed researchers to unlock the power of deep learning."
                </p>
              </blockquote>
              <p>
                In 2010, I also started talking with a research group at Columbia University using something called a "convolutional neural network" to detect houses in satellite imagery. Their model, trained on CPU, was taking weeks to train. We discussed the possibility of maybe accelerating this training using this new thing called CUDA but to be honest it was slightly over my head at the time. But this idea of using a GPU to train CNN turns out to be a great one. Most deep learning researchers and practitioners point out the beginning of the current "deep learning craze" to the year 2012, when Krizhevsky and Sutskever, two students in Hinton's research group, published their paper about AlexNet: a GPU-trained CNN that  became the State-of-the-art on Imagenet.
              </p>
              <p>
                Fast forward to today, some people are slightly nervous about the fact that  most implementations of deep learning models are working exclusively on top of proprietary software like CUDA. To this day, there is no serious support for open technology like OpenCL in the most popular DL framework and when we read discussions in the GitHub issues of Tensorflow and PyTorch, it looks like it's not at all a priority for a number of reasons. 
              </p>
              <p>
                It's a bummer but we have to give Nvidia some credit. A decade ago, Deep Learning was not a thing yet and most of the other companies like AMD and Intel didn't care about scientific computing, at least in their consumer offering easily accessible to graduate students. When CUDA was first released, AMD didn't have any serious equivalent and Intel certainly had their MKL library but it was not freely available. So Nvidia made a huge bet at the time and they also shifted their product really quickly to answer this new emerging market around Deep Learning. Today, an increasing number of libraries used in machine learning are GPU accelerated and it is fair to say that it’s one of the big shifts that happened in the last decade.
              </p>
              <hr class="hr-md mt-7 mb-4"/>
              <h5 class="text-uppercase mt-8 text-info">2012 - Now</h5>
              <h2 class="font-weight-bold">
                The rise of Deep Learning & AI
              </h2>
              <p>
                People into machine learning will know that a lot of the fundamental works and ideas currently used in Deep Learning had their root in the 2000s or even in the 90s. But I think it’s fair to say the last decade was really where things exploded and where DL had the most impact for the DS community. In 2013-2014, right after the first splash made by AlexNet, we could already feel the excitement, but DL was still an academic affair. Just installing Theano or Caffee, the two most popular DL libraries at the time, was not a straightforward task and training a model from scratch on ImageNet was a feat in itself.
              </p>
              <p>
                It was definitely working, but the engineering aspect was so hazardous that it was really hard to see how you could leverage technologies like this in a production environment.  With the first release of Tensorflow (and Keras), things changed pretty quickly. 
              </p>
              <p>
                It was now possible to experiment with exotic neural network architecture more easily and more quickly. More importantly, deep learning researchers started using Tensorflow massively and this had a big impact for the commercial applications of deep learning. 
              </p>
              <p>
                It meant that researchers and machine learning engineers, implementing those solutions into real products, now had the same common language. 
              </p>
              <p>
                To this day, the rapidity at which ideas flow from research directly to commercial applications is one of the distinctive aspects of the Deep Learning / AI community. Part of it comes from the common tools (Tensorflow, PyTorch, Scikit-Learn, etc.) used by the researchers and the machine learning engineers working in companies.
              </p>
              <p>
                This point reminds me of the value of good software engineering. For a Data Scientist, it’s often tempting to define yourself as “not an engineer”... I tried that in the past and it didn’t end well. It’s true that the main job of a DS is not always to put software directly in production, but in years of doing this I never encountered a successful machine learning or data science  project without having the DS themself taking care of a bunch of the engineering aspects. A training or an inference pipeline is an intricate process that can be broken in millions of different ways.The only way to move a project forward, into a real world application, is with the original Data Science or Machine Learning team taking care of the entire loop at least once. There is no such thing as “doing research” and passing it on to the engineering team… I never encountered this successfully in my entire life.
              </p>
              <p>
                Another big trend in the last decade was the rise and the dominance of the PyData stack. Years ago using Python to do your scientific computation was more a matter of taste (or even faith!) than a logical decision. The main appeal was the language itself, the numpy/scipy libraries and the ability to bind legacy code (in Fortran or C) directly in a Python module. 
              </p>
              <blockquote class="blockquote mb-7 mt-7">
                <p class="h2 mb-0 text-center text-primary-desat">
                  "Years ago using Python to do your scientific computation was more a matter of taste (or even faith!) than a logical decision."
                </p>
              </blockquote>
              <p>
                Fast forward today, Python is THE dominant language in Data Science and Machine Learning and by a big margin. The entire PyData stack is a big ecosystem of libraries developed mostly independently by a bunch of people. Each one of them is the result of a team (or often a single person!) who decided to build something that could be used reliably by other people. 
              </p>
              <p>
                Building a sophisticated model or analysis is really cool, but when you can really trust it and use it in another software, model or analysis, then there is a huge compounding effect. I think this is the lessons we can learn from all those components we are using everyday: <i>numpy, scipy, pandas, scikit-learn, tensorflow, pytorch</i>, etc. Good software engineering is key.
              </p>
              <h3 class="font-weight-bold mt-8">
                Ok… but what’s the difference between Deep Learning and AI again???
              </h3>
              <p>
                When I was still an undergraduate, one of the first books I read about the history of AI was <a href="https://www.amazon.ca/Ai-Tumultuous-History-Artificial-Intelligence/dp/0465029973">AI: The Tumultuous History of the Search for Artificial Intelligence</a> by Daniel Crevier. This is a truly excellent book about the history of what we now call the “Good old Fashioned AI”. 
              </p>
              <p>
                Starting with the Dartmouth Workshop, the book goes through the birth of the discipline, Newell & Simon work on <i>Logic Theorist</i>, the perceptron, symbolic systems, expert systems etc. The book explains in great detail the tumultuous history of the AI field punctuated by a number of hype and disillusionment phases. After reading this you can understand why the word <i>artificial intelligence</i> was pretty much a taboo word for a number of years in many academic circles. It was tainted by a lot of unrealistic promises so most researchers decided to depart a little bit from that grand vision of automating complex human tasks. 
              </p>
              <p>
                During those years, researchers were essentially continuing doing all sorts of interesting things, but using different names: <i>computer vision, operational research, optimization, natural language processing, reinforcement learning,</i> etc. Before 2015, you would very rarely hear the term AI. But for some reason, the success of deep learning brought back that word to life. 
              </p>
              <p>
                It was actually quite strange to witness but I think it simply reflected the optimism of researchers and  machine learning practitioners that maybe this new approach, used in conjunction with the arsenal of modern computer science, could really lead to the automation of tasks that were impossible to do previously, and it turns out it was the case. This inflection didn’t happen immediately. But when deep learning started to be applied to a broader range of problems (<i>sentence-to-sentence</i> model in NLP, <i>Deep Q Network</i> in reinforcement learning, etc.) we clearly started to see the shift happen.
              </p>
              <h3 class="font-weight-bold mt-8">
                So what does this all mean for Data Science?
              </h3>
              <p>
                There is common misconception in non-technical audiences (and even some technical audiences for that matter), about the current state of AI and the role played by deep learning models in those systems. Current deep learning models are really really good in perception tasks and pattern recognition. In most applications, deep learning models are used for detection, perception or pattern recognition.
              </p>
              <p>
                More broadly speaking, they are really good at learning useful representations. After the first “perception” step, a simple prediction is usually done (classify an image, turn a wheel, find the most likely words, etc.) and then the traditional arsenal of modern computer science usually kicks-in. In most cases, statistical modelling is also required. This is true for self-driving cars, AI applied to health, fraud detection, etc. Hopefully, it turns out that there is a LOT of tasks where the automation is actually limited by this perception layer. So in those cases, current AI systems are really effective.
              </p>
              <p>
                Current deep learning models require a ton of data. In a sense, they are the perfect complement to modern big data systems: They can digest an enormous amount of data and make sense of it. The latest <i>Transformer</i> models are the best example of this process. Language models, like BERT, ELMo, and GPT2 seem to have an infinite appetite for data. Every month we see  another paper on arxiv about a new transformer model trained on an even bigger dataset and the trend is pretty clear: The more the better! <i>Convolution Neural Networks</i> seem to have the same infinite appetite.
              </p>
              <p>
                So does it mean we can only use deep learning models when we have a ton of labeled data? Well not exactly. Yes the vision model embedded in a Tesla car requires a ton of pre-annotated images to effectively detect cars, pedestrians and dogs. But once this model is trained and deployed into the wild it actually <strong class="text-info">generates data and metrics</strong> that would have been impossible to gather otherwise. And the same is true for a lot of other applications.
              </p>
              <p>
                For example, once you have an effective pose estimation model for humans, you can use it to gather a ton of other metrics in the live feed of a soccer game. This is the area of application where current neural networks are really good, and this is where there is the greatest misconception. Current neural networks models do not make complex human-like decisions, they make simple decisions and actually generate new data that can be analysed to make better complex decisions.
              </p>
              <p>
                Exactly like the big data systems of some years ago gave us a new definition of data, new AI systems expand our definition of what is “data”. A raw feed of  log events in the 80s was not really a useful source of data because no system was powerful enough to ingest it into a simple row in a database. Modern data pipelines are now entirely based on log events. A raw video feed in the 90s was not a useful source of data for the same reason, but now we have models that give us the confidence that we can transform this video into useful metrics.
              </p>
              <p>
                So AI, like all the other buzzwords before it, might fade into disuse, but the concepts and techniques it has brought forth into daily usage will remain with us for a very long time.
              </p>
            </div>
          </div> 
        </div> 
      </section>)
}