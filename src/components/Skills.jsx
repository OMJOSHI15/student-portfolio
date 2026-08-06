function Skills({ skillList }) {
  return (
    <section className="section" id="skills">
      
      <h2 className="section__heading">Skills</h2>

      <pre className="codeblock" aria-label="List of skills">
        <code>
          <span className="tok-keyword">const</span>{' '}
          <span className="tok-var">skills</span> = [
          {skillList.map((s, i) => (
            <span key={s}>
              {'\n  '}
              <span className="tok-string">'{s}'</span>
              {i < skillList.length - 1 ? ',' : ''}
            </span>
          ))}
          {'\n];'}
        </code>
      </pre>
    </section>
  );
}

export default Skills;
