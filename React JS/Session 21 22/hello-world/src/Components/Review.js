

// props are passed as arguments to the Review function.
// The Review function returns a div element that contains the title, description, and rating of the review.
// The title, description, and rating are displayed using the props passed to the Review component.
function Review (props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <h2>{props.rating}</h2>

        </div>
    );
}

export default Review;