import { useRef, useState } from "react";

function App() {
  const [totalLikes, setTotalLikes] = useState(5);
  const [totalDislikes, setTotalDislikes] = useState(1);

  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const likeBtn = useRef();
  const dislikeBtn = useRef();

  const handleKeyPress = (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      e.target.getAttribute("aria-label").includes("dislike")
        ? likeBtn.current.focus()
        : dislikeBtn.current.focus();
    }
  };

  const handleLikeClick = (e) => {
    // if disliked, flip it
    if (isDisliked) {
      setIsDisliked(false);
      setTotalDislikes((prev) => prev - 1);
    }

    // flip liked
    isLiked
      ? setTotalLikes((prev) => prev - 1)
      : setTotalLikes((prev) => prev + 1);
    setIsLiked(!isLiked);
  };

  const handleDislikedClick = (e) => {
    // if disliked, flip it
    if (isLiked) {
      setIsLiked(false);
      setTotalLikes((prev) => prev - 1);
    }

    // flip liked
    isDisliked
      ? setTotalDislikes((prev) => prev - 1)
      : setTotalDislikes((prev) => prev + 1);
    setIsDisliked(!isDisliked);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="text-wrapper">
          <h2>Was this article helpful?</h2>
          <div className="btn-wrapper">
            <button
              className="btn"
              aria-label="like article"
              aria-pressed={isLiked}
              onClick={handleLikeClick}
              ref={likeBtn}
              onKeyDown={handleKeyPress}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M32,104H80a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V112A8,8,0,0,1,32,104Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
                <path
                  d="M80,104l40-80a32,32,0,0,1,32,32V80h61.9a15.9,15.9,0,0,1,15.8,18l-12,96a16,16,0,0,1-15.8,14H80"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
              </svg>
            </button>
            <button
              className="btn"
              aria-label="dislike article"
              aria-pressed={isDisliked}
              onClick={handleDislikedClick}
              ref={dislikeBtn}
              onKeyDown={handleKeyPress}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M32,48H80a0,0,0,0,1,0,0V152a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
                <path
                  d="M80,152l40,80a32,32,0,0,0,32-32V176h61.9a15.9,15.9,0,0,0,15.8-18l-12-96a16,16,0,0,0-15.8-14H80"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
              </svg>
            </button>
          </div>
          <p className="muted">
            {totalLikes} out of {totalLikes + totalDislikes} found this helpful
          </p>
        </div>
        <p>
          Have more questions? <a href="#">Submit a request</a>
        </p>
      </div>
    </div>
  );
}

export default App;
