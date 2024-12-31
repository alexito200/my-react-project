// Header.js

const Header = () => {
  return (
    <header style={{ backgroundImage: 'url("/media/route.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', width: '700px', height: '400px', color: 'black', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Alex Alarcon</h1>
    </header>
  );
};

const About = () => {
  return (
    <section>
      <h2>About Me</h2>
      <p>My name is Alex Alarcon, and I&apos;m 28 years old. I&apos;m originally from Guayaquil, Ecuador. I have a background in customer
        service and sales. Coding became my passion after seeing how a website could change with just a few lines of code.</p>
    </section>
  );
};

const Contact = () => {
  return (
    <section>
      <h2>Contact</h2>
      <p>Email: alexalarcon200@gmail.com</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/alex-alarcon-82fb088/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Contact />
    </div>
  );
};

export default App;
