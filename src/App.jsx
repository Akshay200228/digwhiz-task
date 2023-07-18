import styles from "./style";
import { Business, Footer, Navbar, Hero, About, Work, Employee } from "./components";

const App = () => (
  <div className="bg-[#F8F8F8] w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-[#F8F8F8] mb-10 ${styles.flexStart}`}>
        <Hero />
    </div>
    
    <div className={`bg-[#F8F8F8] ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
        <Business />
        <Work />
        <Employee />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
