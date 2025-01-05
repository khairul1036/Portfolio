import React from "react";
import Heading from "./share/Heading";

const Skills = () => {
  const skills = [
    { name: "HTML", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxeNFO8PSlvOvudmrtLIOYdTpN6o77VKolQ&s" },
    { name: "CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
    { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" },
    { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" },
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" },
    { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" },
    { name: "MongoDB", logo: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png" },
    { name: "PHP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" },
    { name: "SQL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sql_data_base_with_logo.svg/2560px-Sql_data_base_with_logo.svg.png" },
    { name: "C", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" },
    { name: "Python", logo: "https://banner2.cleanpng.com/20181128/cbr/kisspng-python-programming-basics-for-absolute-beginners-michigan-python-user-group-5-jul-2-18-1713916787253.webp" },
    { name: "Git", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" },
  ];

  return (
    <div className="py-10 md:py-20 bg-[#111827]">
      <Heading
        title={"Skill"}
        subTitle={"The skills, tools and technologies I am really good at"}
      />

      <div className="lg:w-10/12 mx-auto grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-8 p-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="text-center text-[#9A9FA8] font-semibold text-lg grayscale hover:grayscale-0 rounded-lg p-4 transition-all"
          >
            <img
              className="w-24 h-24 mx-auto mb-2 rounded-lg"
              src={skill.logo}
              alt={skill.name}
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
