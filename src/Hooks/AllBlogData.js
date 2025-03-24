import { useState } from "react";
import img1 from "../../public/assets/img/blog/people.jpeg";
import img2 from "../../public/assets/img/blog/city.jpg";
import img3 from "../../public/assets/img/blog/bird.jpg";


const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img3,
      title: "Why I'm Building a Bird App for My Mom",
      commentor: "Kelsea Conrad ",
      tag: `React Native, family, learning, design`,
      paragraphs: [
        "For as long as I can remember, my mom has loved birds. Whether it's the bright flash of a cardinal outside her window or the gentle coo of a mourning dove, she has always found joy in watching and identifying them. She keeps bird feeders full, recognizes calls instinctively, and often tells me about the latest visitors to her backyard. But sometimes, she spots a bird she doesn't recognize and struggles to figure out exactly what it is. That’s where this project comes in.",
        "As I continue my journey in software development, I’ve been looking for meaningful projects to build—ones that are not only useful but also personal. A bird identification and tracking app for my mom feels like the perfect blend of utility and sentiment. It’s a way for me to apply my growing technical skills while creating something that enhances her experience with something she loves.",
        "The idea is simple: an easy-to-use mobile app that allows my mom (and others like her) to quickly identify birds based on their appearance, location, and behavior. Here are some of the core features I plan to implement:",
        "Bird Identification: A searchable database where users can enter details about a bird’s color, size, and markings to find a match.",
        "Photo Recognition (Eventually!): In the future, I’d love to integrate AI-powered image recognition to help identify birds from pictures.",
        "Bird Log & Sightings Tracker: A way for users to log when and where they see different birds.",
        "Fun Facts & Sounds: Information on each bird, including their calls and interesting tidbits.",
        "Offline Mode: Since my mom loves to take nature walks, the app should work even in areas with no internet access.",
        "Beyond just being a cool technical challenge, this app represents something deeper—it’s a way for me to connect with my mom through something she loves. While I may not share her deep knowledge of bird species (yet!), I can use my skills to create something that makes her birdwatching experience even more enjoyable. Plus, building an app with a real end-user in mind—especially someone as important to me as my mom—adds a level of motivation and care that a generic project wouldn’t have.",
        "This will also be a great opportunity to sharpen my skills in React Native, database management, API integration, and possibly even AI in the future. By tackling the challenges of making an intuitive, user-friendly app, I’ll be growing as a developer while creating something truly useful.",
        "Right now, I’m in the early planning and research stages, figuring out the best tech stack and sketching out the UI. In future blog posts, I’ll document my progress, challenges, and lessons learned along the way. Whether it’s debugging a tricky feature, optimizing performance, or celebrating small wins, I’ll be sharing it all.",
        "Ultimately, this project is about more than just coding—it’s about bringing joy to my mom and learning through the process. I can’t wait to see where this journey takes me!",
        "Stay tuned for updates, and if you have any ideas or suggestions, I’d love to hear them!"
      ]
    },
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;