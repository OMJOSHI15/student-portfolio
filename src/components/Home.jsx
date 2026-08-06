import Header from './Header';
import About from './About';
import Skills from './Skills';

function Home() {
  const skillList = ['JavaScript', 'React', 'HTML & CSS', 'Node.js', 'Git & GitHub'];

  return (
    <>
      <Header name="Om Joshi" themeColor="#cbccd1" />
      <About />
      <Skills skillList={skillList} />
    </>
  );
}

export default Home;
