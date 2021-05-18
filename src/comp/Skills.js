import '../css/Skills.css';
import '../css/Skills.mobile.css'

function Skills() {
  return (
    <div id="Skills">
        <h1 id="skills">My Skills</h1>
        <h5 style={{textAlign: 'center'}} >
            |
                This is a demo page! These below arent real stats!
            |
        </h5>
        <div id="skills_div">
            <div class="float_left">
                <div className="skill">
                    <h3 className="type">JavaScript</h3>
                    <h3 className="level">Expert</h3>
                </div>
                <div className="skill">
                    <h3 className="type">NodeJS</h3>
                    <h3 className="level">Intermediate</h3>
                </div>
                <div className="skill">
                    <h3 className="type">React</h3>
                    <h3 className="level">Intermediate</h3>
                </div>
            </div>
            <div class="float_right">
                <div className="skill">
                    <h3 className="type">Git</h3>
                    <h3 className="level">Expert</h3>
                </div>
                <div className="skill">
                    <h3 className="type">Express</h3>
                    <h3 className="level">Expert</h3>
                </div>
                <div className="skill">
                    <h3 className="type">Websocket</h3>
                    <h3 className="level">Intermediate</h3>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Skills;
