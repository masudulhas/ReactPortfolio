import React, { Component } from 'react';

class Abilities extends Component {
    render() {
        return (
            <div className="container">
              <h2 className="tagline">Abilities</h2>
              <p className="lead">&ldquo;Life without knowledge is death in disguise.&rdquo;<br/>- Talib Kweli</p>
              <hr/>
              <aside className="left line">
                <h3>Skills</h3>
                <h4>Backend programming:</h4>
                <p> PHP, Node.js, Java, JavaEE, C#</p>
              </aside>
              <aside className="right line">
                <br/>
                <h4>Web technologies:</h4>
                <p>HTML5, CSS3, Bootstrap, jQuery, JavaScript, MVC5, React, Vue, Vuetify, Redux, JSON</p>
              </aside>

              <aside className="left line">
                <h4>Database:</h4>
                <p>MySQL, MSSQL</p>
              </aside>
              <aside className="right line">
                <h4>Framework:</h4>
                <p>Spring MVC, .Net Framework, Entity Framework</p>
              </aside>

              <aside className="left line">
                <h4>IDE(s):</h4>
                <p> NetBeans, Eclipse, Visual Studio</p>
              </aside>
              <aside className="right line">
                <h4>OS:</h4>
                <p>Windows, Linux</p>
              </aside>

              <aside className="left line">
                <h3 >Languages</h3>
              </aside>
              <aside className="right line">
                  <p>Bengali (Mother language)</p>
                  <p>English</p>
                  <p>Swedish</p>
              </aside>
            </div>
        );
    }
}

export default Abilities;
