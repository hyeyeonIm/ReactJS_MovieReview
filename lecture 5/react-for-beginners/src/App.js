import Button from "./Button";
import styles from "./App.module.css"

// className의 이름이 랜덤으로 생성됨!
function App() {
    return (
        <div> 
            <h1 className={styles.title}>Welcome back!!!!</h1>
            <Button text={"Continue"} />
        </div>
    );
}

export default App;