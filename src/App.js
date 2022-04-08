import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <p>
        <a
          href="https://github.com/EliCer95/weather-react-week-4"
          rel="noopener noreferrer"
          target="_blank"
        >
          Open-source
        </a>{" "}
        code by Eliska Cerna
      </p>
    </div>
  );
}
