import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

export default function Main({
  movies,
  tempMovieData,
  tempWatchedData,
  average,
}) {
  return (
    <main className="main">
      <ListBox movies={movies} tempMovieData={tempMovieData} />
      <WatchedBox tempWatchedData={tempWatchedData} average={average} />
    </main>
  );
}
