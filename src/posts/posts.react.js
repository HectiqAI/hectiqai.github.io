import VoxMediaPost from "./VoxMediaPost.react"
import DecadeOfSciencePost from "./DecadeOfSciencePost.react";
import CatherineJoinsTeamPost from "./CatherineJoinsTeamPost.react";
import EfficientNetPost from "./EfficientNetPost.react";
import DAMPost from "./DAMPost.react";
import iOSPost from "./iOSPost.react";

const data = [
  {
    date: "August 5, 2020",
    title: "Opportunities and challenge of machine learning on devices",
    summary: "",
    authors: ["Edward Laurence"],
    by: "Edward Laurence, Data Scientist at Hectiq.AI",
    content: iOSPost,
    id: "iosPost",
    hide: true,
  },
  {
    date: "July 30, 2020",
    title: "Helping a nonprofit organization in their fight against school dropout",
    summary: "The Diplome avant la Médaille is a nonprofit organization that needs to pair hundred students and volunteers according to their availability and preferences. We provided a pairing program that solved their problem so that they can focus on helping students get their diploma.",
    authors: ["Edward Laurence"],
    by: "Edward Laurence, Data Scientist at Hectiq.AI",
    content: DAMPost,
    id: "dampost",
    moreInfo: "Check and support DAM's program <a href='https://diplomeavantlamedaille.org'>here</a>.",
    hide: true,
  },
  {
    date: "June 10, 2020",
    title: "EfficientNet1D: A beast among the miniatures",
    excerpt: "In our efforts to make machine learning accessible for everyone,  we are releasing our 1D implementation of the fairly recent family of models: EfficientNet based on the PyTorch.",
    summary: "In our efforts to make machine learning accessible for everyone,  we are releasing our 1D implementation of the fairly recent family of models: EfficientNet based on the PyTorch.",
    authors: ["Catherine Paulin"],
    by: "Catherine Paulin",
    content: EfficientNetPost,
    id: "efficientnet",
    hide: true,
  },
  {
    date: "March 30, 2020",
    title: "Vox Media: Building a privacy-friendly first-party data segmentation platform",
    excerpt: "Hectiq.AI completes an exciting collaboration with Vox Media. We have developed an Ai model to help Vox Media better understand their audience. The challenge was tough as the model needed to be privacy-friendly, crazy fast, and highly effective.",
    frontImgUrl: '/assets/img/photos/voxmediapost.svg',
    frontWideImg: "/assets/img/photos/voxmediapost-wide.svg",
    frontImgUrlWide: "/assets/img/photos/voxmediapost.svg",
    summary: "Hectiq.AI completes an exciting collaboration with Vox Media. We have developed an Ai model to help Vox Media better understand their audience. The challenge was tough as the model needed to be privacy-friendly, crazy fast, and highly effective. In this post, we explain what motivated this project, namely developing an alternative to 'creepy' third-party data, and we discuss how we achieved the task by using state-of-the-art deep learning models. You can also read Vox Media's recent <a href='https://www.voxmedia.com/2020/2/26/21155010/its-not-who-you-are-but-what-you-are-consuming'>white paper</a> about the project.",
    authors: ["Martin Laprise"],
    credits: "Bottom trawling illustration from <i>Cold-water Coral Reefs: out of sight - no longer out of mind. UNEP-WCMC Biodiversity Series 22</i>",
    moreInfo: "<a href='https://www.voxmedia.com/2020/2/26/21155010/its-not-who-you-are-but-what-you-are-consuming'>Vox Media announces Forte.</a>",
    by: "Martin Laprise, Chief Scientist & Founder of Hectiq.AI",
    id: "voxmedia",
    content: VoxMediaPost,
  },
  {
    date: "February 19, 2020",
    title: "A decade of Data Science hypes: The Good Parts",
    excerpt: "In this post, I look back at some of the trends & hypes that punctuated the Data Science world in the last years and take some notes on the lasting impacts they had.",
    frontImgUrl: "/assets/img/photos/idea.jpg",
    frontImgUrlWide: "/assets/img/photos/idea-wide.jpg",
    summary: "In this post, I look back at some of the trends & hypes that punctuated the Data Science world in the last years and take some notes on the lasting impacts they had.",
    by: "Martin Laprise, Chief Scientist & Founder of Hectiq.ai",
    authors: ["Martin Laprise"],
    content: DecadeOfSciencePost,
    id: "decade-of-data-science",
  },
  {
    date: "September 30, 2019",
    title: "Hectiq.ai welcomes a new member",
    excerpt: "Catherine Paulin is joining hectiq.ai to bring balance to the force.",
    frontImgUrlWide: "",
    content: CatherineJoinsTeamPost,
    dark: true,
    id: "catherine-joins-the-team",
  },
  {
    date: "September 1, 2019",
    title: "Hectiq.ai has a new blog",
    excerpt: "We are proud to announce this new blog website! It will feature our recent achievements and news.",
    frontImgUrlWide: "",
    id: "new-website",
  }
]

export default data;