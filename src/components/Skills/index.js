import React, { useState } from 'react';
import SkillsData from '../../data/Skills';

function Skills() {
  const [openSkillId, setOpenSkillId] = useState(null);

  const toggleSkill = (skillId) => {
    setOpenSkillId(openSkillId === skillId ? null : skillId);
  };

  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
          {SkillsData.map((skill) => (
            <div key={skill.id}>
              <div
                className={`skills__content ${
                  openSkillId === skill.id ? 'skills__open' : 'skills__close'
                }`}
              >
                <div className="skills__header" onClick={() => toggleSkill(skill.id)}>
                  <i className="bx bx-code-curly skills__icon"></i>

                  <div>
                    <h1 className="skills__title">{skill.type}</h1>

                    <i
                      className={`bx ${
                        openSkillId === skill.id
                          ? 'bx-chevron-up'
                          : 'bx-chevron-down'
                      } skills__arrow`}
                    ></i>
                  </div>
                </div>

                <div className="skills__list grid">
                  {skill.level.map((item) => (
                    <div className="skills__data" key={item.name}>
                      <div className="skills__titles">
                        <h3 className="skills__name">{item.name}</h3>
                        <span className="skills__number">{item.proficiency}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;
