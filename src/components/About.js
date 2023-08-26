import React from 'react';
import './About.css'
function CvComponent() {
    return (
      <div className="wrapper">
          <div className="resume">
              <div className="left">
                  <div className="img_holder">
                    <img src="./cv-img.JPG" alt="" style={{ width: '100px' }} />
                  </div>
                  <div className="contact_wrap pb">
                    <div className="title">
                        CONTACT INFO
                    </div>
                    <div className="contact">
                      <ul>
                        <li>
                          <div className="li_wrap">
                              <div className="text">enes.smajli@sakarya.edu.tr</div>
                          </div>
                        </li>
                        <li>
                          <div className="li_wrap">
                              <div className="text">esne1707@gmail.com</div>
                          </div>
                        </li>
                        <li>
                          <div className="li_wrap">
                              <div className="text">+383 45 181 821</div>
                          </div>
                        </li>   
                        <li>
                          <div className="li_wrap">
                              <div className="text">+90 534 416 45 85</div>
                          </div>
                        </li>  
                      </ul>
                    </div>
                  </div>

                  <div className="skills_wrap pb">
                    <div className="title">
                        Skills
                    </div>
                    <div className="skills">
                      <ul>
                       <li>C++</li>
                       <li>Java</li>
                       <li>C</li>
                       <li>HTML and CSS</li>
                       <li>JavaScript with React</li>
                      </ul>
                    </div>
                  </div>
                       
              </div>

              <div className="right">
                <div className="header_inner">
                  <h2>Enes Smajli</h2>
                  <hr />
                </div>
                <div className="bio">
                  <h4>Bio</h4>
                  <p>I was born on July 17, 2002 in a family from the beautiful city of Peja,
                     although my hometown is Pristina. From the age of 6, I attended the "Iliria" 
                     school in the "Bergu Diellit" neighborhood, then at the "Sami Frasheri" high
                     school of natural sciences. After finishing high school with exellent grades,
                     I decided to apply for a scholarship in Turkiye where I was accepted to 
                      the University of Sakarya where I continued my studies. </p>
                </div> 
                <div className="experience">
                  <h4>Experience</h4>
                  <p>
                    The desire to know how technology works made me continue my studies in the field
                    of computer engineering. Before university, I had no knowledge of programming
                    languages, only some basic knowledge of how computer hardware works. Now I 
                    can say that in languages like C++ and Java I can take over projects and 
                    choose different problems because I have a good level of knowledge. While in 
                    other languages or frameworks that I have mentioned in the skills part, I have 
                    very basic knowledge, but with a little commitment I can use them for projects in the future.
                  </p>
                </div>   
                <div className="others">
                  <h4>Hobbies</h4>
                  <p>
                  My hobbies are sports, especially football and mma. In the future, I think to specialize in the 
                  field of cyber security, this is due to the fact that it is a field that makes me curious and I 
                  think that there is a great need for an expert in this field.
                  Below you can find a link to github on my profile: <br />
                  <a href='https://github.com/Enesi17'>Enesi17</a>
                  </p>
                </div>   
              </div>
    </div>
  </div>                 
                    
    );
}

export default CvComponent;