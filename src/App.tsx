import Post from "./components/Post";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://s2-autoesporte.glbimg.com/mSR_9aqlPSLdg7bVyumouEYaZds=/0x0:1600x900/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/R/T/9R3LgMQ32PkG06twQYAg/my-post-16-.png">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
